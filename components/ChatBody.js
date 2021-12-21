import { useMoralis,useMoralisQuery } from "react-moralis";
import MessageItem from "./MessageItem";

function ChatBody({ eofMessages }) {

  const MIN_DURATION = 60;
  const { user } = useMoralis();

  const { data, loading, error} = useMoralisQuery(
    "Messages",
    (query) =>
      query
        .ascending("createdAt")
        .greaterThan(
          "createdAt",
          new Date(Date.now() - MIN_DURATION * 60 * 1000)
        ),
    [],
    {
      live: true,
    }
  );

  return (
    <div
      className=" bg-black flex justify-center align-middle w-full text-white  p-2  
     pt-5 pb-8  overflow-y-auto grow"
    >
      <div className=" w-3/4 ">
        {data.map( msg => <MessageItem key={msg.id} user={user} message={msg} />)}

        <div
          ref={eofMessages}
          className="flex pt-5 text-stone-300 align-middle justify-center "
        >
          You're upto date. 🎉
        </div>
      </div>
    </div>
  );
}

export default ChatBody;
