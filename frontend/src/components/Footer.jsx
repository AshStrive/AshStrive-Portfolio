import { FaGithub } from "react-icons/fa" // github icon

import { FaLinkedin } from "react-icons/fa" // linkedin icon

import { SiLeetcode } from "react-icons/si" // leetcode icon


function Footer() {

  return (

    <footer className="

    px-6 md:px-12

    py-10

    border-t border-cyan-500/20

    mt-20

    "

    >


      <div className="

      flex

      flex-col md:flex-row

      items-center

      justify-between

      gap-6

      ">


        {/* Left side text */}
        <div>


          <h2 className="

          text-2xl

          font-bold

          text-cyan-400

          ">

            AshStrive

          </h2>



          <p className="

          text-gray-500

          mt-2

          ">

            Building futuristic digital experiences with AI.

          </p>

        </div>




        {/* Social Icons */}
        <div className="flex gap-6 text-2xl">


          <a

            href="https://github.com/AshStrive"

            target="_blank"

            className="hover:text-cyan-400 transition duration-300">

            <FaGithub />

          </a>



          <a

            href="https://www.linkedin.com/in/akshrathi7/"

            target="_blank"

            className="hover:text-cyan-400 transition duration-300">

            <FaLinkedin />

          </a>



         <a

            href="https://leetcode.com/u/akshh718/"

            target="_blank"

            className="hover:text-cyan-400 transition duration-300">

            <SiLeetcode />

         </a>

        </div>

      </div>




      {/* Bottom copyright */}
      <p className="

      text-center

      text-gray-600

      mt-10

      text-sm

      ">

        © 2026 Aksh Rathi. All rights reserved.

      </p>

    </footer>
  )
}

export default Footer