"use client";

import { useState, FormEvent } from "react";
import { BotMessageSquareIcon, Minimize2, User, Bot } from "lucide-react";
import ChatMessage from "@/components/common/ChatMessage";
export default function ChatAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const messages = [
    {
      sender: "AI",
      text: "Hi, how can I help you today?",
      icon: (
         <Bot />
      ),
    },
    {
      sender: "You",
      text: "fewafef",
      icon: (
        <User />
      ),
    },
    {
      sender: "AI",
      text:
        "Sorry, I couldn't find any information in the documentation about that. Expect answer to be less accurate. I could not find the answer to this in the verified sources.",
      icon: (
        <Bot />
      ),
    },
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Add send message logic here
  };

  return (
    <>
      {!isOpen && (
        <>
         <div className="cursor-pointer h-12 w-12 absolute bottom-10 right-7 flex items-center justify-center bg-white rounded-full border border-blue-500 hover:bg-blue-50 transition" onClick={() => setIsOpen(true)} aria-label="Open Chat" >
          <span className="sr-only">Open Chat</span>
          <span className="absolute top-0 right-1 h-3 w-3 rounded-full bg-red-500 border-2 border-white animate-bounce" />

          <BotMessageSquareIcon className="h-8 w-8 text-blue-500" /> 
        </div>
        </>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div 
          style={{
            boxShadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgb(0 0 0 / 0.05)",
          }}
          className="fixed bottom-[calc(5rem+2.5rem)] right-0 mr-4 bg-white p-6 rounded-lg border border-[#e5e7eb] w-[440px] h-[534px] flex flex-col"
        >
          {/* Heading with Close Button */}
          <div className="flex justify-between items-center pb-6 border-b border-gray-200">
            <div>
              <h2 className="font-semibold text-lg tracking-tight">Splity.Ai</h2>
              <p className="text-sm text-[#6b7280] leading-3">
                Powered by OpenAI & RAG Model
              </p>
            </div>
            <Minimize2
              onClick={() => setIsOpen(false)}
              className="text-blue-400 hover:text-blue-600"
              aria-label="Close Chat"
            />
          </div>

          {/* Chat Container */}
          <div
            className="pr-4 h-[474px] min-w-full overflow-y-auto flex-1"
            style={{ display: "table" }}
          >


            {messages.map((msg, idx) => (
              <ChatMessage key={idx} icon={msg.icon} sender={msg.sender} text={msg.text} />
            ))}
          </div>

          {/* Input box */}
          <div className="flex items-center pt-0">
            <form
              onSubmit={handleSubmit}
              className="flex items-center justify-center w-full space-x-2"
            >
              <input
                className="flex h-10 w-full rounded-md border border-gray-400 px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:cursor-not-allowed disabled:opacity-50 text-[#030712] focus-visible:ring-offset-2"
                placeholder="Type your message"
                defaultValue=""
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-blue-400 text-white hover:text-white-600 disabled:pointer-events-none disabled:opacity-50 hover:bg-blue-600 h-10 px-4 py-2"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
