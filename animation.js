
// =========================================
// HOGWORLDS PATHFINDER V1.8.1
// LIVING MAGIC
// CONTINUOUS NAVIGATION EFFECTS
// =========================================

(() => {

    // =====================================
    // ตั้งค่า Animation
    // =====================================

    const MAGIC_CONFIG = {

        // ระยะเวลาเปลี่ยนภาพ

        crossfadeDuration: 600,


        // จำนวนประกายระหว่างเดินทาง

        normalParticles: 24,


        // จำนวนประกายเมื่อถึงจุดหมาย

        arrivalParticles: 55,


        // จำนวนประกายบนมือถือ

        mobileNormalParticles: 12,

        mobileArrivalParticles: 26,


        // ระยะเวลาฉลองเมื่อถึงจุดหมาย
        // 8000 = 8 วินาที

        arrivalDuration: 8000,


        // ความเร็วของประกายเวทมนตร์

        particleMinDuration: 5,

        particleMaxDuration: 10

    };


    // =====================================
    // ตรวจสอบระบบนำทางเดิม
    // =====================================

    if (
        typeof showStep !== "function" ||
        typeof goHome !== "function"
    ) {

        console.warn(
            "Living Magic: Navigation system not found"
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


    // =====================================
    // เก็บระบบนำทางเดิม
    // =====================================

    const originalShowStep = showStep;

    const originalGoHome = goHome;


    let lastRoute = null;

    let lastStep = -1;

    let animationToken = 0;

    let pendingLoad = null;

    let pendingError = null;

    let arrivalTimer = null;


    // =====================================
    // ตรวจสอบการตั้งค่าการเคลื่อนไหว
    // =====================================

    function reducedMotion() {

        return window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

    }


    function isMobile() {

        return window.innerWidth <= 600;

    }


    // =====================================
    // ล้าง Animation เดิม
    // =====================================

    function clearMagic() {

        animationToken++;


        clearTimeout(arrivalTimer);

        arrivalTimer = null;


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
            ".magic-particle-layer, " +
            ".magic-particle, " +
            ".magic-old-image"
        ).forEach(element => {

            element.remove();

        });


        frame.classList.remove(

            "magic-active",

            "magic-glow",

            "magic-arrived",

            "magic-arrival-burst",

            "magic-paused"

        );


        instruction.classList.remove(

            "magic-success",

            "magic-paused"

        );

    }


    // =====================================
    // สร้างประกายเวทมนตร์แบบต่อเนื่อง
    // =====================================

    function createContinuousParticles(
        isArrival = false
    ) {

        if (reducedMotion()) return;


        // ลบกล่องอนุภาคเก่าออกก่อน

        const oldLayer = frame.querySelector(
            ".magic-particle-layer"
        );

        if (oldLayer) {

            oldLayer.remove();

        }


        const layer =
            document.createElement("div");


        layer.className =
            "magic-particle-layer";


        layer.setAttribute(
            "aria-hidden",
            "true"
        );


        // กำหนดจำนวนอนุภาค

        let amount;


        if (isMobile()) {

            amount = isArrival

                ? MAGIC_CONFIG.mobileArrivalParticles

                : MAGIC_CONFIG.mobileNormalParticles;

        } else {

            amount = isArrival

                ? MAGIC_CONFIG.arrivalParticles

                : MAGIC_CONFIG.normalParticles;

        }


        // สร้างอนุภาคจำนวนคงที่

        for (let i = 0; i < amount; i++) {

            const particle =
                document.createElement("span");


            particle.className =
                "magic-particle";


            particle.textContent =

                i % 4 === 0

                    ? "✦"

                    : i % 7 === 0

                        ? "✧"

                        : "·";


            // ตำแหน่งแนวนอน

            particle.style.left =
                `${4 + Math.random() * 92}%`;


            // ตำแหน่งแนวตั้ง

            particle.style.top =
                `${15 + Math.random() * 80}%`;


            // ขนาดประกาย

            const fontSize = isArrival

                ? 9 + Math.random() * 14

                : 7 + Math.random() * 10;


            particle.style.fontSize =
                `${fontSize}px`;


            // ความเร็วแบบสุ่ม

            const duration =

                MAGIC_CONFIG.particleMinDuration +

                Math.random() *

                (
                    MAGIC_CONFIG.particleMaxDuration -

                    MAGIC_CONFIG.particleMinDuration
                );


            particle.style.setProperty(

                "--duration",

                `${duration}s`

            );


            // ให้ประกายเริ่มคนละจังหวะ

            particle.style.setProperty(

                "--delay",

                `${-Math.random() * duration}s`

            );


            // ทิศทางการลอย

            particle.style.setProperty(

                "--drift",

                `${Math.random() * 80 - 40}px`

            );


            layer.appendChild(particle);

        }


        frame.appendChild(layer);

    }


    // =====================================
    // เอฟเฟกต์ระหว่างเดินทาง
    // ทำงานต่อเนื่องตลอดเวลา
    // =====================================

    function playContinuousMagic() {

        frame.classList.remove(

            "magic-arrived",

            "magic-arrival-burst"

        );


        instruction.classList.remove(
            "magic-success"
        );


        frame.classList.add(
            "magic-active"
        );


        createContinuousParticles(false);

        updateVisibility();

    }


    // =====================================
    // เอฟเฟกต์เมื่อถึงจุดหมาย
    // =====================================

    function playArrivalEffect() {

        frame.classList.remove(
            "magic-active"
        );


        frame.classList.add(
            "magic-arrived"
        );


        instruction.classList.add(
            "magic-success"
        );


        // เพิ่มจำนวนประกายเมื่อถึงจุดหมาย

        createContinuousParticles(true);


        // เอฟเฟกต์ฉลองพิเศษ 8 วินาที

        if (!reducedMotion()) {

            frame.classList.add(
                "magic-arrival-burst"
            );


            const token = animationToken;

            arrivalTimer = setTimeout(() => {

                if (token !== animationToken) {
                    return;
                }


                // จบช่วงฉลอง
                // แต่ประกายเวทมนตร์ยังคงอยู่

                frame.classList.remove(
                    "magic-arrival-burst"
                );

                arrivalTimer = null;

            }, MAGIC_CONFIG.arrivalDuration);

        }


        updateVisibility();

    }


    // =====================================
    // หยุด Animation เมื่อสลับแท็บ
    // =====================================

    function updateVisibility() {

        frame.classList.toggle(

            "magic-paused",

            document.hidden

        );


        instruction.classList.toggle(

            "magic-paused",

            document.hidden

        );

    }


    document.addEventListener(

        "visibilitychange",

        updateVisibility

    );


    // =====================================
    // ระบบเปลี่ยนภาพแบบ Smooth Crossfade
    // =====================================

    showStep = function (...args) {

        if (!currentRoute) {

            return originalShowStep.apply(
                this,
                args
            );

        }


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


        // เก็บภาพเดิมก่อนเปลี่ยน

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


        // ล้าง Animation ก่อนเริ่มภาพใหม่

        clearMagic();


        const token = animationToken;


        const isLastStep =

            currentStep ===

            currentRoute.images.length - 1;


        lastRoute = currentRoute;

        lastStep = currentStep;


        if (oldImage) {

            frame.appendChild(oldImage);

        }


        let finished = false;


        // =================================
        // เมื่อภาพใหม่โหลดสำเร็จ
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


            // ค่อย ๆ ทำให้ภาพเดิมจางลง

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

                }, MAGIC_CONFIG.crossfadeDuration + 100);

            }


            // ตรวจสอบว่าถึงจุดหมายหรือยัง

            if (isLastStep) {

                playArrivalEffect();

            } else {

                playContinuousMagic();

            }

        }


        // =================================
        // เมื่อโหลดภาพไม่สำเร็จ
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


        // รองรับภาพที่โหลดจาก Cache

        if (routeImage.complete) {

            if (routeImage.naturalWidth > 0) {

                onImageReady();

            } else {

                onImageError();

            }

        }

    };


    // =====================================
    // เมื่อกลับหน้าหลัก
    // หยุดและล้าง Animation ทั้งหมด
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

        "HOGWORLDS V1.8.1 — Living Magic Ready"

    );

})();
