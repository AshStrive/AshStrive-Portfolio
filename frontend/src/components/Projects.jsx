import { motion } from "framer-motion" // animation library

function Projects() {

  return (

    <section 

id="projects" // navbar se direct scroll target

className="px-12 py-24"

> {/* projects section container */}


      <h2 className="text-5xl font-bold text-cyan-400 text-center">
        Projects
      </h2>


      <div className="

grid

grid-cols-1 // mobile pe 1 card

lg:grid-cols-2 // large screens pe 2 cards

gap-10

mt-20

"> {/* 2 project cards grid */}



        <motion.div

          initial={{ opacity: 0, y: 50 }} // starting animation state

          whileInView={{ opacity: 1, y: 0 }} // visible animation state

          transition={{ duration: 0.6 }} // animation speed

          className="

          bg-[#0a0a0a]

          border border-cyan-500/20

          rounded-3xl

          p-10

          hover:border-cyan-400

          hover:shadow-[0_0_30px_rgba(0,255,255,0.15)]

          transition duration-300

          "

        >


          <h3 className="text-3xl font-bold text-cyan-400">
            AI Portfolio Website
          </h3>


          <p className="text-gray-400 mt-6 leading-8">

            A futuristic AI-powered portfolio website with
            modern UI, blog integration and a RAG-based AI assistant
            that can summarize website content dynamically.

          </p>



          <div className="flex gap-4 mt-8 flex-wrap"> {/* tech stack tags */}


            <span className="border border-cyan-500/20 px-4 py-2 rounded-full">
              React
            </span>

            <span className="border border-cyan-500/20 px-4 py-2 rounded-full">
              Tailwind
            </span>

            <span className="border border-cyan-500/20 px-4 py-2 rounded-full">
              Spring Boot
            </span>

            <span className="border border-cyan-500/20 px-4 py-2 rounded-full">
              OpenAI
            </span>

          </div>

        </motion.div>






        <motion.div

          initial={{ opacity: 0, y: 50 }}

          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.8 }}

          className="

          bg-[#0a0a0a]

          border border-cyan-500/20

          rounded-3xl

          p-10

          hover:border-cyan-400

          hover:shadow-[0_0_30px_rgba(0,255,255,0.15)]

          transition duration-300

          "

        >


          <h3 className="text-3xl font-bold text-cyan-400">
            Inshorts Clone
          </h3>


          <p className="text-gray-400 mt-6 leading-8">

            A modern news application inspired by Inshorts
            that displays short-form news content with
            category-based filtering and responsive UI.

          </p>



          <div className="flex gap-4 mt-8 flex-wrap">


            <span className="border border-cyan-500/20 px-4 py-2 rounded-full">
              React
            </span>

            <span className="border border-cyan-500/20 px-4 py-2 rounded-full">
              Tailwind
            </span>

            <span className="border border-cyan-500/20 px-4 py-2 rounded-full">
              API
            </span>

            <span className="border border-cyan-500/20 px-4 py-2 rounded-full">
              Java
            </span>

          </div>

        </motion.div>


      </div>

    </section>
  )
}

export default Projects