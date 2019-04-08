export interface IMenuConfig {
  items: IMenuConfigItem[];
  title?: string;
}

export interface IMenuConfigItem {
  text: string;
  href: string;
  active?: boolean;
  icon?: string;
  submenu?: IMenuConfig;
}
