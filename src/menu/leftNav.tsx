import React, { useState } from "react";
import "./menu.css";
import "./demo.css";
import { IMenuConfig } from "./models";
import { Menu } from "./menu";
const URI = require("urijs");
import { MenuPageManager } from "./menuPageManager";
import { Route } from "react-router-dom";
import {
  faTasks,
  faBalanceScale,
  faUser,
  faCreditCard,
  faPhone,
  faBook,
  faBookmark,
  faCalculator,
  faMap,
  faWrench,
  faLightbulb
} from "@fortawesome/free-solid-svg-icons";

/*
    Based upon https://tympanus.net/Development/SidebarTransitions/
*/

const exampleConfig: IMenuConfig = {
  items: [
    {
      text: "Home",
      href: "/home/"
    },
    {
      text: "Operations",
      icon: faTasks,
      href: "/operations/",
      submenu: {
        title: "Operations",
        items: [
          {
            text: "Payments",
            icon: faBalanceScale,
            href: "/payments/"
          },
          {
            text: "Move In",
            icon: faBalanceScale,
            href: "/movein/"
          },
          {
            text: "Move Out",
            icon: faBalanceScale,
            href: "/moveout/"
          },
          {
            text: "Transfer",
            icon: faBalanceScale,
            href: "/transfer/"
          }
        ]
      }
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
        title: "Customers",
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

// TODO: if active is on submenu, render the submenu "page"

export const LeftNav = () => {
  const [visible, setVisible] = useState(false);
  const [effectClass, setEffectClass] = useState(""); // allows switching animation styles
  const [menuConfig, setMenuConfig] = useState<IMenuConfig>(
    setActiveByLocation(exampleConfig, window.location.href)
  );

  const onPusherClick = (e: any) => {
    setEffectClass(e.target.getAttribute("data-effect"));
    console.log(e.target.getAttribute("data-effect"));

    setVisible(!visible);
    console.log("Attempted to toggle.");
  };

  const onBodyClick = (e: any) => {
    if (visible && !hasParentClass(e.target, "st-menu")) {
      setVisible(!visible);
      console.log("Attempted to toggle from body.");
    }
  };

  const onSubmenuTitleClick = () => {
    setMenuConfig(exampleConfig);
  };

  const onMenuItemClick = (config: IMenuConfig, activeItemHref: string) => {
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
            <button data-effect="st-effect-2" onClick={onPusherClick}>
              {visible ? "Close" : "Open"} Menu
            </button>
            <div>
              <Route exact path="/" component={Home} />
              <Route path="/adjustments" component={Adjustments} />
              <Route path="/efile" component={Efile} />
              <Route path="/reporting" component={Reporting} />
              <Route path="/collections" component={Collections} />
              <Route path="/billing" component={Billing} />
              <Route path="/map" component={Map} />
              <Route path="/settings" component={Settings} />
              <Route path="/reminders" component={Reminders} />
              <Route path="/virtualterminal" component={VirtualTerminal} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const Home = () => <h2>Home</h2>;
const Adjustments = () => <h2>Adjustments</h2>;
const Reporting = () => <h2>Reporting</h2>;
const Efile = () => <h2>eFile</h2>;
const Collections = () => <h2>eFile</h2>;
const Billing = () => <h2>Billing</h2>;
const Map = () => <h2>Map</h2>;
const Settings = () => <h2>Settings</h2>;
const Reminders = () => <h2>Reminders</h2>;
const VirtualTerminal = () => <h2>Virtual Terminal</h2>;

const setActiveByLocation = (config: IMenuConfig, location: string) => {
  //TODO: return a new IMenuConfig that contains the selected menu item
  //TODO: recursive function that works its way through a nested config to set the matching path to active
  const currentUrl = new URI(location); // TODO: Maybe don't wait for window.location to update to change the selection. Pass the href instead.
  console.log("Current URL path", currentUrl.pathname());

  return {
    ...config,
    items: config.items.map(item => {
      return {
        ...item,
        active:
          item.href != null && item.href.toLowerCase() === currentUrl.pathname()
      };
    })
  };
};

// TODO: move to a utilities file
const hasParentClass = (e: any, className: string): boolean => {
  if (e === document) return false;
  if (classReg(className).test(e.className)) {
    return true;
  }

  return e.parentNode && hasParentClass(e.parentNode, className);
};

const classReg = (className: string) =>
  new RegExp("(^|\\s+)" + className + "(\\s+|$)");
