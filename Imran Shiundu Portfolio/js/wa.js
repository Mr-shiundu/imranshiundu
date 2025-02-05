function openWhatsAppMessageBox() {
    document.getElementById("whatsapp-message-box").style.display = "block";
  }
  
  function closeWhatsAppMessageBox() {
    document.getElementById("whatsapp-message-box").style.display = "none";
  }
  
  function sendWhatsAppMessage() {
    const message = document.getElementById("whatsapp-message").value;
    window.open(`https://wa.me/254740293859?text=${encodeURIComponent(message)}`, "_blank");
    closeWhatsAppMessageBox();
  }
  
  function openEmailMessageBox() {
    document.getElementById("email-message-box").style.display = "block";
  }
  
  function closeEmailMessageBox() {
    document.getElementById("email-message-box").style.display = "none";
  }
  
  function sendEmailMessage() {
    const message = document.getElementById("email-message").value;
    window.open(`mailto:imranshiundu@gmail.com?body=${encodeURIComponent(message)}`, "_blank");
    closeEmailMessageBox();
  }