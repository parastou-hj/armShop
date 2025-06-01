  
  $(document).ready(function(){
    function resize(){   
        var calculatePadding = parseInt($('.header-container').css("height"));
        
            $(".body-content").css({
                "padding-top": calculatePadding + "px"
            });
        
    }

    resize(); 
    $(window).resize(function(){ 
        resize();
    });
});

  
  
  document.addEventListener('DOMContentLoaded', () => {
        const megaMenuTriggers = document.querySelectorAll('.has-megamenu');
        const allMegaMenus = document.querySelectorAll('.mega-menu');
        let hoverTimeout = null;
        let activeMenu = null;
        let activeTriggerLi = null;

        const closeAllMegaMenus = (immediately = false) => {
            allMegaMenus.forEach(menu => {
                if (menu.classList.contains('active')) {
                    menu.classList.remove('active');
                }
            });
             if (activeTriggerLi) {
                 activeTriggerLi.classList.remove('active-trigger');
             }
            activeMenu = null;
            activeTriggerLi = null;
            if (hoverTimeout && !immediately) {
                 clearTimeout(hoverTimeout);
                 hoverTimeout = null;
            }
        };

        const activateFirstTab = (menu) => {
            if (!menu) return;
            const tabs = menu.querySelectorAll('.pro-tabs > .p-tab');
            const contents = menu.querySelectorAll('.pro-contents > .p-content');

            tabs.forEach(tab => tab.classList.remove('active'));
            contents.forEach(content => content.classList.remove('active'));

            if (tabs.length > 0) {
                const firstTab = tabs[0];
                const firstContentId = firstTab.getAttribute('data-tab');
                const firstContent = menu.querySelector(`.pro-contents > #${firstContentId}`);

                firstTab.classList.add('active');
                if (firstContent) {
                    firstContent.classList.add('active');
                }
            }
        };

        megaMenuTriggers.forEach(triggerLi => {
            const targetMenuId = triggerLi.getAttribute('data-megamenu-target');
            const targetSelector = targetMenuId.startsWith('#') ? targetMenuId : `#${targetMenuId}`;
            // Important: Search for the menu within the nav context if placed inside
            const targetMenu = triggerLi.closest('nav').querySelector(targetSelector);
             // If menus are outside nav, use: document.querySelector(targetSelector);

            if (!targetMenu) {
                 console.warn('Mega menu not found for target:', targetSelector);
                return;
            }

            triggerLi.addEventListener('mouseenter', function() {
                if (hoverTimeout) {
                    clearTimeout(hoverTimeout);
                    hoverTimeout = null;
                }

                if (activeMenu && activeMenu !== targetMenu) {
                    closeAllMegaMenus(true);
                }

                if (!targetMenu.classList.contains('active')) {
                    closeAllMegaMenus(true); // Ensure others are closed

                    activeMenu = targetMenu;
                    activeTriggerLi = this; // Keep track of the trigger
                    activateFirstTab(activeMenu);
                    activeMenu.classList.add('active');
                    activeTriggerLi.classList.add('active-trigger'); // Add style to trigger
                }
            });

            triggerLi.addEventListener('mouseleave', function() {
                hoverTimeout = setTimeout(() => {
                    if (activeMenu && !activeMenu.matches(':hover')) {
                        closeAllMegaMenus(true);
                    }
                    hoverTimeout = null;
                }, 250);
            });
        });

        allMegaMenus.forEach(menu => {
            menu.addEventListener('mouseenter', () => {
                if (hoverTimeout) {
                    clearTimeout(hoverTimeout);
                    hoverTimeout = null;
                }
            });

            menu.addEventListener('mouseleave', () => {
                hoverTimeout = setTimeout(() => {
                    if (activeTriggerLi && !activeTriggerLi.matches(':hover')) {
                        closeAllMegaMenus(true);
                    }
                    hoverTimeout = null;
                }, 250);
            });

            const megaMenuTabs = menu.querySelectorAll('.pro-tabs > .p-tab');
            megaMenuTabs.forEach(tab => {
                tab.addEventListener('mouseenter', function() {
                    if (!menu.classList.contains('active')) return;

                    const tabTargetId = this.getAttribute('data-tab');
                    const tabTargetContent = menu.querySelector(`.pro-contents > #${tabTargetId}`);

                    if (tabTargetContent && !this.classList.contains('active')) {
                        const currentMenuTabs = menu.querySelectorAll('.pro-tabs > .p-tab');
                        const currentMenuContents = menu.querySelectorAll('.pro-contents > .p-content');

                        currentMenuTabs.forEach(t => t.classList.remove('active'));
                        currentMenuContents.forEach(content => content.classList.remove('active'));

                        tabTargetContent.classList.add('active');
                        this.classList.add('active');
                    }
                });
            });
        });

        document.addEventListener('click', function(event) {
            if (activeMenu && !activeMenu.contains(event.target) && activeTriggerLi && !activeTriggerLi.contains(event.target)) {
                closeAllMegaMenus(true);
            }
        });
    });


      $(document).ready(function(){
            var articlesCarousel = $('#baner-owl').owlCarousel({
                rtl: true,
                loop: true,
                margin: 10,
                nav: false,
                dots: true,
                center: true,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                smartSpeed: 1000,
                // stagePadding: 100,
                responsive: {
                    0: {
                        items: 1,
                        stagePadding:50
                    },
                     576: {
                        items: 1.1,
                        stagePadding: 100
                    },
                  
                }
            });
            
            // Custom Navigation
            $('.carousel-prev').click(function() {
                articlesCarousel.trigger('prev.owl.carousel');
            });
            
            $('.carousel-next').click(function() {
                articlesCarousel.trigger('next.owl.carousel');
            });
        });

          $(document).ready(function(){
            $('#product-carousel').owlCarousel({
                rtl:true,
                loop: true,
                margin: 5,
                nav: true,
                dots: false,
                autoplay: true,
                autoplayTimeout: 4000,
                autoplayHoverPause: true,
                navText: ['‹', '›'],
                responsive: {
                    0: {
                        items: 1.5
                    },
                     500: {
                        items: 2
                    },
                    680: {
                        items: 3
                    },
                    1000: {
                        items: 3.5
                    },
                     1200: {
                        items: 4.5
                    },
                    1350: {
                        items: 5
                    }
                }
            });
            
           
        });

         $(document).ready(function(){
            $('.most-sale-carousel').owlCarousel({
                rtl:true,
                loop: true,
                margin: 5,
                nav: true,
                dots: false,
                autoplay: true,
                autoplayTimeout: 4000,
                autoplayHoverPause: true,
                navText: ['‹', '›'],
               responsive: {
                    0: {
                        items: 1.5
                    },
                     500: {
                        items: 2
                    },
                    680: {
                        items: 3
                    },
                    1000: {
                        items: 3.5
                    },
                     1200: {
                        items: 4.5
                    },
                    1350: {
                        items: 5
                    }
                }
            });
            
           
        });
          


        //---------------brands-make-carousel
