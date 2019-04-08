import React from "react";
import { IMenuConfig, IMenuConfigItem } from "./models";
import { MenuItem } from "./menuItem";
const URI = require("urijs");

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
    config.items.map((item: IMenuConfigItem, index: number) => {
      const submenuClick = (e: any) => {
        if (item.submenu) {
          e.preventDefault();
          console.log(item.submenu);
          // TODO: replace current menu with item.submenu
        }

        const loc = new URI(window.location);
        console.log(loc.hash());

        // TODO: capture active item (or base this on window.location? https://github.com/medialize/URI.js)
      };

      return (
        <MenuItem
          key={index}
          config={item}
          active={handleActive(item.href, index)}
          onItemClick={submenuClick}
        />
      );
    });

  return (
    <nav className={`st-menu ${effect}`}>
      {config.title && <h2 className="icon icon-lab">{config.title}</h2>}
      <ul>{menuItems}</ul>
      {/* {config.submenu && <Menu config={config.submenu} />} */}
    </nav>
  );
};

const handleActive = (href: string, index: number) => {
  //TODO: this needs to cause the entire menu to re-render
  const loc = new URI(window.location);
  return loc.hash() === href;
};
