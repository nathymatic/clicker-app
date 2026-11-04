// electron/main.ts
import path from "node:path";
import { app, BrowserWindow } from "electron";
async function createWindow() {
  const window = new BrowserWindow({
    width: 1e3,
    height: 700
  });
  if (app.isPackaged) {
    await window.loadFile(path.join(app.getAppPath(), "dist", "index.html"));
  } else {
    await window.loadURL("http://localhost:5173");
  }
}
app.whenReady().then(async () => {
  try {
    await createWindow();
  } catch (error) {
    console.error("[Error] Failed to initialize Electron application:", error);
  }
});
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    void createWindow();
  }
});
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
