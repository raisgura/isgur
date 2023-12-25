// Function to handle page transitions
function changePage(page) {
    const content = document.getElementById('content');
    content.classList.add('fade-out');

    setTimeout(() => {
        // You can implement page change logic here
        // For simplicity, let's just reload the page
        window.location.reload();
    }, 500); // Wait for 0.5 seconds before reloading
}

// Function to handle navigation menu styling
function setActiveNav(currentPage) {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.textContent.trim().toUpperCase() === currentPage.toUpperCase()) {
            link.classList.add('active');
        }
    });
}

// Function to handle content fade-in after transition
function handleContentFadeIn() {
    const content = document.getElementById('content');
    content.classList.remove('fade-out');
}

// Add event listeners for page load and content fade-in
document.addEventListener('DOMContentLoaded', () => {
    setActiveNav('Home'); // Set initial active state based on the current page
    handleContentFadeIn(); // Handle content fade-in on page load
});

// Add event listener for navigation clicks
document.addEventListener('click', (event) => {
    if (event.target.tagName === 'A' && event.target.getAttribute('href').startsWith('#')) {
        event.preventDefault(); // Prevent default link behavior
        const page = event.target.textContent.trim();
        changePage(page); // Call the changePage function on navigation click
        setActiveNav(page); // Set active state for the clicked link
    }
});
