// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.getElementById('navLinks');

if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      mobileMenuToggle.classList.remove('active');
    });
  });
}

// Form Handling with Formspree
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const eventType = document.getElementById('event-type').value;
    const message = document.getElementById('message').value;

    // Validate form
    if (!name || !email || !eventType || !message) {
      showNotification('Please fill in all fields', 'error');
      return;
    }

    // Get submit button
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    try {
      // Send email via Formspree
      const response = await fetch('https://formspree.io/f/xvgndrqy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          eventType: eventType,
          message: message
        })
      });

      if (response.ok) {
        console.log('Email sent successfully');
        showNotification('Message sent successfully! We will get back to you soon.', 'success');
        contactForm.reset();
      } else {
        console.error('Failed to send email');
        showNotification('Failed to send message. Please try again.', 'error');
      }

      submitBtn.disabled = false;
      submitBtn.textContent = originalText;

    } catch (error) {
      console.error('Error sending email:', error);
      showNotification('Failed to send message. Please check your connection.', 'error');
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }
  });
}

// Notification System
function showNotification(message, type = 'info') {
  // Remove existing notification
  const existingNotification = document.querySelector('.success-message');
  if (existingNotification) {
    existingNotification.remove();
  }

  // Create notification element
  const notification = document.createElement('div');
  notification.className = `success-message show`;
  notification.textContent = message;

  // Insert after form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.insertBefore(notification, contactForm.firstChild);
  }

  // Auto-remove after 5 seconds
  setTimeout(() => {
    notification.remove();
  }, 5000);
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      const target = document.querySelector(href);
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Intersection Observer for Fade-in Animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section, .event-card, .feature-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Active Navigation Link Highlighting
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');

  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
});

// Lazy Loading Images
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[loading="lazy"]').forEach(img => {
    imageObserver.observe(img);
  });
}

// Add active link styling
const style = document.createElement('style');
style.textContent = `
  .nav-links a.active {
    color: var(--color-primary);
    font-weight: var(--font-weight-bold);
  }
`;
document.head.appendChild(style);

console.log('Eventify - Event Planning Website Loaded Successfully!');
