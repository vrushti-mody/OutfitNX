(() => {
  const y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();
  const banner = document.getElementById('cookie-banner');
  if (!banner) return;
  let choice = null;
  try { choice = localStorage.getItem('outfitnx-cookie-choice'); } catch (_) {}
  if (!choice) banner.hidden = false;
  const save = (value) => {
    try { localStorage.setItem('outfitnx-cookie-choice', value); } catch (_) {}
    banner.hidden = true;
  };
  document.getElementById('cookie-accept')?.addEventListener('click', () => save('accepted'));
  document.getElementById('cookie-reject')?.addEventListener('click', () => save('essential-only'));
  const loadMap = document.getElementById('load-map');
  loadMap?.addEventListener('click', () => {
    const frame = document.createElement('iframe');
    frame.title = 'Map showing Outfit NX near Sion Circle, Mumbai';
    frame.src = 'https://www.google.com/maps?q=Outfit+NX,+Shop+No+9,+Satyam+Building,+Sion+Circle,+Mumbai+400022&output=embed';
    frame.loading = 'lazy';
    frame.referrerPolicy = 'no-referrer-when-downgrade';
    frame.allowFullscreen = true;
    document.getElementById('map-wrap').replaceChildren(frame);
  });
})();
