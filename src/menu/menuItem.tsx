import React, { useState } from "react";
import { IMenuConfigItem } from "./models";

interface IMenuItemProps {
  config: IMenuConfigItem;
}

export const MenuItem = ({ config }: IMenuItemProps) => {
  return (
    <li className={config.active ? "active" : ""}>
      <a href={config.href} className={`icon ${config.icon}`}>
        {config.text}
      </a>
    </li>
  );
};
