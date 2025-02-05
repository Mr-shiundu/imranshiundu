// ======================
// GSAP Animations
// ======================

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Header Animation
gsap.from(".header", {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "power2.out",
});

// Home Section Animation
gsap.from(".home-content", {
    duration: 1.5,
    x: -100,
    opacity: 0,
    delay: 0.5,
    ease: "power3.out",
});

gsap.from(".home-img", {
    duration: 1.5,
    x: 100,
    opacity: 0,
    delay: 0.5,
    ease: "power3.out",
});

// About Section Animation
gsap.from(".about-img", {
    scrollTrigger: {
        trigger: ".about",
        start: "top 80%",
    },
    duration: 1,
    x: -100,
    opacity: 0,
    ease: "power2.out",
});

gsap.from(".about-content", {
    scrollTrigger: {
        trigger: ".about",
        start: "top 80%",
    },
    duration: 1,
    x: 100,
    opacity: 0,
    ease: "power2.out",
});

// Services Section Animation
gsap.from(".services-box", {
    scrollTrigger: {
        trigger: ".services",
        start: "top 80%",
    },
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.3,
    ease: "power2.out",
});

// Portfolio Section Animation
gsap.from(".Portfolio-box", {
    scrollTrigger: {
        trigger: ".Portfolio",
        start: "top 80%",
    },
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.3,
    ease: "power2.out",
});

// Contact Section Animation
gsap.from(".contact form", {
    scrollTrigger: {
        trigger: ".contact",
        start: "top 80%",
    },
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power2.out",
});

// Footer Animation
gsap.from(".footer", {
    duration: 1,
    opacity: 0,
    delay: 1,
    ease: "power2.out",
});

// ======================
// EmailJS Integration
// ======================

// Initialize EmailJS with your Public Key
(function() {
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual Public Key
  })();
  
  // Handle form submission
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission
  
    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
  
    // Validate that all fields are filled
    if (name && email && phone && message) {
      // Prepare template parameters
      const templateParams = {
        to_name: "Imran", // Your name
        from_name: name, // Sender's name
        from_email: email, // Sender's email address
        phone: phone, // Sender's phone number
        subject: subject, // Subject of the email
        message: message // The message content
      };
  
      // Send the email using EmailJS
      emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams) // Use your Service ID and Template ID
        .then(function(response) {
          console.log('SUCCESS!', response);
          showCustomAlert("Your message has been sent successfully!"); // Custom success alert
        }, function(error) {
          console.log('FAILED...', error);
          showCustomAlert("Oops! Something went wrong. Please try again. If the issue persists, you are advised to use the links available in the portfolio to reach out to the Developer."); // Custom error alert
        });
  
      // Clear the form after submission
      document.getElementById('contact-form').reset();
    } else {
      showCustomAlert("Please fill in all fields."); // Custom validation alert
    }
  });
  
  // ======================
  // Custom Alert Notification
  // ======================
  
  // Show Custom Alert
  function showCustomAlert(message) {
    const customAlert = document.getElementById("custom-alert");
    const alertMessage = document.querySelector(".alert-message");
  
    // Update the message
    alertMessage.textContent = message;
  
    // Show the alert
    customAlert.classList.add("active");
  
    // GSAP Animation
    gsap.from(".alert-content", {
      duration: 0.5,
      scale: 0.8,
      opacity: 0,
      ease: "back.out(1.7)",
    });
  }
  
  // Hide Custom Alert
  function hideCustomAlert() {
    const customAlert = document.getElementById("custom-alert");
  
    // GSAP Animation
    gsap.to(".alert-content", {
      duration: 0.3,
      scale: 0.8,
      opacity: 0,
      ease: "power2.in",
      onComplete: () => {
        customAlert.classList.remove("active");
      },
    });
  }
  
  // Add Event Listener to the OK Button
  document.querySelector(".alert-button").addEventListener("click", hideCustomAlert);
  // ======================
// SMS INTEGRATION WITH TWILIO
// ======================



  const twilio = require('twilio'); // Install Twilio SDK: npm install twilio

const accountSid = 'YOUR_ACCOUNT_SID';
const authToken = 'YOUR_AUTH_TOKEN';
const client = require('twilio')(accountSid, authToken);

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;

  client.messages
    .create({
      body: `New message from ${name}: ${message}`,
      from: 'YOUR_TWILIO_PHONE_NUMBER',
      to: 'YOUR_PHONE_NUMBER' // Your personal phone number
    })
    .then((message) => {
      console.log('SMS sent:', message.sid);
      alert("Your message has been sent successfully!");
    })
    .catch((error) => {
      console.error('Error sending SMS:', error);
      alert("Oops! Something went wrong. Please try again. If the issue persists, you are advised to use the links available in the portfolio to reach out to the Developer.");
    });
});

// ======================
// Floating WhatsApp/Email Message Box
// ======================

// WhatsApp Message Box
function openWhatsAppMessageBox() {
    document.getElementById("whatsapp-message-box").style.display = "block";
}

function closeWhatsAppMessageBox() {
    document.getElementById("whatsapp-message-box").style.display = "none";
}

function sendWhatsAppMessage() {
    const message = document.getElementById("whatsapp-message").value;
    if (message) {
        const url = `https://api.whatsapp.com/send?phone=+254740293859&text=${encodeURIComponent(
            message
        )}`;
        window.open(url, "_blank");
        closeWhatsAppMessageBox();
    } else {
        alert("Please type a message.");
    }
}

// Email Message Box
function openEmailMessageBox() {
    document.getElementById("email-message-box").style.display = "block";
}

function closeEmailMessageBox() {
    document.getElementById("email-message-box").style.display = "none";
}

function sendEmailMessage() {
    const message = document.getElementById("email-message").value;
    if (message) {
        const url = `mailto:imranshiundu@gmail.com?subject=Web Developer Inquiry&body=${encodeURIComponent(
            message
        )}`;
        window.open(url);
        closeEmailMessageBox();
    } else {
        alert("Please type a message.");
    }
}

// ======================
// Smooth Scroll for Navigation Links
// ======================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});

// ======================
// Mobile Menu Toggle
// ======================

const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
  
    // Send a push notification
    OneSignal.push(() => {
      OneSignal.sendSelfNotification(
        `New message from ${name}`,
        message,
        null,
        null
      );
    });
  
    alert("Your message has been sent successfully!");
  });