"use client";
import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Link from "next/link";

const HomeLight = () => {
  const [def, setDef] = useState(0);

  const redirectHandler = (index: number) => {
    setDef(index);
  };

  return (
    <>
      <Tabs selectedIndex={def} onSelect={redirectHandler}>
        <TabList>
          {/* START LEFT MENU CONTENT */}
          <div className="leftpart">
            <div className="leftpart_inner">
              <div className="logo">
                <Link className="navbar-brand" href="/">
                  <h1 className="name">Dwi's Porto</h1>
                </Link>
              </div>
              {/* END LOGO */}

              <div className="menu">
                <ul>
                  <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/home-run.svg"
                      alt="homerun"
                    />
                    <span className="menu_content">Home</span>
                  </Tab>
                  <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/briefcase.svg"
                      alt="briefcase"
                    />
                    <span className="menu_content">Portfolio</span>
                  </Tab>
                  <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/avatar.svg"
                      alt="avatar"
                    />
                    <span className="menu_content">About</span>
                  </Tab>
                  <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/mail.svg"
                      alt="mail"
                    />
                    <span className="menu_content"> Contact</span>
                  </Tab>
                  <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/paper.svg"
                      alt="paper"
                    />
                    <a
                      href="https://dev.to/dwikbtn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="menu_content">Blog Post</span>
                    </a>
                  </Tab>
                </ul>
              </div>
              {/* END MENU */}

              <div className="copyright">
                <p>
                  &copy; {new Date().getFullYear()} Portfolio <br /> Created by
                  <a
                    href="https://github.com/dwikbtn/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Dwi Darma
                  </a>
                </p>
              </div>
              {/* END COPYRIGHT */}
            </div>
          </div>
          {/* END LEFT MENU CONTENT */}
        </TabList>
        {/* END SIDEBAR TABLIST */}

        {/* START RIGHT PART CONTENT */}
        <div className="rightpart">
          <div className="rightpart_in">
            <div className="tokyo_tm_section">
              <div className="container">
                <TabPanel>
                  <Home defIndex={redirectHandler} />
                </TabPanel>
                {/* END HOME MENU TAB CONTENT */}

                <TabPanel>
                  <Portfolio />
                </TabPanel>
                {/* END PORTFOLIO MENU TAB CONTENT */}

                <TabPanel>
                  <About />
                </TabPanel>
                {/* END ABOUT MENU TAB CONTENT */}

                <TabPanel>
                  <Contact />
                </TabPanel>
                {/* END CONTACT MENU TAB CONTENT */}
                <TabPanel>
                  <a
                    href="https://dev.to/dwikbtn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                  </a>
                </TabPanel>
                {/* END NEWS MENU TAB CONTENT */}
              </div>
            </div>
          </div>
        </div>
        {/* END RIGHT PART CONTENT */}
      </Tabs>
      {/* END TABS */}
    </>
  );
};

export default HomeLight;
