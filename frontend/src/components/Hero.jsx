/*
  Hero Component

  Ye website ka main landing section hai.
  First impression isi section se aata hai.
*/

function Hero() {

  return (

    /* =========================
        HERO SECTION START
    ========================== */
  <section

id="about" // navbar about scroll target

className="

    /* Vertical layout */
    flex flex-col

    /* Center alignment */
    justify-center items-center

    /* Text center */
    text-center

    /* Side spacing */
    px-6

    /* Top-bottom spacing */
    pt-40 pb-32

    /* Glow positioning */
    relative

    /* Extra glow hide */
    overflow-hidden

    ">


      {/* 
        Background cyan glow
      */}
      <div className="

      absolute

      w-[500px] h-[500px]

      bg-cyan-500/10

      rounded-full

      blur-3xl

      top-20

      -z-10

      ">

      </div>



      {/* Main Heading */}
      <h2 className="

text-4xl // mobile pe smaller heading

md:text-5xl // tablet pe medium size

lg:text-6xl // desktop pe full large heading

font-bold

leading-relaxed

">


        {/* Cyan glowing name */}
        <span className="text-cyan-400 drop-shadow-[0_0_25px_#00ffff]">

          Aksh Rathi

        </span>

        <br />

        procrastinator says, 'If it compiles, it's a feature.'

      </h2>



      {/* Description */}
      <p className="

mt-8

text-gray-400

text-lg // mobile pe readable size

md:text-xl // desktop pe larger text

max-w-3xl

leading-9

px-4 // mobile side spacing

">

        I build modern web applications, backend systems,
        AI-integrated products and futuristic user experiences.

      </p>



      {/* Buttons */}
      <div className="

flex

flex-col // mobile pe buttons neeche-aage

sm:flex-row // bigger screens pe side-by-side

gap-6

mt-12

">


        {/* Primary Button */}
        <a

href="#projects" // projects section pe smooth scroll

className="

bg-cyan-400

text-black

px-10 py-4

rounded-full

font-bold

shadow-[0_0_30px_rgba(0,255,255,0.4)]

hover:scale-105

transition duration-300

"

>
          View Projects

        </a>



        {/* Secondary Button */}
        <button

onClick={() => {

  window.dispatchEvent(

    new Event("open-ai-popup")

  ) // AI popup open trigger

}}

className="

border border-cyan-400

text-cyan-400

px-10 py-4

rounded-full

font-bold

hover:bg-cyan-400

hover:text-black

transition duration-300

"

>

          Ask AI About Me

        </button>

      </div>

    </section>
  )
}


/*
  Export component
*/
export default Hero