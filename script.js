document.getElementById("scrollBtn").addEventListener("click", function () {
    document.getElementById("collegeMemories").scrollIntoView({
        behavior: "smooth"
    });
});

// Toggle dropdown visibility for semester tables
function toggleDropdown(id) {
    document.getElementById(id).classList.toggle("hidden");
}

// Search filter for results
function searchResults() {
    const input = document.getElementById("searchInput").value.toUpperCase();
    const tables = document.querySelectorAll(".semester-table table tbody");
    let found = false;

    tables.forEach((table) => {
        const rows = table.getElementsByTagName("tr");
        for (let i = 4; i < rows.length; i++) {
            const cells = rows[i].getElementsByTagName("td");
            let match = Array.from(cells).some(cell => cell.innerText.toUpperCase().includes(input));
            rows[i].style.display = match ? "" : "none";
            if (match) found = true;
        }
    });

    // Optionally display a "not found" message
    const messageDiv = document.getElementById('message');
    if (!found) {
        messageDiv.innerText = 'No results found.';
        messageDiv.classList.add('result-not-found');
    } else {
        messageDiv.innerText = '';
    }
}

// Lightbox functions with spinner
let currentIndex = 0;
let images = [];

function openLightbox(imageArray, caption) {
    images = imageArray;
    currentIndex = 0;
    document.getElementById("lightboxCaption").textContent = caption;
    document.getElementById("lightbox").classList.add("active");
    updateLightboxImage();
}

function closeLightbox() {
    document.getElementById("lightbox").classList.remove("active");
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateLightboxImage();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateLightboxImage();
}

function updateLightboxImage() {
    document.getElementById("lightboxImage").src = images[currentIndex];
}


// JavaScript to handle image cycling in gallery items with multiple photos
document.querySelectorAll('.gallery-item .images').forEach(container => {
    let current = 0;
    const images = container.querySelectorAll('img');
    setInterval(() => {
        images[current].classList.remove('active');
        current = (current + 1) % images.length;
        images[current].classList.add('active');
    }, 2000); // Cycle every 2 seconds
});
