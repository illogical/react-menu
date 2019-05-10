import { IconDefinition } from "@fortawesome/fontawesome-common-types";

export interface IMenuConfig {
  items: IMenuItemConfig[];
  title?: string;
}

export interface IMenuItemConfig {
  text: string;
  href?: string;
  active?: boolean;
  icon?: IconDefinition;
  submenu?: IMenuConfig;
  hideActiveStyle?: boolean;
}
