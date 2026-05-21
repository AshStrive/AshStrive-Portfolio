/*
  Navbar Component

  Ye website ka top navigation section hai.
  Isko alag component banaya gaya hai taaki:
  
  - code clean rahe
  - App.jsx chota rahe
  - reusable structure bane
*/

function Navbar() {

  return (

    /*
      Sticky navbar
      
      sticky top-0 -> scroll pe upar fixed rahega
      z-50         -> sabse upar layer priority
    */
    <nav className="

    sticky top-0 z-50

    flex items-center justify-between

    px-10 py-6

    bg-black

    border-b border-cyan-500/20

    ">


      {/* Website Logo */}
      <h1 className="

      text-3xl 
      font-bold 
      text-cyan-400 
      tracking-wide

      ">

        AshStrive

      </h1>



      {/* Navigation Links */}
      <ul className="flex gap-10 text-lg">


      <a 

href="#about" // hero section pe smooth scroll

className="cursor-pointer hover:text-cyan-400 transition duration-300"

>
  About
</a>

       <a

href="#projects" // projects section pe scroll

className="cursor-pointer hover:text-cyan-400 transition duration-300"

>
  Projects
</a>

        <a

href="#blogs" // blogs section pe smooth scroll

className="cursor-pointer hover:text-cyan-400 transition duration-300"

>
  Blogs
</a>

       <a

href="#contact" // future contact section scroll target

className="cursor-pointer hover:text-cyan-400 transition duration-300"

>
  Contact
</a>

      </ul>

    </nav>
  )
}


/*
  Export kar rahe taaki App.jsx me use kar sake
*/
export default Navbar