import { useState } from "react";

export const ChatFooter = () => {
  const [messageText, setMessageText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(messageText);
    setMessageText("");
  };

  return (
    <footer className="bg-gray-800 p-10">
      <form onSubmit={handleSubmit}>
        <fieldset className="flex gap-2 items-center justify-center">
          <textarea
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            className="w-full resize-none rounded-md bg-gray-700 p-2 text-white focus:border-emerald-500 focus:bg-gray-600 focus:outline focus:outline-emerald-500" placeholder="Send a message..."
          />
          <button className="btn btn--green" type="submit">Send</button>
        </fieldset>
      </form>
    </footer>
  );
};