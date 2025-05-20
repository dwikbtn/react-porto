import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Cards from "./Cards";

const Portfolio = React.memo((props) => {
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const apiUrl =
  //     "https://react-portofolio-a5072-default-rtdb.firebaseio.com/portofolios.json";
  //   fetch(apiUrl)
  //     .then((res) => res.json())
  //     .then((jsonData) => {
  //       setData(jsonData);
  //       setLoading(true);
  //     });
  // }, []);

  //filter the tabs

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
              {/* <Tab onClick={onFeTab}>Front-End</Tab>
              <Tab onClick={onBeTab}>Back-End</Tab>
              <Tab onClick={onOtherTab}>Others</Tab> */}
            </TabList>
            {/* END TABLIST */}
            <div className="list_wrapper">
              <TabPanel>
                <div className="card-grid">
                  {/* {loading ? allTabPorto : <Loading />} */}
                </div>
              </TabPanel>
              {/* END ALL PORTFOLIO GALLERY */}

              <TabPanel>
                {/* addState later */}
                {/* <div className="card-grid">{filteredPorto}</div> */}
              </TabPanel>
              {/* END Front end list */}

              <TabPanel>
                {/* <div className="card-grid">{filteredPorto}</div> */}
              </TabPanel>
              {/* END backend list */}

              <TabPanel>
                {/* <div className="card-grid">{filteredPorto}</div> */}
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
