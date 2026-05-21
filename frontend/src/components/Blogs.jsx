import { motion } from "framer-motion" // animation library

function Blogs() {

  return (

    <section

id="blogs" // navbar blogs scroll target

className="px-12 py-24"

>{/* blogs section container */}


      <h2 className="text-5xl font-bold text-cyan-400 text-center">
        Blogs
      </h2>



      <div className="

grid

grid-cols-1 // mobile pe single column

md:grid-cols-2 // tablet pe 2 columns

lg:grid-cols-3 // desktop pe 3 columns

gap-8

mt-20

"> {/* blog cards grid */}



        <motion.div

          initial={{ opacity: 0, y: 50 }}

          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.5 }}

          className="

          bg-[#0a0a0a]

          border border-cyan-500/20

          rounded-3xl

          p-8

          hover:border-cyan-400

          hover:shadow-[0_0_30px_rgba(0,255,255,0.15)]

          transition duration-300

          "

        >


          <p className="text-cyan-400 text-sm">
            AI • TECH
          </p>


          <h3 className="text-2xl font-bold mt-4 leading-10">

            Why AI Products Need Better Human Experience

          </h3>


          <p className="text-gray-400 mt-6 leading-8">

            Thoughts about how modern AI tools focus too much
            on intelligence but often ignore emotional and user experience design.

          </p>

        </motion.div>






        <motion.div

          initial={{ opacity: 0, y: 50 }}

          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.7 }}

          className="

          bg-[#0a0a0a]

          border border-cyan-500/20

          rounded-3xl

          p-8

          hover:border-cyan-400

          hover:shadow-[0_0_30px_rgba(0,255,255,0.15)]

          transition duration-300

          "

        >


          <p className="text-cyan-400 text-sm">
            BACKEND • JAVA
          </p>


          <h3 className="text-2xl font-bold mt-4 leading-10">

            My Journey Learning Spring Boot As A Beginner

          </h3>


          <p className="text-gray-400 mt-6 leading-8">

            Documenting my process of understanding APIs,
            backend architecture and building scalable systems using Java.

          </p>

        </motion.div>






        <motion.div

          initial={{ opacity: 0, y: 50 }}

          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.9 }}

          className="

          bg-[#0a0a0a]

          border border-cyan-500/20

          rounded-3xl

          p-8

          hover:border-cyan-400

          hover:shadow-[0_0_30px_rgba(0,255,255,0.15)]

          transition duration-300

          "

        >


          <p className="text-cyan-400 text-sm">
            PRODUCT • STARTUPS
          </p>


          <h3 className="text-2xl font-bold mt-4 leading-10">

            Building Products That Feel Alive

          </h3>


          <p className="text-gray-400 mt-6 leading-8">

            Exploring how futuristic interfaces,
            animations and storytelling can make products emotionally engaging.

          </p>

        </motion.div>


      </div>

    </section>
  )
}

export default Blogs