$(document).ready(function() {
    const initializeOwlCarousel = () => {
        const advantagesContainer=$('.brand-items')
        if (window.innerWidth > 768) {
            if (typeof advantagesContainer.data('owl.carousel') != 'undefined') {
                advantagesContainer.data('owl.carousel').destroy();
              }
              advantagesContainer.removeClass('owl-carousel');
            
        } else if(window.innerWidth <= 768) {
            if (!$('.brand-items').hasClass('owl-carousel')) {
                $('.brand-items').addClass('owl-carousel').owlCarousel({
                    rtl: true,
                    items: 1,
                    
                    dots: true,
                    loop: true,
                    // autoplay: true,
                    // autoplayTimeout: 3000,
                    // autoplayHoverPause: true,
                    responsive: {
                        0: {
                            items: 3
                        },
                        576: {
                            items: 4
                        },
                        768: {
                            items: 5
                        },
                        1200: {
                            items: 6
                        },
                        
                    }
                });
            }
        }
    };

    initializeOwlCarousel();
    $(window).resize(initializeOwlCarousel);

  
});

 function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }


        $(document).ready(function() {
    const $logo = $('.header-logo img');
    const $header = $('.header-container');
    let isScrolled = false;

    $(window).scroll(function() {
        const scrollTop = $(this).scrollTop();
        
        if (scrollTop > 50) {
            if (!isScrolled) {
                $logo.css({
                    'height': '90px',
                    'width': 'auto'
                });
                $header.addClass('scrolled');
                isScrolled = true;
            }
        } else {
            if (isScrolled) {
                $logo.css({
                    'height': '',
                    'width': ''
                });
                $header.removeClass('scrolled');
                isScrolled = false;
            }
        }
    });
});




        document.addEventListener('DOMContentLoaded', function() {
            const mobileMenuToggle = document.getElementById('mobileMenuToggle');
            const mobileMenuClose = document.getElementById('mobileMenuClose');
            const mobileSideMenu = document.getElementById('mobileSideMenu');
            const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
            const body = document.body;

            function openMobileMenu() {
                mobileSideMenu.classList.add('active');
                mobileMenuOverlay.classList.add('active');
                body.classList.add('menu-open');
            }

            function closeMobileMenu() {
                mobileSideMenu.classList.remove('active');
                mobileMenuOverlay.classList.remove('active');
                body.classList.remove('menu-open');
            }

            if (mobileMenuToggle) {
                mobileMenuToggle.addEventListener('click', openMobileMenu);
            }

            if (mobileMenuClose) {
                mobileMenuClose.addEventListener('click', closeMobileMenu);
            }

            if (mobileMenuOverlay) {
                mobileMenuOverlay.addEventListener('click', closeMobileMenu);
            }

            const submenuToggles = document.querySelectorAll('.mobile-menu-item.has-submenu > button');
            submenuToggles.forEach(toggle => {
                toggle.addEventListener('click', function() {
                    const parentItem = this.parentElement;
                    const submenu = parentItem.querySelector('.mobile-submenu');
                    
                    submenuToggles.forEach(otherToggle => {
                        if (otherToggle !== this) {
                            const otherParent = otherToggle.parentElement;
                            const otherSubmenu = otherParent.querySelector('.mobile-submenu');
                            otherParent.classList.remove('active');
                            otherSubmenu.classList.remove('active');
                            
                            const otherCategoryButtons = otherParent.querySelectorAll('.mobile-submenu-category');
                            const otherCategoryItems = otherParent.querySelectorAll('.mobile-category-items');
                            otherCategoryButtons.forEach(btn => btn.classList.remove('active'));
                            otherCategoryItems.forEach(item => item.classList.remove('active'));
                        }
                    });

                    parentItem.classList.toggle('active');
                    submenu.classList.toggle('active');
                    
                    if (!submenu.classList.contains('active')) {
                        const categoryButtons = parentItem.querySelectorAll('.mobile-submenu-category');
                        const categoryItems = parentItem.querySelectorAll('.mobile-category-items');
                        categoryButtons.forEach(btn => btn.classList.remove('active'));
                        categoryItems.forEach(item => item.classList.remove('active'));
                    }
                });
            });

            const categoryToggles = document.querySelectorAll('.mobile-submenu-category');
            categoryToggles.forEach(categoryButton => {
                categoryButton.addEventListener('click', function(e) {
                    e.stopPropagation(); 
                    
                    const categoryItems = this.nextElementSibling;
                    
                    const siblingCategories = this.closest('.mobile-submenu').querySelectorAll('.mobile-submenu-category');
                    const siblingCategoryItems = this.closest('.mobile-submenu').querySelectorAll('.mobile-category-items');
                    
                    siblingCategories.forEach(category => {
                        if (category !== this) {
                            category.classList.remove('active');
                        }
                    });
                    
                    siblingCategoryItems.forEach(items => {
                        if (items !== categoryItems) {
                            items.classList.remove('active');
                        }
                    });
                    
                    this.classList.toggle('active');
                    categoryItems.classList.toggle('active');
                });
            });

            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    closeMobileMenu();
                }
            });

            const mobileSearchBtn = document.querySelector('.mobile-search-btn');
            const mobileSearchInput = document.querySelector('.mobile-search input');

            if (mobileSearchBtn && mobileSearchInput) {
                mobileSearchBtn.addEventListener('click', function() {
                    const searchTerm = mobileSearchInput.value.trim();
                    if (searchTerm) {
                        console.log('جستجو برای:', searchTerm);
                        closeMobileMenu();
                    }
                });

                mobileSearchInput.addEventListener('keypress', function(e) {
                    if (e.key === 'Enter') {
                        mobileSearchBtn.click();
                    }
                });
            }

            mobileSideMenu.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        });

        // $(document).ready(function(){
        //     function resize(){   
        //         var calculatePadding = parseInt($('.header-container').css("height"));
                
        //         $(".body-content").css({
        //             "padding-top": calculatePadding + "px"
        //         });
        //     }

        //     resize(); 
        //     $(window).resize(function(){ 
        //         resize();
        //     });
        // });



        $(document).ready(function() {
    const initializeOwlCarousel = () => {
        const advantagesContainer=$('.blogs')
        if (window.innerWidth > 1200) {
            if (typeof advantagesContainer.data('owl.carousel') != 'undefined') {
                advantagesContainer.data('owl.carousel').destroy();
              }
              advantagesContainer.removeClass('owl-carousel');
            
        } else if(window.innerWidth <= 1200) {
            if (!$('.blogs').hasClass('owl-carousel')) {
                $('.blogs').addClass('owl-carousel').owlCarousel({
                    rtl: true,
                    items: 1,
                    
                    dots: true,
                    loop: true,
                    // autoplay: true,
                    // autoplayTimeout: 3000,
                    // autoplayHoverPause: true,
                    responsive: {
                        0: {
                            items: 1.2
                        },
                        576: {
                            items: 1.5
                        },
                         700: {
                            items: 2.5
                        },
                        800: {
                            items: 3.1
                        },
                         992: {
                            items: 3.1
                        },
                       
                        
                    }
                });
            }
        }
    };

    initializeOwlCarousel();
    $(window).resize(initializeOwlCarousel);

  
});
 $('.user-login').on('mouseenter',function(){
    $('.user-menu').addClass('active'); 
  })

   $('body').on('mouseover',function(e){
    if(!e.target.closest('.user-login')){
    $('.user-menu').removeClass('active');
    // $('.cart-menu-container').removeClass('active');
    }
  })

