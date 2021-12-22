import Image from "next/image";
import { useState } from "react";
import Particles from "react-tsparticles";
function Login({ authenticate }) {

  const [loginNow, setloginNow] = useState("Connect now ");
  const [date, setDate] = useState(new Date());

  setInterval(() => {
    setDate(new Date());
  }, 4000);


  return (
    <div className="bg-black relative ">
      <div
        className="flex 
            flex-col 
            justify-center h-screen w-full
            items-center 
            absolute z-50"
      >
        <div
          className=" bg-teal-500 border-4 border-teal-900 
                        -z-10  p-2 shadow-2xl align-middle animate-bounce
                     justify-center  flex rounded-full
                 "
        >
          <Image
            onClick={() => {
              authenticate();
            }}
            className="object-cover rounded-full -z-30 mr-1 hover:cursor-pointer"
            src={`https://avatars.dicebear.com/api/pixel-art/we-are-here-${date}.svg`}
            width={160}
            height={160}
          />
        </div>
        <h2 className="text-white opacity-80 mt-4 text-center font-semibold">
          {" "}
          Connect your wallet now to
          <br /> start texting through your ethereum address{" "}
        </h2>
        <button
          onClick={() => {
            setloginNow("Connecting to the wallet ...");
            authenticate();
          }}
          className="font-bold  mt-5
                 text-teal-900 px-5
                 rounded-xl p-3 shadow-2xl bg-teal-300 "
        >
          {loginNow}
        </button>
      </div>

      <div className="w-full h-screen overflow-hidden  ">
        <Image
          objectFit="cover"
          src="/img/bg-3.jpg"
          className=" blur-sm opacity-70"
          layout="fill"
        />
        <Particles
          className="opacity-70 overflow-hidden overflow-y-hidden"
          options={{
            fps_limit: 60,
            interactivity: {
              detect_on: "canvas",
              events: {
                onclick: { enable: true, mode: "push" },
                onhover: {
                  enable: true,
                  mode: "attract",
                  parallax: { enable: false, force: 60, smooth: 10 },
                },
                resize: true,
              },
              modes: {
                push: { quantity: 4 },
                attract: { distance: 200, duration: 0.4, factor: 5 },
              },
            },
            particles: {
              color: { value: "#ffffff" },
              line_linked: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.4,
                width: 1,
              },
              move: {
                attract: { enable: false, rotateX: 600, rotateY: 1200 },
                bounce: false,
                direction: "none",
                enable: true,
                out_mode: "out",
                random: false,
                speed: 2,
                straight: false,
              },
              number: { density: { enable: true, value_area: 800 }, value: 80 },
              opacity: {
                anim: {
                  enable: false,
                  opacity_min: 0.1,
                  speed: 1,
                  sync: false,
                },
                random: false,
                value: 0.5,
              },
              shape: {
                character: {
                  fill: false,
                  font: "Verdana",
                  style: "",
                  value: "*",
                  weight: "400",
                },
                image: {
                  height: 100,
                  replace_color: true,
                  src: "images/github.svg",
                  width: 100,
                },
                polygon: { nb_sides: 5 },
                stroke: { color: "#000000", width: 0 },
                type: "circle",
              },
              size: {
                anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
                random: true,
                value: 5,
              },
            },
            polygon: {
              draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
              move: { radius: 10 },
              scale: 1,
              type: "none",
              url: "",
            },
            retina_detect: true,
          }}
        />
      </div>
    </div>
  );
}

export default Login
