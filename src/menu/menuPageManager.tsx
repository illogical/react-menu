import React, { useState } from 'react';
import { IMenuConfig } from './models';
import { Menu } from './menu';
const URI = require("urijs");

const exampleConfig: IMenuConfig = {
    title: "Sidebar Example",
    items: [
      {
        text: "Home",
        icon: "icon-data",
        href: "#home"
      },
      {
        text: "Operations",
        icon: "icon-location",
        href: "#operations"
      },
      {
        text: "Billing",
        icon: "icon-study",
        href: "#billing"
      },
      {
        text: "Credit Card Virtual Terminal",
        icon: "icon-photo",
        href: "#vt"
      },
      {
        text: "Customers",
        icon: "icon-wallet",
        href: "#customers",
        submenu: {
          items: [
            {
              text: "Tenants",
              icon: "icon-wallet",
              href: "#tenants"
            },
            {
              text: "Gate Access",
              icon: "icon-wallet",
              href: "#gateAccess"
            }
          ]
        }
      },
      {
        text: "Collections",
        icon: "icon-wallet",
        href: "#collections"
      },
      {
        text: "Adjustments",
        icon: "icon-wallet",
        href: "#adjustments"
      },
      {
        text: "eFile Management",
        icon: "icon-wallet",
        href: "#efile"
      },
      {
        text: "Reporting",
        icon: "icon-wallet",
        href: "#reporting"
      },
      {
        text: "3D Map",
        icon: "icon-wallet",
        href: "#map"
      },
      {
        text: "Settings",
        icon: "icon-wallet",
        href: "#settings"
      },
      {
        text: "Reminders",
        icon: "icon-wallet",
        href: "#reminders"
      },
    ]
  };

export const MenuPageManager = () => {
    const initialConfig = exampleConfig;
    const [menuConfig, setMenuConfig] = useState(initialConfig)
    //TODO: move some of the leftNav logic to here such as visible?

    const  onMenuItemClick = (config: IMenuConfig) => {
        setMenuConfig(config);
    }

    return <Menu config={menuConfig} onMenuItemClick={onMenuItemClick} effect="st-effect-2" />
}

// TODO: Create a function that maps config but adds the active to the one that matches the current URI.hash(window.location)
const setActiveByLocation = (config: IMenuConfig) => {
    //TODO: return a new IMenuConfig that contains the selected menu item
    //TODO: recursive function that works its way through a nested config to set the matching path to active
    return config.items.map((item) => {
        const currentUrl = new URI(window.location);

        return {
            ...item,
            active: item.href && item.href === currentUrl.hash()
        }

    })
}