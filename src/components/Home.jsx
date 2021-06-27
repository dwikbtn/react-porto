import React from "react";
import Social from "./Social";

const Home = (props) => {

  const redirectHandler = (e) => {
    
    props.defIndex(e)
    console.log(e);
  }

  return (
    <>
      <div className="tokyo_tm_home">
        <div className="home_content">
          <div className="avatar">
            <div
              className="image avatar_img"
              style={{
                backgroundImage: "url(assets/img/slider/1.jpg)",
              }}
            ></div>
            {/* END AVATAR IMAGE */}
          </div>
          {/* END AVATAR */}
          <div className="details">
            <h3 className="name">Dwi Darma</h3>
            <p className="job">
              Passionate Website Developer Focusing On Building Revolutionary App.
              To be flexible to learn new things and always open with new technology. 
              Didn't elieve me? <span onClick={() => redirectHandler(1)}> see sall my work bellow</span>
            </p>
            {/* END JOB */}
            <Social />
          </div>
          {/* END DETAILS */}
        </div>
        {/* END HOME CONTENT */}
      </div>
      {/* END HOME */}
    </>
  );
};

export default Home;
