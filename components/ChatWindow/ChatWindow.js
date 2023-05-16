import { ChatFooter } from "../ChatFooter";

export const ChatWindow = () => {
  return (
    <div className="bg-gray-600 flex flex-col">
      <div className="flex-1">Chat Window</div>
      <ChatFooter />
    </div>
  );
};