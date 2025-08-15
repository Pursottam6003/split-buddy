import React from "react";

interface ChatMessageProps {
  icon: React.ReactNode;
  sender: string;
  text: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ icon, sender, text }) => (
  <div className="flex gap-3 my-4 text-gray-600 text-sm flex-1">
    <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
      <div className="rounded-full bg-gray-100 border p-1 flex items-center justify-center w-8 h-8">
        {icon}
      </div>
    </span>
    <p className="leading-relaxed">
      <span className="block font-bold text-gray-700">{sender} </span>
      {text}
    </p>
  </div>
);

export default ChatMessage;
