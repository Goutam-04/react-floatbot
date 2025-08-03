
# Floating AI Chatbot Component

A sleek, customizable, and easy-to-integrate React component for adding a floating AI-powered chatbot to your website. Built with React and powered by the Google Gemini API, it provides a modern, dark-themed interface that can be easily restyled to match your brand.

![Chatbot Demo](https://placehold.co/600x400/1a1a1a/f5f5f5?text=Chatbot+UI+Preview)

---

## 🚀 Use Cases

This component is ideal for a variety of applications, including:

-   **AI Coding Assistant**: Help developers by answering programming questions, debugging code, and providing code snippets directly on your site.
-   **Customer Support**: Offer instant, 24/7 support to your users by answering frequently asked questions.
-   **Interactive Documentation**: Allow users to ask questions about your product or API directly from your documentation pages.
-   **Lead Generation**: Engage visitors and qualify leads by asking targeted questions.
-   **Personal Portfolio Bot**: Add a personal touch to your portfolio by letting visitors chat with an AI version of you.

---

## ⚙️ Installation

Follow these steps to get the chatbot up and running in your React project.

### 1. Add Files to Your Project

First, copy the following files into your project's `components` directory (or your preferred location):

-   `FloatingChatbot.tsx`
-   `FloatingChatbot.css`

### 2. Install Dependencies

This component requires a few peer dependencies. You can install them using npm or yarn:

```bash
npm install react-markdown

or

yarn add react-markdown

3. Set Up Environment Variables
To securely use your Google Gemini API key, it's best to store it in an environment variable. Create a .env file in the root of your project and add your key:

VITE_GEMINI_API_KEY="YOUR_GEMINI_API_KEY_HERE"

Note: If you are not using Vite, access your environment variables according to your project's setup (e.g., process.env.REACT_APP_GEMINI_API_KEY for Create React App).

4. Import and Use the Component
Finally, import the component into any page or layout file and render it.

import FloatingChatbot from './components/FloatingChatbot';

function App() {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  return (
    <div>
      {/* Your other page content */}
      <FloatingChatbot apiKey={apiKey} />
    </div>
  );
}

export default App;

🎨 Customization (Props)
You can customize the chatbot by passing various props. Here is a detailed list of all available options:

Prop

Type

Default

Description

apiKey

string

Required

Your Google Gemini API key.

modelName

string

"gemini-1.5-flash"

The name of the Gemini model to use.

initialMessage

string

"Hello! How can I assist..."

The first message the bot displays when it opens.

botName

string

"AI Assistant"

The name of the bot displayed in the header (used if headerText is not provided).

headerText

string

undefined

Overrides botName to set a custom title in the header.

placeholderText

string

"Ask me anything..."

The placeholder text shown in the message input field.

position

'bottom-right' 'bottom-left' 'top-right' 'top-left'

'bottom-right'

The position of the chatbot on the screen.

width

string or number

28rem

The width of the chatbot window.

height

string or number

500px

The height of the chatbot window.

isOpenOnLoad

boolean

false

If true, the chatbot will be open by default when the page loads.

theme

object

{}

An object to customize the colors of the chatbot. See the Theme Object section below for details.

The theme Object
You can pass a theme object to easily change the chatbot's color scheme.

Key

Type

Default

Description

primaryColor

string

#4a80ff

The main accent color for buttons, icons, etc.

userBubbleColor

string

#4a80ff

The background color of the user's message bubbles.

botBubbleColor

string

#2c2c2c

The background color of the bot's message bubbles.

backgroundColor

string

#1a1a1a

The main background color of the chat window.

Theme Example:
<FloatingChatbot
  apiKey={apiKey}
  theme={{
    primaryColor: '#ff7a59',
    userBubbleColor: '#ff7a59',
    botBubbleColor: '#3d3d3d',
    backgroundColor: '#262626',
  }}
/>
