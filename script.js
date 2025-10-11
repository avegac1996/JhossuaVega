// =================================================================
// ESTRUCTURA BASE DEL PROYECTO
// Se ejecuta cuando todo el HTML (index.html) está cargado.
// =================================================================
document.addEventListener("DOMContentLoaded", function() {

    // ----------------------------------------------------
    // 1. FUNCIÓN PARA CARGAR PARCIALES (AJAX/Fetch)
    // ----------------------------------------------------
    const loadPartial = (url, elementId) => {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                const placeholder = document.getElementById(elementId);
                if (placeholder) {
                    placeholder.innerHTML = data;
                }
                
                // 💡 CLAVE: Inicializar la Lógica del Header DESPUÉS de cargarlo
                if (elementId === 'header-placeholder') {
                    setupHeaderLogic();
                }
            })
            .catch(error => console.error(`Error al cargar el parcial ${url}:`, error));
    };

    // Llamadas para cargar los parciales
    loadPartial('partials/header.html', 'header-placeholder');
    loadPartial('partials/footer.html', 'footer-placeholder');

    // ----------------------------------------------------
    // 2. LÓGICA DEL HEADER (Se llama solo después de que el header se inyecta)
    // ----------------------------------------------------
    function setupHeaderLogic() {
        // Obtenemos las referencias una vez que el Header ha sido inyectado en el DOM
        const header = document.querySelector('.st-site-header');
        const menuToggle = document.querySelector('.st-munu-toggle');
        
        // 🚨 CORRECCIÓN: Apuntamos al contenedor principal del menú (.st-nav)
        const navContainer = document.querySelector('.st-nav'); 
        
        const links = document.querySelectorAll('.st-nav-list a'); 
        const sections = document.querySelectorAll('section');
        const navLi = document.querySelectorAll('.st-nav-list li a');
        const headerElement = document.querySelector('.st-site-header'); 
        
        // 💡 VARIABLE DE ESTADO: Controla si el Scroll Spy debe pausarse.
        let isScrollingFromClick = false; 

        /* ===============================
            STICKY HEADER & SCROLL
        ================================= */
        if (header) {
            window.addEventListener('scroll', () => {
                // En tu CSS, el sticky se llama .st-site-header.st-sticky-header, así que lo mantendremos simple aquí.
                if (window.scrollY > 50) { 
                    header.classList.add('st-sticky-header'); 
                } else {
                    // Nota: Si quieres que el header cambie de estilo al salir de la parte superior
                    // podrías necesitar otra clase, pero por ahora solo manejaremos el sticky.
                    // Si el CSS ya usa 'st-site-header' como base fija, esto solo maneja el scroll.
                }
            });
        }

        /* ===============================
            Mobile Menu Toggle
        ================================= */
        if (menuToggle && navContainer) {
            menuToggle.addEventListener('click', () => {
                // 🚨 CORRECCIÓN: Usamos la clase 'st-mobile-open' definida en el CSS responsive
                navContainer.classList.toggle('st-mobile-open'); 
                
                // 🚨 CORRECCIÓN: Usamos la clase 'st-active' para la animación de la hamburguesa
                menuToggle.classList.toggle('st-active');
            });
        }

        /* ===============================
            Smooth Scroll, Cierre y MARCADO de Menú
        ================================= */
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                
                // 1. MARCAR ACTIVO INMEDIATAMENTE al hacer clic
                links.forEach(l => l.classList.remove('active'));
                this.classList.add('active'); 
                
                // 2. ACTIVAR EL ESTADO DE PAUSA DEL SCROLL SPY
                isScrollingFromClick = true; 

                // 3. Cierre de menú móvil
                // 🚨 CORRECCIÓN: Verificamos si el contenedor del menú móvil está abierto
                if (navContainer && navContainer.classList.contains('st-mobile-open')) {
                    // Pequeño retraso para que la animación CSS de cierre se vea fluida
                    setTimeout(() => {
                        navContainer.classList.remove('st-mobile-open');
                        menuToggle.classList.remove('st-active');
                    }, 300);
                }
                
                const target = document.querySelector(targetId);
                
                if(target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start' 
                    });
                } else if (targetId === '#home' || targetId === '#') { // Usé '#home' basado en tu HTML
                     window.scrollTo({ top: 0, behavior: 'smooth' });
                }

                // 4. DESACTIVAR EL ESTADO DE PAUSA (1500ms es un tiempo seguro para que termine el scroll)
                setTimeout(() => {
                    isScrollingFromClick = false; 
                }, 1500); 
            });
        });

        /* ===============================
            Menu Active (Scroll Spy) - CONTROLADO POR EL ESTADO
        ================================= */
        window.addEventListener('scroll', () => {
            
            // 💡 Detener el Scroll Spy si un clic reciente lo inició
            if (isScrollingFromClick) {
                return; // Detiene la asignación de la clase 'active' para dar prioridad al clic.
            }

            let current = '';
            // El offset dinámico es la altura del header + un pequeño margen
            const scrollSpyOffset = (headerElement ? headerElement.offsetHeight : 80) + 5; 
            
            // Recorrer del final al principio para priorizar secciones
            const sectionsArray = Array.from(sections);
            sectionsArray.reverse().forEach(section => {
                const sectionTop = section.offsetTop; 
                
                // Verifica si la sección está visible por encima de la línea del header
                if (window.scrollY >= sectionTop - scrollSpyOffset) {
                    current = section.getAttribute('id');
                }
            });
            
            // Caso especial para la sección #home
            if (window.scrollY < scrollSpyOffset) {
                current = 'home';
            }
            
            navLi.forEach(li => {
                li.classList.remove('active');
                
                const linkHref = li.getAttribute('href').replace('#', '');
                
                if(linkHref === current) {
                    li.classList.add('active');
                }
            });
        });
    }

    // =================================================================
    // CÓDIGO AUTÓNOMO QUE NO DEPENDE DE LA CARGA DE PARCIALES
    // =================================================================

    // ----------------------------------------------------
    // 3. 🌧️ EFECTO DE LLUVIA (MATRIX) LÓGICA 🌧️
    // ----------------------------------------------------
    (function startRainEffect() {
        const canvasContainer = document.getElementById('rain-canvas');
        if (!canvasContainer) return; 

        let canvas, ctx, width, height, fontSize, columns, drops;
        const characters = '0123456789ABCDEFabcdefghijklmnopqrstuvwxyz'; 
        fontSize = 16;
        
        let lastTime = 0;
        const fps = 12; 
        const interval = 1000 / fps; 

        canvas = document.createElement('canvas');
        canvasContainer.appendChild(canvas);
        ctx = canvas.getContext('2d');

        function initializeDrops() {
            width = canvasContainer.offsetWidth;
            height = canvasContainer.offsetHeight;
            canvas.width = width;
            canvas.height = height;

            columns = Math.floor(width / fontSize);
            drops = [];
            for (let i = 0; i < columns; i++) {
                drops[i] = 1; 
            }
        }

        initializeDrops(); 
        window.addEventListener('resize', initializeDrops);

        function draw(timestamp) {
            requestAnimationFrame(draw);

            if (timestamp < lastTime + interval) {
                return;
            }
            lastTime = timestamp;

            ctx.fillStyle = 'rgba(0, 0, 0, 0.15)'; 
            ctx.fillRect(0, 0, width, height);

            ctx.fillStyle = '#FFD700'; 
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = characters[Math.floor(Math.random() * characters.length)];
                const x = i * fontSize;
                const y = drops[i] * fontSize;
                
                ctx.fillText(text, x, y);

                if (y * fontSize > height && Math.random() > 0.98) {
                    drops[i] = 0;
                }
                
                drops[i]++;
            }
        }
        
        requestAnimationFrame(draw); 
    })(); 


    // ----------------------------------------------------
    // 4. Section Fade-in on Scroll (Intersection Observer)
    // ----------------------------------------------------
    const faders = document.querySelectorAll('.floating-card, .st-hero-text, .st-service-card, .st-project-card, .st-resume-column');

    const appearOptions = {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if(!entry.isIntersecting) return;
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // ----------------------------------------------------
    // 5. Progress Bars Animation (Intersection Observer)
    // ----------------------------------------------------
    const progressBars = document.querySelectorAll('.st-progressbar'); 

    const progressObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBarContainer = entry.target;
                const progressBarIn = progressBarContainer.querySelector('.st-progressbar-in');
                const progressValue = progressBarContainer.getAttribute('data-progress'); 
                
                if (progressBarIn && progressValue) {
                    progressBarIn.style.width = progressValue + '%';
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.7 
    });

    progressBars.forEach(bar => {
        progressObserver.observe(bar);
    });
    
    // ----------------------------------------------------
    // 6. Update Footer Year
    // ----------------------------------------------------
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
});