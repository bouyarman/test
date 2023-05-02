import React, { useState, useTransition } from "react";

import Header from "../../Component/Header/Header";
import DropDown from "../DropDown";

import classes from "./contactPage.module.css";
import Footer from "../../Component/Footer/Footer";
import Input from "./Input";

const ContactPage = () => {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [messageBlured, setMessageBlured] = useState(false);
  const ChangeHandler = (e) => {
    console.log(e);
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const messageBluredHandler = () => {
    setMessageBlured(true);
  };
  const Inputs = [
    {
      id: "1",
      type: "name",
      name: "name",
      label: "Enter Your Full Name:",
      errorMessage: "Invalid Name",
      pattern: "^[A-Za-z0-9 A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: "2",
      type: "email",
      name: "email",
      label: "Enter Your Email:",
      errorMessage:
        "Invalid Email Structure (contain '@', start with charachter etc...)",
      pattern: "[a-z0-9]+@[a-z]+.[a-z]{2,3}",
      required: true,
    },
  ];
  const submitHandler = (e) => {
    e.preventDefault();
    setValues({ name: "", email: "", message: "" });
    setMessageBlured(false);
  };
  return (
    <>
      <header>
        <Header
          h1="Contact us"
          heroImg={require("../../imgs/contact-page/contact-hero-img.jpg")}
          p="Reach Out to Us for Expert Advice on Your Moroccan Travel Plans"
        />
      </header>
      <main className={classes.contactSec}>
        <form className={classes.form} onSubmit={submitHandler}>
          <h3>Fill the form and submit it!</h3>
          {Inputs.map((el) => (
            <Input
              label={el.label}
              key={el.id}
              type={el.type}
              name={el.name}
              onChange={ChangeHandler}
              pattern={el.pattern}
              required={el.required}
              errorMessage={el.errorMessage}
              value={values[el.name]}
            />
          ))}
          <div>
            <label>Choose Your Country:</label>
            <DropDown />
          </div>
          <div>
            <label>Enter Your Message:</label>
            <textarea
              type="message"
              onChange={ChangeHandler}
              name="message"
              className={
                messageBlured && values.message.length <= 80
                  ? classes.errorInput
                  : classes.messageInput
              }
              onBlur={messageBluredHandler}
              value={values.message}
            />
            {messageBlured ? (
              <p
                className={
                  values.message.length <= 80
                    ? classes.textareaTextError
                    : classes.hidden
                }
              >
                Message should contains at least 80 Charachter
              </p>
            ) : null}
          </div>
          <button type="submit">Submit</button>
        </form>
        <div className={classes.contactInfo}>
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzBlHpsVlrPDflzCSRlRDMxLslLPBgfSHpwXHZPCbZHNzjpmxzDJPWVKxCgnVtFZxDPlKdK"
            target="_"
          >
            <ion-icon name="mail-outline"></ion-icon>
            <p>
              <strong>moroccantour2015@gmail.com</strong>
            </p>
          </a>
          <a href="https://wa.me/0770605722" target="_">
            <ion-icon name="logo-whatsapp"></ion-icon>
            <p>
              <strong>+212 770 605 722</strong>
            </p>
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
