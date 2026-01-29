const bannerCarousel = document.getElementById('bannerCarousel');
const dots = document.querySelectorAll('.dot');
const images = [
  'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&h=400&fit=crop',
  'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
  'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=400&fit=crop',
  'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=400&fit=crop',
  'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=400&fit=crop'
];
let currentSlide = 0;

function updateCarousel() {
  bannerCarousel.style.backgroundImage = `url('${images[currentSlide]}')`;
  dots.forEach((dot, index) => {
    dot.classList.toggle('opacity-100', index === currentSlide);
    dot.classList.toggle('opacity-50', index !== currentSlide);
  });
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    updateCarousel();
  });
});

setInterval(() => {
  currentSlide = (currentSlide + 1) % images.length;
  updateCarousel();
}, 4000);

updateCarousel();

// Manual YouTube video configuration
const YOUTUBE_CONFIG = {
    latestVideoId: 'MHXenps7RQ0',
    channelUrl: 'https://youtube.com/@footballbriefing1'
};

// Load YouTube video manually
function loadLatestVideo() {
    document.getElementById('youtube-widget').innerHTML = `
        <iframe class="w-full h-[250px] rounded" 
                src="https://www.youtube.com/embed/${YOUTUBE_CONFIG.latestVideoId}?autoplay=1&mute=1" 
                frameborder="0" allowfullscreen>
        </iframe>
    `;
    
    document.getElementById('visit-channel-btn').href = YOUTUBE_CONFIG.channelUrl;
}

  // Deals row scroll functionality
    const scrollContainer = document.getElementById('scrollContainer');
    const scrollLeft = document.getElementById('scrollLeft');
    const scrollRight = document.getElementById('scrollRight');

    scrollLeft.addEventListener('click', () => {
      scrollContainer.scrollBy({ left: -200, behavior: 'smooth' });
    });

    scrollRight.addEventListener('click', () => {
      scrollContainer.scrollBy({ left: 200, behavior: 'smooth' });
    });

// Listings data
const listingsData = [
    {
        title: "Luxury 4 Bedroom Duplex - Abuja",
        price: "120,000,000",
        Category: "House",
        image: "images/hero.jpg"
    },
    {
        title: "Commercial Land",
        price: "150,000,000",
        Category: "Land",
        image: "/images/land3.jpg"
    },
    {
        title: "Commercial Toyota",
        price: "150,000,000",
        Category: "Cars",
        image: "/images/car2.jpg"
    },
    {
        title: "2 Bedroom Apartment - Lagos",
        price: "200,000,000",
        Category: "House",
        image: "/images/hero.jpg"
    },
    {
        title: "Shop - Mararaba",
        price: "120,000,000",
        Category: "Shops",
        image: "/images/shop2.jpg"
    },
    {
        title: "Kwuba Extension",
        price: "120,000,000",
        Category: "land",
        image: "/images/land1.jpg"
    },
    {
        title: "GLK Mercedes Benz 2015",
        price: "120,000,000",
        Category: "Cars",
        image: "/images/car2.jpg"
    },
    {
        title: "Open Square - Grarimpa",
        price: "120,000,000",
        Category: "land",
        image: "/images/land2.jpg"
    }
];

const listingsContainer = document.getElementById("listings");
const searchInput = document.getElementById("SearchInput");
const categoryButtons = document.querySelectorAll(".category-btn");

let currentCategory = "All";

function formatPrice(price){
    return "₦" + parseInt(price).toLocaleString();
}

function renderListings(){
    const listingsContainer = document.getElementById("listings");
    if (!listingsContainer) {
        console.error('Listings container not found');
        return;
    }
    
    listingsContainer.innerHTML="";
    const searchValue = searchInput ? searchInput.value.toLowerCase() : '';
    
    const filtered = listingsData.filter(item =>{
        const matchesCategory = currentCategory === "All" || item.Category === currentCategory;
        const matchesSearch = item.title.toLowerCase().includes(searchValue);
        return matchesCategory && matchesSearch;
    });

    filtered.forEach((item, index) =>{
        const listingHTML = `
        <div class="bg-white rounded shadow-md card-hover overflow-hidden group animate-fade-in flex flex-col h-full" style="animation-delay: ${index * 0.1}s">
            <div class="relative overflow-hidden">
                <img src="${item.image}" alt="${item.title}" class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500">
                <div class="absolute top-3 right-3 bg-orange-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    ${item.Category}
                </div>
            </div>
            <div class="p-4 flex flex-col flex-grow">
                <h3 class="font-semibold text-gray-800 mb-2 h-12 line-clamp-2 group-hover:text-orange-600 transition-colors text-center">${item.title}</h3>
                <p class="text-2xl font-bold text-orange-600 mb-3">${formatPrice(item.price)}</p>
                <button class="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2 px-4 rounded-lg font-medium hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg mt-auto">
                    View Details
                </button>
            </div>
        </div>
        `;
        listingsContainer.innerHTML += listingHTML;
    });
}

