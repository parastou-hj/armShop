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
                    // Use activeTriggerLi to check if mouse moved back to trigger
                    if (activeTriggerLi && !activeTriggerLi.matches(':hover')) {
                        closeAllMegaMenus(true);
                    }
                    hoverTimeout = null;
                }, 250);
            });

            // Tab switching logic inside each menu
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

        // Close menu on click outside
        document.addEventListener('click', function(event) {
            if (activeMenu && !activeMenu.contains(event.target) && activeTriggerLi && !activeTriggerLi.contains(event.target)) {
                closeAllMegaMenus(true);
            }
        });
    });


     