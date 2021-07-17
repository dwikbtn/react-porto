import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Cards from "./Cards";

//json
import data from "../porto.json";

const Portfolio = React.memo((props) => {
  //state
  const[FEState, setFE]=useState(false)
  const [BEState, setBE] = useState(false)
  const [othersState, setOthers] = useState(false);
  //on Select Tab
  const onFeTab = () => {
    setFE(true)
    setBE(false)
    setOthers(false)
  }
  const onBeTab = () => {
    setFE(false);
    setBE(true);
    setOthers(false);
    
  };
  const onOtherTab = () => {
    setFE(false);
    setBE(false);
    setOthers(true);
  };
  //filter the tabs
  const allTabPorto =data.portofolios.map((porto) => {
    return (
      <Cards key={porto.id}>
        <div className="porto-img">
          <img src={porto.imageUrl} alt={porto.header} />
        </div>
        <h1>{porto.header}</h1>
        <p>{porto.description}</p>
        <a href={porto.githubUrl} target="_blank" rel="noreferrer">
          <button className="porto-btn github">Github</button>
        </a>
        <button className="porto-btn demo">Live Demo</button>
      </Cards>
    );
  });
  const filteredData = data.portofolios.filter((porto) => {
    if (porto.type === "front-end" && FEState === true) {
      return true;
    }
    if (porto.type === "back-end" && BEState === true) {
      return true;
    }
    if (porto.type === "others" && othersState === true) {
      return true;
    }
    return null
  });
  const filteredPorto =(filteredData.map((porto) => {
    return (
      <Cards key={porto.id}>
        <div className="porto-img">
          <img src={porto.imageUrl} alt={porto.header} />
        </div>
        <h1>{porto.header}</h1>
        <p>{porto.description}</p>
        <a href={porto.githubUrl} target="_blank" rel="noreferrer">
          <button className="porto-btn github">Github</button>
        </a>
        <button className="porto-btn demo">Live Demo</button>
      </Cards>
    );
  }));
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
              <Tab onClick={onFeTab}>Front-End</Tab>
              <Tab onClick={onBeTab}>Back-End</Tab>
              <Tab onClick={onOtherTab}>Others</Tab>
            </TabList>
            {/* END TABLIST */}
            <div className="list_wrapper">
              <TabPanel>
                <div className="card-grid">{allTabPorto}</div>
              </TabPanel>
              {/* END ALL PORTFOLIO GALLERY */}

              <TabPanel>
                {/* addState later */}
                <div className="card-grid">{filteredPorto}</div>
              </TabPanel>
              {/* END Front end list */}

              <TabPanel>
                <div className="card-grid">{filteredPorto}</div>
              </TabPanel>
              {/* END backend list */}

              <TabPanel>
                <div className="card-grid">{filteredPorto}</div>
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
});

export default Portfolio;
