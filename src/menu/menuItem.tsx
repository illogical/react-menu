import React, { useState } from "react";
import { IMenuConfigItem } from "./models";

interface IMenuItemProps {
  config: IMenuConfigItem;
  active?: boolean;
}

export const MenuItem = ({ config, active }: IMenuItemProps) => {
  return (
    <li className={active ? "active" : ""}>
      <a href={config.href} className={`icon ${config.icon}`}>
        {config.text}
      </a>
    </li>
  );
};
