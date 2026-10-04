(() => {
  const status = document.getElementById('status');
  const forms = [...document.querySelectorAll('.signup')];
  const endpoint = (window.BLS_CONFIG && window.BLS_CONFIG.sheetEndpoint || '').trim();

  for (const form of forms) {
    if (endpoint) form.action = endpoint;

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
        status.textContent = "Le site est prêt. Il reste à connecter Google Sheets.";
        status.className = 'status error';
        return;
      }

      button.disabled = true;
      const originalText = button.textContent;
      button.textContent = 'ENVOI…';

      // L'envoi réel se fait vers l'iframe cachée, sans quitter la page.
      window.setTimeout(() => {
        status.textContent = "Merci, ton inscription est enregistrée ❤️";
        status.className = 'status success';
        form.reset();
        button.disabled = false;
        button.textContent = originalText;
      }, 800);
    });
  }
})();
