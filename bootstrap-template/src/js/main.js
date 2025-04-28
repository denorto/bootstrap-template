function navbarAnimation() {
    const dropdown = document.querySelector('.dropdown');
    const navbar = document.querySelector('.navbar');
    const navlinks = document.querySelectorAll('a.nav-link');
    const toggler = document.querySelector('.navbar-toggler'); 
    const navbarCollapse = document.querySelector('.navbar-collapse.collapse');
  
    if (!dropdown || !navbar || !toggler) return;
  
    // Navbar-bg when click dropdown
    dropdown.addEventListener('show.bs.dropdown', function () {
      navbar.classList.add('bg-white');
      navlinks.forEach(link => link.classList.add('text-dark'));
    });
  
    dropdown.addEventListener('hide.bs.dropdown', function () {
      // Solo rimuovi se non siamo scrollati (così non sparisce lo stile dopo scroll)
      if (window.scrollY < 50) {
        navbar.classList.remove('bg-white');
        navlinks.forEach(link => link.classList.remove('text-dark'));
      }
    });
  
    // Navbar-bg when scrolling page
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        navbar.classList.add('bg-white');
        navlinks.forEach(link => link.classList.add('text-dark'));
      } else {
        navbar.classList.remove('bg-white');
        navlinks.forEach(link => link.classList.remove('text-dark'));
      }
    });
 
    // Navbar-bg when click toggler
    toggler.addEventListener('click', function () {
      const isCollapsed = toggler.classList.contains('collapsed') && navbarCollapse.contains('show');
      
      if (isCollapsed) {
        navbar.classList.remove('bg-white');
        navlinks.forEach(link => link.classList.remove('text-dark'));
      } else {
        navbar.classList.add('bg-white');
        navlinks.forEach(link => link.classList.add('text-dark'));
      }
    });
  }
  
  navbarAnimation();
  
// Mobile menu & Submenu
function menuMobile () {  
    const openParrotsSubmenu = document.getElementById('openParrotsSubmenu');
    const mobileSubmenu = document.getElementById('mobileSubmenu');
    const backToMenuBtn = document.getElementById('backToMenu');
    const closeMobileSubmenuBtn = document.getElementById('closeMobileSubmenu');

    document.getElementById('openMobileMenu').addEventListener('click', function() {
        // Chiude eventuale menu desktop
        var navbarMenu = document.getElementById('navbarMenu');
        if (navbarMenu.classList.contains('show')) {
        navbarMenu.classList.remove('show');
        }
        
        // Mostra il menu mobile
        var mobileMenu = document.getElementById('mobileMenu');
        mobileMenu.classList.remove('d-none');
    });
      
    document.getElementById('closeMobileMenu').addEventListener('click', function() {
    // Nasconde il menu mobile
    document.getElementById('mobileMenu').classList.add('d-none');
    });

      // Apre il submenu Parrots
    openParrotsSubmenu.addEventListener('click', function () {
        mobileMenu.classList.add('d-none');
        mobileSubmenu.classList.remove('d-none');
        mobileSubmenu.classList.add('d-block');
    });

    // Torna dal submenu al menu principale
    backToMenuBtn.addEventListener('click', function () {
        mobileSubmenu.classList.add('d-none');
        mobileSubmenu.classList.remove('d-block');
        mobileMenu.classList.remove('d-none');
        mobileMenu.classList.add('d-block');
    });

    // Chiude direttamente il submenu
    closeMobileSubmenuBtn.addEventListener('click', function () {
        mobileSubmenu.classList.add('d-none');
        mobileSubmenu.classList.remove('d-block');
    });
  }

  menuMobile();
  