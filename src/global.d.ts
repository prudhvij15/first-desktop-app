// global.d.ts
declare global {
  interface Window {
    electron: {
      ipcRenderer: typeof import("electron").ipcRenderer;
    };
  }
}

export {};
