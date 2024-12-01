import { app, BrowserWindow, ipcMain, nativeTheme } from "electron";
import path from "path";

let mainWindow: BrowserWindow | null = null;

// Function to create the window
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    backgroundColor: "gray",
    darkTheme: true,
    // fullscreen: true,
    webPreferences: {
      nodeIntegration: false,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  mainWindow.loadURL("http://localhost:3000"); // URL of React app

  //window close
  mainWindow.on("closed", () => {
    mainWindow = null; // Dereference the window object
  });
}

// Listen for IPC event to reopen the window
ipcMain.on("reopen-window", () => {
  if (!mainWindow) {
    createWindow(); // Recreate the window if it's closed
  }
});

// Create the window when Electron app is ready
app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (mainWindow === null) {
      createWindow();
    }
  });
});

// Quit the app when all windows are closed (Windows/Linux)
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
