(() => {
    const modalGratitude = document.querySelector('.js-gratitude-container');
    const openGratitude = document.querySelector('.js-open-gratitude');
    const closeGratitude = document.querySelector('.js-close-gratitude');
    let emailInput = document.querySelector('#footer-form-email');
  
    const toggleMenu = () => {
      const isMenuOpen =
        openGratitude.getAttribute('aria-expanded') === 'true' || false;
      openGratitude.setAttribute('aria-expanded', !isMenuOpen);
      if(emailInput.value){
      modalGratitude.classList.toggle('is-open');
  
      const scrollLockMethod = !isMenuOpen
        ? 'disableBodyScroll'
        : 'enableBodyScroll';
      bodyScrollLock[scrollLockMethod](document.body);
    }
    else{
      alert('Введіть вашу електронну адресу')
    }
    };
  
    openGratitude.addEventListener('click', toggleMenu);
    closeGratitude.addEventListener('click', toggleMenu);
  
    // Close the mobile menu on wider screens if the device orientation changes
    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
      if (!e.matches) return;
      modalGratitude.classList.remove('is-open');
      openGratitude.setAttribute('aria-expanded', false);
      // bodyScrollLock.enableBodyScroll(document.body);
    });

  })();


  