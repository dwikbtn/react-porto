import React from "react";
import HomeLight from "../all-home-version/HomeLight";

const HomeDark = () => {
  document.body.classList.add("dark");
  return (
    <>
      <Tabs>
        <TabList>
          {/* START LEFT MENU CONTENT */}
          <div className="leftpart">
            <div className="leftpart_inner">
              <div className="logo">
                <Link className="navbar-brand" to="/">
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
                      src="/assets/img/svg/avatar.svg"
                      alt="avatar"
                    />
                    <span className="menu_content">About</span>
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
                    <span className="menu_content">Blog Post</span>
                  </Tab>
                </ul>
              </div>
              {/* END MENU */}

              <div className="copyright">
                <p>
                  &copy; {new Date().getFullYear()} Portfolio <br /> Created by
                  <a
                    href="/"
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
                  <Home />
                </TabPanel>
                {/* END HOME MENU TAB CONTENT */}

                <TabPanel>
                  <About />
                </TabPanel>
                {/* END ABOUT MENU TAB CONTENT */}

                <TabPanel>
                  <Portfolio />
                </TabPanel>
                {/* END PORTFOLIO MENU TAB CONTENT */}


                <TabPanel>
                  <Contact />
                </TabPanel>
                {/* END CONTACT MENU TAB CONTENT */}
                <TabPanel>
                  <News />
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

export default HomeDark;
