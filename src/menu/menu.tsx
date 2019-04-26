import React from "react";
import { IMenuConfig, IMenuConfigItem } from "./models";
import { MenuItem } from "./menuItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/SiteLinkLogo-White.png'

export interface IMenuProps {
  config: IMenuConfig;
  effect?: string;
  onMenuItemClick?: (config: IMenuConfig, activeItemHref: string) => void;
  onTitleClick?: () => void;
}

export const Menu = ({ config, effect, onMenuItemClick, onTitleClick }: IMenuProps) => {
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
      <img src={logo} />
      <ul>
        {config.title && <li><a onClick={onTitleClick}><h3><FontAwesomeIcon icon={faChevronLeft} /> {config.title}</h3></a></li>}
        {menuItems}
      </ul>
      {/* {config.submenu && <Menu config={config.submenu} />} */}
    </nav>
  );
};