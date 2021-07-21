import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";


const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    emailjs
      .sendForm(
        "service_nep0pbj",
        "template_fg01xlf",
        e.target,
        "user_3YJwoiYRGZy4gMKFHcYZv"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <div className="tokyo_tm_contact">
        <div className="tokyo_tm_title">
          <div className="title_flex">
            <div className="left">
              <span>Contact</span>
              <h3>Get in Touch</h3>
            </div>
          </div>
        </div>
        {/* END TITLE */}
        {/* MENU WRAP */}

        <div className="fields">
          <form className="contact_form" onSubmit={handleSubmit(onSubmit)}>
            <div className="first">
              <ul>
                <li>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    placeholder="Name"
                  />
                  {errors.name && errors.name.type === "required" && (
                    <span>Name is required</span>
                  )}
                </li>
                {/* END FIRST NAME */}

                <li>
                  <input
                    {...register(
                      "email",
                      {
                        required: "Email is Required",
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: "Entered value does not match email format",
                        },
                      },
                      { required: true }
                    )}
                    type="email"
                    placeholder="Email"
                  />
                  {errors.email && (
                    <span role="alert">{errors.email.message}</span>
                  )}
                </li>
                {/* END EMAIL */}

                <li>
                  <textarea
                    {...register("subject", { required: true })}
                    placeholder="Message"
                  ></textarea>
                  {errors.subject && <span>Subject is required.</span>}
                </li>
                {/* END SUBJECT MESSAGE */}
              </ul>
            </div>
            <div className="tokyo_tm_button">
              <button type="submit" className="ib-button">
                Send Message
              </button>
            </div>
            {/* END SUBMIT BUTTON */}
          </form>
          {/* END FORM */}
        </div>
        {/* END FIELDS */}
      </div>
      {/* END COTACT */}
    </>
  );
};

export default Contact;
