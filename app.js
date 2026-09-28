document.addEventListener("DOMContentLoaded", () => {
    // Sections ka sequence
    const sectionsList = ["home", "about", "experience", "projects", "education", "contact"];
    let currentIndex = 0;
    let isTransitioning = false; // Freeze hone se rokne ke liye lock

    const sections = document.querySelectorAll(".container");
    const controls = document.querySelectorAll(".control");
    const themeBtn = document.querySelector(".theme-btn");

    // 1. Theme Setup (Light/Dark mode)
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        document.body.classList.add("light-mode");
    }
    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            document.body.classList.toggle("light-mode");
        });
    }

    // 2. Section Switch Karne Ka Main Function
    function switchSection(index) {
        if (index < 0 || index >= sectionsList.length) return;
        
        currentIndex = index;
        const targetId = sectionsList[currentIndex];

        // Old section hide, new section show
        sections.forEach(sec => {
            if (sec.id === targetId) sec.classList.add("active");
            else sec.classList.remove("active");
        });

        // Sidebar ke icon ka rang badalna
        controls.forEach(ctrl => {
            if (ctrl.getAttribute("data-id") === targetId) ctrl.classList.add("active-btn");
            else ctrl.classList.remove("active-btn");
        });

        // Naye page ko top se dikhana
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // 3. Sidebar Button Click Navigtion
    controls.forEach((control) => {
        control.addEventListener("click", function () {
            const targetId = this.getAttribute("data-id");
            currentIndex = sectionsList.indexOf(targetId);
            switchSection(currentIndex);
        });
    });

    // 4. Mouse Wheel Scroll (Smart Navigation)
    window.addEventListener("wheel", (e) => {
        if (isTransitioning) return;

        // Check karna ki user page ke bilkul top ya bottom par hai
        const isAtBottom = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 50);
        const isAtTop = window.scrollY <= 50;

        if (e.deltaY > 0 && isAtBottom) {
            // Niche scroll kiya aur section khatam ho gaya -> Next Section
            if (currentIndex < sectionsList.length - 1) {
                isTransitioning = true;
                switchSection(currentIndex + 1);
                setTimeout(() => isTransitioning = false, 800); // 0.8s ka delay
            }
        } else if (e.deltaY < 0 && isAtTop) {
            // Upar scroll kiya aur top par hain -> Previous Section
            if (currentIndex > 0) {
                isTransitioning = true;
                switchSection(currentIndex - 1);
                setTimeout(() => isTransitioning = false, 800);
            }
        }
    });

    // 5. Mobile Touch / Swipe Navigation
    let touchStartY = 0;
    let touchEndY = 0;

    window.addEventListener("touchstart", (e) => {
        touchStartY = e.changedTouches[0].screenY;
    });

    window.addEventListener("touchend", (e) => {
        if (isTransitioning) return;
        
        touchEndY = e.changedTouches[0].screenY;
        let swipeDistance = touchStartY - touchEndY;

        const isAtBottom = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 50);
        const isAtTop = window.scrollY <= 50;

        if (swipeDistance > 50 && isAtBottom) {
            // Mobile par upar ki taraf swipe kiya (Niche jaane ke liye)
            if (currentIndex < sectionsList.length - 1) {
                isTransitioning = true;
                switchSection(currentIndex + 1);
                setTimeout(() => isTransitioning = false, 800);
            }
        } else if (swipeDistance < -50 && isAtTop) {
            // Mobile par niche ki taraf swipe kiya (Upar jaane ke liye)
            if (currentIndex > 0) {
                isTransitioning = true;
                switchSection(currentIndex - 1);
                setTimeout(() => isTransitioning = false, 800);
            }
        }
    });
});