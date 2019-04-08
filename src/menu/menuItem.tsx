import React, { useState } from "react";
import { IMenuConfigItem } from "./models";

interface IMenuItemProps {
  config: IMenuConfigItem;
  onItemClick?: (e: any) => void;
  active?: boolean;
}

export const MenuItem = ({ config, active, onItemClick }: IMenuItemProps) => {
  return (
    <li className={active ? "active" : ""}>
      <a
        href={config.href}
        className={`icon ${config.icon}`}
        onClick={onItemClick}
      >
        {config.text}
      </a>
    </li>
  );
};
