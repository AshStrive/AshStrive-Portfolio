import { useState, useEffect } from "react"

import { motion } from "framer-motion"

import { FaGamepad } from "react-icons/fa"



function JumpRings() {

  const [openGame, setOpenGame] = useState(false)

  const [score, setScore] = useState(0)



  /* Multiple rings */
  const [rings, setRings] = useState([

    { id: 1, x: 30, y: 260, velocity: 0, landed: false },

    { id: 2, x: 50, y: 280, velocity: 0, landed: false },

    { id: 3, x: 70, y: 300, velocity: 0, landed: false },

  ])



  /* Water wave animation */
  const [waveOffset, setWaveOffset] = useState(0)



  /* Continuous wave motion */
  useEffect(() => {

    const waveInterval = setInterval(() => {

      setWaveOffset((prev) => prev + 1)

    }, 80)



    return () => clearInterval(waveInterval)

  }, [])



  /* Physics loop */
  useEffect(() => {

    const interval = setInterval(() => {

      setRings((prevRings) =>

        prevRings.map((ring) => {

          if (ring.landed) return ring



          let newVelocity = ring.velocity + 0.6

          let newY = ring.y + newVelocity



          /* Bottom collision */
          if (newY >= 300) {

            newY = 300

            newVelocity = 0

          }



          /* REAL peg collision */
          const pegCenterX = 50

          const pegTopY = 220



          const isInsidePeg =

            Math.abs(ring.x - pegCenterX) < 4 &&

            newY < pegTopY &&

            newY > pegTopY - 40



          if (isInsidePeg) {

            setScore((prev) => prev + 1)



            return {

              ...ring,

              landed: true,

              x: pegCenterX,

              y: pegTopY - 25,

              velocity: 0

            }

          }



          return {

            ...ring,

            y: newY,

            velocity: newVelocity

          }

        })

      )

    }, 30)



    return () => clearInterval(interval)

  }, [])



  /* Left pressure */
  const moveLeft = () => {

    setRings((prev) =>

      prev.map((ring) => {

        if (ring.landed) return ring



        return {

          ...ring,

          x: Math.max(ring.x - 6, 10),

          velocity: -10 - Math.random() * 4

        }

      })

    )

  }



  /* Right pressure */
  const moveRight = () => {

    setRings((prev) =>

      prev.map((ring) => {

        if (ring.landed) return ring



        return {

          ...ring,

          x: Math.min(ring.x + 6, 90),

          velocity: -10 - Math.random() * 4

        }

      })

    )

  }



  return (

    <>

      {/* Floating Game Button */}
      <motion.button

        whileHover={{ scale: 1.1 }}

        onClick={() => setOpenGame(!openGame)}

        className="

        fixed bottom-8 left-8

        bg-cyan-400

        text-black

        w-20 h-20

        rounded-full

        shadow-[0_0_30px_rgba(0,255,255,0.5)]

        z-50

        flex items-center justify-center

        "

      >

        <FaGamepad size={28} />

      </motion.button>




      {/* Popup */}
      {openGame && (

        <motion.div

          initial={{ opacity: 0, y: 30 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.3 }}

          className="

          fixed bottom-32 left-8

          w-[350px]

          h-[500px]

          bg-[#0a0a0a]

          border border-cyan-500/20

          rounded-3xl

          p-6

          shadow-[0_0_30px_rgba(0,255,255,0.15)]

          z-50

          overflow-hidden

          "

        >



          {/* Title */}
          <h2 className="

          text-2xl

          font-bold

          text-cyan-400

          text-center

          ">

            Jump The Rings

          </h2>




          {/* Game Container */}
          <div className="

          relative

          mt-8

          w-full

          h-[320px]

          border border-cyan-500/20

          rounded-3xl

          overflow-hidden

          bg-black

          ">



{/* Score */}
<div className="

absolute top-4 right-4

text-cyan-400

font-bold

text-xl

z-30

bg-black/70

px-4 py-2

rounded-xl

border border-cyan-500/20

shadow-[0_0_15px_rgba(0,255,255,0.15)]

">

  Score: {score}

</div>




{/* Real Sin Wave Water */}
<svg

className="absolute top-16 left-0 w-[200%] h-16 z-10"

viewBox="0 0 1200 120"

preserveAspectRatio="none"

>

  <motion.path

    animate={{

      x: [0, -300]

    }}

    transition={{

      repeat: Infinity,

      duration: 6,

      ease: "linear"

    }}

    d="

    M0,40

    C50,20 100,60 150,40

    C200,20 250,60 300,40

    C350,20 400,60 450,40

    C500,20 550,60 600,40

    C650,20 700,60 750,40

    C800,20 850,60 900,40

    C950,20 1000,60 1050,40

    C1100,20 1150,60 1200,40

    "

    stroke="white"

    strokeWidth="3"

    fill="transparent"

    opacity="0.9"

  />

</svg>



            {/* Rings */}
            {rings.map((ring) => (

              <motion.div

                key={ring.id}

                animate={{

                  rotate: [0, 10, -10, 0]

                }}

                transition={{

                  repeat: Infinity,

                  duration: 2

                }}

                className="

                absolute

                w-10 h-10

                border-4 border-cyan-400

                rounded-full

                shadow-[0_0_20px_rgba(0,255,255,0.6)]

                "

                style={{

                  left: `${ring.x}%`,

                  top: `${ring.y}px`,

                  transform: "translateX(-50%)"

                }}

              ></motion.div>

            ))}




            {/* Peg */}
            <div className="

            absolute

            bottom-0 left-1/2

            -translate-x-1/2

            w-3 h-28

            bg-cyan-400

            rounded-full

            shadow-[0_0_20px_rgba(0,255,255,0.5)]

            "></div>

          </div>




          {/* Controls */}
          <div className="

          flex items-center justify-between

          mt-8

          ">



            <button

              onClick={moveLeft}

              className="

              bg-cyan-400

              text-black

              px-6 py-3

              rounded-full

              font-bold

              hover:scale-105

              transition duration-300

              "

            >

              Left

            </button>




            <button

              onClick={moveRight}

              className="

              bg-cyan-400

              text-black

              px-6 py-3

              rounded-full

              font-bold

              hover:scale-105

              transition duration-300

              "

            >

              Right

            </button>

          </div>

        </motion.div>

      )}

    </>

  )
}

export default JumpRings