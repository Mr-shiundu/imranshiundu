// Open the WhatsApp message box
function openWhatsAppMessageBox() {
    closeAllMessageBoxes(); // Close both message boxes if open
    document.getElementById("whatsapp-message-box").style.display = "block"; // Show WhatsApp message box
    document.getElementById("whatsapp-message").focus(); // Auto-focus the WhatsApp message textarea
}

// Close the WhatsApp message box
function closeWhatsAppMessageBox() {
    document.getElementById("whatsapp-message-box").style.display = "none"; // Hide WhatsApp message box
    document.getElementById("whatsapp-message").value = ""; // Clear WhatsApp textarea
}

// Send the WhatsApp message
function sendWhatsAppMessage() {
    var message = document.getElementById("whatsapp-message").value; // Get message from WhatsApp textarea
    if (message.trim() !== "") {
        var whatsappURL = "https://wa.me/254745123670?text=" + encodeURIComponent(message); // Prepare WhatsApp URL with message
        window.open(whatsappURL, "_blank"); // Open WhatsApp web
        closeWhatsAppMessageBox(); // Close message box after sending
    } else {
        alert("Please type a message before sending.");
    }
}

// Open the Email message box
function openEmailMessageBox() {
    closeAllMessageBoxes(); // Close both message boxes if open
    document.getElementById("email-message-box").style.display = "block"; // Show Email message box
    document.getElementById("email-message").focus(); // Auto-focus the Email message textarea
}

// Close the Email message box
function closeEmailMessageBox() {
    document.getElementById("email-message-box").style.display = "none"; // Hide Email message box
    document.getElementById("email-message").value = ""; // Clear Email textarea
}

// Send the Email message
function sendEmailMessage() {
    var message = document.getElementById("email-message").value; // Get message from email textarea
    if (message.trim() !== "") {
        var emailURL = "mailto:imranshiundu@gmail.com?subject=New Message&body=" + encodeURIComponent(message); // Prepare mailto URL with message
        window.location.href = emailURL; // Open default email client to send email
        closeEmailMessageBox(); // Close message box after sending
    } else {
        alert("Please type a message before sending.");
    }
}

// Close both message boxes (WhatsApp and Email)
function closeAllMessageBoxes() {
    closeWhatsAppMessageBox();
    closeEmailMessageBox();
}

// Optional: Automatically open message box on clicking the WhatsApp or Email icon
document.querySelector(".whatsapp-icon a").addEventListener("click", openWhatsAppMessageBox);
document.querySelector(".email-icon a").addEventListener("click", openEmailMessageBox);
