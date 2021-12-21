import { useState } from "react";
import { useMoralis } from "react-moralis";

function MessageBox({ eofMessages }) {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (!message) return;

    const Messages = new Moralis.Object.extend("Messages");
    const messages = new Messages();

    messages
      .save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .then(
        (msg) => {},
        (error) => {
          console.log(error.message);
        }
      );

    eofMessages.current.scrollIntoView({ behavior: "smooth" });
    setMessage("")
  };
  return (
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
        placeholder={`Enter a message ${user.getUsername()}`}
      />
      <button type="submit" className="font-bold text-teal-300">
        Send
      </button>
    </form>
  );
}

export default MessageBox;
