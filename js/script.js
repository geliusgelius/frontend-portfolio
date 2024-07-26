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

    function translateToEnglish() {
        document.querySelectorAll('.header__nav-link')[0].textContent = 'Home';
        document.querySelectorAll('.header__nav-link')[1].textContent = 'Projects';
        document.querySelectorAll('.header__nav-link')[2].textContent = 'About Me';

        document.querySelector('.hero__title').textContent = 'Hello';
        document.querySelector('.hero__description').textContent = 'My name is Angelina. I am a frontend developer.';
        document.querySelector('.hero__resume-button').textContent = 'Download Resume';

        document.querySelector('.projects__title').textContent = 'Latest Projects';
        document.querySelectorAll('.project__title')[0].textContent = 'Website';
        document.querySelectorAll('.project__title')[1].textContent = 'Single-page Promo Site';
        document.querySelectorAll('.project__description')[0].textContent = 'I designed a website for Kropp-fitness using the Figma layout';
        document.querySelectorAll('.project__description')[1].textContent = 'Created a single-page site to promote a new product.';
        document.querySelectorAll('.project__link')[0].textContent = 'Code';
        document.querySelectorAll('.project__link')[1].textContent = 'Demo';

        document.querySelector('.about__title').textContent = 'Welcome!';
        document.querySelector('.about__description').textContent = 'Hi! My name is Angelina, and I am a frontend developer with little experience in creating modern and effective web applications. I am passionate about developing beautiful and functional user interfaces that provide a great user experience.';
        document.querySelector('.about__skills').textContent = 'Website layout: HTML, CSS, JavaScript';
        document.querySelector('.about__text').textContent = 'I can create a website from scratch or improve your existing project.';

        document.querySelector('.footer__text').textContent = 'Made by Angelina Smirnova with ❤️ © 2024';
    }

    function translateToRussian() {
        document.querySelectorAll('.header__nav-link')[0].textContent = 'Главная';
        document.querySelectorAll('.header__nav-link')[1].textContent = 'Проекты';
        document.querySelectorAll('.header__nav-link')[2].textContent = 'Обо мне';

        document.querySelector('.hero__title').textContent = 'Привет';
        document.querySelector('.hero__description').textContent = 'Меня зовут Ангелина. Я фронтенд-разработчик.';
        document.querySelector('.hero__resume-button').textContent = 'Скачать резюме';

        document.querySelector('.projects__title').textContent = 'Последние проекты';
        document.querySelectorAll('.project__title')[0].textContent = 'Сайт';
        document.querySelectorAll('.project__title')[1].textContent = 'Одностраничный промо-сайт';
        document.querySelectorAll('.project__description')[0].textContent = 'Сверстала сайт для Kropp-fitness по макету Figma';
        document.querySelectorAll('.project__description')[1].textContent = 'Создала одностраничный сайт для продвижения нового продукта.';
        document.querySelectorAll('.project__link')[0].textContent = 'Код';
        document.querySelectorAll('.project__link')[1].textContent = 'Демо';

        document.querySelector('.about__title').textContent = 'Добро пожаловать!';
        document.querySelector('.about__description').textContent = 'Привет! Меня зовут Ангелина, и я фронтенд разработчик с небольшим стажем в создании современных и эффективных веб-приложений. Я увлечена разработкой красивых и функциональных пользовательских интерфейсов, которые обеспечивают отличный пользовательский опыт.';
        document.querySelector('.about__skills').textContent = 'Вёрстка сайтов: HTML, CSS, JavaScript';
        document.querySelector('.about__text').textContent = 'Могу создать сайт с нуля или улучшить ваш уже существующий проект.';

        document.querySelector('.footer__text').textContent = 'Сделала Ангелина Смирнова с ❤️ © 2024';
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