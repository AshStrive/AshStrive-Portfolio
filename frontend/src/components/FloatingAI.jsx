import { motion } from "framer-motion" // smooth animations

import { useState } from "react" // state handling

import { FaRobot } from "react-icons/fa" // robot icon

import { GoogleGenerativeAI } from "@google/generative-ai" // gemini ai sdk



function FloatingAI() {

  const [openAI, setOpenAI] = useState(false) // popup open-close state
  window.addEventListener(

  "open-ai-popup",

  () => setOpenAI(true)

) // hero button se popup open hoga
  const [question, setQuestion] = useState("") // user ka input store karega

const [answer, setAnswer] = useState("") // AI response store karega

const [loading, setLoading] = useState(false) // loading state


/* Gemini API initialize */
const genAI = new GoogleGenerativeAI(

  import.meta.env.VITE_GEMINI_API_KEY

)


/* Gemini model select */
const model = genAI.getGenerativeModel({

  model: "gemini-2.5-flash"

})
/* AI se answer generate karne wala function */
const askAI = async () => {

  /* Agar input empty hai to function stop */
  if (!question) return

  setLoading(true) // loading start

  try {

    /* Gemini ko portfolio context de rahe */
   const prompt = `

You are Ash AI.

You are the personal AI assistant of Aksh Rathi.

Your job is to answer questions ONLY related to:

- Aksh Rathi
- his portfolio
- his projects
- his blogs
- his skills
- his career journey
- AI
- backend development
- futuristic product thinking

ABOUT AKSH:

Aksh Rathi is a Computer Science student focused on building futuristic AI-powered digital products.

He enjoys:
- React development
- Tailwind CSS
- Java backend engineering
- Spring Boot
- AI integrations
- product thinking
- startup ideas

PERSONALITY:

- futuristic
- creative
- curious
- ambitious
- product-focused

PROJECTS:

1. AI Portfolio Website
A futuristic portfolio website with:
- React
- Tailwind CSS
- Framer Motion
- Gemini AI integration
- AI assistant popup
- responsive UI
- smooth scrolling

2. Inshorts Clone
A modern short-news application with:
- category-based news
- responsive design
- API integration
- clean UI

BLOGS:

1. Why AI Products Need Better Human Experience
Focuses on emotional experience in AI products.

2. My Journey Learning Spring Boot As A Beginner
Discusses backend learning journey using Java and Spring Boot.

3. Building Products That Feel Alive
Talks about futuristic UI and emotionally engaging products.

RULES:

- Keep answers concise and modern.
- Answer naturally like a futuristic AI assistant.
- Do not answer unrelated questions.
- If question is unrelated, politely refuse.
- Give summaries when asked.
- Help recruiters understand Aksh quickly.

USER QUESTION:
${question}

`


    /* Gemini response generate */
    const result = await model.generateContent(prompt)

    /* Response text extract */
    const response = await result.response.text()

    /* Answer state update */
    setAnswer(response)

  }

  catch (error) {

console.log(error) // actual error terminal/browser console me show karega

setAnswer("Something went wrong.")
  }

  setLoading(false) // loading end
}

  return (

    <>

      {/* Floating AI Button */}
      <motion.button

        initial={{ opacity: 0, scale: 0.5 }} // start animation

        animate={{ opacity: 1, scale: 1 }} // visible animation

        transition={{ duration: 0.5 }} // animation timing

        whileHover={{ scale: 1.1 }} // hover effect

        onClick={() => setOpenAI(!openAI)} // popup toggle

        className="

        fixed bottom-8 right-8

        bg-cyan-400

        text-black

        p-5

        rounded-full

        shadow-[0_0_30px_rgba(0,255,255,0.5)]

        cursor-pointer

        z-50

        "

      >

        <FaRobot size={28} />

      </motion.button>



      {/* Popup only when openAI true */}
      {openAI && (

        <motion.div

          initial={{ opacity: 0, y: 30 }} // popup start animation

          animate={{ opacity: 1, y: 0 }} // popup visible animation

          transition={{ duration: 0.3 }} // animation speed

          className="

          fixed bottom-32 right-8

          w-[350px]

          bg-[#0a0a0a]

          border border-cyan-500/20

          rounded-3xl

          p-6

          shadow-[0_0_30px_rgba(0,255,255,0.15)]

          z-50

          "

        >


          <h2 className="text-2xl font-bold text-cyan-400">

            Ash AI

          </h2>



          <p className="text-gray-400 mt-4 leading-8">

            Ask me about Aksh, projects,
            blogs or AI journey.

          </p>



          <input

  type="text"

  placeholder="Ask something..."

  value={question} // input state binding

  onChange={(e) => setQuestion(e.target.value)} // typing track karega

  className="

  w-full

  mt-6

  bg-black

  border border-cyan-500/20

  rounded-xl

  px-4 py-3

  outline-none

  text-white

  "

/>



          <button

  onClick={askAI} // AI function call

  className="

  w-full

  mt-4

  bg-cyan-400

  text-black

  py-3

  rounded-xl

  font-bold

  hover:scale-[1.02]

  transition duration-300

  "

>

  {loading ? "Thinking..." : "Ask AI"}

</button>
{
  answer && ( // answer tabhi dikhe jab AI response aaye

    <div className="

    mt-6

    bg-black

    border border-cyan-500/20

    rounded-2xl

    p-4

    text-gray-300

    leading-8

    ">

      {answer}

    </div>
  )
}

        </motion.div>

      )}

    </>

  )
}

export default FloatingAI