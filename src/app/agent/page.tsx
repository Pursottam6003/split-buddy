"use client";

import { useState, FormEvent } from "react";
import { BotMessageSquareIcon, Minimize2, User, Bot } from "lucide-react";
import ChatMessage from "@/components/common/ChatMessage";
export default function ChatbotPage() {
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
        No longer used, use ChatAgent instead
    </>
  );
}
