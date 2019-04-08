import React, { useState } from "react";
import { IMenuConfigItem } from "./models";
import { Link } from 'react-router-dom';

interface IMenuItemProps {
  config: IMenuConfigItem;
  onItemClick?: (e: any) => void;
  active?: boolean;
}

export const MenuItem = ({ config, active, onItemClick }: IMenuItemProps) => {
  return (
    <li className={active ? "active" : ""} onClick={onItemClick}>
      <Link to={config.href} className={`icon ${config.icon}`} >
        {config.text}
      </Link>
    </li>
  );
};
