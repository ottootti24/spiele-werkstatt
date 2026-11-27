// Semper Oberschule Dresden – Verhalten & Interaktion

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  // Sanftes Einblenden beim Scrollen
  const revealables = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealables.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealables.forEach((el) => io.observe(el));
  } else {
    revealables.forEach((el) => el.classList.add('is-visible'));
  }

  // Kontakt-/Anmeldeformular (Demo ohne Backend)
  const form = document.querySelector('[data-demo-form]');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const success = document.querySelector('.form-success');
      if (success) {
        success.classList.add('is-visible');
        success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      form.reset();
    });
  }

  // Jahr im Footer
  const year = document.querySelector('[data-year]');
  if (year) year.textContent = String(new Date().getFullYear());
});
