import React, { useState } from 'react';
import { IMenuConfig } from './models';
import { Menu } from './menu';
import { faTasks, faBalanceScale, faCreditCard, faUser, faPhone, faBook, faBookmark, faCalculator, faMap, faWrench, faLightbulb } from '@fortawesome/free-solid-svg-icons';
const URI = require("urijs");

const exampleConfig: IMenuConfig = {
    title: "Sidebar Example",
    items: [
      {
        text: "Home",
        href: "/home/"
      },
      {
        text: "Operations",
        icon: faTasks,
        href: "/operations/"
      },
      {
        text: "Billing",
        icon: faBalanceScale,
        href: "/billing/"
      },
      {
        text: "Credit Card Virtual Terminal",
        icon: faCreditCard,
        href: "/virtualterminal/"
      },
      {
        text: "Customers",
        icon: faUser,
        href: "/customers/",
        submenu: {
          items: [
            {
              text: "Tenants",
              icon: faUser,
              href: "/tenants/"
            },
            {
              text: "Gate Access",
              icon: faUser,
              href: "/gateaccess/"
            }
          ]
        }
      },
      {
        text: "Collections",
        icon: faPhone,
        href: "/collections/"
      },
      {
        text: "Adjustments",
        icon: faBook,
        href: "/adjustments/"
      },
      {
        text: "eFile Management",
        icon: faBookmark,
        href: "/efile/"
      },
      {
        text: "Reporting",
        icon: faCalculator,
        href: "/reporting/"
      },
      {
        text: "3D Map",
        icon: faMap,
        href: "/map/"
      },
      {
        text: "Settings",
        icon: faWrench,
        href: "/settings/"
      },
      {
        text: "Reminders",
        icon: faLightbulb,
        href: "/reminders/"
      }
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