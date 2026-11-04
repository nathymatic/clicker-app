import { app, BrowserWindow } from "electron";

async function createWindow() {
  const window = new BrowserWindow({
    width: 1000,
    height: 700,
  });

  await window.loadURL("http://localhost:5173");
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
