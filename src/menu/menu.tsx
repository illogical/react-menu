import React, { useState, useEffect } from "react";
import { IMenuConfig, IMenuConfigItem } from "./models";
import { MenuItem } from "./menuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faAngleDoubleLeft
} from "@fortawesome/free-solid-svg-icons";
import logo from "../images/SiteLinkLogo-White.png";
import { useComponentAnimation } from "../hooks/useComponentAnimation";

export interface IMenuProps {
  config: IMenuConfig;
  effect?: string;
  onMenuItemClick?: (config: IMenuConfig, activeItemHref?: string) => void;
  onTitleClick?: () => void;
}

export const Menu = ({
  config,
  effect,
  onMenuItemClick,
  onTitleClick
}: IMenuProps) => {
  const { animation, setAnimation } = useComponentAnimation("visible", config);

  const menuItems =
    config.items &&
    config.items.map((item: IMenuConfigItem, index: number) => {
      const handleMenuItemClick = (e: any) => {
        if (item.submenu) {
          e.preventDefault();
          console.log(item.submenu);
          setAnimation("submenu changing");
          // TODO: replace current menu with item.submenu
          onMenuItemClick && onMenuItemClick(item.submenu, item.href);
        } else {
          onMenuItemClick && onMenuItemClick(config, item.href);
        }

        console.log(item.text + " was clicked.");

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

  const handleTitleClick = () => {
    if (onTitleClick) {
      setAnimation("changing");
      onTitleClick();
    }
  };

  return (
    <nav className={`st-menu ${effect}`}>
      <a href="/">
        <img src={logo} />
      </a>
      <div className={`menu-content ${animation}`}>
        <ul>
          {config.title && (
            <li className="menu-title">
              <div>
                <a onClick={handleTitleClick}>
                  <FontAwesomeIcon icon={faChevronLeft} /> {config.title}
                </a>
              </div>
            </li>
          )}
          {menuItems}
        </ul>
        {/* {config.submenu && <Menu config={config.submenu} />} */}
      </div>
    </nav>
  );
};
