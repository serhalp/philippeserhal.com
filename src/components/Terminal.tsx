import { type ReactNode, type FormEvent, useState, useRef } from "react";

interface TerminalProps {
  command?: string;
  output?: ReactNode;
  title?: string;
  prompt?: string;
  className?: string;
  showCursor?: boolean;
  onCommand?: (command: string) => void;
  isInput?: boolean;
  inputName?: string;
  inputPlaceholder?: string;
}

const Terminal = ({
  command = "",
  output,
  title = "bash",
  prompt = "guest@philippeserhal.com",
  className = "",
  showCursor = true,
  onCommand,
  isInput = false,
  inputName,
  inputPlaceholder = "",
}: TerminalProps) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    if (isInput && inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (onCommand && inputValue.trim()) {
      onCommand(inputValue);
      setInputValue("");
    }
  };

  return (
    <div
      className={`bg-terminal p-6 rounded-lg font-mono text-md text-left mb-8 ${className}`}
      onClick={focusInput}
    >
      <div className="flex items-center mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
        <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
        <span className="text-muted-foreground text-sm">{title}</span>
      </div>
      <p className="mb-2">
        <span className="text-green-400">{prompt}</span>:
        <span className="text-blue-400">~</span>$ {command}
      </p>
      <div>
        {output}
        {isInput ? (
          <form onSubmit={handleSubmit} className="mt-2">
            <input
              ref={inputRef}
              type="text"
              name={inputName}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={inputPlaceholder}
              className="bg-transparent border-none outline-none text-foreground w-full font-mono"
              autoComplete="off"
              spellCheck="false"
            />
          </form>
        ) : showCursor ? (
          <p className="flex items-center">
            <span className="text-foreground">_</span>
            <span className="animate-cursor-blink ml-1">|</span>
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default Terminal;
