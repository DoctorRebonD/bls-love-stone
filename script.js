const sink = document.getElementById("sheetSink");
let submittedForm = null;

document.querySelectorAll(".signup").forEach((form) => {
  const button = form.querySelector('button');

  const message = document.createElement("div");
  message.style.display = "none";
  message.style.margin = "8px 0";
  message.style.padding = "10px 14px";
  message.style.textAlign = "center";
  message.style.fontWeight = "800";
  message.style.fontSize = "18px";
  message.style.color = "#ffffff";
  message.style.background = "rgba(0,0,0,0.85)";
  message.style.border = "2px solid #f3b51b";
  message.style.borderRadius = "10px";

  form.insertBefore(message, button);

  form.addEventListener("submit", () => {
    submittedForm = form;
    message.style.display = "block";
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
