(function () {
    const sections = Array.from(document.querySelectorAll(".container"));
    const controls = Array.from(document.querySelectorAll(".control"));
    const themeBtn = document.querySelector(".theme-btn");
    
    let currentIndex = 0;
    let isTransitioning = false;
    const cooldown = 700; 

    // Function to switch active section
    function activateSection(index) {
        if (index < 0 || index >= sections.length) return;
        
        currentIndex = index;
        
        // Update navigation button active state
        controls.forEach((btn, i) => {
            if (i === currentIndex) {
                btn.classList.add("active-btn");
            } else {
                btn.classList.remove("active-btn");
            }
        });

        // Update visible section
        sections.forEach((sec, i) => {
            if (i === currentIndex) {
                sec.classList.add("active");
            } else {
                sec.classList.remove("active");
            }
        });

        // Reset scroll position to top of new section
        window.scrollTo({ top: 0, behavior: "instant" });
    }

    // 1. BUTTON CLICK NAVIGATION
    controls.forEach((button, index) => {
        button.addEventListener("click", function() {
            activateSection(index);
        });
    });

    // Helper functions to check scroll boundary position
    function isAtBottom() {
        return (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 10);
    }

    function isAtTop() {
        return window.scrollY <= 10;
    }

    // 2. MOUSE WHEEL AUTOMATIC SCROLLING (DESKTOP)
    window.addEventListener("wheel", (e) => {
        if (isTransitioning) return;

        // Scrolling Down at the bottom of the section -> Go to next section
        if (e.deltaY > 0 && isAtBottom()) {
            if (currentIndex < sections.length - 1) {
                isTransitioning = true;
                activateSection(currentIndex + 1);
                setTimeout(() => { isTransitioning = false; }, cooldown);
            }
        } 
        // Scrolling Up at the top of the section -> Go to previous section
        else if (e.deltaY < 0 && isAtTop()) {
            if (currentIndex > 0) {
                isTransitioning = true;
                activateSection(currentIndex - 1);
                setTimeout(() => { isTransitioning = false; }, cooldown);
            }
        }
    }, { passive: true });

    // 3. TOUCH SWIPE AUTOMATIC SCROLLING (MOBILE)
    let touchStartY = 0;

    window.addEventListener("touchstart", (e) => {
        touchStartY = e.touches[0].clientY;
    }, { passive: true });

    window.addEventListener("touchend", (e) => {
        if (isTransitioning) return;

        const touchEndY = e.changedTouches[0].clientY;
        const diffY = touchStartY - touchEndY; // Positive = Swiped Up, Negative = Swiped Down

        // Swiping Up (Scrolling Down) at page bottom -> Go to next section
        if (diffY > 50 && isAtBottom()) {
            if (currentIndex < sections.length - 1) {
                isTransitioning = true;
                activateSection(currentIndex + 1);
                setTimeout(() => { isTransitioning = false; }, cooldown);
            }
        } 
        // Swiping Down (Scrolling Up) at page top -> Go to previous section
        else if (diffY < -50 && isAtTop()) {
            if (currentIndex > 0) {
                isTransitioning = true;
                activateSection(currentIndex - 1);
                setTimeout(() => { isTransitioning = false; }, cooldown);
            }
        }
    }, { passive: true });

    // 4. LIGHT / DARK MODE TOGGLE
    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            document.body.classList.toggle("light-mode");
        });
    }
})();