# Electron + React Desktop App

## Overview

This is a simple desktop application built using Electron, React, and TypeScript. It allows users to encrypt and decrypt text using a Caesar Cipher algorithm. The app features a clean, user-friendly interface styled with Tailwind CSS.

## Features

- **Custom Window Background Color**: Electron window uses a custom background color (`#1E1E2F`).
- **React Frontend**: The React application runs inside the Electron window.
- **Window Reopen Event**: Listens for an IPC event to recreate the window if closed.

## Prerequisites

Make sure you have the following installed:

- Node.js
- npm or yarn

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository_url>
cd <repository_name>
2. Install Dependencies
Install dependencies for both the Electron app and React app.

React App
Navigate to the react-app directory and install the dependencies:

bash

npm install
3. Start the React App
Run the React development server:

bash

npm start
Ensure it runs at http://localhost:3000.

4. Start the Electron App
In a separate terminal, navigate to the Electron app directory and run:

bash

npm run electron
The Electron app should launch with the React app loaded inside the window.

Project Structure
bash
Copy code
/react-app
    /src
        /components
        /App.tsx
        ...

electron.ts
preload.js
package.json
...
/public
    index.html
    ...
package.json
README.md
Electron Configuration
The Electron app is configured in electron.ts:

Custom Background Color: The backgroundColor property is set to #1E1E2F.
Preload Script: Loads the preload.js file for secure communication between the main process and renderer process.
Example:

typescript
Copy code
mainWindow = new BrowserWindow({
  width: 800,
  height: 600,
  backgroundColor: "#1E1E2F",
  webPreferences: {
    nodeIntegration: false,
    preload: path.join(__dirname, "preload.js"),
  },
});
React Configuration
Ensure the React app does not override Electron's background color by setting:

css
Copy code
body {
  background-color: transparent;
}
Available Scripts
React App
npm start: Starts the React development server.
Electron App
npm run electron: Starts the Electron app.
Troubleshooting
Background Color Not Displayed
Ensure the React app has body { background-color: transparent; } in its CSS.
Restart the app after any changes.
React App Not Loading
Verify the React app is running at http://localhost:3000.
```
