// Portfolio Images Data
const portfolioData = {
    furniture: [
        'https://images.squarespace-cdn.com/content/v1/5d35f1a3690f4000010e1524/1693609657601-6Z4EEPU5KIBIPI7RHW3N/1+Drawer-+1+Door+NS.jpg?format=2500w',
        'https://images.squarespace-cdn.com/content/v1/5d35f1a3690f4000010e1524/1693609662074-0RLWRP1HCZX8OMSEPKK8/3+Drawer+NS.jpg?format=2500w',
        'https://images.squarespace-cdn.com/content/v1/5d35f1a3690f4000010e1524/1693610151128-YD82X9SVPVIDL12GIPR4/Full+Bedframe-Side+View.jpg?format=2500w',
        'https://images.squarespace-cdn.com/content/v1/5d35f1a3690f4000010e1524/1693610153939-6RPUZBUKKBID8SAWG4M9/IMG_1066.jpg?format=2500w',
        'https://images.squarespace-cdn.com/content/v1/5d35f1a3690f4000010e1524/1693610157780-6RFN5OP5TQC1B3PG0OS9/IMG_3471.jpg?format=2500w',
        'https://images.squarespace-cdn.com/content/v1/5d35f1a3690f4000010e1524/1693610158831-7NKONHYREWUMSI0AK9XK/Table-+Full.jpg?format=2500w',
        'https://images.squarespace-cdn.com/content/v1/5d35f1a3690f4000010e1524/1693610151022-RU8VNP2VVBO20UR7RDO7/IMG_0186.jpg?format=2500w'
    ],
    kitchen: [
        'https://images.squarespace-cdn.com/content/v1/5d35f1a3690f4000010e1524/1575909185181-KB6MM0BEB4EDLWDEL03D/IMG-0757.jpg?format=2500w',
        'https://images.squarespace-cdn.com/content/v1/5d35f1a3690f4000010e1524/1575909195624-Q6SOA1ZEBLNNG1ER6VXD/IMG-0756.jpg?format=2500w',
        'https://images.squarespace-cdn.com/content/v1/5d35f1a3690f4000010e1524/1693610251437-1DFAMN23GZKE616PX4D1/Photo+Feb+27+2023%2C+4+03+38+PM.jpg?format=2500w',
        'https://images.squarespace-cdn.com/content/v1/5d35f1a3690f4000010e1524/1693610269263-7RO882M01O0R1OG4LX6A/Photo+Jun+27+2023%2C+2+56+01+PM.jpg?format=2500w',
        'https://images.squarespace-cdn.com/content/v1/5d35f1a3690f4000010e1524/1693610269574-OZWTKQJ3OKLB8HEB747E/Photo+Jun+27+2023%2C+2+56+13+PM.jpg?format=2500w',
        'https://images.squarespace-cdn.com/content/v1/5d35f1a3690f4000010e1524/1693610285757-C22WJCTSR9Q1Q1TMX4PO/Photo+Jan+30+2023%2C+11+05+23+AM.jpg?format=2500w',
        'https://images.squarespace-cdn.com/content/v1/5d35f1a3690f4000010e1524/1693610305009-MQGZ5N8DWI8UORM1MJIY/IMG_3811.jpg?format=2500w',
        'https://images.squarespace-cdn.com/content/v1/5d35f1a3690f4000010e1524/1693610305161-36L9R9E34IYGVEX3SOWA/IMG_3813.jpg?format=2500w',
        'https://images.squarespace-cdn.com/content/v1/5d35f1a3690f4000010e1524/1693610328757-6A25QOAXJAX6YR22RREB/Photo+Mar+07+2023%2C+10+30+06+AM.jpg?format=2500w',
        'https://images.squarespace-cdn.com/content/v1/5d35f1a3690f4000010e1524/1693610341991-1TITZFO065Z6QK21SI27/Photo+Mar+23+2023%2C+10+19+48+AM.jpg?format=2500w',
        'https://images.squarespace-cdn.com/content/v1/5d35f1a3690f4000010e1524/1693610351126-TKRRCQC5VFVEV9DW7PH3/IMG_2542.jpg?format=2500w',
        'https://images.squarespace-cdn.com/content/v1/5d35f1a3690f4000010e1524/1693610363678-9MFOFYCL920V0EB6BSZB/IMG_0195.jpg?format=2500w',
        'https://images.squarespace-cdn.com/content/v1/5d35f1a3690f4000010e1524/1693610883063-YF8FZQ6208YKFT1J0P1W/Photo+Jan+12+2023%2C+3+47+04+PM.jpg?format=2500w'
    ],
    fireplace: [
        'https://images.squarespace-cdn.com/content/v1/5d35f1a3690f4000010e1524/1575909155437-C8U67605FQWUGC8HCOSB/IMG-0758.jpg?format=2500w',
        'https://images.squarespace-cdn.com/content/v1/5d35f1a3690f4000010e1524/1563832963424-AYYEOSOE7FPMKOBTSFYZ/fireplace1.jpg?format=2500w',
        'https://images.squarespace-cdn.com/content/v1/5d35f1a3690f4000010e1524/1563832967889-SUE660I9LE2HCG9YDTEB/fireplace3.jpg?format=2500w',
        'https://images.squarespace-cdn.com/content/v1/5d35f1a3690f4000010e1524/1563832977761-5W7981XG50QYUVBFF10M/fireplace4.jpg?format=2500w',
        'https://images.squarespace-cdn.com/content/v1/5d35f1a3690f4000010e1524/1693612652454-TMWH4TS2NIPFHSS2LO70/Photo+Jan+30+2023%2C+1+42+15+PM.jpg?format=2500w',
        'https://images.squarespace-cdn.com/content/v1/5d35f1a3690f4000010e1524/1693612731840-VDFTND4PDQ8595N7JICI/2022-12-07+10.37.29.jpg?format=2500w'
    ],
    custom: [
        'https://images.squarespace-cdn.com/content/v1/5d35f1a3690f4000010e1524/1693612731840-VDFTND4PDQ8595N7JICI/2022-12-07+10.37.29.jpg?format=2500w',
        'https://images.squarespace-cdn.com/content/v1/5d35f1a3690f4000010e1524/1693616794727-IPU8FM82LGJYLPMQ3NVH/IMG_3863.jpg?format=2500w',
        'https://images.squarespace-cdn.com/content/v1/5d35f1a3690f4000010e1524/1693616794672-DKC9ID5X58DHGC5UWVGF/IMG_3864.jpg?format=2500w',
        'https://images.squarespace-cdn.com/content/v1/5d35f1a3690f4000010e1524/1693616884020-L8JQHS642ESSXC69C74Y/Photo+Apr+14+2023%2C+9+21+33+AM.jpg?format=2500w',
        'https://images.squarespace-cdn.com/content/v1/5d35f1a3690f4000010e1524/1693617110703-JG4TBDGNEVO509JBQEWU/IMG_3264.jpg?format=2500w',
        'https://images.squarespace-cdn.com/content/v1/5d35f1a3690f4000010e1524/1693617203835-5WP116G2Q7P1CGO8J0TZ/Photo+Aug+31+2023%2C+2+13+23+PM.jpg?format=2500w',
        'https://images.squarespace-cdn.com/content/v1/5d35f1a3690f4000010e1524/1693617485399-JNWIS166FDRWIZOUM03P/Photo+Jul+26+2023%2C+10+51+41+AM.jpg?format=2500w'
    ]
};

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Load Portfolio Images with Gallery View and Touch Support
function loadPortfolio(category = 'all') {
    const portfolioGrid = document.querySelector('.portfolio-grid');
    portfolioGrid.innerHTML = '';

    let images = [];
    if ( category === 'all') {
        Object.values(portfolioData).forEach(categoryImages => {
            images = [...images, ...categoryImages];
        });
    } else {
        images = portfolioData[category] || [];
    }

    const gallery = document.createElement('div');
    gallery.className = 'gallery-container';
    
    const imageContainer = document.createElement('div');
    imageContainer.className = 'gallery-images';
    
    images.forEach((imgSrc, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.innerHTML = `<img src="${imgSrc}" alt="Portfolio Item ${index + 1}">`;
        imageContainer.appendChild(item);
    });

    const prevBtn = document.createElement('button');
    prevBtn.className = 'gallery-nav prev';
    prevBtn.innerHTML = '❮';
    prevBtn.setAttribute('aria-label', 'Previous image');
    
    const nextBtn = document.createElement('button');
    nextBtn.className = 'gallery-nav next';
    nextBtn.innerHTML = '❯';
    nextBtn.setAttribute('aria-label', 'Next image');

    gallery.appendChild(prevBtn);
    gallery.appendChild(imageContainer);
    gallery.appendChild(nextBtn);
    portfolioGrid.appendChild(gallery);

    let currentIndex = 0;
    const totalItems = images.length;
    let touchStartX = 0;
    let touchEndX = 0;

    function updateGallery() {
        imageContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Touch events for swipe
    imageContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
    }, false);

    imageContainer.addEventListener('touchmove', (e) => {
        touchEndX = e.touches[0].clientX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 5) { // Prevent vertical scrolling when swiping
            e.preventDefault();
        }
    }, { passive: false });

    imageContainer.addEventListener('touchend', () => {
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 50) { // Minimum swipe distance
            if (diff > 0) { // Swipe left
                currentIndex = (currentIndex + 1) % totalItems;
            } else { // Swipe right
                currentIndex = (currentIndex - 1 + totalItems) % totalItems;
            }
            updateGallery();
        }
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateGallery();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalItems;
        updateGallery();
    });
}

// Filter Buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        loadPortfolio(e.target.dataset.category);
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar Background Change on Scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Contact Form Handling
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message. We will get back to you soon!');
    e.target.reset();
});

// Initialize portfolio on page load
document.addEventListener('DOMContentLoaded', () => {
    loadPortfolio('all');
});