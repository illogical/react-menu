import React, { useState, useEffect } from "react";
import { IMenuConfig, IMenuConfigItem } from "./models";
import { MenuItem } from "./menuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/SiteLinkLogo-White.png";

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
  const [animateClass, setAnimateClass] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setAnimateClass("visible");
    }, 100);
  }, [config])

  const menuItems =
    config.items &&
    config.items.map((item: IMenuConfigItem, index: number) => {
      const handleMenuItemClick = (e: any) => {
        if (item.submenu) {
          e.preventDefault();
          console.log(item.submenu);
          setAnimateClass("changing");
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

    const handleTitleClick = () =>
    {
      if(onTitleClick)
      {
        setAnimateClass("changing");
        onTitleClick();
      }
    }


  return (
    <nav className={`st-menu ${effect}`}>
    <a href="/"><img src={logo} /></a>
    <div className={`menu-content ${animateClass}`}>
      <ul>
        {config.title && (
          <li className="menu-title">
            <a onClick={handleTitleClick}>
                <FontAwesomeIcon icon={faChevronLeft} /> {config.title}
            </a>
          </li>
        )}
        {menuItems}
      </ul>
      {/* {config.submenu && <Menu config={config.submenu} />} */}
      </div>
    </nav>
  );
};
