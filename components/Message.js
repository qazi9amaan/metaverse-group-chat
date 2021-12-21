function MessageBox() {
    return (
      <div
        className=" border-t-2 
             border-zinc-900
            grow-0 flex-auto"
      >
        <input
          placeholder="Press enter to send the message"
          className="w-full placeholder:text-gray-600 outline-0 active: outline-none bg-black text-white p-3 z-50"
          cols={1}
        />
      </div>
    );
}

export default MessageBox
