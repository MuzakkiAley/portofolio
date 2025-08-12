// Menangani link navigasi yang aktif saat di-scroll
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // Sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
};

// Smooth scrolling (opsional, karena CSS sudah handle)
// Namun, ini lebih robust
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        let targetId = this.getAttribute('href');
        let targetSection = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetSection.offsetTop - 80, // Menyesuaikan dengan tinggi header
            behavior: 'smooth'
        });
    });
});