// Remove the duplicate renderListings() call
// renderListings() - This will be called after preloader hides

// Hamburger menu functionality - Remove duplicate
// const hamburger = document.getElementById("hamburger");
// const mobileMenu = document.getElementById("mobileMenu");

// hamburger.addEventListener("click", () => {
//     mobileMenu.classList.toggle("hidden");
// });

// Preloader with category-specific icons
const categoryIcons = {
    'All': ['🏠', '🚗', '🏢', '🌳'],
    'House': ['🏠'],
    'Cars': ['🚗'],
    'Shops': ['🏢'],
    'Land': ['🌳'],
    'Electronics': ['📱']
};

let currentIcon = 0;
let currentCategoryIcons = categoryIcons['All'];

function changeIcon() {
    const iconElement = document.getElementById('preloader-icon');
    const fillElement = document.getElementById('preloader-fill');
    
    fillElement.style.display = 'block';
    fillElement.style.animation = 'none';
    fillElement.offsetHeight;
    fillElement.style.animation = 'fillUp 0.6s ease-in-out';
    
    setTimeout(() => {
        currentIcon = (currentIcon + 1) % currentCategoryIcons.length;
        iconElement.textContent = currentCategoryIcons[currentIcon];
        fillElement.style.display = 'none';
    }, 300);
}

function setCategoryIcons(category) {
    currentCategoryIcons = categoryIcons[category] || categoryIcons['All'];
    currentIcon = 0;
    document.getElementById('preloader-icon').textContent = currentCategoryIcons[0];
}

let iconInterval;

// Initialize with all icons on page load
setCategoryIcons('All');

// Show preloader function
function showPreloader(category = 'All') {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;
    
    // Clear any existing interval
    if (iconInterval) {
        clearInterval(iconInterval);
    }
    
    setCategoryIcons(category);
    preloader.style.display = 'flex';
    preloader.style.opacity = '1';
    iconInterval = setInterval(changeIcon, 900);
}

// Hide preloader function
function hidePreloader() {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;
    
    if (iconInterval) {
        clearInterval(iconInterval);
        iconInterval = null;
    }
    
    preloader.style.opacity = '0';
    preloader.style.transition = 'opacity 0.3s ease-out';
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 300);
}

// Initial page load - Fixed timing
window.addEventListener('load', () => {
    // Ensure all content is loaded before hiding preloader
    setTimeout(() => {
        hidePreloader();
        // Initialize listings after preloader is hidden
        renderListings();
    }, 800);
});

// Navigation with preloader
function navigateWithPreloader(url, delay = 800) {
    showPreloader();
    setTimeout(() => {
        window.location.href = url;
    }, delay);
}

// Remove duplicate DOMContentLoaded listeners and fix initialization
document.addEventListener('DOMContentLoaded', () => {
    // Load YouTube video on page load
    loadLatestVideo();
    
    // Navigation links with preloader
    const navLinks = document.querySelectorAll('nav a, .mobile-nav-link, header a');
    navLinks.forEach(link => {
        if (!link.href || link.href === '#' || link.href.includes('javascript:')) return;
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navigateWithPreloader(link.href);
        });
    });
    
    // Category buttons functionality with preloader (desktop and mobile)
    const allCategoryButtons = document.querySelectorAll('.category-btn, .mobile-category-btn');
    allCategoryButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const category = btn.dataset.category || btn.textContent.trim();
            showPreloader(category);
            setTimeout(() => {
                try {
                    currentCategory = category;
                    renderListings();
                    // Close mobile menu after selection
                    const menu = document.getElementById('mobileMenu');
                    if (menu) {
                        menu.classList.add('hidden');
                    }
                } catch (error) {
                    console.error('Error rendering listings:', error);
                } finally {
                    hidePreloader();
                }
            }, 500);
        });
    });

    // Search functionality
    const searchInput = document.getElementById('SearchInput');
    const searchButton = document.querySelector('button[class*="bg-PropertyMarket"]');
    
    if (searchInput) {
        // Search on Enter key
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                renderListings();
            }
        });
    }
    
    // Search button functionality
    if (searchButton) {
        searchButton.addEventListener('click', (e) => {
            e.preventDefault();
            renderListings();
        });
    }

    // Mobile menu functionality
    const btn = document.getElementById('mobileMenuBtn');
    const menu = document.getElementById('mobileMenu');
    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }
});