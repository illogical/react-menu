import React from "react";
import { IMenuConfig, IMenuConfigItem } from "./models";
import { MenuItem } from "./menuItem";

export interface IMenuProps {
  config: IMenuConfig;
  effect?: string;
  onMenuItemClick?: (config: IMenuConfig, activeItemHref: string) => void;
}

export const Menu = ({ config, effect, onMenuItemClick }: IMenuProps) => {
  // TODO: handle nested keys
  // TODO: add "pages"
  // TODO: breakcrumb for submenu "page"
  // TODO: if active is on submenu, render the submenu "page"
  // TODO: bring in React Router

  const menuItems =
    config.items &&
    config.items.map((item: IMenuConfigItem, index: number) => {
      const handleMenuItemClick = (e: any) => {
        if (item.submenu) {
          e.preventDefault();
          console.log(item.submenu);
          // TODO: replace current menu with item.submenu
          onMenuItemClick && onMenuItemClick(item.submenu, item.href);
        }
        else
        {
          onMenuItemClick && onMenuItemClick(config, item.href);
        }

        console.log(item.text + ' was clicked.');

        // TODO: capture active item (or base this on window.location? https://github.com/medialize/URI.js)
      };

      return (
        <MenuItem
          key={index}
          config={item}
          active={item.active}
          onItemClick={handleMenuItemClick}
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