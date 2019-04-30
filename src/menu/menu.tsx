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
  menuConfig: IMenuConfig;
  effect?: string;
  onMenuItemClick?: (
    subMenuConfig: IMenuConfig,
    activeItemHref?: string,
    parentMenuConfig?: IMenuConfig
  ) => void;
  onTitleClick?: () => void;
}

export const Menu = ({
  menuConfig,
  effect,
  onMenuItemClick,
  onTitleClick
}: IMenuProps) => {
  const { animation, setAnimation } = useComponentAnimation(
    "visible",
    menuConfig
  );

  const menuItems =
    menuConfig.items &&
    menuConfig.items.map((item: IMenuConfigItem, index: number) => {
      const handleMenuItemClick = (e: any) => {
        if (item.submenu) {
          e.preventDefault();
          console.log(item.submenu);
          setAnimation("submenu changing");
          // TODO: replace current menu with item.submenu
          onMenuItemClick &&
            onMenuItemClick(item.submenu, item.href, menuConfig);
        } else {
          onMenuItemClick && onMenuItemClick(menuConfig, item.href);
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
    <div className="menu-shell">
      <nav className={`st-menu ${effect}`}>
        <a href="/">
          <img src={logo} />
        </a>
        <div className={`menu-content ${animation}`}>
          <ul>
            {menuConfig.title && (
              <li className="menu-title">
                <div>
                  <a onClick={handleTitleClick}>
                    <FontAwesomeIcon icon={faChevronLeft} /> {menuConfig.title}
                  </a>
                </div>
              </li>
            )}
            {menuItems}
          </ul>
          {/* {config.submenu && <Menu config={config.submenu} />} */}
        </div>
      </nav>
    </div>
  );
};
