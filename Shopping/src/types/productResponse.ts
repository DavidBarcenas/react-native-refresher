export type ProductResponse = {
  total: number;
  product: Product[];
};

export type Product = {
  price: number;
  _id: string;
  name: string;
  category: Category;
  user: Category;
  img?: string;
};

export type Category = {
  _id: string;
  name: string;
};
