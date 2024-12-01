"use strict";
// import { app, BrowserWindow, ipcMain, nativeTheme } from "electron";
// import path from "path";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// let mainWindow: BrowserWindow | null = null;
// // Function to create the window
// function createWindow() {
//   mainWindow = new BrowserWindow({
//     width: 800,
//     height: 600,
//     backgroundColor: "gray",
//     darkTheme: true,
//     // fullscreen: true,
//     webPreferences: {
//       nodeIntegration: false,
//       preload: path.join(__dirname, "preload.js"),
//     },
//   });
//   mainWindow.loadURL("http://localhost:3000"); // URL of React app
//   //window close
//   mainWindow.on("closed", () => {
//     mainWindow = null; // Dereference the window object
//   });
// }
// // Listen for IPC event to reopen the window
// ipcMain.on("reopen-window", () => {
//   if (!mainWindow) {
//     createWindow(); // Recreate the window if it's closed
//   }
// });
// // Create the window when Electron app is ready
// app.whenReady().then(() => {
//   createWindow();
//   app.on("activate", () => {
//     if (mainWindow === null) {
//       createWindow();
//     }
//   });
// });
// // Quit the app when all windows are closed (Windows/Linux)
// app.on("window-all-closed", () => {
//   if (process.platform !== "darwin") {
//     app.quit();
//   }
// });
const electron_1 = require("electron");
const path_1 = __importDefault(require("path"));
let mainWindow = null;
// Function to create the window
function createWindow() {
    mainWindow = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        backgroundColor: "gray",
        darkTheme: electron_1.nativeTheme.shouldUseDarkColors, // Use nativeTheme preference
        webPreferences: {
            nodeIntegration: false,
            preload: path_1.default.join(__dirname, "preload.js"),
        },
    });
    mainWindow.loadURL("http://localhost:3000"); // URL of React app
    // Listen to native theme changes and send the new theme to renderer process
    electron_1.nativeTheme.on("updated", () => {
        mainWindow?.webContents.send("theme-changed", electron_1.nativeTheme.shouldUseDarkColors);
    });
    // Window close
    mainWindow.on("closed", () => {
        mainWindow = null; // Dereference the window object
    });
}
// Listen for IPC event to reopen the window
electron_1.ipcMain.on("reopen-window", () => {
    if (!mainWindow) {
        createWindow(); // Recreate the window if it's closed
    }
});
// Create the window when Electron app is ready
electron_1.app.whenReady().then(() => {
    createWindow();
    electron_1.app.on("activate", () => {
        if (mainWindow === null) {
            createWindow();
        }
    });
});
// Quit the app when all windows are closed (Windows/Linux)
electron_1.app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        electron_1.app.quit();
    }
});
