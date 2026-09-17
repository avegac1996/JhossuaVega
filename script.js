document.addEventListener("DOMContentLoaded", function () {

    // ----------------------------------------------------
    // 1. Cargar parciales (header / footer)
    // ----------------------------------------------------
    const loadPartial = (url, elementId, callback) => {
        fetch(url)
            .then((response) => response.text())
            .then((data) => {
                const placeholder = document.getElementById(elementId);
                if (placeholder) {
                    placeholder.innerHTML = data;
                }
                if (callback) callback();
            })
            .catch((error) => console.error(`Error al cargar ${url}:`, error));
    };

    loadPartial('partials/header.html', 'header-placeholder', setupHeader);
    loadPartial('partials/footer.html', 'footer-placeholder', setupFooterYear);

    // ----------------------------------------------------
    // 2. Header: sticky, menú móvil, scroll spy, smooth scroll
    // ----------------------------------------------------
    function setupHeader() {
        const header = document.querySelector('.site-header');
        const navToggle = document.querySelector('.nav-toggle');
        const navList = document.querySelector('.nav-list');
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('main section[id]');

        let isClickScrolling = false;

        // Sticky header
        const onScroll = () => {
            if (window.scrollY > 30) {
                header.classList.add('is-scrolled');
            } else {
                header.classList.remove('is-scrolled');
            }
        };
        window.addEventListener('scroll', onScroll);
        onScroll();

        // Mobile menu toggle
        if (navToggle && navList) {
            navToggle.addEventListener('click', () => {
                navList.classList.toggle('is-open');
                navToggle.classList.toggle('is-active');
            });
        }

        // Smooth scroll + active state on click
        navLinks.forEach((link) => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const target = document.querySelector(targetId);

                navLinks.forEach((l) => l.classList.remove('active'));
                this.classList.add('active');
                isClickScrolling = true;

                if (navList.classList.contains('is-open')) {
                    navList.classList.remove('is-open');
                    navToggle.classList.remove('is-active');
                }

                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }

                setTimeout(() => { isClickScrolling = false; }, 900);
            });
        });

        // Scroll spy
        const headerHeight = () => header.offsetHeight + 10;

        window.addEventListener('scroll', () => {
            if (isClickScrolling) return;

            let current = 'home';
            sections.forEach((section) => {
                if (window.scrollY >= section.offsetTop - headerHeight()) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach((link) => {
                link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
            });
        });
    }

    function setupFooterYear() {
        const yearEl = document.getElementById('current-year');
        if (yearEl) yearEl.textContent = new Date().getFullYear();
    }

    // ----------------------------------------------------
    // 3. Scroll reveal (fade + slide up)
    // ----------------------------------------------------
    const revealEls = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach((el, i) => {
        el.style.transitionDelay = `${Math.min(i % 4, 3) * 80}ms`;
        revealObserver.observe(el);
    });
});
