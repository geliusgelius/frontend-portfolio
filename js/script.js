document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed');

    // Удаление анимации загрузки после полной загрузки страницы
    window.addEventListener('load', function () {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.style.opacity = 0;
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500); // Задержка перед скрытием для плавности
        }
    });

    // Подключение конфигурации частиц
    const particlesScript = document.createElement('script');
    particlesScript.src = 'js/particles-config.js';
    particlesScript.onload = function () {
        console.log('Particles config loaded');
    };
    document.body.appendChild(particlesScript);

    // Переключение темы
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-theme');
            themeToggle.textContent = document.body.classList.contains('dark-theme') ? 'Светлая тема' : 'Тёмная тема';
        });
    }

    // Переключение языка
    const languageToggle = document.getElementById('language-toggle');
    if (languageToggle) {
        languageToggle.addEventListener('click', function() {
            const currentLang = document.documentElement.lang;
            if (currentLang === 'ru') {
                document.documentElement.lang = 'en';
                translateToEnglish();
                languageToggle.textContent = 'RU';
            } else {
                document.documentElement.lang = 'ru';
                translateToRussian();
                languageToggle.textContent = 'EN';
            }
        });
    }

    // Функции перевода 
    function translateToEnglish() {
        document.querySelectorAll('.header__nav-link')[0].textContent = 'Home';
        document.querySelectorAll('.header__nav-link')[1].textContent = 'About Me';
        document.querySelectorAll('.header__nav-link')[2].textContent = 'Projects';

    
        document.querySelector('.hero__title').textContent = 'Hello';
        document.querySelector('.hero__description').textContent = 'My name is Angelina. I am a frontend developer.';
        document.querySelector('.hero__resume-button').textContent = 'Download Resume';
    
        document.querySelector('.projects__title').textContent = 'Latest Projects';
        document.querySelectorAll('.project__title')[0].textContent = 'Kropp-fitness website';
        document.querySelectorAll('.project__title')[1].textContent = 'Movie Search App';
        document.querySelectorAll('.project__title')[2].textContent = 'Website based on the Figma layout';
        document.querySelectorAll('.project__description')[0].textContent = 'The layout of the Kropp-fitness website is based on the layout of Figma. Technologies: HTML, CSS. Contains adaptations for tablet/mobile devices.';
        document.querySelectorAll('.project__description')[1].textContent = 'A simple web application to search for movies using OMDBAPI. Technologies: HTML, CSS, JavaScript (including Fetch API for executing HTTP requests).';
        document.querySelectorAll('.project__description')[2].textContent = 'Layout of the site according to the Figma layout with adaptation for tablet/mobile devices. Technologies: HTML, SCSS';

        document.querySelectorAll('.project__link').forEach(link => {
            if (link.textContent.includes('Код')) {
                link.textContent = 'Code';
            } else if (link.textContent.includes('Демо')) {
                link.textContent = 'Demo';
            }
        });
    
        document.querySelector('.about__title').textContent = 'Welcome!';
        document.querySelector('.about__description').textContent = 'Hi! My name is Angelina, and I am a frontend developer with little experience in creating modern and effective web applications. I am passionate about developing beautiful and functional user interfaces that provide a great user experience.';
        document.querySelector('.about__skills').textContent = 'Website layout: HTML, CSS, JavaScript';
        document.querySelector('.about__text').textContent = 'I can create a website from scratch or improve your existing project.';
    
        document.querySelector('.footer__text').textContent = 'Made by Angelina Smirnova with ❤️ © 2024';
    
        // Translate Hard Skills data-descriptions
        const hardSkills = document.querySelectorAll('.skills-section:nth-of-type(1) .skills-list__item');
        hardSkills[0].dataset.description = 'Markup language for creating web pages';
        hardSkills[1].dataset.description = 'Style sheet language for describing the presentation of a document';
        hardSkills[2].dataset.description = 'Sass is a preprocessor scripting language that is interpreted or compiled into CSS';
        hardSkills[3].dataset.description = 'Programming language for creating interactive effects on web pages';
        hardSkills[4].dataset.description = 'Superset of JavaScript that adds static types';
        hardSkills[5].dataset.description = 'JavaScript library for building user interfaces';
        hardSkills[6].dataset.description = 'Module bundler for JavaScript applications';
        hardSkills[7].dataset.description = 'Developer tools for debugging and profiling';
        hardSkills[8].dataset.description = 'Platform for executing JavaScript code on the server';
    
        // Translate Soft Skills data-descriptions
        const softSkills = document.querySelectorAll('.skills-section:nth-of-type(2) .skills-list__item');
        softSkills[0].dataset.description = 'Ability to work effectively in a team';
        softSkills[1].dataset.description = 'Ability to critically analyze and evaluate information';
        softSkills[2].dataset.description = 'Effective communication and interpersonal skills';
        softSkills[3].dataset.description = 'Ability to find solutions to problems and challenges';
        softSkills[4].dataset.description = 'Ability to adapt to new situations and changes';
        softSkills[5].dataset.description = 'Effective management of time and priorities';
        softSkills[6].dataset.description = 'Ability to adapt to different conditions and environments';
        softSkills[7].dataset.description = 'Ability to lead people to achieve a goal';
        softSkills[8].dataset.description = 'Ability of the psyche to resist external stimuli';
        softSkills[9].dataset.description = 'A character trait inherent in a person capable of performing duties and agreements on time';
    }
    
    function translateToRussian() {
        document.querySelectorAll('.header__nav-link')[0].textContent = 'Главная';
        document.querySelectorAll('.header__nav-link')[1].textContent = 'Обо мне';
        document.querySelectorAll('.header__nav-link')[2].textContent = 'Проекты';

    
        document.querySelector('.hero__title').textContent = 'Привет';
        document.querySelector('.hero__description').textContent = 'Меня зовут Ангелина. Я фронтенд-разработчик.';
        document.querySelector('.hero__resume-button').textContent = 'Скачать резюме';
    
        document.querySelector('.projects__title').textContent = 'Последние проекты';
        document.querySelectorAll('.project__title')[0].textContent = 'Сайт Kropp-fitness';
        document.querySelectorAll('.project__title')[1].textContent = 'Приложение поиска фильмов';
        document.querySelectorAll('.project__title')[2].textContent = 'Сайт по макету Figma';
        document.querySelectorAll('.project__description')[0].textContent = 'Вёрстка сайта Kropp-fitness по макету Figma. Технологии: HTML, CSS. Содержит адаптацию под планшетные/мобильные устройства.';
        document.querySelectorAll('.project__description')[1].textContent = 'Простое веб-приложение для поиска фильмов с использованием OMDB API. Технологии: HTML, CSS, JavaScript (включая Fetch API для выполнения HTTP-запросов).';
        document.querySelectorAll('.project__description')[2].textContent = 'Верстка сайта по макету Figma с адаптацией под планшетные/мобильные устройства. Технологии: HTML, SCSS';

        
        document.querySelectorAll('.project__link').forEach(link => {
            if (link.textContent.includes('Code')) {
                link.textContent = 'Код';
            } else if (link.textContent.includes('Demo')) {
                link.textContent = 'Демо';
            }
        });
    
        document.querySelector('.about__title').textContent = 'Добро пожаловать!';
        document.querySelector('.about__description').textContent = 'Привет! Меня зовут Ангелина, и я фронтенд разработчик с небольшим стажем в создании современных и эффективных веб-приложений. Я увлечена разработкой красивых и функциональных пользовательских интерфейсов, которые обеспечивают отличный пользовательский опыт.';
        document.querySelector('.about__skills').textContent = 'Вёрстка сайтов: HTML, CSS, JavaScript';
        document.querySelector('.about__text').textContent = 'Могу создать сайт с нуля или улучшить ваш уже существующий проект.';
    
        document.querySelector('.footer__text').textContent = 'Сделала Ангелина Смирнова с ❤️ © 2024';
    
        // Translate Hard Skills data-descriptions
        const hardSkills = document.querySelectorAll('.skills-section:nth-of-type(1) .skills-list__item');
        hardSkills[0].dataset.description = 'Язык разметки для создания веб-страниц';
        hardSkills[1].dataset.description = 'Язык стилей для описания представления документа';
        hardSkills[2].dataset.description = 'Sass — это язык препроцессорного скриптования, который интерпретируется или компилируется в CSS';
        hardSkills[3].dataset.description = 'Язык программирования для создания интерактивных эффектов на веб-страницах';
        hardSkills[4].dataset.description = 'Суперсет JavaScript, который добавляет статические типы';
        hardSkills[5].dataset.description = 'Библиотека JavaScript для создания пользовательских интерфейсов';
        hardSkills[6].dataset.description = 'Модульный упаковщик для JavaScript приложений';
        hardSkills[7].dataset.description = 'Инструменты разработчика для отладки и профилирования';
        hardSkills[8].dataset.description = 'Платформа для выполнения JavaScript-кода на сервере.';
    
        // Translate Soft Skills data-descriptions
        const softSkills = document.querySelectorAll('.skills-section:nth-of-type(2) .skills-list__item');
        softSkills[0].dataset.description = 'Способность эффективно работать в команде';
        softSkills[1].dataset.description = 'Способность критически анализировать и оценивать информацию';
        softSkills[2].dataset.description = 'Эффективные коммуникативные и межличностные навыки';
        softSkills[3].dataset.description = 'Умение находить решения для проблем и вызовов';
        softSkills[4].dataset.description = 'Способность адаптироваться к новым ситуациям и изменениям';
        softSkills[5].dataset.description = 'Эффективное управление своим временем и приоритетами';
        softSkills[6].dataset.description = 'Способность адаптироваться к различным условиям и окружающей среде';
        softSkills[7].dataset.description = 'Способность вести за собой людей для достижения цели.';
        softSkills[8].dataset.description = 'Способность психики противостоять внешним раздражителям.';
        softSkills[9].dataset.description = 'Черта характера, присущая человеку, способному в срок выполнять свои обязанности и договорённости';
    }
    



    // Эффект печатания
    const textElement = document.getElementById('typewriter');
    const text = textElement.innerText;
    textElement.innerText = '';

    let index = 0;
    const typingSpeed = 50; // Скорость печати (мс)

    function type() {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index) === ' ' ? '&nbsp;' : text.charAt(index);
            index++;
            setTimeout(type, typingSpeed);
        }
        // Убедитесь, что курсор остается после последнего символа
        textElement.innerHTML = textElement.innerHTML.replace(/&nbsp;$/, ' ');
    }

    type();
});

// Intersection Observer для появления элементов при прокрутке
document.addEventListener("DOMContentLoaded", function() {
    const fadeInElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    fadeInElements.forEach(element => {
        observer.observe(element);
    });
});


