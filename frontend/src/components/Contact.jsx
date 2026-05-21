import { motion } from "framer-motion" // animations

import { useState } from "react" // form state handling


/* Send message to Spring Boot backend */

function Contact() {
  /* Contact form states */
const [name, setName] = useState("") // user name

const [email, setEmail] = useState("") // user email

const [message, setMessage] = useState("") // user message

const [loading, setLoading] = useState(false) // loading state
const sendMessage = async () => {

  try {

    setLoading(true) // start loading



    const response = await fetch(

      "http://127.0.0.1:8080/api/contact",

      {

        method: "POST",

        headers: {

          "Content-Type": "application/json"

        },

        body: JSON.stringify({

          name,

          email,

          message

        })

      }

    )



    const data = await response.text()



    alert(data) // success popup



    /* Reset form */
    setName("")

    setEmail("")

    setMessage("")

  }

  catch (error) {

    alert("Something went wrong")

    console.log(error)

  }

  finally {

    setLoading(false) // stop loading

  }

}

  return (

    <section

      id="contact" // navbar contact scroll target

      className="px-6 md:px-12 py-24"

    >


      <motion.div

        initial={{ opacity: 0, y: 50 }} // start animation

        whileInView={{ opacity: 1, y: 0 }} // visible animation

        transition={{ duration: 0.6 }} // animation timing

        className="

        max-w-4xl

        mx-auto

        bg-[#0a0a0a]

        border border-cyan-500/20

        rounded-[40px]

        p-10 md:p-16

        shadow-[0_0_40px_rgba(0,255,255,0.08)]

        "

      >


        <h2 className="

        text-4xl md:text-5xl

        font-bold

        text-cyan-400

        text-center

        ">

          Let’s Build Something Great

        </h2>



        <p className="

        text-gray-400

        text-center

        mt-6

        leading-8

        text-lg

        ">

          Interested in AI products, backend systems,
          futuristic interfaces or startup ideas?
          Let’s connect and create something impactful.

        </p>



        <div className="grid md:grid-cols-2 gap-6 mt-12">


          <input
            value={name}

            onChange={(e) => setName(e.target.value)}

            type="text"

            placeholder="Your Name"

            className="

            bg-black

            border border-cyan-500/20

            rounded-2xl

            px-5 py-4

            outline-none

            text-white

            "

          />



          <input
            value={email}

            onChange={(e) => setEmail(e.target.value)}

            type="email"

            placeholder="Your Email"

            className="

            bg-black

            border border-cyan-500/20

            rounded-2xl

            px-5 py-4

            outline-none

            text-white

            "

          />



          <textarea
            value={message}

            onChange={(e) => setMessage(e.target.value)}

            placeholder="Your Message"

            rows="6"

            className="

            md:col-span-2

            bg-black

            border border-cyan-500/20

            rounded-2xl

            px-5 py-4

            outline-none

            text-white

            resize-none

            "

          ></textarea>

        </div>



        <button

        type="button" // prevent form refresh

        onClick={sendMessage}

        className="

        mt-8

        w-full

        bg-cyan-400

        text-black

        py-4

        rounded-2xl

        font-bold

        hover:scale-[1.01]

        transition duration-300

        shadow-[0_0_25px_rgba(0,255,255,0.3)]

        ">

          {loading ? "Sending..." : "Send Message"}
        </button>

      </motion.div>

    </section>
  )
}

export default Contact