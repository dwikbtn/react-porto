import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Cards from "./Cards";

const Portfolio = () => {
  return (
    <>
        <div className="tokyo_tm_portfolio">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <span>Portfolio</span>
                <h3>All My Works</h3>
              </div>
            </div>
          </div>
          {/* END TOKYO_TM_TITLE */}
          <div className="portfolio_filter">
            <Tabs>
              <TabList>
                <Tab>All</Tab>
                <Tab>Front-End</Tab>
                <Tab>Back-End</Tab>
                <Tab>Others</Tab>
              </TabList>
              {/* END TABLIST */}
              <div className="list_wrapper">
                  <TabPanel>
                    <Cards/>
                  </TabPanel>
                  {/* END ALL PORTFOLIO GALLERY */}

                  <TabPanel>
                   
                  </TabPanel>
                  {/* END Front end list */}

                  <TabPanel>
                    
                  </TabPanel>
                  {/* END backend list */}

                  <TabPanel>
                    
                  </TabPanel>
                  {/* END others list GALLERY */}
                {/* END TABPANEL */}
              </div>
              {/* END LIST WRAPPER */}
            </Tabs>
          </div>
        </div>
    </>
  );
};

export default Portfolio;
