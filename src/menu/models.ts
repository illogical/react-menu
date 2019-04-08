export interface IMenuConfig {
  items: IMenuConfigItem[];
  title?: string;
}

export interface IMenuConfigItem {
  text: string;
  href: string;
  icon?: string;
  submenu?: IMenuConfig;
}
