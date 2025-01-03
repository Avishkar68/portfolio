import React from "react";
import { useState , useRef } from "react"
import { Globe } from "../../components/Globe";
import { motion } from "framer-motion";
import { slideIn } from "../../utils/motion";
import emailjs from '@emailjs/browser'
import { styles } from "./styles";
const Contact = () => {
    const formRef = useRef()
  const [form , setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [loading , setLoading] = useState(false)

  const handleChange = (e) => {
    const { name , value } = e.target;
    setForm({...form, [name]:value})
  
  }
  //VfirSYT9Efr3uPizV
//template_odepa2n
//service_g9cdn7a
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)

    emailjs.send(
      'service_g9cdn7a',
      'template_odepa2n',
      {
        from_name: form.name,
        to_name: "Avishkar",
        from_email: form.email,
        to_email: "kakadeavishkar84@gmail.com",
        message: form.message, 
      },
      'VfirSYT9Efr3uPizV'
    ).then(()=>{
      setLoading(false);
      alert("Thank you. I will get back to you as soon as possible.");

      setForm({
        name: '',
        email: '',
        message: '',
        
      })
    },(error) => {
      setLoading(false)
      console.log(error);
      alert('Something went wrong.')
    })
  }
  return (
    <div className="min-h-fit w-[94vw] text-white flex items-center justify-around mb-24 md:mb-16">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[1] md:flex-[0.6] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-gray-900 py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-gray-900 py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-gray-900 py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-gray-900 py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <div className="relative hidden md:flex size-full h-[600px] max-w-[550px] items-start justify-center  overflow-hidden rounded-lg  bg-background px-40 pb-40 pt-8 md:pb-60 md:shadow-xl">
        {/* <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Globe
        </span> */}
        <Globe className="top-28" />
        <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
      </div>
    </div>
  );
};

export default Contact;
