
    const hamburgerButton = document.querySelector('.hamburger-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
  

 


    function navToggle() {
      
        mobileMenu.classList.toggle('hidden');
      
        document.body.classList.toggle('no-scroll');
        }


        hamburgerButton.addEventListener('click',navToggle);