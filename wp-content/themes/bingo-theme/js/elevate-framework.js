/* #Global
  ======================================================= */
const body = document.querySelector('body');

/* #Tabs
  ======================================================= */
const tabs = document.querySelectorAll('.tabs');

if (tabs) {
  tabs.forEach((tab) => {
    const tabBtns = tab.querySelectorAll(':scope > .tab-navigation .tab-btn');
    const tabPanels = tab.querySelectorAll(':scope > .tab-content > ul > .tab-panel');

    tabBtns.forEach((tabBtn) => {
      tabBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const tabPanel = tab.querySelector(tabBtn.dataset.tab);

        tabBtns.forEach((btn) => {
          if (btn == tabBtn) {
            btn.classList.add('active');
          } else {
            btn.classList.remove('active');
          }
        });

        tabPanels.forEach((panel) => {
          if (panel == tabPanel) {
            panel.classList.add('active');
          } else {
            panel.classList.remove('active');
          }
        });

      });
    });
  });
}

/* #Accordion
================================================== */
const accordions = document.querySelectorAll('.accordion');

if (accordions) {
  accordions.forEach((accordion) => {
    const collapsibles = accordion.querySelectorAll('.collapsible');

    accordion.addEventListener('click', (e) => {
      if (e.target.closest('.collapse-toggler')) {
        e.preventDefault();

        const collapsible = e.target.closest('.collapsible');
        const collapse = collapsible.querySelector('.collapse');

        if (!accordion.classList.contains('no-close')) {
          collapsibles.forEach((coll) => {
            if (coll.classList.contains('show') && coll != collapsible) {
              collCollapse = coll.querySelector('.collapse');

              coll.classList.remove('show');
              gsap.to(collCollapse, {
                height: '0'
              });
            }
          });
        }

        collapsible.classList.toggle('show');

        if (collapsible.classList.contains('show')) {
          gsap.to(collapse, {
            height: 'auto',
            duration: .4,
            ease: 'power1.inOut'
          });
        } else {
          gsap.to(collapse, {
            height: '0'
          });
        }
      }
    });
  })
}

/* #Dropdown
    ======================================================= */
const dropdowns = document.querySelectorAll('.dropdown');

if (dropdowns) {
  dropdowns.forEach((dropdown) => {
    if (window.innerWidth > 1024) {
      // Hover
      if (dropdown.classList.contains('hover')) {
        dropdown.addEventListener('mouseover', (e) => {
          dropdown.classList.add('show');
        });
        dropdown.addEventListener('mouseout', (e) => {
          dropdown.classList.remove('show');
        });
        // Click
      } else {
        dropdown.addEventListener('click', (e) => {
          if (e.target.closest('.dropdown-toggler')) {
            e.preventDefault();
            dropdown.classList.toggle('show');
          }
        });
      }
    } else {
      dropdown.addEventListener('click', (e) => {
        if (e.target.closest('.dropdown-toggler')) {
          e.preventDefault();
          dropdown.classList.toggle('show');
        }
      });
    }
  });
}

/* #Custom Select
    ======================================================= */
const customSelects = document.querySelectorAll('.custom-select');

if (customSelects) {
  customSelects.forEach((customSelect) => {
    const selectToggler = customSelect.querySelector('.select-toggler');

    if (window.innerWidth > 1024) {
      // Hover
      if (customSelect.classList.contains('hover')) {
        customSelect.addEventListener('mouseover', (e) => {
          customSelect.classList.add('show');
        });
        customSelect.addEventListener('mouseout', (e) => {
          customSelect.classList.remove('show');
        });
        // Click
      } else {
        customSelect.addEventListener('click', (e) => {
          if (e.target.closest('.select-toggler')) {
            e.preventDefault();
            customSelect.classList.toggle('show');
          }
          if (e.target.closest('.select-menu a')) {
            e.preventDefault();

            const selectLink = e.target.closest('.select-menu a');

            selectToggler.innerHTML = selectLink.innerHTML;
            customSelect.classList.toggle('show');
          }
        });
      }
    } else {
      customSelect.addEventListener('click', (e) => {
        if (e.target.closest('.select-toggler')) {
          e.preventDefault();
          customSelect.classList.toggle('show');
        }
      });
    }
  });
}

/* #Is In Viewport
    ======================================================= */
function isInViewport(el) {

  const rect = el.getBoundingClientRect();

  const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
  const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

  const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
  const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

  return (vertInView && horInView);
}

/* #Popup
  ======================================================= */
const popups = document.querySelectorAll('.popup');
const popupTogglers = document.querySelectorAll('.popup-toggler');
const popupClosers = document.querySelectorAll('.popup-close');
const popupBackdrops = document.querySelectorAll('.popup-backdrop');

if (popups && popupTogglers) {
  popups.forEach((popup) => {
    gsap.set(popup, {
      display: 'flex'
    });

    popup.addEventListener('click', (e) => {
      if (!e.target.closest('.popup-content')) {
        body.classList.remove('no-scroll');
        popup.classList.remove('show');
      }
    });
  });

  popupTogglers.forEach((toggler) => {

    toggler.addEventListener('click', (e) => {
      e.preventDefault();

      const popup = document.querySelector(toggler.dataset.popup);

      body.classList.add('no-scroll');
      popup.classList.add('show');
    });
  });
}

if (popupClosers) {
  popupClosers.forEach((closer) => {
    closer.addEventListener('click', (e) => {
      e.preventDefault();

      const popup = closer.closest('.popup');

      body.classList.remove('no-scroll');
      popup.classList.remove('show');

    })
  });
}

/* #ScrollTo Links
======================================================= */
const scrollToLinks = document.querySelectorAll('.scroll-to-link');

scrollToLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const id = link.hash;
    let yOffset = 0;

    if (window.innerWidth > 1024) {
      yOffset = -95;
    } else {
      yOffset = -100;
    }
    
    const element = document.querySelector(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({top: y, behavior: 'smooth'});
  });
});