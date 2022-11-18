import Head from "next/head";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";

import { useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from "../redux/basketSlice";
import { useRouter } from "next/router";
import Button from "../components/Button";
import CheckoutProduct from "../components/CheckoutProduct";
import Currency from "react-currency-formatter";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

function checkout() {
  const items = useSelector(selectBasketItems);
  const router = useRouter();
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState(
    {} as { [key: string]: Product[] }
  );
  const basketTotal = useSelector(selectBasketTotal);

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item._id] = results[item._id] || []).push(item);
      return results;
    }, {} as { [key: string]: Product[] });

    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  return (
    <div className="min-h-screen overflow-hidden bg-[#E7ECEE]">
      <Head>
        <title>Bag - Apple</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="mx-auto max-w-5xl pb-24">
        <div className="px-5">
          <h1 className="my-4 text-3xl font-semibold lg:text-4xl">
            {items.length > 0 ? "Review your bag." : "Your bag is empty."}
          </h1>
          <p className="my-4">Free Delivery and free returns.</p>
          {items.length === 0 && (
            <Button
              title="Continue Shopping"
              onClick={() => router.push("/")}
            />
          )}

          {items.length > 0 && (
            <div className="mx-5 md:mx-8">
              {Object.entries(groupedItemsInBasket).map(([key, items]) => (
                <CheckoutProduct key={key} items={items} id={key} />
              ))}

              <div className="my-12 mt-6 ml-auto max-w-3xl">
                <div className="divide-y divide-gray-300">
                  <div className="pb-4">
                    <div className="flex justify-between">
                      <p>Subtotal</p>
                      <p>
                        <Currency quantity={basketTotal} currency="USD" />
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p>Shipping</p>
                      <p>FREE</p>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex flex-col gap-x-1 lg:flex-row">
                        Estimated tax for:{" "}
                        <p className="flex cursor-pointer items-end text-blue-500 hover:underline">
                          Enter zip code
                          <ChevronDownIcon className="h-6 w-6" />
                        </p>
                      </div>
                      <p>$ -</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default checkout;
