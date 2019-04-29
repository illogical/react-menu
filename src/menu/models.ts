import { IconDefinition } from "@fortawesome/fontawesome-common-types";

export interface IMenuConfig {
  items: IMenuConfigItem[];
  title?: string;
}

export interface IMenuConfigItem {
  text: string;
  href?: string;
  active?: boolean;
  icon?: IconDefinition;
  submenu?: IMenuConfig;
  hideActiveStyle?: boolean;
}
