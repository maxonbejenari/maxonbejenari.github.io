const translations = {
    en: {
        "nav-about": "About",
        "nav-projects": "Projects",
        "nav-contact": "Contact",
        "nav-education": "Education",
        "title-hello": "Hi, I'm <span>Maxim</span>",
        "title-role": "<span class='text-accent'>Mechatronics Engineer</span>",
        "desc-text": "Motivated Mechatronics Engineer skilled in combining mechanical design, electronics, and software. Good at solving problems, with hands-on experience in CAD, circuits, and programming. A dedicated team player ready to improve processes and build new automated systems.",
        "btn-cv": "Download resume",

        // Skills Section
        "skills-heading": "Skills & <span>Expertise</span>",
        "skill-1-title": "Programming",
        "skill-2-title": "CAD & Modeling",
        "skill-3-title": "Hardware & Control",
        "skill-4-title": "Tools & Frameworks",

        // Projects Section
        "projects-heading": "My <span>Projects</span>",
        "proj-1-title": "The Robot Vacuum Cleaner Simulation Prototype",
        "proj-2-title": "Strength Analysis of Pressure Vessels (Erasmus+ Project) | Istrian University of Applied Sciences",
        "proj-3-title": "ROS2-Servo-Control",
        "proj-4-title": "Automated Industrial Tank Control System",
        "proj-1-desc": "This project is a prototype autonomous vacuum cleaner robot developed entirely in simulation. The robot was designed in Onshape, converted to URDF using onshape-to-robot , simulated in Gazebo, and equipped with: SLAM Toolbox, NAV2, and YOLOv8 for autonomous navigation and object detection. The robot is capable of mapping an environment, planning a coverage path, and avoiding obstacles in real-time.",
        "proj-2-desc": "Conducted strength analysis of pressure vessels for the Erasmus+ project at Istrian University of Applied Sciences, ensuring structural integrity and safety. Also, performed finite element analysis to optimize the design for various loading conditions.",
        "proj-3-desc": "A modern C++ ROS 2 (Jazzy) hardware bridge that translates simulated URDF joint commands into physical micro-servo movements via a CH340 serial connection. ",
        "proj-4-desc": "Developed and simulated a PLC program using Ladder Logic (LD) in CodeSys to automate the liquid level control of an industrial tank. The system processes continuous feedback from three physical state sensors to maintain optimal fluid levels. To maximize equipment lifespan and reliability, was designed an alternating control logic for a dual-pump setup, ensuring even mechanical wear and tear.",


        // Education Section
        "education-heading": "Education",
        "edu-1-title": "High School Diploma",
        "edu-1-desc": "Theoretical Lyceum 'Lucian Blaga', Balti, Moldova | 2021 - 2024",
        "edu-2-title": "Bachelor's Degree in Mechatronics Engineering",
        "edu-2-desc": "University of Bacau, Romania | 2024 - 2028",
        "edu-3-title": "Erasmus+ Exchange Program",
        "edu-3-desc": "Istrian University of Applied Sciences, Croatia | March 2026 - July 2026",

        // Contact Section
        "contact-msg": "Please feel free to reach me out!",
        "contact-email-label": "Email:",

        // Extracurricular Section
        "extracurricular-heading": "Extracurricular <span>Activities</span>",
        "extra-1-title": "Tekwill National Contest Finalist | Mobile Application Development Olympiad",
        "extra-1-desc": "Designed and programmed a functional mobile app for teachers, enhancing their ability to manage their timetable.",
        "extra-2-title": "Tekwill National Contest Finalist | Programming Algorithms in C++",
        "extra-2-desc": "Participated in the Tekwill National Contest, demonstrating proficiency in programming algorithms using C++.",

        // Modal Section
        "modal-title": "Select CV Language",

    },
    ro: {
        "nav-about": "Despre",
        "nav-projects": "Proiecte",
        "nav-contact": "Contact",
        "nav-skills": "Abilități",
        "nav-education": "Educație",
        "nav-extracurricular": "Activități Extracurriculare",
        "title-hello": "Salut, sunt <span>Maxim</span>",
        "title-role": "<span class='text-accent'>Inginer Mecatronist</span>",
        "desc-text": "Inginer mecatronist motivat, capabil să îmbine mecanica, electronica și software-ul. Bun la rezolvarea problemelor, cu experiență practică în programe CAD, circuite și programare. Un coleg de echipă dedicat, pregătit să îmbunătățească procese și să construiască sisteme automatizate noi.",
        "btn-cv": "Descarcă CV",

        // Skills Section
        "skills-heading": "Abilități & <span>Expertiză</span>",
        "skill-1-title": "Programare",
        "skill-2-title": "Proiectare & Modelare 3D",
        "skill-3-title": "Hardware & Control",
        "skill-4-title": "Unelte & Framework-uri",

        // Projects Section
        "projects-heading": "<span>Proiectele</span> Mele",
        "proj-1-title": "Prototipul de Simulare a Aspiratorului Robot",
        "proj-2-title": "Analiza Rezistenței Recipientelor Sub Presiune (Proiect Erasmus+) | Universitatea de Științe Aplicate din Istria",
        "proj-3-title": "ROS2-Servo-Control",
        "proj-4-title": "Sistem Automatizat de Control al Rezervorului Industrial",
        "proj-1-desc": "Acest proiect este un prototip de robot aspirator autonom dezvoltat complet în simulare. Robotul a fost proiectat în Onshape, convertit în URDF folosind onshape-to-robot, simulat în Gazebo și echipat cu: SLAM Toolbox, NAV2 și YOLOv8 pentru navigare autonomă și detectarea obiectelor. Robotul este capabil să cartografieze un mediu, să planifice o cale de acoperire și să evite obstacolele în timp real.",
        "proj-2-desc": "Am realizat analiza rezistenței recipientelor sub presiune pentru proiectul Erasmus+ la Universitatea de Științe Aplicate din Istria, asigurând integritatea structurală și siguranța. De asemenea, am efectuat analiza elementului finit pentru a optimiza designul pentru diferite condiții de încărcare.",
        "proj-3-desc": "Un bridge hardware modern C++ ROS 2 (Jazzy) care traduce comenzile simulate ale articulațiilor URDF în mișcări fizice ale micro-servomotoarelor printr-o conexiune serială CH340.",
        "proj-4-desc": "Am dezvoltat și simulat un program PLC folosind Ladder Logic (LD) în CodeSys pentru a automatiza controlul nivelului de lichid al unui rezervor industrial. Sistemul procesează feedback continuu de la trei senzori de stare fizici pentru a menține niveluri optime de lichid. Pentru a maximiza durata de viață și fiabilitatea echipamentului, a fost proiectată o logică de control alternativă pentru un set de pompe duale, asigurând uzura mecanică uniformă.",

        // Education Section
        "education-heading": "Educație",
        "edu-1-title": "Diplomă de Bacalaureat",
        "edu-1-desc": "Liceul Teoretic 'Lucian Blaga', Bălți, Moldova | 2021 - 2024",
        "edu-2-title": "Licență în Inginerie Mecatronică",
        "edu-2-desc": "Universitatea din Bacău, România | 2024 - 2028",
        "edu-3-title": "Program de Schimb Erasmus+",
        "edu-3-desc": "Universitatea de Științe Aplicate din Istria, Croația | Martie 2026 - Iulie 2026",

        // Contact Section
        "contact-msg": "Nu ezitați să mă contactați!",
        "contact-email-label": "Email:",

        // Extracurricular Section
        "extracurricular-heading": "Activități <span>Extracurriculare</span>",
        "extra-1-title": "Finalist la Concursul Național Tekwill | Olimpiada de Dezvoltare a Aplicațiilor Mobile",
        "extra-1-desc": "Am proiectat și programat o aplicație mobilă funcțională pentru profesori, îmbunătățindu-le capacitatea de a gestiona orarul lor.",
        "extra-2-title": "Finalist la Concursul Național Tekwill | Algoritmi de Programare în C++",
        "extra-2-desc": "Am participat la Concursul Național Tekwill, demonstrând competență în programarea algoritmilor folosind C++.",

        // Modal Section
        "modal-title": "Selectați Limba CV-ului",
    },
    ru: {
        "nav-about": "О себе",
        "nav-projects": "Проекты",
        "nav-contact": "Контакты",
        "nav-education": "Образование",
        "nav-skills": "Навыки",
        "nav-extracurricular": "Внеучебные Деятельности",
        "title-hello": "Привет, я <span>Maxim</span>",
        "title-role": "<span class='text-accent'>Инженер-мехатроник</span>",
        "desc-text": "Мотивированный инженер-мехатроник, умеющий объединять механику, электронику и программирование. Хорошо решаю проблемы, есть практический опыт работы с CAD, электросхемами и кодом. Надежный командный игрок, готовый улучшать рабочие процессы и создавать новые автоматизированные системы",
        "btn-cv": "Скачать резюме",

        // Skills Section
        "skills-heading": "Навыки и <span>Экспертиза</span>",
        "skill-1-title": "Программирование",
        "skill-2-title": "CAD и Моделирование",
        "skill-3-title": "Аппаратное обеспечение",
        "skill-4-title": "Инструменты и Фреймворки",

        // Projects Section
        "projects-heading": "Мои <span>Проекты</span>",
        "proj-1-title": "Прототип Симуляции Робота-Пылесоса",
        "proj-2-title": "Анализ Прочности Давления (Проект Erasmus+) | Истрийский Университет Прикладных Наук",
        "proj-3-title": "ROS2-Servo-Control",
        "proj-4-title": "Автоматизированная Система Контроля Промышленного Резервуара",
        "proj-1-desc": "Этот проект представляет собой прототип автономного робота-пылесоса, полностью разработанный в симуляции. Робот был спроектирован в Onshape, преобразован в URDF с помощью onshape-to-robot, смоделирован в Gazebo и оснащен: SLAM Toolbox, NAV2 и YOLOv8 для автономной навигации и обнаружения объектов",
        "proj-2-desc": "Проведен анализ прочности сосудов под давлением для проекта Erasmus+ в Истрийском университете прикладных наук, обеспечивая структурную целостность и безопасность. Также проведен анализ методом конечных элементов для оптимизации конструкции при различных условиях нагрузки.",
        "proj-3-desc": "Современный C++ ROS 2 (Jazzy) аппаратный мост, который переводит команды суставов URDF из симуляции в физические движения микросервоприводов через последовательное соединение CH340.",
        "proj-4-desc": "Разработана и смоделирована программа ПЛК с использованием Ladder Logic (LD) в CodeSys для автоматизации контроля уровня жидкости в промышленном резервуаре. Система обрабатывает непрерывную обратную связь от трех физических датчиков состояния для поддержания оптимального уровня жидкости. Для максимального срока службы и надежности оборудования была разработана альтернативная логика управления для установки с двумя насосами, обеспечивая равномерный механический износ.",

        // Education Section
        "education-heading": "Образование",
        "edu-1-title": "Аттестат Бакалавра",
        "edu-1-desc": "Теоретический лицей 'Lucian Blaga', Бельцы, Молдова | 2021 - 2024",
        "edu-2-title": "Степень бакалавра в области мехатроники",
        "edu-2-desc": "Университет Бакэу, Румыния | 2024 - 2028",
        "edu-3-title": "Программа обмена Erasmus+",
        "edu-3-desc": "Истрийский университет прикладных наук, Хорватия | Март 2026 - Июль 2026",

        // Contact Section
        "contact-msg": "Не стесняйтесь связаться со мной!",
        "contact-email-label": "Email:",

        // Extracurricular Section
        "extracurricular-heading": "Внеучебные <span>Деятельности</span>",
        "extra-1-title": "Финалист Национального Конкурса Tekwill | Олимпиада по Разработке Мобильных Приложений",
        "extra-1-desc": "Разработал и запрограммировал функциональное мобильное приложение для учителей, улучшив способность управлять расписанием.",
        "extra-2-title": "Финалист Национального Конкурса Tekwill | Алгоритмы Программирования на C++",
        "extra-2-desc": "Участвовал в Национальном Конкурсе Tekwill, демонстрируя навыки программирования алгоритмов на C++.",

        // Modal Section
        "modal-title": "Выберите язык резюме",
    },

    de: {
        "nav-about": "Über mich",
        "nav-projects": "Projekte",
        "nav-contact": "Kontakt",
        "nav-education": "Bildung",
        "nav-skills": "Fähigkeiten",
        "nav-extracurricular": "Außerschulische Aktivitäten",
        "title-hello": "Hallo, ich bin <span>Maxim</span>",
        "title-role": "<span class='text-accent'>Mechatronik-Ingenieur</span>",
        "desc-text": "Motivierter Mechatronik-Ingenieur, der mechanisches Design, Elektronik und Software kombiniert. Gut im Problemlösen, mit praktischer Erfahrung in CAD, Schaltungen und Programmierung. Ein engagierter Teamplayer, bereit, Prozesse zu verbessern und neue automatisierte Systeme zu entwickeln.",
        "btn-cv": "Entladen Lebenslauf",

        // Skills Section
        "skills-heading": "Fähigkeiten & <span>Expertise</span>",
        "skill-1-title": "Programmierung",
        "skill-2-title": "CAD & Modellierung",
        "skill-3-title": "Hardware & Steuerung",
        "skill-4-title": "Werkzeuge & Frameworks",

        // Projects Section
        "projects-heading": "Meine <span>Projekte</span>",
        "proj-1-title": "Der Roboter-Staubsauger-Simulationsprototyp",
        "proj-2-title": "Festigkeitsanalyse von Druckbehältern (Erasmus+ Projekt) | Istrische Hochschule für Angewandte Wissenschaften",
        "proj-3-title": "ROS2-Servo-Control",
        "proj-4-title": "Automatisiertes Industrietank-Steuerungssystem",
        "proj-1-desc": "Dieses Projekt ist ein Prototyp eines autonomen Staubsaugerroboters, der vollständig in der Simulation entwickelt wurde. Der Roboter wurde in Onshape entworfen, mit onshape-to-robot in URDF konvertiert, in Gazebo simuliert und mit SLAM Toolbox, NAV2 und YOLOv8 für autonome Navigation und Objekterkennung ausgestattet. Der Roboter kann eine Umgebung kartieren, einen Abdeckungspfad planen und Hindernisse in Echtzeit vermeiden.",
        "proj-2-desc": "Durchführung der Festigkeitsanalyse von Druckbehältern für das Erasmus+ Projekt an der Istrischen Hochschule für Angewandte Wissenschaften, um die strukturelle Integrität und Sicherheit zu gewährleisten. Außerdem wurde eine Finite-Elemente-Analyse durchgeführt, um das Design für verschiedene Belastungsbedingungen zu optimieren.",
        "proj-3-desc": "Eine moderne C++ ROS 2 (Jazzy) Hardware-Brücke, die simulierte URDF-Gelenkbefehle in physische Mikro-Servo-Bewegungen über eine CH340-Serielle Verbindung übersetzt.",
        "proj-4-desc": "Entwicklung und Simulation eines SPS-Programms unter Verwendung von Ladder Logic (LD) in CodeSys zur Automatisierung der Flüssigkeitsstandskontrolle eines Industrietanks. Das System verarbeitet kontinuierliches Feedback von drei physischen Zustandsensoren, um optimale Flüssigkeitsstände aufrechtzuerhalten. Um die Lebensdauer und Zuverlässigkeit der Ausrüstung zu maximieren, wurde eine alternative Steuerlogik für ein Dualpumpensystem entwickelt, um gleichmäßigen mechanischen Verschleiß zu gewährleisten.",

        // Education Section
        "education-heading": "Bildung",
        "edu-1-title": "Abitur",
        "edu-1-desc": "Theoretisches Lyzeum 'Lucian Blaga', Balti, Moldawien | 2021 - 2024",
        "edu-2-title": "Bachelor-Abschluss in Mechatronik-Ingenieurwesen",
        "edu-2-desc": "Universität Bacau, Rumänien | 2024 - 2028",
        "edu-3-title": "Erasmus+ Austauschprogramm",
        "edu-3-desc": "Istrische Universität für Angewandte Wissenschaften, Kroatien | März 2026 - Juli 2026",

        // Contact Section
        "contact-msg": "Bitte zögern Sie nicht, mich zu kontaktieren!",
        "contact-email-label": "E-Mail:",

        // Extracurricular Section
        "extracurricular-heading": "Außerschulische <span>Aktivitäten</span>",
        "extra-1-title": "Entwicklungsprojekt einer mobilen App – Nationaler Tekwill-Wettbewerb | Olympiade für mobile Anwendungsentwicklung",
        "extra-1-desc": "Entwicklung und Programmierung einer funktionalen mobilen App für Lehrer, um ihre Fähigkeit zur Verwaltung ihres Stundenplans zu verbessern.",
        "extra-2-title": "Finalist des Nationaler Tekwill-Wettbewerb  | Programmieralgorithmen in C++",
        "extra-2-desc": "Teilnahme am Tekwill National Contest, um die Kompetenz in der Programmierung von Algorithmen mit C++ zu demonstrieren.",

        // Modal Section
        "modal-title": "CV-Sprache auswählen",
    }
};

function changeLanguage(lang) {
    for (let key in translations[lang]) {
        document.getElementById(key).innerHTML = translations[lang][key];
    }
}

const modal = document.getElementById("cvModal");
const closeBtn = document.querySelector(".close-modal");

function openCvModal(event) {
    event.preventDefault(); // Prevent the default link behavior
    modal.style.display = "flex"; // Show the modal
}

closeBtn.onclick = function() {
    modal.style.display = "none"; // Hide the modal
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none"; // Hide the modal if clicked outside of it
    }
}