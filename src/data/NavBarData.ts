import productsIcon from "./../assets/productsIcon.png";
import favoritesIcon from "./../assets/favoriteIcon.png";

export interface NavLinkData {
  iconUrl: string;
  link: string;
  text: string;
}

export const navBarData: Array<NavLinkData> = [
  {
    iconUrl: productsIcon,
    link: "/",
    text: "Products",
  },
  {
    iconUrl: favoritesIcon,
    link: "/favorite",
    text: "Favorites",
  },
  {
    iconUrl: favoritesIcon,
    link: "/order",
    text: "Order List",
  },
];
