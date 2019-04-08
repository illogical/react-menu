export interface IMenuConfig {
  items: IMenuConfigItem[];
  title?: string;
  submenu?: IMenuConfig;
}

export interface IMenuConfigItem {
  text: string;
  href: string;
  active?: boolean;
  icon?: string;
}
