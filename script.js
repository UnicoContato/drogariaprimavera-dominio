const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

const openModalBtn = document.getElementById('open-modal');
const closeModalBtns = [document.getElementById('close-modal'), document.getElementById('close-modal-btn')];
const privacyModal = document.getElementById('privacy-modal');
const modalOverlay = document.getElementById('modal-overlay');

const currentYearSpan = document.getElementById('current-year');

let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 80) {
        navbar.classList.add('-translate-y-full');
        mobileMenu.classList.add('hidden');
    } else {
        navbar.classList.remove('-translate-y-full');
    }
    
    if (scrollTop === 0) {
        navbar.classList.replace('bg-white/95', 'bg-white/70');
        navbar.classList.replace('shadow-md', 'shadow-sm');
    } else {
        navbar.classList.replace('bg-white/70', 'bg-white/95');
        navbar.classList.replace('shadow-sm', 'shadow-md');
    }
    
    lastScrollTop = scrollTop;
});

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

function openModal() {
    privacyModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    privacyModal.classList.add('hidden');
    document.body.style.overflow = '';
}

openModalBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
});

closeModalBtns.forEach(btn => {
    if (btn) btn.addEventListener('click', closeModal);
});

modalOverlay.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !privacyModal.classList.contains('hidden')) {
        closeModal();
    }
});

if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}
