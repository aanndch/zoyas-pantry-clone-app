export type DrawerParamList = {
  Home: undefined;
  NewIn: undefined;
  BestSellers: undefined;
  Pantry: undefined;
  WholeFoods: undefined;
  Favorites: undefined;
  Login: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
  ProductsScreen: undefined;
  ProductScreen: undefined;
};

export type ProductType = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  category: string;
  inWishlist: boolean;
  inStock: boolean;
};
