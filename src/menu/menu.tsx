import React from "react";
import { IMenuConfig, IMenuConfigItem } from "./models";
import { MenuItem } from "./menuItem";

export interface IMenuProps {
  config: IMenuConfig;
  effect?: string;
}

export const Menu = ({ config, effect }: IMenuProps) => {
  // TODO: handle nested keys
  // TODO: add "pages"
  // TODO: breakcrumb for submenu "page"
  // TODO: if active is on submenu, render the submenu "page"
  // TODO: bring in React Router
  const menuItems =
    config.items &&
    config.items.map((item: IMenuConfigItem, index: number) => (
      <MenuItem key={index} config={item} active={index === 2} />
    ));

  return (
    <nav className={`st-menu ${effect}`}>
      {config.title && <h2 className="icon icon-lab">{config.title}</h2>}
      <ul>{menuItems}</ul>
      {config.submenu && <Menu config={config.submenu} />}
    </nav>
  );
};
