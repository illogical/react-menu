import React, { useState } from "react";
import "./menu.css";
import "./demo.css";
import { IMenuConfig } from "./models";
import { Menu } from "./menu";
const URI = require("urijs");

import { hasParentClass } from "../utilities/classUtils";
import { hubMenuConfig } from "./hubMenuConfig";

/*
    Based upon https://tympanus.net/Development/SidebarTransitions/
*/

export const LeftNav: React.FunctionComponent = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [effectClass, setEffectClass] = useState(""); // allows switching animation styles
  const [menuConfig, setMenuConfig] = useState<IMenuConfig>(
    findMenuContainingPath(hubMenuConfig, window.location.href)
  );

  const onToggleMenuClick = (e: any) => {
    setEffectClass(e.target.getAttribute("data-effect"));
    console.log(e.target.getAttribute("data-effect"));

    setVisible(!visible);
    console.log("Attempted to toggle via button click.");
  };

  const onBodyClick = (e: any) => {
    if (visible && !hasParentClass(e.target, "st-menu")) {
      setVisible(!visible);
      console.log("Attempted to toggle via body click.");
    }
  };

  const onSubmenuTitleClick = () => {
    setMenuConfig(setActiveByLocation(hubMenuConfig, window.location.href));
  };

  const onMenuItemClick = (config: IMenuConfig, activeItemHref?: string) => {
    setMenuConfig(setActiveByLocation(config, activeItemHref));
  };

  const makeVisible = visible ? "st-menu-open" : "";
  const containerClass = `left-nav ${effectClass} ${makeVisible}`;

  return (
    <React.Fragment>
      <div className={containerClass}>
        <Menu
          config={menuConfig}
          onMenuItemClick={onMenuItemClick}
          effect="st-effect-2"
          onTitleClick={onSubmenuTitleClick}
        />

        <div className="st-pusher" onClick={onBodyClick}>
          <div className="content">
            <div className="content-inner">
              <button data-effect="st-effect-2" onClick={onToggleMenuClick}>
                {visible ? "Close" : "Open"} Menu
              </button>
              {children}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const setActiveByLocation = (
  config: IMenuConfig,
  location?: string
): IMenuConfig => {
  if (!location) {
    return config;
  }

  const currentUrl = new URI(location); // TODO: Maybe don't wait for window.location to update to change the selection. Pass the href instead.
  console.log("Current URL path", currentUrl.pathname());

  return {
    ...config,
    items: config.items.map(item => {
      return {
        ...item,
        active:
          item.href != null &&
          item.href.toLowerCase() === currentUrl.pathname().toLowerCase()
      };
    })
  };
};

// select the menu or submenu that contains a link to the current url
const findMenuContainingPath = (
  config: IMenuConfig,
  location: string
): IMenuConfig => {
  let menuContainingLink: IMenuConfig = config;
  // check if any submenus' urls match the current browser url
  config.items.map(menuItem => {
    if (menuItem.submenu && containsPath(menuItem.submenu, location)) {
      menuContainingLink = findMenuContainingPath(menuItem.submenu, location);
    }
  });

  if (containsPath(config, location)) {
    return setActiveByLocation(config, location);
  }

  return menuContainingLink;
};

const containsPath = (config: IMenuConfig, location: string): boolean => {
  const currentUrl = new URI(location);

  const foundItems = config.items.filter(menuItem => {
    return (
      menuItem.href &&
      menuItem.href.toLowerCase() === currentUrl.pathname().toLowerCase()
    );
  });

  return foundItems.length > 0;
};
