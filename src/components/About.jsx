import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  const frontEndSkill = [
    {skillName: 'javascript'},
    {skillName: 'react'},
    {skillName: 'gatsby'},
    {skillName: 'next.js'},
    {skillName: 'css'},
    {skillName: 'bootstrap'},
    {skillName: 'tailwind'},
    {skillName: 'SASS'},
  ]
  const backEndSkill = [
    {skillName: 'nodejs'},
    {skillName: 'express.js'},
    {skillName: 'psql'},
    {skillName: 'mongodb'},
    {skillName: 'firebase'},
  ]

  return (
    <>
      <div className="tokyo_tm_about">
        <div className="about_image">
          <img src="assets/img/slider/1.jpg" alt="about" />
        </div>
        {/* END ABOUT IMAGE */}
        <div className="description">
          <h3 className="name">Dwi Darma Putra</h3>
          <div className="description_inner">
            <div className="left">
              <p>
                Hi, I am Dwi. I am a software developer based in Bali, Indonesia.
                I’ve been doing web development here and there for two years.                
                As a self-taught programmer, I must be <span>flexible to learn new things, multitask, and critical solid solving problems. 
                </span>
                <br/> <br/> I'm looking for an opportunity to become a part of a team where I
                can leverage my current skills and continue to grow as software developer.
              </p>
              <div className="tokyo_tm_button">
                <button onClick={toggleModal} className="ib-button">
                  Read More
                </button>
              </div>
              {/* END TOKYO BUTTON */}
            </div>
            {/* END LEFT */}
            <div className="right">
              <ul>
                <li>
                  <p>
                    <span>Birthday:</span>25.10.1998
                  </p>
                </li>
                <li>
                  <p>
                    <span>Age:</span>25
                  </p>
                </li>
                <li>
                  <p>
                    <span>Address:</span>badung, Bali, Indonesia
                  </p>
                </li>
                <li>
                  <p>
                    <span>Email:</span>
                    <a href="mailto:dwidarma101@gmail.com">dwidarma101(at)gmail.com</a>
                  </p>
                </li>
                <li>
                  <p>
                    <span>Freelance:</span>Available
                  </p>
                </li>
              </ul>
              {/* END UL */}
            </div>
            {/* END RIGHT */}
          </div>
          {/* END DESCRIPTION INNER */}
        </div>
      </div>

      {/* START ABOUT POPUP BOX */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_about">
          <button className="close-modal" onClick={toggleModal}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END POPUP CLOSE BUTTON */}
          <div className="box-inner">
            <div className="description_wrap scrollable">
              <div className="my_box">
                <div className="left">
                  <div className="about_title">
                    <h3>Front End</h3>
                    <div className="underline"></div>
                  </div>
                  {/* END ABOUT TITLE */}
                  <div className="skill-list">
                    {frontEndSkill.map((skill, index) =>(
                      <div className="stack" key={index}>
                        <img src={`/assets/img/skill/frontend/image${index+1}.png`} alt={`stack ${skill.skillName}`} />
                       <p>{skill.skillName}</p>
                      </div>
                     ))}
                  </div>
                </div>
                {/* END LEFT */}

                <div className="right">
                  <div className="about_title">
                    <h3>Back End</h3>
                    <div className="underline"></div>
                  </div>
                  <div className="skill-list">
                    {backEndSkill.map((skill, index) =>(
                      <div key={index} className="stack">
                        <img src={`/assets/img/skill/backend/image${index+1}.png`} alt={`stack ${skill.skillName}`} />
                       <p>{skill.skillName}</p>
                      </div>
                     ))}
                  </div>
                  {/* END TITLE */}
                </div>
                {/* END RIGHT */}
              </div>
              {/* END MYBOX */}
              
              <div className="skill-summary my_box">
                <div className="about_title">
                  <h3>So What I Can Do?</h3>
                  <div className="underline"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      {/* END ABOUT POPUP BOX */}
    </>
  );
};

export default About;
