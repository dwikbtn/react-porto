import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Cards from "./Cards";

//json
import data from "../porto.json";

const Portfolio = (props) => {
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
                {/* <Cards data={data.portofolios}/> */}
                <div className="card-grid">
                  {data.portofolios.map((porto) => {
                    return (
                      <Cards key={porto.id}>
                        <div className="porto-img">
                          <img src={porto.imageUrl} alt={porto.header} />
                        </div>
                        <h1>{porto.header}</h1>
                        <p>{porto.description}</p>
                        <a href={porto.githubUrl} target= "_blank" rel="noreferrer">
                          <button className="porto-btn github">Github</button>
                        </a>
                        <button className="porto-btn demo">Live Demo</button>
                      </Cards>
                    );
                  })}
                </div>
              </TabPanel>
              {/* END ALL PORTFOLIO GALLERY */}

              <TabPanel></TabPanel>
              {/* END Front end list */}

              <TabPanel></TabPanel>
              {/* END backend list */}

              <TabPanel></TabPanel>
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
