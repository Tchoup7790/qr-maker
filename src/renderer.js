/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/process-model
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import "./index.css";
import QRCodeStyling from "qr-code-styling";

// Get Element by ID
const form = document.getElementById("qr-form");
const text = document.getElementById("text-input");
const canvas = document.getElementById("canvas-div");
const download = document.getElementById("download-button");
const type = document.getElementById("type-select");

let qrCode = null;

// Hundle form submit
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const textValue = text.value;
  const typeValue = type.value;
  if (!textValue || !typeValue) return;
  qrCode = new QRCodeStyling({
    //        image: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    type: "svg",
    data: textValue,
    dotsOptions: {
      color: "#000",
      type: typeValue,
    },
    backgroundOptions: {
      color: "transparent",
    },
    imageOptions: {
      crossOrigin: "anonymous",
      // margin: 20
    },
  });
  canvas.innerHTML = "";
  qrCode.append(canvas);

  download.style.display = "block";
});

// Hundle download Button
download.addEventListener("click", () => {
  if (!qrCode) return;
  qrCode.download({ name: "qr-code", extension: "png" });
});
