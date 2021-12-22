import { Fragment, useState } from "react";
import { useMoralis } from "react-moralis";
import Particles from "react-tsparticles";


function MessageBox({ eofMessages, show, setShow }) {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");

  const options = {
    fpsLimit: 60,
    particles: {
      number: {
        value: 0,
      },
      color: {
        value: ["#ffffff", "#b22234", "#", "#3c3bfe", "#FC00FF", "#fffc00"],
      },
      shape: {
        type: ["circle", "square"],
      },
      opacity: {
        value: 1,
        animation: {
          enable: true,
          minimumValue: 0,
          speed: 2,
          startValue: "max",
          destroy: "min",
        },
      },
      size: {
        value: 6,
        random: {
          enable: true,
          minimumValue: 2,
        },
      },
      links: {
        enable: false,
      },
      life: {
        duration: {
          sync: true,
          value: 3,
        },
        count: 1,
      },
      move: {
        enable: true,
        gravity: {
          enable: true,
          acceleration: 20,
        },
        speed: { min: 10, max: 20 },
        decay: 0.1,
        direction: "none",
        straight: false,
        outModes: {
          default: "destroy",
          top: "none",
        },
      },
      rotate: {
        value: {
          min: 0,
          max: 360,
        },
        direction: "random",
        move: true,
        animation: {
          enable: true,
          speed: 60,
        },
      },
      tilt: {
        direction: "random",
        enable: true,
        move: true,
        value: {
          min: 0,
          max: 360,
        },
        animation: {
          enable: true,
          speed: 60,
        },
      },
      roll: {
        darken: {
          enable: true,
          value: 25,
        },
        enable: true,
        speed: {
          min: 15,
          max: 25,
        },
      },
      wobble: {
        distance: 30,
        enable: true,
        move: true,
        speed: {
          min: -15,
          max: 15,
        },
      },
    },

    detectRetina: true,

    emitters: {
      direction: "none",
      life: {
        count: 0,
        duration: 0.1,
        delay: 0.4,
      },
      rate: {
        delay: 0.1,
        quantity: 100,
      },
      size: {
        width: 0,
        height: 0,
      },
    },
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (!message) return;

    const Messages = new Moralis.Object.extend("Messages");
    const messages = new Messages();
    setShow(true);
    messages
      .save({
        message: message,
        username: user.get("username"),
        ethAddress: user.get("ethAddress"),
      })
      .then(
        (msg) => {
          setTimeout(() => {
            setShow(false);
          }, 2000);
        },
        (error) => {
          console.log(error.message);
        }
      );

    eofMessages.current.scrollIntoView({ behavior: "smooth" });
    setMessage("");
  };
  return (
    <Fragment>
      {show && (
        <div className=" w-10/12 justify-center align-middle fixed bottom-10  ">
          <Particles className="z-50" options={options} />
        </div>
      )}
      <form
        onSubmit={sendMessage}
        className="flex px-6 py-4 max-w-2xl shadow-xl
              w-10/12 justify-center align-middle fixed bottom-10 rounded-full
              bg-zinc-900 opacity-80 border-2 border-neutral-800"
      >
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Press enter to send the message"
          className="outline-none  pr-3 bg-transparent
               text-white  flex-grow placeholder-gray-500 "
          placeholder={`Enter a message ${user.get("username")}`}
        />
        <button type="submit" className="font-bold text-teal-300">
          Send
        </button>
      </form>
    </Fragment>
  );
}

export default MessageBox;
