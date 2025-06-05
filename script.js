// script.js

document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const portfolioItems = document.getElementById('portfolioItems');
    const blogPosts = document.getElementById('blogPosts');
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    // Toggle dark mode
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });

    // Portfolio Items
    const projects = [
        { title: 'AI Art Generator', description: 'A tool to generate art using AI models.' },
        { title: 'Fitness Tracker', description: 'Tracks your daily activities and health goals.' },
        { title: 'Weather Dashboard', description: 'Real-time weather updates using open APIs.' },
        { title: 'Voice Assistant', description: 'Custom-built assistant with Python and JS.' },
    ];

    projects.forEach(project => {
        const item = document.createElement('div');
        item.classList.add('item');
        item.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
        portfolioItems.appendChild(item);
    });

    // Blog Posts
    const posts = [
        { title: 'Why You Should Learn JavaScript', date: '2025-01-10' },
        { title: 'Top 10 VS Code Extensions', date: '2025-02-15' },
        { title: 'CSS Tricks for Better UI', date: '2025-03-05' },
    ];

    posts.forEach(post => {
        const postItem = document.createElement('div');
        postItem.classList.add('post');
        postItem.innerHTML = `<h3>${post.title}</h3><p>Published on: ${post.date}</p>`;
        blogPosts.appendChild(postItem);
    });

    // Contact Form
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = contactForm.name.value.trim();
        const email = contactForm.email.value.trim();
        const message = contactForm.message.value.trim();

        if (name && email && message) {
            formMessage.innerHTML = "<span style='color:green;'>Message sent successfully!</span>";
            contactForm.reset();
        } else {
            formMessage.innerHTML = "<span style='color:red;'>Please fill in all fields.</span>";
        }
    });
});

