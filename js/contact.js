document.addEventListener("DOMContentLoaded", function () {
  const phoneInput = document.getElementById("phone");
  const emailInput = document.getElementById("email");
  const form = document.getElementById("contact-form");

  phoneInput.addEventListener("input", function () {
    let phoneNumber = phoneInput.value.replace(/\D/g, "");
    const maxLength = 11;

    if (phoneNumber.length > maxLength) {
      phoneNumber = phoneNumber.slice(0, maxLength);
    }

    if (phoneNumber.length === 11) {
      phoneInput.value = phoneNumber.replace(
        /(\d{2})(\d{5})(\d{4})/,
        "($1) $2-$3"
      );
    } else if (phoneNumber.length === 10) {
      phoneInput.value = phoneNumber.replace(
        /(\d{2})(\d{4})(\d{4})/,
        "($1) $2-$3"
      );
    } else {
      phoneInput.value = phoneNumber;
    }
  });

  emailInput.addEventListener("input", function () {
    if (!validateEmail(emailInput.value.trim())) {
      emailInput.style.borderColor = "red";
    } else {
      emailInput.style.borderColor = "";
    }
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let isValid = true;

    function validateEmail(email) {
      const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return re.test(email.toLowerCase());
    }

    const nameInput = document.getElementById("name");
    const subjectInput = document.getElementById("subject");
    const messageInput = document.getElementById("message");

    if (nameInput.value.trim() === "") {
      nameInput.style.borderColor = "red";
      isValid = false;
    } else {
      nameInput.style.borderColor = "";
    }

    if (
      phoneInput.value.trim() === "" ||
      phoneInput.value.replace(/\D/g, "").length < 11
    ) {
      phoneInput.style.borderColor = "red";
      isValid = false;
    } else {
      phoneInput.style.borderColor = "";
    }

    if (!validateEmail(emailInput.value.trim())) {
      emailInput.style.borderColor = "red";
      isValid = false;
    } else {
      emailInput.style.borderColor = "";
    }

    if (subjectInput.value.trim() === "") {
      subjectInput.style.borderColor = "red";
      isValid = false;
    } else {
      subjectInput.style.borderColor = "";
    }

    if (messageInput.value.trim() === "") {
      messageInput.style.borderColor = "red";
      isValid = false;
    } else {
      messageInput.style.borderColor = "";
    }

    if (isValid) {
      alert("Formulário enviado com sucesso!");
      form.reset();
    } else {
      alert("Por favor, preencha todos os campos corretamente.");
    }
  });
});
