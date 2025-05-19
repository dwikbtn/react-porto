import React from "react";

const SocialShare = [
  {
    iconName: "facebook",
    link: "https://www.facebook.com/dwik.btn",
  },
  { iconName: "twitter", link: "https://twitter.com/DwiDwidp" },
  {
    iconName: "instagram",
    link: "https://www.instagram.com/dwid.putra/",
  },
  {
    iconName: "github",
    link: "https://github.com/dwikbtn",
  },
];
const Social = () => {
  return (
    <>
      <ul className="social">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`/assets/img/svg/social/${val.iconName}.svg`}
                alt="social"
              ></img>
            </a>
          </li>
        ))}
      </ul>
      {/* END SOCIAL */}
    </>
  );
};

export default Social;
