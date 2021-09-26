import React, { createContext, useState } from 'react';
import type { Product } from '../types/productResponse';

type ContextProps = {
  products: Product[];
  getProducts: () => Promise<void>;
  addProducts: (categoryID: string, name: string) => Promise<void>;
  updateProducts: (
    categoryID: string,
    name: string,
    id: string,
  ) => Promise<void>;
  deleteProducts: (id: string) => Promise<void>;
  getProductById: (id: string) => Promise<Product>;
  uploadImage: (data: any, idProduct: string) => Promise<void>;
};

type ProviderProps = {
  children: React.ReactNode;
};

export const ProductContext = createContext({} as ContextProps);

export const ProductProvider = ({ children }: ProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = async () => {};
  const addProducts = async (categoryID: string, name: string) => {};
  const updateProducts = async (
    categoryID: string,
    name: string,
    id: string,
  ) => {};
  const deleteProducts = async (id: string) => {};
  const getProductById = async (id: string) => {
    throw new Error('not implemented');
  };
  const uploadImage = async (data: any, idProduct: string) => {};

  return (
    <ProductContext.Provider
      value={{
        products,
        getProducts,
        addProducts,
        updateProducts,
        deleteProducts,
        getProductById,
        uploadImage,
      }}>
      {children}
    </ProductContext.Provider>
  );
};
