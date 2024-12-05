import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebook,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  const formRef = useRef();

  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let errors = {};

    if (!form.from_name) {
      errors.from_name = "Name is required";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.from_email) {
      errors.from_email = "Email is required";
    } else if (!emailPattern.test(form.from_email)) {
      errors.from_email = "Email is invalid";
    }

    if (!form.message) {
      errors.message = "Message is required";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (validate()) {
      emailjs
        .sendForm("service_pzt005e", "template_aiat8xd", formRef.current, {
          publicKey: "1IO2MILK1GLZ2b1mM",
        })
        .then(
          () => {
            toast.success("Message sent successfully");
            setForm({
              from_name: "",
              from_email: "",
              message: "",
            });
          },
          (error) => {
            toast.error("FAILED...", error.text);
          }
        );
    } else {
      console.log("Form is invalid");
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  const leftToRightVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.4, ease: "easeOut" },
    },
  };

  const topToBottomVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center py-8 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="md:mx-[7rem] py-6 md:py-10 text-center sm:text-left"
        initial="hidden"
        whileInView="visible"
        variants={headingVariants}
        viewport={{ once: false }}
      >
        <h1 className="text-4xl font-bold border-b-4 border-[#A40700] p-2 inline">
          Contact
        </h1>
        <p className="py-6 text-white">Let's Work Together</p>
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 text-center lg:px-20">
        <section className="mb-32">
          <div className="flex flex-wrap">
            <motion.div
              className="mb-12 w-full md:w-1/2 lg:w-5/12 lg:px-6"
              initial="hidden"
              whileInView="visible"
              variants={leftToRightVariants}
              viewport={{ once: false }}
            >
              <form ref={formRef} onSubmit={sendEmail}>
                <div className="relative mb-6">
                  <input
                    type="text"
                    name="from_name"
                    className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                    id="exampleInput90"
                    placeholder="Name"
                    value={form.from_name}
                    onChange={handleChange}
                    required
                  />
                  <label
                    for="hs-tac-input-name"
                    class="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-neutral-400 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-neutral-400"
                  >
                    Name
                  </label>
                  {errors.from_name && (
                    <p className="text-red-500 text-xs">{errors.from_name}</p>
                  )}
                </div>
                <div className="relative mb-6">
                  <input
                    type="email"
                    name="from_email"
                    className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                    id="exampleInput91"
                    placeholder="Email address"
                    value={form.from_email}
                    onChange={handleChange}
                    required
                  />
                  <label
                    for="hs-tac-input-name"
                    class="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-neutral-400 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-neutral-400"
                  >
                    Email address
                  </label>
                  {errors.from_email && (
                    <p className="text-red-500 text-xs">{errors.from_email}</p>
                  )}
                </div>
                <div className="relative mb-6">
                  <textarea
                    className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Your message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <label
                    for="hs-tac-input-name"
                    class="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-neutral-400 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-neutral-400"
                  >
                    Your message...
                  </label>
                  {errors.message && (
                    <p className="text-red-500 text-xs">{errors.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full  py-3 px-4 inline-flex items-center justify-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#A40700] text-white hover:bg-red-700 focus:outline-none focus:bg-red-700 disabled:opacity-50 disabled:pointer-events-none mt-3"
                >
                  Send
                </button>
              </form>
            </motion.div>
            <div className="w-full lg:w-7/12 mt-8 lg:mt-0 text-center pt-10   md:text-left">
              <motion.div
                className="flex flex-wrap "
                initial="hidden"
                whileInView="visible"
                variants={topToBottomVariants}
                viewport={{ once: false }}
              >
                <div className="mb-12 w-full md:w-1/2 lg:px-8">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-primary-100 text-primary">
                        <FaPhone className="h-6 w-6 mr-2" />
                      </div>
                    </div>
                    <div className="grow">
                      <p className="mb-2 font-bold text-white">Contact</p>
                      <a
                        href="tel:+915345335534"
                        className="text-neutral-500 dark:text-neutral-200 break-all"
                      >
                        +91 72081 28020
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mb-12 w-full md:w-1/2 lg:px-6">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-primary-100 text-primary">
                        <FaEnvelope className="h-6 w-6 mr-2" />
                      </div>
                    </div>
                    <div className="grow">
                      <p className="mb-2 font-bold text-white">Email</p>
                      <a
                        href="mailto:rushabh.musical17@gmail.com"
                        className="text-neutral-500 dark:text-neutral-200 break-all"
                      >
                        rushabh.musical17@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mb-12 w-full md:w-1/2 lg:px-6">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-primary-100 text-primary">
                        <FaInstagram className="h-6 w-6 mr-2" />
                      </div>
                    </div>
                    <div className="grow">
                      <p className="mb-2  font-bold text-white">Instagram</p>

                      <a
                        href="https://www.instagram.com/rushabh_karangutkar/"
                        className="text-neutral-500 dark:text-neutral-200 break-all"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        instagram.com/rushabh_karangutkar
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mb-12 w-full md:w-1/2 lg:px-6">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-primary-100 text-primary">
                        <FaFacebook className="h-6 w-6 mr-2" />
                      </div>
                    </div>
                    <div className="grow">
                      <p className="mb-2  font-bold text-white">Facebook</p>

                      <a
                        href="https://www.facebook.com/rushabh.karangutkar/"
                        className="text-neutral-500 dark:text-neutral-200 break-all"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        facebook.com/rushabh.karangutkar
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mb-12 w-full md:w-1/2 lg:px-6">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-primary-100 text-primary">
                        <FaLinkedin className="h-6 w-6 mr-2" />
                      </div>
                    </div>
                    <div className="grow">
                      <p className="mb-2  font-bold text-white">Facebook</p>

                      <a
                        href="https://www.linkedin.com/in/rushabh-karangutkar-75627b218/"
                        className="text-neutral-500 dark:text-neutral-200 break-all"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        linkedin.com/in/rushabh-karangutkar
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
