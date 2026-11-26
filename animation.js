
// =========================================
// HOGWORLDS PATHFINDER V1.8
// MAGICAL NAVIGATION ANIMATION
// =========================================

(() => {

    // ตรวจสอบระบบนำทางเดิม

    if (
        typeof showStep !== "function" ||
        typeof goHome !== "function"
    ) {

        console.warn(
            "Magical Navigation: Navigation system not found"
        );

        return;

    }


    const frame =
        document.querySelector(".image-frame");

    const routeImage =
        document.getElementById("routeImage");

    const instruction =
        document.getElementById("instruction");


    if (!frame || !routeImage || !instruction) {
        return;
    }


    // เก็บฟังก์ชันเดิมไว้
    // เพื่อรักษาระบบนำทางและรายการโปรด

    const originalShowStep = showStep;

    const originalGoHome = goHome;


    let lastRoute = null;
    let lastStep = -1;

    let animationToken = 0;

    let pendingLoad = null;
    let pendingError = null;


    // ตรวจสอบการตั้งค่าลดการเคลื่อนไหว

    function reducedMotion() {

        return window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

    }


    // =====================================
    // ล้าง Animation เก่า
    // =====================================

    function clearMagic() {

        animationToken++;


        if (pendingLoad) {

            routeImage.removeEventListener(
                "load",
                pendingLoad
            );

        }


        if (pendingError) {

            routeImage.removeEventListener(
                "error",
                pendingError
            );

        }


        pendingLoad = null;
        pendingError = null;


        frame.querySelectorAll(
            ".magic-particle, .magic-old-image"
        ).forEach(element => element.remove());


        frame.classList.remove(
            "magic-glow",
            "magic-arrived"
        );


        instruction.classList.remove(
            "magic-success"
        );

    }


    // =====================================
    // สร้างประกายเวทมนตร์สีทอง
    // =====================================

    function createParticles(amount = 18) {

        if (reducedMotion()) return;


        // ลดจำนวนอนุภาคบนมือถือ

        if (window.innerWidth <= 600) {

            amount = Math.min(amount, 12);

        }


        for (let i = 0; i < amount; i++) {

            const particle =
                document.createElement("span");


            particle.className = "magic-particle";


            particle.textContent =
                i % 3 === 0 ? "✦" : "·";


            particle.setAttribute(
                "aria-hidden",
                "true"
            );


            particle.style.left =
                `${5 + Math.random() * 90}%`;


            particle.style.top =
                `${20 + Math.random() * 70}%`;


            particle.style.fontSize =
                `${8 + Math.random() * 14}px`;


            particle.style.setProperty(
                "--drift",
                `${Math.random() * 80 - 40}px`
            );


            particle.style.animationDelay =
                `${Math.random() * 0.15}s`;


            frame.appendChild(particle);


            particle.addEventListener(
                "animationend",
                () => particle.remove(),
                { once: true }
            );


            // ป้องกันอนุภาคตกค้าง

            setTimeout(() => {

                particle.remove();

            }, 1100);

        }

    }


    // =====================================
    // เอฟเฟกต์เรืองแสง
    // =====================================

    function playMagicGlow() {

        if (reducedMotion()) return;

        frame.classList.remove("magic-glow");

        void frame.offsetWidth;

        frame.classList.add("magic-glow");

        createParticles(18);

    }


    // =====================================
    // เอฟเฟกต์เมื่อถึงจุดหมาย
    // =====================================

    function playArrivalEffect() {

        frame.classList.remove("magic-glow");

        frame.classList.add("magic-arrived");

        instruction.classList.add("magic-success");


        if (!reducedMotion()) {

            createParticles(30);

        }

    }


    // =====================================
    // ระบบเปลี่ยนภาพแบบ Crossfade
    // =====================================

    showStep = function (...args) {

        if (!currentRoute) {

            return originalShowStep.apply(
                this,
                args
            );

        }


        // เก็บภาพเดิมก่อนเปลี่ยนเส้นทาง

        const sameRoute =
            lastRoute === currentRoute;

        const changedStep =
            lastStep !== currentStep;


        const canCrossfade =

            !reducedMotion() &&

            sameRoute &&

            changedStep &&

            routeImage.complete &&

            routeImage.naturalWidth > 0;


        let oldImage = null;


        if (canCrossfade) {

            oldImage =
                document.createElement("img");


            oldImage.src =
                routeImage.currentSrc ||
                routeImage.src;


            oldImage.className =
                "magic-old-image";


            oldImage.alt = "";


            oldImage.setAttribute(
                "aria-hidden",
                "true"
            );

        }


        clearMagic();


        const token = animationToken;


        const isLastStep =

            currentStep ===
            currentRoute.images.length - 1;


        lastRoute = currentRoute;
        lastStep = currentStep;


        // นำภาพเดิมมาซ้อนชั่วคราว

        if (oldImage) {

            frame.appendChild(oldImage);

        }


        let finished = false;


        // =================================
        // เมื่อภาพใหม่โหลดเสร็จ
        // =================================

        function onImageReady() {

            if (
                finished ||
                token !== animationToken
            ) return;


            if (
                !routeImage.complete ||
                routeImage.naturalWidth === 0
            ) return;


            finished = true;


            routeImage.removeEventListener(
                "load",
                onImageReady
            );


            routeImage.removeEventListener(
                "error",
                onImageError
            );


            pendingLoad = null;
            pendingError = null;


            // ค่อย ๆ ทำให้ภาพเก่าจางลง

            if (oldImage) {

                oldImage.classList.add(
                    "fade-out"
                );


                oldImage.addEventListener(
                    "animationend",
                    () => oldImage.remove(),
                    { once: true }
                );


                setTimeout(() => {

                    oldImage.remove();

                }, 500);

            }


            // เอฟเฟกต์ตามสถานะการเดินทาง

            if (isLastStep) {

                playArrivalEffect();

            } else {

                playMagicGlow();

            }

        }


        // =================================
        // กรณีโหลดภาพไม่สำเร็จ
        // =================================

        function onImageError() {

            if (
                finished ||
                token !== animationToken
            ) return;


            finished = true;


            if (oldImage) {

                oldImage.remove();

            }


            routeImage.removeEventListener(
                "load",
                onImageReady
            );


            routeImage.removeEventListener(
                "error",
                onImageError
            );


            pendingLoad = null;
            pendingError = null;

        }


        pendingLoad = onImageReady;

        pendingError = onImageError;


        routeImage.addEventListener(
            "load",
            onImageReady
        );


        routeImage.addEventListener(
            "error",
            onImageError
        );


        // เรียกใช้ระบบนำทางเดิม

        originalShowStep.apply(
            this,
            args
        );


        // รองรับภาพที่โหลดจาก Cache แล้ว

        if (routeImage.complete) {

            if (routeImage.naturalWidth > 0) {

                onImageReady();

            } else {

                onImageError();

            }

        }

    };


    // =====================================
    // ล้างเอฟเฟกต์เมื่อกลับหน้าหลัก
    // =====================================

    goHome = function (...args) {

        clearMagic();

        lastRoute = null;
        lastStep = -1;

        return originalGoHome.apply(
            this,
            args
        );

    };


    console.log(
        "HOGWORLDS V1.8 — Magical Navigation Ready"
    );

})();
