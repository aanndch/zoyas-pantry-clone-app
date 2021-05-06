export type TabParamList = {
  Home: undefined;
  Search: undefined;
  Wishlist: undefined;
  Cart: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
  ProductsScreen: undefined;
  ProductScreen: undefined;
  CartScreen: undefined;
};

export type SearchStackParamList = {
  Home: undefined;
  ProductsScreen: undefined;
  ProductScreen: undefined;
  CartScreen: undefined;
};

export type WishlistStackParamList = {
  Favorites: undefined;
  ProductScreen: undefined;
};

export type CartStackParamList = {
  Cart: undefined;
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
