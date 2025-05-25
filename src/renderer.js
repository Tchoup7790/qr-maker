import "./index.css";
import QRCode from "qrcode";

console.log("Renderer chargé"); // Pour déboguer

const form = document.querySelector("#qr-form");
const input = document.querySelector("#text");
const canvas = document.querySelector("#qr-canvas");

form.addEventListener("submit", async (e) => {
	e.preventDefault();
	const text = input.value.trim();
	if (!text) {
		console.log("Aucun texte");
		return;
	}
	try {
		await QRCode.toCanvas(canvas, text, {
			errorCorrectionLevel: "H",
			width: 256,
		});
		console.log("QR Code généré !");
	} catch (err) {
		console.error("Erreur QR:", err);
	}
});
