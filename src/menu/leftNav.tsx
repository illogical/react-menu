import React, { useState } from "react";
import "./menu.css";
import "./demo.css";
import { IMenuConfig } from "./models";
import { Menu } from "./menu";
const URI = require("urijs");
import { MenuPageManager } from "./menuPageManager";
import { Route } from "react-router-dom";
import { faTasks, faBalanceScale, faUser, faCreditCard, faPhone, faBook, faBookmark, faCalculator, faMap, faWrench, faLightbulb } from '@fortawesome/free-solid-svg-icons';

/*
    Based upon https://tympanus.net/Development/SidebarTransitions/
*/

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

export const LeftNav = () => {
  const [visible, setVisible] = useState(false);
  const [effectClass, setEffectClass] = useState("");
  const [menuConfig, setMenuConfig] = useState(
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

  const onMenuItemClick = (config: IMenuConfig, activeItemHref: string) => {
    setMenuConfig(setActiveByLocation(config, activeItemHref));
  };

  const makeVisible = visible ? "st-menu-open" : "";
  const containerClass = `st-container ${effectClass} ${makeVisible}`;

  return (
    <React.Fragment>
      <div id="st-container" className={containerClass}>
        <Menu config={exampleConfig} effect="st-effect-1" />
        <Menu
          config={menuConfig}
          onMenuItemClick={onMenuItemClick}
          effect="st-effect-2"
        />
        <div className="menu-shadow" />
        <Menu config={exampleConfig} effect="st-effect-4" />

        <div className="st-pusher" onClick={onBodyClick}>
          <Menu config={exampleConfig} effect="st-effect-3" />

          <div className="st-content">
            <div className="st-content-inner">
              <header className="codrops-header">
                <h1>Sidebar Transitions</h1>
              </header>
              <div className="main clearfix">
                <div id="st-trigger-effects" className="column">
                  <button data-effect="st-effect-1" onClick={onPusherClick}>
                    Slide in on top
                  </button>
                  <button data-effect="st-effect-2" onClick={onPusherClick}>
                    Reveal
                  </button>
                  <button data-effect="st-effect-3" onClick={onPusherClick}>
                    Push
                  </button>
                  <button data-effect="st-effect-4" onClick={onPusherClick}>
                    Slide along
                  </button>
                </div>
                <div className="column">
                  <p>
                    Here is some inspiration for showing them in style using CSS
                    transitions.
                  </p>
                </div>
                <div className="info">
                  <Route exact path="/" component={Home} />
                  <Route path="/adjustments" component={Adjustments} />
                  <Route path="/reporting" component={Reporting} />
                </div>
              </div>
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
