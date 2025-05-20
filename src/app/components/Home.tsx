import React from "react";
import Social from "./Social";

type Props = {
  defIndex: (index: number) => void;
};
const Home = (props: Props) => {
  const redirectHandler = () => {
    props.defIndex(1);
  };

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
              I am a passionate Website developer on building revolutionary
              ideas. Always be flexible learn new things, and constantly open to
              new technology. see all my works{" "}
              <span onClick={redirectHandler}>here</span>
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
