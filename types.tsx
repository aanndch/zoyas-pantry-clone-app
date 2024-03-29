export type TabParamList = {
  Home: undefined;
  Search: undefined;
  Wishlist: undefined;
  Cart: undefined;
};

export type HomeStackParamList = {
  HomeScreen: undefined;
  ProductsScreen: undefined;
  ProductScreen: {
    product: ProductType
  };
  CartScreen: undefined;
};

export type SearchStackParamList = {
  HomeScreen: undefined;
  ProductsScreen: undefined;
  ProductScreen: undefined;
  CartScreen: undefined;
};

export type WishlistStackParamList = {
  WishlistScreen: undefined;
  ProductScreen: undefined;
  ProductsScreen: undefined;
};

export type CartStackParamList = {
  CartScreen: undefined;
  ProductScreen: undefined;
};

export type ProductType = {
  // id: number;
  title: string;
  weight: string;
  imageUrl: string;
  price: number;
  shortDescription: string;
  category: string;
  tags: string[];
  meta: {
    sku: string;
    brand: string;
  };
  inStock: boolean;
};
