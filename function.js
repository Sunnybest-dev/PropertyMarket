// Manual YouTube video configuration
const YOUTUBE_CONFIG = {
    latestVideoId: 'MHXenps7RQ0', // Replace with your latest video ID
    channelUrl: 'https://youtube.com/@footballbriefing1' // Replace with your channel URL
};

// Load YouTube video manually
function loadLatestVideo() {
    document.getElementById('youtube-widget').innerHTML = `
        <iframe class="w-full h-32 rounded" 
                src="https://www.youtube.com/embed/${YOUTUBE_CONFIG.latestVideoId}?autoplay=1&mute=1" 
                frameborder="0" allowfullscreen>
        </iframe>
        <p class="text-xs text-gray-600 mt-1">Latest Property Video</p>
    `;
    
    // Set channel URL
    document.getElementById('visit-channel-btn').href = YOUTUBE_CONFIG.channelUrl;
}

const listingsData =[
    {
    title : "Luxury 4 Bedroom Duplex - Abuja",
    price : "120,000,000",
    Category : "House",
    image: "images/hero.jpg"
    },    
    {
    title : "Commericial Land",
    price : "150,000,000",
    Category : "Land",
    image: "/images/land3.jpg"
    },    
    {
    title : "Commericial Toyota",
    price : "150,000,000",
    Category : "Cars",
    image: "/images/car2.jpg"
    },    
    {
    title : "2 Bedroom Apartment - Lagos",
    price : "200,000,000",
    Category : "House",
    image: "/images/hero.jpg"
    },    
    {
    title : "Shop - Mararaba",
    price : "120,000,000",
    Category : "Shops",
    image: "/images/shop2.jpg"
    },    
    {
    title : "Kwuba Extension",
    price : "120,000,000",
    Category : "land",
    image: "/images/land1.jpg"
    },    
    {
    title : "GLK Mecedez Benz 2015",
    price : "120,000,000",
    Category : "Cars",
    image: "/images/car2.jpg"
    },    
    {
    title : "Open Square - Grarimpa",
    price : "120,000,000",
    Category : "land",
    image: "/images/land2.jpg"
    },    
];

const listingsContainer = document.getElementById("listings");
const searchInput = document.getElementById("SearchInput");
const categoryButtons = document.querySelectorAll(".category-btn");

    let currentCategory ="All";
    function formatPrice(price){
    return "₦" + price.toLocaleString();
}

function renderListings(){
    listingsContainer.innerHTML="";
    const filtered = listingsData.filter(item =>{
        const matchesCategory = currentCategory === "All" || item.Category === currentCategory;
        const matchesSearch = item.title.toLowerCase().includes(searchInput.value.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    filtered.forEach((item, index) =>{
        setTimeout(() => {
            listingsContainer.innerHTML += `
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
        }, index * 100);
    })
}

// event 
// Remove the old event listeners as they're now handled in DOMContentLoaded

renderListings()

// Hamburger menu functionality
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

// Preloader with category-specific icons
const categoryIcons = {
    'All': ['🏠', '🚗', '🏢', '🌳'],
    'House': ['🏠'],
    'Cars': ['🚗'],
    'Shops': ['🏢'],
    'Land': ['🌳']
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

let iconInterval = setInterval(changeIcon, 600);

// Initialize with all icons on page load
setCategoryIcons('All');

// Show preloader function
function showPreloader(category = 'All') {
    const preloader = document.getElementById('preloader');
    setCategoryIcons(category);
    preloader.style.display = 'flex';
    preloader.style.opacity = '1';
    iconInterval = setInterval(changeIcon, 900);
}

// Hide preloader function
function hidePreloader() {
    const preloader = document.getElementById('preloader');
    clearInterval(iconInterval);
    preloader.style.opacity = '0';
    preloader.style.transition = 'opacity 0.3s ease-out';
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 300);
}

// Initial page load
window.addEventListener('load', () => {
    setTimeout(() => {
        hidePreloader();
    }, 1500);
});

// Navigation with preloader
function navigateWithPreloader(url, delay = 800) {
    showPreloader();
    setTimeout(() => {
        window.location.href = url;
    }, delay);
}

// Add click handlers for navigation elements
document.addEventListener('DOMContentLoaded', () => {
    // Load YouTube video on page load
    loadLatestVideo();
    // Navigation links
    const navLinks = document.querySelectorAll('nav a, .mobile-nav-link');
    navLinks.forEach(link => {
        if (!link.href || link.href === '#') return;
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navigateWithPreloader(link.href);
        });
    });

    // View Details buttons
    document.addEventListener('click', (e) => {
        if (e.target.textContent === 'View Details') {
            e.preventDefault();
            navigateWithPreloader('#property-details');
        }
    });

    // Category buttons with preloader
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            showPreloader(category);
            setTimeout(() => {
                currentCategory = category;
                renderListings();
                hidePreloader();
            }, 500);
        });
    });

    // Search with preloader
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            showPreloader('All');
            setTimeout(() => {
                renderListings();
                hidePreloader();
            }, 400);
        }
    });
});