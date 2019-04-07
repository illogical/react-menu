import React, { useState } from "react";
import "./menu.css";
import "./demo.css";

/*
    Based upon https://tympanus.net/Development/SidebarTransitions/
*/

export const LeftNav = () => {
  const [visible, setVisible] = useState(false);
  const [effectClass, setEffectClass] = useState("");

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

  const makeVisible = visible ? "st-menu-open" : "";
  const containerClass = `st-container ${effectClass} ${makeVisible}`;

  return (
    <React.Fragment>
      <div id="st-container" className={containerClass}>
        <MenuExample effect="st-effect-1" />
        <MenuExample effect="st-effect-2" />

        <MenuExample effect="st-effect-4" />

        <div className="st-pusher" onClick={onBodyClick}>
          <MenuExample effect="st-effect-3" />

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
                  <p>If you enjoyed this demo you might also like:</p>
                  <p>
                    <a href="http://tympanus.net/Development/HeaderEffects/">
                      On Scroll Header Effects
                    </a>
                  </p>
                  <p>
                    <a href="http://tympanus.net/Development/PageTransitions/">
                      A Collection of Page Transitions
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

interface MenuExampleProps {
  effect: string;
}
const MenuExample = ({ effect }: MenuExampleProps) => (
  <nav className={`st-menu ${effect}`} id="menu-4">
    <h2 className="icon icon-lab">Sidebar</h2>
    <ul>
      <li>
        <a className="icon icon-data" href="#">
          Data Management
        </a>
      </li>
      <li>
        <a className="icon icon-location" href="#">
          Location
        </a>
      </li>
      <li>
        <a className="icon icon-study" href="#">
          Study
        </a>
      </li>
      <li>
        <a className="icon icon-photo" href="#">
          Collections
        </a>
      </li>
      <li>
        <a className="icon icon-wallet" href="#">
          Credits
        </a>
      </li>
    </ul>
  </nav>
);

const hasParentClass = (e: any, className: string): boolean => {
  if (e === document) return false;
  if (classReg(className).test(e.className)) {
    return true;
  }

  return e.parentNode && hasParentClass(e.parentNode, className);
};

const classReg = (className: string) =>
  new RegExp("(^|\\s+)" + className + "(\\s+|$)");
