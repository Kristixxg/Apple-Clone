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
