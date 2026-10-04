(() => {
  const forms = [...document.querySelectorAll('.signup')];
  const endpoint = (window.BLS_CONFIG && window.BLS_CONFIG.sheetEndpoint || '').trim();

  for (const form of forms) {
    if (endpoint) form.action = endpoint;

    const status = document.createElement('div');
    status.style.textAlign = 'center';
    status.style.fontWeight = '700';
    status.style.marginTop = '8px';
    status.style.color = '#f3c84a';

    form.appendChild(status);

    form.addEventListener('submit', (event) => {
      const input = form.querySelector('input[type="email"]');
      const button = form.querySelector('button');

      if (!input.checkValidity()) {
        event.preventDefault();
        input.reportValidity();
        return;
      }

      if (!endpoint) {
        event.preventDefault();
        status.textContent = "Erreur de connexion.";
        return;
      }

      button.disabled = true;
      const originalText = button.textContent;
      button.textContent = 'ENVOI…';

      window.setTimeout(() => {
        status.textContent = "Merci, ton inscription est enregistrée ❤️";
        form.reset();
        button.disabled = false;
        button.textContent = originalText;
      }, 800);
    });
  }
})();
