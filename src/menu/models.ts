export interface IMenuConfig {
  items: IMenuConfigItem[];
  title?: string;
  submenu?: IMenuConfig;
}

export interface IMenuConfigItem {
  text: string;
  href: string;
  icon?: string;
}
