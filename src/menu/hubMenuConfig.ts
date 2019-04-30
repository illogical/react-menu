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
      href: "/",
      hideActiveStyle: true
    },
    {
      text: "Operations",
      icon: faTasks,
      submenu: {
        title: "Operations",
        items: [
          {
            text: "Lead to Lease",
            href: "/leadtolease/"
          },
          {
            text: "Payments",
            href: "/payments/"
          },
          {
            text: "Move In",
            href: "/movein/"
          },
          {
            text: "Move Out",
            href: "/moveout/"
          },
          {
            text: "Transfer",
            href: "/transfer/"
          },
          {
            text: "Merchandise",
            submenu: {
              title: "Merchandise",
              items: [
                {
                  text: "Merchandise Purchase",
                  href: "/MerchandisePurchase/"
                },
                {
                  text: "Merchandise Return",
                  href: "/Merchandise/Refund/"
                },
                {
                  text: "Walk-In Merchandise Void",
                  href: "/Merchandise/Refund/GetVoid/"
                }
              ]
            }
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
            href: "/tenants/"
          },
          {
            text: "Gate Access",
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

const operations = {};
