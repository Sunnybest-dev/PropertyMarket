const listingsData =[
    {
    title : "Luxury 4 Bedroom Duplex - Abuja",
    price : "120,000,000",
    Category : "House",
    image: "https://unsplash.com/photos/3d-render-modern-building-exterior-2MA8dFvOMec"
    },    
    {
    title : "Commericial Land",
    price : "150,000,000",
    Category : "Land",
    image: "https://unsplash.com/photos/3d-render-modern-building-exterior-2MA8dFvOMec"
    },    
    {
    title : "2 Bedroom Apartment - Lagos",
    price : "200,000,000",
    Category : "House",
    image: "https://unsplash.com/photos/3d-render-modern-building-exterior-2MA8dFvOMec"
    },    
    {
    title : "Shop - Wuse",
    price : "120,000,000",
    Category : "Shops",
    image: "https://unsplash.com/photos/3d-render-modern-building-exterior-2MA8dFvOMec"
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
            <div class="bg-white rounded-xl shadow-md card-hover overflow-hidden group animate-fade-in flex flex-col h-full" style="animation-delay: ${index * 0.1}s">
                <div class="relative overflow-hidden">
                    <img src="${item.image}" alt="${item.title}" class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500">
                    <div class="absolute top-3 right-3 bg-orange-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        ${item.Category}
                    </div>
                </div>
                <div class="p-4 flex flex-col flex-grow">
                    <h3 class="font-semibold text-gray-800 mb-2 h-12 line-clamp-2 group-hover:text-orange-600 transition-colors">${item.title}</h3>
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
searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        renderListings();
    }
});

categoryButtons.forEach(btn =>{
    btn.addEventListener("click", ()=>{
        currentCategory = btn.dataset.category;
        renderListings();
    })
})

renderListings()

// Hamburger menu functionality
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});