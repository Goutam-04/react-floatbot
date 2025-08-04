
# React Floatbot
![npm](https://img.shields.io/npm/v/react-floatbot)   ![npm downloads](https://img.shields.io/npm/dt/react-floatbot)   ![license](https://img.shields.io/npm/l/react-floatbot)


**react-floatbot,** a react floating AI chatbot component, a sleek, customizable, and easy-to-integrate React component for adding a floating AI-powered chatbot to your website. Built with React and free Google Gemini API, it provides a modern, dark-themed interface that can be easily restyled to match your brand. 
![Chatbot Demo](https://shorturl.at/g7KWd)

## Installation

With Yarn:

```bash
yarn add react-floatbot
```

With npm:

```bash
npm i react-floatbot
```

## Usage


The chatbot is designed to work out-of-the-box with sensible defaults, but you can easily customize its appearance and behavior by passing props.

At a minimum, you must provide the `apiKey` prop for the component to function.

### Getting Your Gemini API Key 
You can get a free Gemini API key from Google AI Studio. 

1. Go to the [Google AI Studio](https://aistudio.google.com/apikey) website. 
2. Click on **"Create API key in new project"**. 
3. Your new API key will be generated for free. Copy it and add it to your project's environment variables.

### Example
```jsx
import React from "react";
import FloatingChatbot from "react-floatbot";


const App = () => {
	<FloatingChatbot
	      apiKey={ your_gemini_api_key }
   	 />
  );
};

export default App;
```


### Customization Example

You can override the default settings by passing additional props. For a full list of options, refer to the **Customization (Props)** table below.

```jsx
	<FloatingChatbot
	      apiKey={your_gemini_api_key }
	      modelName="gemini-1.5-flash"
	      initialMessage="Hi there! I'm your coding assistant. Ask me anything!"
	      botName="Gemini Chat"
	      position="bottom-right"
	      theme={{
			primaryColor: "#4F46E5",
			userBubbleColor: "#E0F2FE",
			botBubbleColor: "#F3F4F6",
			backgroundColor: "#FFFFFF",
	      }}
	      width={350}
	      height={500}
	      headerText="Ask Gemini"
	      placeholderText="Type your question here..."
	      isOpenOnLoad={false}
    />
```
### 📌 Customization (Props)

| Prop              | Type                                                                 | Default                                                          | Description |
|-------------------|----------------------------------------------------------------------|------------------------------------------------------------------|-------------|
| `apiKey`          | `string`                                                             | _Required_                                                       | Your Gemini API key from [Google AI Studio](https://aistudio.google.com/apikey). |
| `modelName`       | `string`                                                             | `"gemini-1.5-flash"`                                             | The Gemini model to use. |
| `initialMessage`  | `string`                                                             | `"Hello! How can I assist you with your code today?"`           | Message shown at the start of the conversation. |
| `botName`         | `string`                                                             | `"AI Assistant"`                                                 | Display name of the bot shown in the header. |
| `position`        | `"bottom-right"` \| `"bottom-left"` \| `"top-right"` \| `"top-left"` | `"bottom-right"`                                                 | Screen position where the chatbot appears. |
| `theme`           | `{ primaryColor?, userBubbleColor?, botBubbleColor?, backgroundColor? }` | `{}`                                                             | Customize the colors of the chatbot. See [Theme Object](#-theme-object-theme) below. |
| `width`           | `string` \| `number`                                                 | `undefined`                                                      | Set custom width of the chatbot popup. |
| `height`          | `string` \| `number`                                                 | `undefined`                                                      | Set custom height of the chatbot popup. |
| `headerText`      | `string`                                                             | `botName`                                                        | Custom text to display in the header. |
| `placeholderText` | `string`                                                             | `"Ask me anything..."`                                           | Placeholder shown in the message input area. |
| `isOpenOnLoad`    | `boolean`                                                            | `false`                                                          | Whether the chatbot should open by default on page load. |

---

###  Theme Object (`theme`)

You can customize the chatbot’s colors using the `theme` prop:

```ts
interface ChatbotTheme {
  primaryColor?: string;        // Accent color (used in header, buttons)
  userBubbleColor?: string;     // Background color for user messages
  botBubbleColor?: string;      // Background color for bot messages
  backgroundColor?: string;     // Overall background of the chat window
}
```
##  Developer & Contributor Guide

Want to contribute or publish updates to **react-floatbot**? Follow the steps below:

---

### 🔧 Setup Locally

1. Clone the repository:

```bash
git clone https://github.com/your-username/react-floatbot.git
cd react-floatbot
```

2. Install dependencies:

```bash
npm install
# or
yarn
```

---


---


### Development

Since this is a reusable React component library, development typically involves:

1. Making changes inside the `src/` folder.
2. Rebuilding the library to reflect your changes:

```bash
npm run rollup
```

> Tip: You can create a `demo/` or `example/` React app locally to test your component while developing.
> You can also use tools like [Storybook](https://storybook.js.org/) or [VitePress](https://vitepress.dev/) for isolated component testing.

---

### Publishing to npm

> Only required if you're the maintainer.

1. Ensure you're logged in to npm:

```bash
npm login
```

2. Bump the version in `package.json` (using [SemVer](https://semver.org/)):

```bash
npm version patch
```

3. Publish the package:

```bash
npm publish
```

✅ Done! Your updates are now live on [npm](https://www.npmjs.com/package/react-floatbot).

---

##  Contributing

Pull requests and issues are welcome!

- Fork the repository
- Create a new branch for your feature/fix
- Submit a pull request with a clear description

If you're fixing a bug or adding a feature, consider opening an issue first to discuss it.

---

## 📄 License

MIT © [Goutam Kumar Nayak](https://github.com/Goutam-04)
