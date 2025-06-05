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
// ====== Testimonials Carousel Logic ======

// Select elements
const testimonials = document.querySelectorAll('.testimonial-slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentTestimonial = 0;

// Show testimonial by index
function showTestimonial(index) {
  testimonials.forEach((test, i) => {
    test.classList.toggle('active', i === index);
  });
}

// Show initial testimonial
showTestimonial(currentTestimonial);

// Previous button click
prevBtn.addEventListener('click', () => {
  currentTestimonial--;
  if (currentTestimonial < 0) {
    currentTestimonial = testimonials.length - 1;
  }
  showTestimonial(currentTestimonial);
});

// Next button click
nextBtn.addEventListener('click', () => {
  currentTestimonial++;
  if (currentTestimonial >= testimonials.length) {
    currentTestimonial = 0;
  }
  showTestimonial(currentTestimonial);
});

// Auto-rotate every 8 seconds
setInterval(() => {
  currentTestimonial++;
  if (currentTestimonial >= testimonials.length) {
    currentTestimonial = 0;
  }
  showTestimonial(currentTestimonial);
}, 8000);


// ====== Skill Bars Animation ======

const skillProgressBars = document.querySelectorAll('.skill-progress');

function animateSkills() {
  skillProgressBars.forEach((bar) => {
    const progress = bar.getAttribute('data-progress');
    bar.style.width = '0';
    setTimeout(() => {
      bar.style.width = progress;
    }, 500); // delay for smooth effect
  });
}

// Call the animation once DOM content is loaded
document.addEventListener('DOMContentLoaded', animateSkills);


// ====== Animated Counters ======

const counters = document.querySelectorAll('.counter');

function animateCounters() {
  counters.forEach((counter) => {
    counter.innerText = '0';
    const target = +counter.getAttribute('data-target');
    const increment = target / 200; // animation speed

    function updateCounter() {
      const current = +counter.innerText;
      if (current < target) {
        counter.innerText = ${Math.ceil(current + increment)};
        setTimeout(updateCounter, 15);
      } else {
        counter.innerText = target;
      }
    }

    updateCounter();
  });
}

// Animate counters on scroll into view
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

let countersAnimated = false;

window.addEventListener('scroll', () => {
  if (!countersAnimated) {
    counters.forEach((counter) => {
      if (isInViewport(counter)) {
        animateCounters();
        countersAnimated = true;
      }
    });
  }
});

// Fallback: animate counters on DOM load if already visible
document.addEventListener('DOMContentLoaded', () => {
  counters.forEach((counter) => {
    if (isInViewport(counter)) {
      animateCounters();
      countersAnimated = true;
    }
  });
});


// ====== Dark Mode Toggle (if applicable) ======
// Optional: If you have a dark mode toggle, sync animations or styles here

/* Example: 
const darkModeToggle = document.querySelector('#darkModeToggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
*/

// ====== Extra Utility Functions ======

// Smooth scroll for anchor links (if used anywhere)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetElem = document.querySelector(this.getAttribute('href'));
    if (targetElem) {
      targetElem.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// ====== Optional: Accessibility Improvements ======

// Focus styles for carousel buttons for keyboard users
prevBtn.addEventListener('focus', () => {
  prevBtn.style.outline = '2px solid #2575fc';
});
prevBtn.addEventListener('blur', () => {
  prevBtn.style.outline = 'none';
});

nextBtn.addEventListener('focus', () => {
  nextBtn.style.outline = '2px solid #2575fc';
});
nextBtn.addEventListener('blur', () => {
  nextBtn.style.outline = 'none';
});
