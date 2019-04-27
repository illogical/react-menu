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
import { IMenuConfig } from "./models";

export const hubMenuConfig: IMenuConfig = {
  items: [
    {
      text: "Home",
      href: "/home/"
    },
    {
      text: "Operations",
      icon: faTasks,
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
