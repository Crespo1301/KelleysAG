async function injectPartial(selector, path) {
  const target = document.querySelector(selector);
  if (!target) return null;
  const res = await fetch(path, { cache: 'no-cache' });
  if (!res.ok) throw new Error(`Failed to load ${path}`);
  target.innerHTML = await res.text();
  return target;
}

function setActiveNavLink() {
  const page = document.body.dataset.page || window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach((link) => {
    const href = link.getAttribute('href');
    const isMatch = href === page || (page === '' && href === 'index.html');
    link.classList.toggle('active', isMatch);
    if (isMatch) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
}

function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', function () {
    const isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  links.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', function (event) {
    if (!event.target.closest('nav')) {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

async function initLayout() {
  await Promise.all([
    injectPartial('#site-header', 'components/header.html'),
    injectPartial('#site-footer', 'components/footer.html')
  ]);
  setActiveNavLink();
  initMobileNav();
}

document.addEventListener('DOMContentLoaded', initLayout);
