import React from 'react';
import FloatingChatbot from 'react-floatbot';
import 'react-floatbot/dist/index.css';

// --- A set of new custom icons for testing ---

// A custom "comet" icon for the main toggle button
const CustomChatbotIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.18018 14.8199L14.8202 9.17993M12.0002 2.00003C17.523 2.00003 22 6.47718 22 12C22 17.5229 17.523 22 12.0002 22C6.47732 22 2.00018 17.5229 2.00018 12C2.00018 8.01239 4.29334 4.54874 7.50018 2.92346" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// A custom "bot face" icon for the avatar inside the chat
const CustomBotAvatar = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="9" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M9 9V7C9 5.89543 9.89543 5 11 5H13C14.1046 5 15 5.89543 15 7V9" stroke="currentColor" strokeWidth="2"/>
    <circle cx="9.5" cy="13.5" r=".5" fill="currentColor"/>
    <circle cx="14.5" cy="13.5" r=".5" fill="currentColor"/>
  </svg>
);

// A custom "arrow" icon for the send button
const CustomSendIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 5V19M12 5L6 11M12 5L18 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// A custom "chevron down" icon for the close button
const CustomCloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// A custom "clipboard check" icon for the copy button
const CustomCopyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 4H8C6.89543 4 6 4.89543 6 6V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V6C18 4.89543 17.1046 4 16 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.5 11.5L11.5 13.5L14.5 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


const App = () => {
  return (
    <div style={{ padding: '2rem', backgroundColor: '#E0F2FE', height: '100vh' }}>
      <h1>React Floatbot Full Customization Test</h1>
      
      <FloatingChatbot
        apiKey="your api key" 
        
        // --- General Props ---
        botName="Test Bot"
        headerText="Professor Synth"
        initialMessage="Greetings! I am Professor Synth. How may I assist your intellectual curiosity today?"
        placeholderText="Pose a query..." // Different model
        
        // --- Position & Size ---
        position="bottom-left" // Different position
        width={400} // Custom width
        height={600} // Custom height
         // Open by default for easy testing
        
        // --- Theme Props (A new 'Ocean Blue' theme) ---
        theme={{
          primaryColor: "#0369A1",
          userBubbleColor: "#0EA5E9",
          botBubbleColor: "#FFFFFF",
          backgroundColor: "#F0F9FF",
        }}
        
        // --- Icon Props ---
        chatbotIcon={<CustomChatbotIcon />}
        botAvatar={<CustomBotAvatar />}
        sendIcon={<CustomSendIcon />}
        closeIcon={<CustomCloseIcon />}
        copyIcon={<CustomCopyIcon />}
      />
    </div>
  );
};

export default App;