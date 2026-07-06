// export interface MenuItem {
//   name: string;
//   description?: string;
//   items?: string[];
// }

export interface SubMenuChild {
  title: string;
  href: string;
}

export interface SubMenuItem {
  title: string;
  href: string;
  description?: string;
  children?: SubMenuChild[];
}

export interface MainMenuItem {
  title: string;
  href: string;
  description?: string;
  subMenuItems?: SubMenuItem[];
}
