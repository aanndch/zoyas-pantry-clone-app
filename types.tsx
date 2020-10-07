export type DrawerParamList = {
  Home: undefined;
  NewIn: undefined;
  BestSellers: undefined;
  Pantry: undefined;
  WholeFoods: undefined;
  Favorites: undefined;
  Login: undefined;
  Cart: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
  ProductsScreen: undefined;
  ProductScreen: undefined;
};

export type WishlistStackParamList = {
  Favorites: undefined;
  ProductScreen: undefined;
};

export type CartStackParamList = {
  Cart: undefined;
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
