import { ChatSidebar } from "components/ChatSidebar";
import { ChatWindow } from "components/ChatWindow";
import Head from "next/head";

export default function ChatPage() {
  
  return (
    <>
      <Head>
        <title>New Chat</title>
      </Head>
      <div className="grid h-screen grid-cols-[max-content_1fr]">
        <ChatSidebar />
        <ChatWindow />
      </div>
    </>
  );
}
