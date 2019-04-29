import React, { useState } from "react";
import { IMenuConfigItem } from "./models";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

interface IMenuItemProps {
  config: IMenuConfigItem;
  onItemClick?: (e: any) => void;
  active?: boolean;
}

export const MenuItem = ({ config, active, onItemClick }: IMenuItemProps) => {
  return (
    <li
      className={active && !config.hideActiveStyle ? "active" : ""}
      onClick={onItemClick}
    >
      {config.submenu && config.submenu.items.length > 0 && (
        <em className="counter">
          <span>{config.submenu.items.length} </span>
          <FontAwesomeIcon icon={faChevronRight} />
        </em>
      )}
      {!config.href ? (
        <a>
          {config.icon && <FontAwesomeIcon icon={config.icon} />} {config.text}
        </a>
      ) : (
        <Link to={config.href}>
          {config.icon && <FontAwesomeIcon icon={config.icon} />} {config.text}
        </Link>
      )}
    </li>
  );
};
