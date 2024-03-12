const key = "leonel123";
function focus() {
	document.getElementById("input").focus();
}
window.onload = function() {
	focus();
}
function error() {
	focus();
	alertify.error("No se aceptan Mayusculas, caracteres especiales o una entrada vacia.")
}
function validacion(inputText) {
	let specialChars = /[!@#$%^&*(),.?":{}|<>]/g;
	let uppercaseChars = /[A-Z]/g;
	let whitespace = /^\s*$/;

	if (inputText.match(specialChars) || inputText.match(uppercaseChars) || inputText.match(whitespace)) {
		return false;
	} else {
		return true;
	}
	
}

function encrypt() {
	let inputText = document.getElementById("input").value;

	if (validacion(inputText) == true) {
		let encryptedText = CryptoJS.AES.encrypt(inputText, key).toString();
		document.getElementById("output").value = encryptedText;
	} else {
		error();
	}
}

function decrypt() {
	let outputText = document.getElementById("output").value;
	let decryptedText = CryptoJS.AES.decrypt(outputText, key).toString( CryptoJS.enc.Utf8 ); 
	document.getElementById("output").value = decryptedText;
}

function copyText() {
	let outputText = document.getElementById("output").value;
    if (outputText.length == 0 || outputText.trim() === "") {
		alertify.error("Error al copiar, la salida se encuentra vacia.");
	} else {
		outputText.select();
		document.execCommand("copy");
		alertify.success("Texto copiado correctamente");
	}
}