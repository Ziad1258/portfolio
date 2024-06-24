import Lottie from "lottie-react";
import contactAnimation from "../../../public/contact.json";
import checkAnimation from "../../../public/check.json";
import { useForm, ValidationError } from "@formspree/react";
import { useRef } from "react";
export default function Contact() {
  const [state, handleSubmit] = useForm("xldrrgea");
  const emailRegEx = /\w+@\D+\.\D+/gi;
  const inputRef = useRef(null);
  const messageRef = useRef(null);

  const submitHandling = (e) => {
    e.preventDefault();

    const inputValue = inputRef.current.value;
    const messageValue = messageRef.current.value;
   
    if (emailRegEx.test(inputValue) && messageValue.length > 15) {
      handleSubmit(e);
    } else if (!emailRegEx.test(inputValue) && messageValue.length > 15) {

      inputRef.current.value = "";
      inputRef.current.placeholder = "please enter valid email";
    } else if (emailRegEx.test(inputValue) && messageValue.length < 15) {

      messageRef.current.value = "";
      messageRef.current.placeholder =
        "please enter valid message including 15 letters at least";
    } 
    else {

      inputRef.current.value = "";
      inputRef.current.placeholder = "please enter valid email";
      messageRef.current.value = "";
      messageRef.current.placeholder =
        "please enter valid message including 15 letters at least";

    }
  };

  if (state.succeeded) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return (
      <div className="h-screen bg-white dark:bg-dark container mx-auto px-4 md:px-12 py-24 flex flex-col gap-8 text-white  ">
        <h1 className="font-bold text-3xl md:text-5xl text-center  text-black   dark:text-gray-300">
          Thank you for contacting me
        </h1>
        <p className="leading-loose text-center mt-5  text-gray-500 dark:text-gray-300 ">
          I will get back to you as soon as possible
        </p>
        <Lottie
          loop="false"
          className="h-16 mt-8"
          animationData={checkAnimation}
        />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-12 py-24 bg-white  dark:bg-dark">
      <div className="head">
        <h1 className="font-bold text-3xl md:text-5xl text-center    dark:text-gray-300">
          Contact Me
        </h1>
        <p className="leading-loose text-center mt-5  text-gray-500 dark:text-gray-300 ">
          just fill the from with your data & project information then click
          submit button
        </p>
      </div>
      <form
        onSubmit={submitHandling}
        className="flex flex-col  md:flex-row-reverse  mt-24"
      >
        <Lottie
          animationData={contactAnimation}
          className=" h-96 pb-24 mx-12 flex-1 "
        />
        <div className="flex flex-1 flex-col  gap-8">
          <div className="flex">
            {/* email */}
            <input
              type="email"
              name="email"
              ref={inputRef}
              required
              autoComplete="false"
              placeholder="Type your email address "
              className="flex-1 dark:text-gray-100 border dark:bg-transparent border-gray-300 dark:border-gray-500 rounded-md outline-none p-2 shadow-md placeholder:text-sm placeholder:focus:opacity-0 placeholder:transition-all placeholder:duration-300"
            />{" "}
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          {/* textarea */}
          <div className="flex">
            <textarea
              name="message"
              ref={messageRef}
              required
              placeholder="Type your message here ... "
              className="min-h-60 max-h-72 overflow-y-auto resize-none flex-1 dark:text-gray-100 border dark:bg-transparent border-gray-300 dark:border-gray-500 rounded-md outline-none p-2 shadow-md placeholder:text-sm placeholder:focus:opacity-0 placeholder:transition-all placeholder:duration-300"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <input
            className=" cursor-pointer disabled:cursor-not-allowed disabled:opacity-20 bg-gray-50 border p-2 rounded-lg capitalize  hover:bg-gray-100  dark:bg-zinc-800 dark:hover:bg-dark dark:border-gray-500 dark:text-gray-100"
            type="submit"
            value="submit"
            disabled={state.submitting}
          />
        </div>
      </form>
    </div>
  );
}
