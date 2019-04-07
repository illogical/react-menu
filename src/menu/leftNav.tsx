import React, { useState } from "react";
import "./menu.css";
import "./demo.css";

/*
    Based upon https://tympanus.net/Development/SidebarTransitions/
*/

export const LeftNav = () => {
  const [visible, setVisible] = useState(false);
  const onPusherClick = (e: any) => {
    setVisible(!visible);
    console.log("Attempted to toggle.");
  };

  const onBodyClick = (e: any) => {
    // TODO: block this if a menu item is being clicked
    console.log("body clicked.");

    if (visible && !hasParentClass(e.target, "st-menu")) {
      setVisible(!visible);
      console.log("Attempted to toggle from body.");
    }
  };

  const makeVisible = visible ? "st-menu-open" : "";
  const containerClass = `st-container st-effect-3 ${makeVisible}`;

  return (
    <React.Fragment>
      <div id="st-container" className={containerClass}>
        <nav className="st-menu st-effect-3" id="menu-3">
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

        <div className="st-pusher" onClick={onBodyClick}>
          <nav className="st-menu st-effect-3" id="menu-3">
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

          <nav className="st-menu st-effect-6" id="menu-6">
            <h2 className="icon icon-stack">Sidebar</h2>
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

          <nav className="st-menu st-effect-7" id="menu-7">
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

          <nav className="st-menu st-effect-8" id="menu-8">
            <h2 className="icon icon-stack">Sidebar</h2>
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

          <nav className="st-menu st-effect-14" id="menu-14">
            <h2 className="icon icon-stack">Sidebar</h2>
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

          <div className="st-content">
            <div className="st-content-inner">
              <div className="codrops-top clearfix">
                <a
                  className="codrops-icon codrops-icon-prev"
                  href="http://tympanus.net/Tutorials/3DShadingWithBoxShadows/"
                >
                  <span>Previous Demo</span>
                </a>
                <span className="right">
                  <a
                    className="codrops-icon codrops-icon-drop"
                    href="http://tympanus.net/codrops/?p=16292"
                  >
                    <span>Back to the Codrops Article</span>
                  </a>
                </span>
              </div>
              <header className="codrops-header">
                <h1>
                  Sidebar Transitions{" "}
                  <span>Transition effects for off-canvas views</span>
                </h1>
              </header>
              <div className="main clearfix">
                <div id="st-trigger-effects" className="column">
                  <button data-effect="st-effect-1">Slide in on top</button>
                  <button data-effect="st-effect-2">Reveal</button>
                  <button data-effect="st-effect-3" onClick={onPusherClick}>
                    Push
                  </button>
                  <button data-effect="st-effect-4">Slide along</button>
                  <button data-effect="st-effect-5">Reverse slide out</button>
                  <button data-effect="st-effect-6">Rotate pusher</button>
                  <button data-effect="st-effect-7">3D rotate in</button>
                  <button data-effect="st-effect-8">3D rotate out</button>
                  <button data-effect="st-effect-9">Scale down pusher</button>
                  <button data-effect="st-effect-10">Scale Up</button>
                  <button data-effect="st-effect-11">
                    Scale &amp; rotate pusher
                  </button>
                  <button data-effect="st-effect-12">Open door</button>
                  <button data-effect="st-effect-13">Fall down</button>
                  <button data-effect="st-effect-14">Delayed 3D Rotate</button>
                </div>
                <div className="column">
                  <p>
                    Sidebar menus or off-canvas navigations can be revealed in
                    many creative ways.
                  </p>
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

const hasParentClass = (e: any, className: string): boolean => {
  if (e === document) return false;
  if (classReg(className).test(e.className)) {
    return true;
  }

  return e.parentNode && hasParentClass(e.parentNode, className);
};

const classReg = (className: string) =>
  new RegExp("(^|\\s+)" + className + "(\\s+|$)");
