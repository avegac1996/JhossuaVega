/* ============================================================
   Jhossua Vega — Portfolio i18n (Spanish / English)
   ============================================================ */
(function (window) {
    "use strict";

    var STORAGE_KEY = "jv-lang";
    var DEFAULT_LANG = "es";

    var I18N = {
        es: {
            "hero.kicker": "Disponible para nuevas oportunidades",
            "hero.titleLead": "Hola, soy",
            "hero.role": "<strong>Arquitecto de Datos</strong> &amp; Soluciones Cloud",
            "hero.lede": "Diseño arquitecturas de datos escalables: plataformas Lakehouse, patrones Medallion y estrategias cloud sobre AWS, Azure y Databricks — desde la gobernanza y los estándares técnicos hasta la ejecución, con base en más de 5 años de ingeniería de datos.",
            "hero.ctaCv": "Descargar CV",
            "hero.ctaContact": "Contáctame",
            "hero.statA": "Años en<br>Datos &amp; Cloud",
            "hero.statB": "Certificaciones<br>Cloud &amp; IA",

            "about.eyebrow": "Perfil",
            "about.title": "Sobre mí",
            "about.sub": "Arquitectura de datos con base sólida en ingeniería y gobernanza.",
            "about.cardTitle": "Ingeniero en Ciencias de la Computación",
            "about.roleLine": "Arquitecto de Datos &amp; Soluciones Cloud",
            "about.p1": "Soy <strong>Arquitecto de Datos</strong> con más de <strong>5 años de trayectoria</strong> en ingeniería y gobernanza de datos. Defino el stack tecnológico, diseño patrones <strong>Medallion</strong> y <strong>Data Lakehouse</strong>, y despliego soluciones robustas en <strong>AWS, Azure y Databricks</strong>.",
            "about.p2": "Lidero equipos técnicos y combino visión arquitectónica con experiencia hands-on en <strong>Python</strong> y pipelines ETL/ELT, lo que se traduce en soluciones realistas, automatizadas y de alto rendimiento que sostienen decisiones de negocio.",
            "about.detail.birth": "Fecha de nacimiento",
            "about.detail.birthValue": "27 oct. 1996",
            "about.detail.phone": "Teléfono",
            "about.detail.email": "Email",
            "about.detail.location": "Ubicación",
            "about.detail.languages": "Idiomas",
            "about.detail.languagesValue": "Español, Inglés",
            "about.detail.availability": "Disponibilidad",
            "about.detail.availabilityValue": "Abierto a oportunidades",

            "services.eyebrow": "Qué hago",
            "services.title": "Áreas de especialización",
            "services.sub": "Del diseño arquitectónico a la ejecución, con el mismo stack que opero en producción.",
            "pillar.cloud.title": "Arquitectura de Datos &amp; Cloud",
            "pillar.cloud.desc": "Diseño arquitecturas de datos y despliego infraestructura en AWS, Azure y Databricks: Lakehouse, S3, Fabric, IAM y automatización.",
            "pillar.cloud.toggle": "Ver diseño de arquitectura",
            "pillar.governance.title": "Gobernanza &amp; Calidad",
            "pillar.governance.desc": "Diseño frameworks de linaje, catálogo, calidad y versionamiento de datos que garantizan trazabilidad end-to-end.",
            "pillar.engineering.title": "Ingeniería de Datos",
            "pillar.engineering.desc": "Base técnica: construyo pipelines ETL/ELT en Python y PySpark, arquitectura Medallion e integración de APIs y sistemas transaccionales.",
            "pillar.engineering.toggle": "Ver proceso de linaje",
            "pillar.bi.title": "BI &amp; Analítica",
            "pillar.bi.desc": "Construyo Data Marts y dashboards ejecutivos en Power BI y RShiny que impulsan decisiones de negocio basadas en datos.",

            "exp.eyebrow": "Trayectoria",
            "exp.title": "Experiencia profesional",
            "exp.sub": "Progresión desde ingeniería y calidad de datos hasta arquitectura de datos y liderazgo técnico.",
            "exp.badge.current": "Actual",

            "exp.turingtech.date": "Ene 2025 — Actualidad",
            "exp.turingtech.title": "Arquitecto de Soluciones y Tech Lead",
            "exp.turingtech.toggle": "Ver diseño de arquitectura",

            "exp.handytec.date": "Nov 2025 — Actualidad",
            "exp.handytec.toggle": "Ver proceso de linaje",

            "exp.gestcobra.toggle": "Ver proceso ETL",

            "exp.procuraduria.title": "Administrador de Base de Datos",
            "exp.procuraduria.company": "Procuraduría General del Estado",
            "exp.procuraduria.toggle": "Ver estrategia de continuidad",

            "exp.fisa.title": "Data Engineer y BI Developer",
            "exp.fisa.toggle": "Ver pipeline de datos",

            "exp.marmoles.title": "Pasante de Data Engineering",
            "exp.marmoles.toggle": "Ver flujo de datos",

            "exp.igm.title": "Especialista en Calidad y Confiabilidad de Datos",
            "exp.igm.toggle": "Ver proceso de calidad",

            "flow.dataSources": "Fuentes de Datos",
            "flow.ingestion": "Ingesta",
            "flow.apisTransactional": "APIs / Sistemas Transaccionales",
            "flow.pipelineFabric": "Pipeline (PL) en Fabric",
            "flow.relationalModel": "Modelo Relacional",
            "flow.businessRequirement": "Requerimiento de Negocio",
            "flow.architecturalDesign": "Diseño Arquitectónico",
            "flow.cloudDeployment": "Despliegue Cloud",
            "flow.technicalTeam": "Equipo Técnico",
            "flow.fourPeople": "4 personas",
            "flow.financialApis": "APIs Financieras",
            "flow.medallionPattern": "Patrón Medallion",
            "flow.collectionsKpis": "KPIs de cobranza",
            "flow.productionDb": "Base de Datos Producción",
            "flow.backupReplica": "Backup / Réplica",
            "flow.operationalContinuity": "Continuidad Operativa",
            "flow.etlPipelines": "Pipelines ETL",
            "flow.rshinyDashboard": "Dashboard RShiny",
            "flow.unstructuredSources": "Fuentes No Estructuradas",
            "flow.pythonPipelines": "Pipelines Python",
            "flow.inventoryControl": "Control de Inventarios",
            "flow.geospatialData": "Datos Geoespaciales",
            "flow.validationDqa": "Validación / DQA",
            "flow.standardizedCatalog": "Catálogo Estandarizado",

            "edu.eyebrow": "Formación",
            "edu.title": "Educación",
            "edu1.title": "Ingeniería en Ciencias de la Computación",
            "edu2.title": "Pedagogía de los Idiomas (Inglés)",
            "edu3.title": "Bachillerato Técnico en Informática",

            "skills.eyebrow": "Stack técnico",
            "skills.title": "Habilidades",
            "skills.sub": "Las tecnologías que uso a diario, organizadas por área.",
            "skillgroup.lang": "Lenguajes &amp; Procesamiento",
            "skillgroup.cloud": "Cloud &amp; Plataformas",
            "skillgroup.arch": "Arquitectura &amp; Modelado",
            "skillgroup.devops": "Orquestación, DevOps &amp; Calidad",

            "certs.eyebrow": "Credenciales",
            "certs.title": "Certificaciones",
            "certs.sub": "Formación continua en cloud, datos e inteligencia artificial.",
            "certcat.cloud": "Arquitectura Cloud e Ingeniería de Datos",
            "cert.dp700": "Ingeniero de Datos de Fabric Asociado (DP-700)",
            "cert.fabricBootcamp": "Bootcamp Ingeniero de Datos en Fabric",
            "certcat.databricks": "Data Lakehouse &amp; Ecosistema Databricks",
            "certcat.genai": "Inteligencia Artificial Generativa y LLMs",

            "projects.eyebrow": "Emprendimiento",
            "projects.sub": "Proyectos ejecutados como freelancer y fundador.",
            "iris.banner": "Como freelancer y fundador de <strong>Iris Business Data Analytics</strong>, lidero proyectos de extremo a extremo: desarrollo full-stack, infraestructura cloud e ingeniería de datos, bajo el lema <em>“Iris, tecnología a tu alcance”</em>.",
            "proj1.title": "Ingeniería de Datos",
            "proj1.desc": "Arquitectura Medallion y Data Governance en Gestcobra para estandarizar el flujo y la calidad de los datos.",
            "proj2.desc": "Diseño de un Data Warehouse estructurado para el software de cobranzas TCobro.",
            "proj3.desc": "Cuadros de mando e informes analíticos en Power BI para GVMARMOL y Panadería Nathalia.",
            "proj4.desc": "Pipelines CI/CD y contenedores Docker en AWS/Azure para despliegue automatizado de APIs.",
            "proj5.desc": "Flujos ETL en Python para automatizar el procesamiento de datos en la Cooperativa Santa Rosa.",
            "proj6.desc": "Interfaz del software de cobranzas TCOBRO para gestión de carteras vencidas.",
            "proj7.title": "Infraestructura &amp; Networking",
            "proj7.desc": "Servidor Issabel y Gateway Openbox para el Call Center de Multigesión Ambato.",
            "proj8.title": "Telefonía IP",
            "proj8.desc": "Optimización de campañas outbound e IVRs sobre plataformas de telefonía IP.",

            "contact.eyebrow": "Contacto",
            "contact.title": "Trabajemos juntos",
            "contact.sub": "Disponible para nuevas oportunidades, proyectos de consultoría o soporte de infraestructura.",
            "contact.phoneLabel": "Teléfono / WhatsApp",
            "contact.locationLabel": "Ubicación",
            "contact.cta.title": "¿Tienes un proyecto de datos en mente?",
            "contact.cta.desc": "Escríbeme y conversemos sobre cómo puedo ayudarte a construir tu plataforma de datos.",
            "contact.cta.button": "Enviar un correo",

            "nav.home": "Inicio",
            "nav.about": "Perfil",
            "nav.experience": "Experiencia",
            "nav.skills": "Habilidades",
            "nav.certifications": "Certificaciones",
            "nav.projects": "Proyectos",
            "nav.contact": "Contacto",
            "nav.downloadCv": "Descargar CV",

            "footer.rights": "Todos los derechos reservados.",

            "flow.showLabel": "Mostrar diagrama",
            "flow.hideLabel": "Ocultar diagrama"
        },
        en: {
            "hero.kicker": "Open to new opportunities",
            "hero.titleLead": "Hi, I'm",
            "hero.role": "<strong>Data Architect</strong> &amp; Cloud Solutions",
            "hero.lede": "I design scalable data architectures: Lakehouse platforms, Medallion patterns, and cloud strategy across AWS, Azure, and Databricks — from governance and technical standards through execution, built on more than 5 years in data engineering.",
            "hero.ctaCv": "Download CV",
            "hero.ctaContact": "Get in touch",
            "hero.statA": "Years in<br>Data &amp; Cloud",
            "hero.statB": "Certifications<br>Cloud &amp; AI",

            "about.eyebrow": "Profile",
            "about.title": "About Me",
            "about.sub": "Data architecture grounded in strong engineering and governance.",
            "about.cardTitle": "B.S. in Computer Science Engineering",
            "about.roleLine": "Data Architect &amp; Cloud Solutions",
            "about.p1": "I'm a <strong>Data Architect</strong> with over <strong>5 years</strong> of experience in data engineering and governance. I define the technology stack, design <strong>Medallion</strong> and <strong>Data Lakehouse</strong> patterns, and deploy robust solutions on <strong>AWS, Azure, and Databricks</strong>.",
            "about.p2": "I lead technical teams and pair architectural vision with hands-on experience in <strong>Python</strong> and ETL/ELT pipelines — translating into realistic, automated, high-performance solutions that support business decisions.",
            "about.detail.birth": "Date of birth",
            "about.detail.birthValue": "Oct 27, 1996",
            "about.detail.phone": "Phone",
            "about.detail.email": "Email",
            "about.detail.location": "Location",
            "about.detail.languages": "Languages",
            "about.detail.languagesValue": "Spanish, English",
            "about.detail.availability": "Availability",
            "about.detail.availabilityValue": "Open to opportunities",

            "services.eyebrow": "What I do",
            "services.title": "Areas of Expertise",
            "services.sub": "From architectural design to execution, using the same stack I run in production.",
            "pillar.cloud.title": "Data &amp; Cloud Architecture",
            "pillar.cloud.desc": "I design data architectures and deploy infrastructure on AWS, Azure, and Databricks: Lakehouse, S3, Fabric, IAM, and automation.",
            "pillar.cloud.toggle": "View architecture design",
            "pillar.governance.title": "Governance &amp; Quality",
            "pillar.governance.desc": "I design lineage, catalog, quality, and versioning frameworks that guarantee end-to-end traceability.",
            "pillar.engineering.title": "Data Engineering",
            "pillar.engineering.desc": "Technical foundation: I build ETL/ELT pipelines in Python and PySpark, Medallion architecture, and API/transactional system integration.",
            "pillar.engineering.toggle": "View lineage process",
            "pillar.bi.title": "BI &amp; Analytics",
            "pillar.bi.desc": "I build Data Marts and executive dashboards in Power BI and RShiny that drive data-driven business decisions.",

            "exp.eyebrow": "Career Path",
            "exp.title": "Professional Experience",
            "exp.sub": "Progression from data engineering and quality to data architecture and technical leadership.",
            "exp.badge.current": "Current",

            "exp.turingtech.date": "Jan 2025 — Present",
            "exp.turingtech.title": "Solutions Architect &amp; Tech Lead",
            "exp.turingtech.toggle": "View architecture design",

            "exp.handytec.date": "Nov 2025 — Present",
            "exp.handytec.toggle": "View lineage process",

            "exp.gestcobra.toggle": "View ETL process",

            "exp.procuraduria.title": "Database Administrator",
            "exp.procuraduria.company": "Office of the Attorney General of Ecuador",
            "exp.procuraduria.toggle": "View continuity strategy",

            "exp.fisa.title": "Data Engineer &amp; BI Developer",
            "exp.fisa.toggle": "View data pipeline",

            "exp.marmoles.title": "Data Engineering Intern",
            "exp.marmoles.toggle": "View data flow",

            "exp.igm.title": "Data Quality &amp; Reliability Specialist",
            "exp.igm.toggle": "View quality process",

            "flow.dataSources": "Data Sources",
            "flow.ingestion": "Ingestion",
            "flow.apisTransactional": "APIs / Transactional Systems",
            "flow.pipelineFabric": "Pipeline (PL) in Fabric",
            "flow.relationalModel": "Relational Model",
            "flow.businessRequirement": "Business Requirement",
            "flow.architecturalDesign": "Architectural Design",
            "flow.cloudDeployment": "Cloud Deployment",
            "flow.technicalTeam": "Technical Team",
            "flow.fourPeople": "4 people",
            "flow.financialApis": "Financial APIs",
            "flow.medallionPattern": "Medallion Pattern",
            "flow.collectionsKpis": "Collections KPIs",
            "flow.productionDb": "Production Database",
            "flow.backupReplica": "Backup / Replica",
            "flow.operationalContinuity": "Operational Continuity",
            "flow.etlPipelines": "ETL Pipelines",
            "flow.rshinyDashboard": "RShiny Dashboard",
            "flow.unstructuredSources": "Unstructured Sources",
            "flow.pythonPipelines": "Python Pipelines",
            "flow.inventoryControl": "Inventory Control",
            "flow.geospatialData": "Geospatial Data",
            "flow.validationDqa": "Validation / DQA",
            "flow.standardizedCatalog": "Standardized Catalog",

            "edu.eyebrow": "Education",
            "edu.title": "Education",
            "edu1.title": "B.S. in Computer Science Engineering",
            "edu2.title": "Language Pedagogy (English)",
            "edu3.title": "Technical Baccalaureate in Information Technology",

            "skills.eyebrow": "Tech Stack",
            "skills.title": "Skills",
            "skills.sub": "The technologies I use day to day, organized by area.",
            "skillgroup.lang": "Languages &amp; Processing",
            "skillgroup.cloud": "Cloud &amp; Platforms",
            "skillgroup.arch": "Architecture &amp; Modeling",
            "skillgroup.devops": "Orchestration, DevOps &amp; Quality",

            "certs.eyebrow": "Credentials",
            "certs.title": "Certifications",
            "certs.sub": "Continuous learning in cloud, data, and artificial intelligence.",
            "certcat.cloud": "Cloud Architecture &amp; Data Engineering",
            "cert.dp700": "Fabric Data Engineer Associate (DP-700)",
            "cert.fabricBootcamp": "Fabric Data Engineer Bootcamp",
            "certcat.databricks": "Data Lakehouse &amp; Databricks Ecosystem",
            "certcat.genai": "Generative AI &amp; LLMs",

            "projects.eyebrow": "Venture",
            "projects.sub": "Projects delivered as a freelancer and founder.",
            "iris.banner": "As a freelancer and founder of <strong>Iris Business Data Analytics</strong>, I lead end-to-end projects: full-stack development, cloud infrastructure, and data engineering, under the motto <em>“Iris, technology within reach”</em>.",
            "proj1.title": "Data Engineering",
            "proj1.desc": "Medallion architecture and data governance at Gestcobra to standardize data flow and quality.",
            "proj2.desc": "Design of a structured Data Warehouse for the TCobro collections software.",
            "proj3.desc": "Dashboards and analytical reports in Power BI for GVMARMOL and Panadería Nathalia.",
            "proj4.desc": "CI/CD pipelines and Docker containers on AWS/Azure for automated API deployment.",
            "proj5.desc": "Python ETL flows to automate data processing at Cooperativa Santa Rosa.",
            "proj6.desc": "Interface for the TCOBRO collections software for managing overdue accounts.",
            "proj7.title": "Infrastructure &amp; Networking",
            "proj7.desc": "Issabel server and Openbox gateway for the Multigesión Ambato call center.",
            "proj8.title": "IP Telephony",
            "proj8.desc": "Optimization of outbound campaigns and IVRs on IP telephony platforms.",

            "contact.eyebrow": "Contact",
            "contact.title": "Let's work together",
            "contact.sub": "Open to new opportunities, consulting projects, or infrastructure support.",
            "contact.phoneLabel": "Phone / WhatsApp",
            "contact.locationLabel": "Location",
            "contact.cta.title": "Have a data project in mind?",
            "contact.cta.desc": "Reach out and let's talk about how I can help you build your data platform.",
            "contact.cta.button": "Send an email",

            "nav.home": "Home",
            "nav.about": "Profile",
            "nav.experience": "Experience",
            "nav.skills": "Skills",
            "nav.certifications": "Certifications",
            "nav.projects": "Projects",
            "nav.contact": "Contact",
            "nav.downloadCv": "Download CV",

            "footer.rights": "All rights reserved.",

            "flow.showLabel": "Show diagram",
            "flow.hideLabel": "Hide diagram"
        }
    };

    var LISTS = {
        es: {
            "exp.turingtech.bullets": [
                "Diseño la arquitectura y lidero el despliegue cloud de soluciones a medida en BI, IA e Ingeniería de Datos.",
                "Defino el stack tecnológico y los patrones arquitectónicos (microservicios, serverless).",
                "Dirijo un equipo técnico de 4 personas, garantizando escalabilidad, seguridad y optimización de costos."
            ],
            "exp.handytec.bullets": [
                "Implemento soluciones de datos en Microsoft Fabric y Databricks: Lakehouses, notebooks y pipelines ETL/ELT con PySpark, Dataflows y Python.",
                "Diseño arquitecturas bajo patrón Medallion e integro datos desde APIs y sistemas transaccionales.",
                "Gobierno los datos (linaje, catálogo, calidad) y construyo Data Marts para analítica y reporting.",
                "Administro la infraestructura en Azure, Fabric, Databricks y AWS."
            ],
            "exp.gestcobra.bullets": [
                "Diseñé la arquitectura de datos empresarial bajo patrón Medallion, con estandarización y trazabilidad.",
                "Construí pipelines ETL/ELT en Python para datos transaccionales y APIs financieras.",
                "Gestioné la infraestructura AWS (S3, EC2, IAM) y automaticé los KPIs de cobranza.",
                "Entregué Data Marts y reportes avanzados en Power BI."
            ],
            "exp.procuraduria.bullets": [
                "Administré y optimicé bases de datos institucionales de alta disponibilidad.",
                "Implementé estrategias de respaldo, recuperación y continuidad operativa (RPO/RTO).",
                "Automaticé migraciones estructuradas y la digitalización documental."
            ],
            "exp.fisa.bullets": [
                "Orquesté y optimicé pipelines ETL, reduciendo los tiempos de carga.",
                "Diseñé modelos y procedimientos almacenados en SQL Server y PL/SQL.",
                "Implementé controles de calidad de datos y dashboards gerenciales en RShiny."
            ],
            "exp.marmoles.bullets": [
                "Modelé datos para control de inventarios y procesos logísticos.",
                "Construí pipelines en Python para ingesta desde fuentes no estructuradas."
            ],
            "exp.igm.bullets": [
                "Validé, estandaricé y curé grandes volúmenes de datos geoespaciales.",
                "Diseñé y ejecuté procesos de Data Quality Assurance."
            ]
        },
        en: {
            "exp.turingtech.bullets": [
                "I design the architecture and lead cloud deployment of custom solutions across BI, AI, and Data Engineering.",
                "I define the technology stack and architectural patterns (microservices, serverless).",
                "I direct a technical team of 4, ensuring scalability, security, and cost optimization."
            ],
            "exp.handytec.bullets": [
                "I implement data solutions on Microsoft Fabric and Databricks: Lakehouses, notebooks, and ETL/ELT pipelines with PySpark, Dataflows, and Python.",
                "I design architectures under the Medallion pattern and integrate data from APIs and transactional systems.",
                "I govern data (lineage, catalog, quality) and build Data Marts for analytics and reporting.",
                "I manage infrastructure across Azure, Fabric, Databricks, and AWS."
            ],
            "exp.gestcobra.bullets": [
                "I designed the enterprise data architecture under the Medallion pattern, with standardization and traceability.",
                "I built ETL/ELT pipelines in Python for transactional data and financial APIs.",
                "I managed AWS infrastructure (S3, EC2, IAM) and automated collections KPIs.",
                "I delivered Data Marts and advanced reporting in Power BI."
            ],
            "exp.procuraduria.bullets": [
                "I administered and optimized high-availability institutional databases.",
                "I implemented backup, recovery, and business continuity strategies (RPO/RTO).",
                "I automated structured migrations and document digitization."
            ],
            "exp.fisa.bullets": [
                "I orchestrated and optimized ETL pipelines, reducing load times.",
                "I designed data models and stored procedures in SQL Server and PL/SQL.",
                "I implemented data quality controls and executive dashboards in RShiny."
            ],
            "exp.marmoles.bullets": [
                "I modeled data for inventory control and logistics processes.",
                "I built Python pipelines to ingest data from unstructured sources."
            ],
            "exp.igm.bullets": [
                "I validated, standardized, and curated large volumes of geospatial data.",
                "I designed and executed Data Quality Assurance processes."
            ]
        }
    };

    function getLang() {
        try {
            var saved = window.localStorage.getItem(STORAGE_KEY);
            if (saved === "es" || saved === "en") return saved;
        } catch (e) { /* storage unavailable */ }
        return DEFAULT_LANG;
    }

    function setLang(lang) {
        try { window.localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
    }

    function applyLanguage(lang) {
        if (lang !== "es" && lang !== "en") lang = DEFAULT_LANG;
        var dict = I18N[lang];
        var lists = LISTS[lang];

        document.documentElement.setAttribute("lang", lang);

        document.querySelectorAll("[data-i18n]").forEach(function (el) {
            var key = el.getAttribute("data-i18n");
            if (dict[key] !== undefined) {
                el.innerHTML = dict[key];
            }
        });

        document.querySelectorAll("[data-i18n-list]").forEach(function (el) {
            var key = el.getAttribute("data-i18n-list");
            var items = lists[key];
            if (!items) return;
            var liEls = el.querySelectorAll("li");
            liEls.forEach(function (li, i) {
                if (items[i] !== undefined) li.textContent = items[i];
            });
        });

        // Flow-toggle buttons: update the stored data-label (used when collapsed)
        // and, if currently expanded, the visible "hide" label.
        document.querySelectorAll(".flow-toggle[data-label-key]").forEach(function (btn) {
            var key = btn.getAttribute("data-label-key");
            var label = dict[key];
            if (!label) return;
            btn.setAttribute("data-label", label);
            var span = btn.querySelector(".flow-toggle-label");
            if (span) {
                var isOpen = btn.classList.contains("is-open");
                span.textContent = isOpen ? dict["flow.hideLabel"] : label;
            }
        });

        // CV download links: swap between the Spanish and English CV files.
        document.querySelectorAll(".cv-link").forEach(function (a) {
            var href = a.getAttribute(lang === "en" ? "data-cv-en" : "data-cv-es");
            if (href) a.setAttribute("href", href);
        });

        // Language toggle button: show the language it would switch TO.
        document.querySelectorAll(".lang-toggle .lang-toggle-label").forEach(function (span) {
            span.textContent = lang === "es" ? "EN" : "ES";
        });

        setLang(lang);
    }

    function toggleLanguage() {
        applyLanguage(getLang() === "es" ? "en" : "es");
    }

    function init() {
        applyLanguage(getLang());
        var btn = document.querySelector(".lang-toggle");
        if (btn) {
            btn.addEventListener("click", toggleLanguage);
        }
    }

    window.JVI18N = {
        init: init,
        apply: applyLanguage,
        toggle: toggleLanguage,
        getLang: getLang,
        dict: I18N
    };
})(window);
