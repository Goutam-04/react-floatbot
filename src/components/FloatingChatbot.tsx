import React, { useState, useRef, useEffect, useMemo } from "react";
import { GoogleGenerativeAI, GenerativeModel } from "@google/generative-ai";
import ReactMarkdown from 'react-markdown';
import './FloatingChatbot.css';
import { ChatbotIcon as DefaultChatbotIcon, SendIcon as DefaultSendIcon, CloseIcon as DefaultCloseIcon, CopyIcon as DefaultCopyIcon } from "./Icons";

// types
interface Message {
  text: string;
  sender: 'user' | 'bot';
}

interface ChatbotTheme {
  primaryColor?: string;
  userBubbleColor?: string;
  botBubbleColor?: string;
  backgroundColor?: string;
}

interface FloatingChatbotProps {
  apiKey: string;
  modelName?: string;
  initialMessage?: string;
  botName?: string;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  theme?: ChatbotTheme;
  width?: string | number;
  height?: string | number;
  headerText?: string;
  placeholderText?: string;
  isOpenOnLoad?: boolean;
  chatbotIcon?: React.ReactNode;
  sendIcon?: React.ReactNode;
  closeIcon?: React.ReactNode;
  copyIcon?: React.ReactNode;
}

// Custom hook to autosize the textarea
const useAutosizeTextArea = (
  textAreaRef: React.RefObject<HTMLTextAreaElement>,
  value: string
) => {
  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = '0px';
      const scrollHeight = textAreaRef.current.scrollHeight;
      textAreaRef.current.style.height = `${Math.min(scrollHeight, 120)}px`;
    }
  }, [textAreaRef, value]);
};



// ----- MAIN COMPONENT ----- //
export default function FloatingChatbot({
  apiKey,
  modelName = "gemini-1.5-flash",
  initialMessage = "Hello! How can I assist you with your code today?",
  botName = "AI Assistant",
  position = "bottom-right",
  theme = {},
  width,
  height,
  headerText,
  placeholderText = "Ask me anything...",
  isOpenOnLoad = false,
  chatbotIcon: ChatbotIcon = <DefaultChatbotIcon/>,
  sendIcon: SendIcon = <DefaultSendIcon />,
  closeIcon: CloseIcon = <DefaultCloseIcon />,
  copyIcon: CopyIcon = <DefaultCopyIcon />,
}: FloatingChatbotProps) {
  const [isOpen, setIsOpen] = useState(isOpenOnLoad);
  const [messages, setMessages] = useState<Message[]>([
    { text: initialMessage, sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const genAI = useMemo(() => new GoogleGenerativeAI(apiKey), [apiKey]);
  const model: GenerativeModel = useMemo(() => genAI.getGenerativeModel({ model: modelName }), [genAI, modelName]);

  useAutosizeTextArea(textareaRef, input);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSendMessage = async () => {
    if (input.trim() === "" || isLoading) return;

    const userMessage: Message = { text: input, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");
    setIsLoading(true);
    setError(null);

    try {
      const result = await model.generateContent(userMessage.text);
      const response = await result.response;
      const botMessageText = response.text();

      setMessages((prevMessages) => [...prevMessages, { text: botMessageText, sender: "bot" }]);
    } catch (err) {
      console.error("Error calling the Gemini API:", err);
      const errorMessage = "Sorry, I'm having trouble connecting. Please try again later.";
      setError(errorMessage);
      setMessages((prevMessages) => [...prevMessages, { text: errorMessage, sender: "bot" }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  const handleCopyCode = (codeText: string) => {
    const textArea = document.createElement('textarea');
    textArea.value = codeText;
    document.body.appendChild(textArea);
    textArea.select();
    try {
        document.execCommand('copy');
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
    document.body.removeChild(textArea);
  };

  const chatbotStyle = {
    '--chatbot-width': typeof width === 'number' ? `${width}px` : width,
    '--chatbot-height': typeof height === 'number' ? `${height}px` : height,
    '--primary-color': theme.primaryColor,
    '--user-bubble-color': theme.userBubbleColor,
    '--bot-bubble-color': theme.botBubbleColor,
    '--background-color': theme.backgroundColor,
  } as React.CSSProperties;


  return (
    <div className={`chatbot-container ${position}`} style={chatbotStyle}>
      <div className={`floating-chatbot ${isOpen ? 'open' : ''}`}>
        <div className="chatbot-header">
          <div className="header-info">
            {ChatbotIcon}
            <div className="header-text">
                <h3>{headerText || botName}</h3>
                <p>Online</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="close-button" aria-label="Close chat">
            {CloseIcon}
          </button>
        </div>
        
        <div className="chatbot-messages-container" aria-live="polite">
          {messages.map((msg, index) => (
            <div key={index} className={`message-wrapper ${msg.sender}`}>
              {msg.sender === 'bot' && ChatbotIcon}
              <div className={`message-bubble ${msg.sender}`}>
                <ReactMarkdown
                  components={{
                    pre({ node, ...props }) {
                        const codeElement = node?.children[0] as any;
                        const codeText = codeElement?.children[0]?.value || '';
                        return (
                            <div className="code-container">
                                <button onClick={() => handleCopyCode(codeText)} className="copy-button" aria-label="Copy code">
                                    {CopyIcon} Copy
                                </button>
                                <pre {...props} className="code-block" />
                            </div>
                        );
                    },
                    code({ node, inline, className, children, ...props }) {
                      return !inline ? (
                        <code className={className} {...props}>
                          {children}
                        </code>
                      ) : (
                        <code className="inline-code" {...props}>
                          {children}
                        </code>
                      );
                    }
                  }}
                >
                  {msg.text}
                </ReactMarkdown>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="message-wrapper bot">
              {ChatbotIcon}
              <div className="message-bubble bot typing-indicator">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        <div className="chatbot-input-area">
          {error && <p className="error-message">{error}</p>}
          <div className="input-wrapper">
            <textarea
              ref={textareaRef}
              placeholder={placeholderText}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              rows={1}
              className="chatbot-textarea"
              disabled={isLoading}
              aria-label="Chat input"
            />
            <button
              onClick={handleSendMessage}
              className="send-button"
              disabled={isLoading || input.trim() === ""}
              aria-label="Send message"
            >
              {SendIcon}
            </button>
          </div>
        </div>
      </div>
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`chatbot-toggle-button ${isOpen ? 'hidden' : ''}`}
        aria-label="Toggle chat"
      >
        {ChatbotIcon}
      </button>
    </div>
  );
}