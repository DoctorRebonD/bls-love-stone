(() => {
  const sink = document.getElementById('sheetSink');
  const forms = [...document.querySelectorAll('.signup')];
  let pendingForm = null;
  let originalButtonText = '';

  for (const form of forms) {
    form.addEventListener('submit', (event) => {
      if (!form.reportValidity()) {
        event.preventDefault();
        return;
      }

      const button = form.querySelector('button');
      pendingForm = form;
      originalButtonText = button.textContent;
      button.disabled = true;
      button.textContent = 'ENVOI…';
    });
  }

  sink.addEventListener('load', () => {
    if (!pendingForm) return;

    const form = pendingForm;
    const button = form.querySelector('button');
    pendingForm = null;

    form.reset();
    button.disabled = false;
    button.textContent = '✅ MERCI, INSCRIPTION ENREGISTRÉE ❤️';

    window.setTimeout(() => {
      button.textContent = originalButtonText;
    }, 3500);
  });
})();
