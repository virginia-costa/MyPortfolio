import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import "./contact.css";

function ContactPage(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    emailjs.init("UKcbfjJeMRqeUTN7l");
  }, []);

  const onSubmit = (data) => {
    const { name, email, message } = data;

    emailjs
      .send("service_1ogjn5c", "template_rf9v2dp", { name, email, message })
      .then((response) => {
        alert("The message was sent correctly");
        reset();
      })
      .catch((error) => {});
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={props.changeMode ? "formDark" : "formLight"}
    >
      <label htmlFor="name">
        <input
          placeholder="Name"
          type="text"
          id="name"
          {...register("name", { required: true })}
        />
        {errors.name && <span>This field is required</span>}
      </label>

      <label htmlFor="email">
        <input
          placeholder="Your email: nombre@example.com"
          type="email"
          id="email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && <span>Please enter a valid email</span>}
      </label>

      <label htmlFor="message">
        <input
          placeholder="Your message"
          type="text"
          id="message"
          {...register("message", { required: true })}
        />
        {errors.message && <span>This field is required</span>}
      </label>

      <button type="submit">Send</button>
    </form>
  );
}

export default ContactPage;
