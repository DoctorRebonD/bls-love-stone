const sink = document.getElementById("sheetSink");
let submittedForm = null;

document.querySelectorAll(".signup").forEach((form) => {
  const message = document.createElement("div");

  message.style.marginTop = "10px";
  message.style.textAlign = "center";
  message.style.fontWeight = "700";
  message.style.color = "#f3c84a";

  form.appendChild(message);

  form.addEventListener("submit", () => {
    submittedForm = form;
    message.textContent = "Envoi...";
  });
});

sink.addEventListener("load", () => {
  if (!submittedForm) return;

  const message = submittedForm.querySelector("div");

  message.textContent = "Merci, ton inscription est enregistrée ❤️";

  submittedForm.reset();
  submittedForm = null;
});
