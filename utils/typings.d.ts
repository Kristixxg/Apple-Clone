type Category = {
  _id: string;
  _creatdAt: string;
  _updatedAt: string;
  _rev: string;
  slug: {
    _type: "slug";
    current: string;
  };
  title: string;
};

type Image = {
  _key: string;
  _type: "image";
  asset: {
    url: string;
  };
};

type Product = {
  _id: string;
  _creatdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: "product";
  price: number;
  title: string;
  slug: {
    _type: "slug";
    current: string;
  };
  description: string;
  category: {
    _type: "reference";
    _ref: string;
  };
  image: Image[];
};

interface StripeProduct {
  id: string;
  amount_discount: number;
  amount_subtotal: number;
  amount_tax: number;
  amount_total: number;
  currency: string;
  description: string;
  object: string;
  quantity: number;
  price: {
    unit_amount: number;
  };
}
