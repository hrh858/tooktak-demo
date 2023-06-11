import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "react-feather";

export default function InputBar({
  onSend,
}: {
  onSend: (text: string) => void;
}) {
  const [text, setText] = useState("");
  const send = () => {
    onSend(text);
    setText("");
  };

  return (
    <div className="w-full flex flex-row h-fit items-center bg-secondary p-2 rounded-md justify-center gap-2">
      <div className="flex-1 flex flex-col h-auto items-center justify-center">
        <TextInput onEnter={send} onChange={setText} value={text} />
      </div>
      <div className="w-8 h-8">
        <SendButton disabled={!text.length} onClick={send} />
      </div>
    </div>
  );
}

function TextInput({
  onChange,
  onEnter,
  value,
}: {
  onEnter: () => void;
  value: string;
  onChange: (text: string) => void;
}) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(k) => k.key === "Enter" && onEnter()}
      type="text"
      className="bg-transparent resize-none w-full text-contrast outline-none"
    />
  );
}

function SendButton({
  onClick,
  disabled,
}: {
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <motion.button
      disabled={disabled}
      onClick={onClick}
      className="w-full h-full text-primary rounded-md flex items-center justify-center p-1.5"
      animate={{
        backgroundColor: disabled ? "rgb(241,241,241)" : "rgb(221,20,45)",
        color: disabled ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,1)",
      }}
    >
      <Send />
    </motion.button>
  );
}
