import React, { useState, useEffect } from "react";
import "./menu.css";
import "./demo.css";
import { IMenuConfig } from "./models";
import { Menu } from "./menu";
const URI = require("urijs");

import { hubMenuConfig } from "./hubMenuConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight
} from "@fortawesome/free-solid-svg-icons";

/*
    Based upon https://tympanus.net/Development/SidebarTransitions/
*/

export const LeftNav: React.FunctionComponent = ({ children }) => {
  const [visible, setVisible] = useState(true);
  const [parentConfig, setParentConfig] = useState<IMenuConfig>(hubMenuConfig); // allows the menu to get 3-levels deep
  const [menuConfig, setMenuConfig] = useState<IMenuConfig>(hubMenuConfig);

  // on component load, set the menu to the page that contains the browser's current URL
  useEffect(() => {
    setMenuConfig(
      findMenuContainingPath(hubMenuConfig, hubMenuConfig, window.location.href)
    );
  }, []);

  const onToggleMenuClick = (e: any) => {
    setVisible(!visible);
    console.log("Attempted to toggle via button click.");
  };

  const onSubmenuTitleClick = () => {
    setMenuConfig(setActiveByLocation(parentConfig, window.location.href));
    setParentConfig(hubMenuConfig);
  };

  const onMenuItemClick = (
    subMenuConfig: IMenuConfig,
    activeItemHref?: string,
    parentMenuConfig?: IMenuConfig
  ) => {
    if (parentMenuConfig) {
      setParentConfig(parentMenuConfig);
    }

    setMenuConfig(setActiveByLocation(subMenuConfig, activeItemHref));
  };

  const makeVisible = visible ? "st-menu-open" : "";
  const containerClass = `left-nav st-effect-2 ${makeVisible}`;
  const menuToggleClass = `menu-toggle st-effect-2 ${makeVisible}`;

  return (
    <React.Fragment>
      <div className={containerClass}>
        <div className={menuToggleClass}>
          <div className="menu-control" onClick={onToggleMenuClick}>
            {visible ? (
              <FontAwesomeIcon icon={faAngleDoubleLeft} />
            ) : (
              <FontAwesomeIcon icon={faAngleDoubleRight} />
            )}
          </div>
        </div>
        <Menu
          menuConfig={menuConfig}
          onMenuItemClick={onMenuItemClick}
          effect="st-effect-2"
          onTitleClick={onSubmenuTitleClick}
        />

        <div className="st-pusher">
          <div className="content">
            <div className="content-inner">{children}</div>
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
// this recursive function is fairly gross
const findMenuContainingPath = (
  config: IMenuConfig,
  submenuConfig: IMenuConfig,
  location: string
): IMenuConfig => {
  // check if any submenus' urls match the current browser url

  if (containsPath(submenuConfig, location)) {
    return setActiveByLocation(submenuConfig, location);
  }

  for (let i = 0; i < submenuConfig.items.length; i++) {
    const currentItem = submenuConfig.items[i];
    if (currentItem.submenu) {
      let sub = findMenuContainingPath(config, currentItem.submenu, location);
      if (containsPath(sub, location)) {
        return sub;
      }
    }
  }

  return config;
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
