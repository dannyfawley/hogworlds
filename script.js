
// =========================================
// HOGWORLDS PATHFINDER V1.7
// FAVORITES UPDATE
// =========================================


// สร้างตำแหน่งไฟล์ภาพอัตโนมัติ

function getImages(folder, files) {
    return files.map(file => `images/${folder}/${file}`);
}


// =========================================
// หมวดห้องเรียน CLASSROOMS
// =========================================

const routes = {

    // 01 ห้องปรุงยา

    potions: {
        name: "ห้องปรุงยา",
        english: "Potions Classroom",
        icon: "⚗️",
        category: "classroom",

        images: getImages("potions", [
            "1.jpg",
            "3.png",
            "4.png",
            "5.png",
            "6.png"
        ])
    },


    // 02 ห้องป้องกันตัวจากศาสตร์มืด

    dada: {
        name: "ห้องป้องกันตัวจากศาสตร์มืด",
        english: "Defence Against the Dark Arts",
        icon: "🛡️",
        category: "classroom",

        images: getImages("dada", [
            "1.jpg",
            "2.jpg",
            "7.png",
            "8.png",
            "9.png"
        ])
    },


    // 03 ห้องคาถา

    charms: {
        name: "ห้องคาถา",
        english: "Charms Classroom",
        icon: "🪄",
        category: "classroom",

        images: getImages("charms", [
            "1.jpg",
            "2.jpg",
            "10.jpg",
            "11.jpg"
        ])
    },


    // 04 ห้องวิชาแปลงกาย

    transfiguration: {
        name: "ห้องวิชาแปลงกาย",
        english: "Transfiguration Classroom",
        icon: "🦋",
        category: "classroom",

        images: getImages("transfiguration", [
            "1.jpg",
            "2.jpg",
            "10.jpg",
            "12.jpg",
            "14.jpg"
        ])
    },


    // 05 ห้องวิชามักเกิ้ล

    muggle: {
        name: "ห้องวิชามักเกิ้ล",
        english: "Muggle Studies Classroom",
        icon: "🔌",
        category: "classroom",

        images: getImages("muggle", [
            "1.jpg",
            "2.jpg",
            "22.jpg",
            "24.jpg"
        ])
    },


    // 06 เรือนกระจกสมุนไพร

    herbology: {
        name: "เรือนกระจก (สมุนไพร)",
        english: "Herbology Greenhouse",
        icon: "🌿",
        category: "classroom",

        images: getImages("herbology", [
            "91.jpg",
            "92.jpg",
            "93.jpg"
        ])
    },


    // 07 ห้องเรียนพยากรณ์

    divination: {
        name: "ห้องเรียนพยากรณ์",
        english: "Divination Classroom",
        icon: "🔮",
        category: "classroom",

        images: getImages("divination", [
            "1.jpg",
            "2.jpg",
            "22.jpg",
            "23.jpg"
        ])
    },


    // 08 ห้องเล่นแร่แปรธาตุ

    alchemy: {
        name: "ห้องเล่นแร่แปรธาตุ",
        english: "Alchemy Classroom",
        icon: "⚖️",
        category: "classroom",

        images: getImages("alchemy", [
            "98.jpg",
            "99.jpg",
            "100.jpg",
            "101.jpg",
            "102.jpg"
        ])
    },


    // 09 ห้องเต้นรำ — UPDATED

    dance: {
        name: "ห้องเต้นรำ",
        english: "Dance Hall",
        icon: "💃",
        category: "classroom",

        images: getImages("dance", [
            "103.jpg",
            "104.jpg",
            "105.jpg",
            "106.jpg",
            "107.jpg"
        ])
    },


    // 10 ห้องเรียนการบิน

    flying: {
        name: "ห้องเรียนการบิน",
        english: "Flying Classroom",
        icon: "🧹",
        category: "classroom",

        images: getImages("flying", [
            "108.jpg",
            "116.jpg",
            "117.jpg",
            "118.jpg",
            "119.jpg"
        ])
    },


    // 11 ห้องเรียนดาราศาสตร์

    astronomy: {
        name: "ห้องเรียนดาราศาสตร์",
        english: "Astronomy Classroom",
        icon: "🌌",
        category: "classroom",

        images: getImages("astronomy", [
            "69.jpg",
            "70.jpg",
            "71.jpg",
            "72.jpg",
            "73.jpg"
        ])
    },


    // 12 ลานเรียนแปลงกาย

    transfiguration_yard: {
        name: "ลานเรียนแปลงกาย",
        english: "Transfiguration Courtyard",
        icon: "🦋",
        category: "classroom",

        images: getImages("transfiguration_yard", [
            "108.jpg",
            "112.jpg",
            "113.jpg",
            "114.jpg",
            "115.jpg"
        ])
    },


    // =====================================
    // หมวดสถานที่ทั่วไป LOCATIONS
    // =====================================


    // 13 ลานหินข้างปราสาท

    courtyard: {
        name: "ลานหินข้างปราสาท",
        english: "Castle Courtyard",
        icon: "🏰",
        category: "location",

        images: getImages("courtyard", [
            "120.jpg",
            "121.jpg",
            "122.jpg"
        ])
    },


    // 14 ลานหินหลังหอนาฬิกา

    clocktower: {
        name: "ลานหินหลังหอนาฬิกา",
        english: "Clock Tower Courtyard",
        icon: "🕰️",
        category: "location",

        images: getImages("clocktower", [
            "40.jpg",
            "41.jpg"
        ])
    },


    // 15 สวนมิสเฟลอร์

    garden: {
        name: "สวนมิสเฟลอร์",
        english: "Ms. Fleurs' Garden",
        icon: "🌷",
        category: "location",

        images: getImages("garden", [
            "81.jpg",
            "82.jpg",
            "83.jpg",
            "84.jpg",
            "85.jpg",
            "86.jpg"
        ])
    },


    // 16 คอกสัตว์วิเศษ

    beasts: {
        name: "คอกสัตว์วิเศษ",
        english: "Magical Beasts Stable",
        icon: "🐉",
        category: "location",

        images: getImages("beasts", [
            "108.jpg",
            "109.jpg",
            "110.jpg",
            "111.jpg"
        ])
    },


    // 17 หอนกฮูก

    owlery: {
        name: "หอนกฮูก",
        english: "Owlery",
        icon: "🦉",
        category: "location",

        images: getImages("owlery", [
            "40.jpg",
            "42.jpg",
            "43.jpg"
        ])
    },


    // 18 หอดูดาว

    observatory: {
        name: "หอดูดาว",
        english: "Observatory",
        icon: "🔭",
        category: "location",

        images: getImages("observatory", [
            "129.jpg",
            "130.jpg",
            "131.jpg",
            "132.jpg",
            "133.jpg"
        ])
    },


    // 19 สนามซ้อมควิดดิช

    quidditch_training: {
        name: "สนามซ้อมควิดดิช",
        english: "Quidditch Training Ground",
        icon: "🏆",
        category: "location",

        images: getImages("quidditch_training", [
            "58.jpg",
            "59.jpg"
        ])
    },


    // 20 ลานดาราศาสตร์

    astronomy_yard: {
        name: "ลานดาราศาสตร์",
        english: "Astronomy Courtyard",
        icon: "🌠",
        category: "location",

        images: getImages("astronomy_yard", [
            "40.jpg",
            "42.jpg",
            "43.jpg",
            "44.jpg"
        ])
    },


    // 21 ห้องบำบัด

    therapy: {
        name: "ห้องบำบัด",
        english: "Therapy Room",
        icon: "🩹",
        category: "location",

        images: getImages("therapy", [
            "123.jpg",
            "124.jpg",
            "125.jpg",
            "126.jpg",
            "127.jpg",
            "128.jpg"
        ])
    },


    // 22 ศาลามิสเฟลอร์

    pavilion: {
        name: "ศาลามิสเฟลอร์",
        english: "Ms. Fleurs' Pavilion",
        icon: "⛲",
        category: "location",

        images: getImages("pavilion", [
            "87.jpg",
            "88.jpg",
            "89.jpg",
            "90.jpg"
        ])
    },


    // 23 ห้องสมุด

    library: {
        name: "ห้องสมุด",
        english: "Library",
        icon: "📚",
        category: "location",

        images: getImages("library", [
            "74.jpg",
            "75.jpg",
            "76.jpg",
            "77.jpg",
            "78.jpg",
            "79.jpg",
            "80.jpg"
        ])
    },


    // 24 ป่าต้องห้าม

    forbidden_forest: {
        name: "ป่าต้องห้าม",
        english: "Forbidden Forest",
        icon: "🌲",
        category: "location",

        images: getImages("forbidden_forest", [
            "1.png"
        ])
    }

};


// =========================================
// ตัวแปรควบคุมระบบ
// =========================================

let currentCategory = "classroom";
let currentRoute = null;
let currentStep = 0;

let toastTimer;

const FAVORITES_KEY = "hogworlds_favorites";


// =========================================
// FAVORITES — โหลดรายการโปรดที่บันทึกไว้
// =========================================

function loadFavorites() {

    try {

        const saved = JSON.parse(
            localStorage.getItem(FAVORITES_KEY) || "[]"
        );

        if (!Array.isArray(saved)) {
            return [];
        }

        return [...new Set(saved.filter(id =>
            typeof id === "string" &&
            Object.prototype.hasOwnProperty.call(routes, id)
        ))];

    } catch (error) {

        console.warn(
            "ไม่สามารถโหลดรายการโปรดได้",
            error
        );

        return [];

    }

}

let favorites = loadFavorites();


// =========================================
// FAVORITES — บันทึกรายการโปรด
// =========================================

function saveFavorites() {

    try {

        localStorage.setItem(
            FAVORITES_KEY,
            JSON.stringify(favorites)
        );

        return true;

    } catch (error) {

        console.warn(
            "ไม่สามารถบันทึกรายการโปรดได้",
            error
        );

        return false;

    }

}


// =========================================
// FAVORITES — เพิ่มหรือลบรายการโปรด
// =========================================

function toggleFavorite(id) {

    if (!Object.prototype.hasOwnProperty.call(routes, id)) {
        return;
    }

    const alreadyFavorite = favorites.includes(id);

    if (alreadyFavorite) {

        favorites = favorites.filter(
            favoriteId => favoriteId !== id
        );

    } else {

        favorites.push(id);

    }

    const saved = saveFavorites();

    renderRooms();

    const message = alreadyFavorite
        ? `นำ${routes[id].name}ออกจากรายการโปรดแล้ว`
        : `★ เพิ่ม${routes[id].name}ในรายการโปรดแล้ว`;

    showToast(
        saved
            ? message
            : message + " (เฉพาะการเปิดเว็บครั้งนี้)"
    );

    const starButton = document.querySelector(
        `[data-favorite-id="${id}"]`
    );

    if (starButton) {

        starButton.focus({ preventScroll: true });

        if (!alreadyFavorite) {
            starButton.classList.add("star-pop");
        }

    } else {

        document.getElementById("favoritesTab").focus({
            preventScroll: true
        });

    }

}


// =========================================
// ข้อความแจ้งเตือน
// =========================================

function showToast(message) {

    const toast =
        document.getElementById("favoriteToast");

    clearTimeout(toastTimer);

    toast.textContent = message;

    toast.classList.add("show");

    toastTimer = setTimeout(() => {

        toast.classList.remove("show");

    }, 2200);

}


// =========================================
// ระบบสลับหมวดหมู่ TAB
// =========================================

function selectCategory(category) {

    const validCategories = [
        "classroom",
        "location",
        "favorites"
    ];

    if (!validCategories.includes(category)) {
        return;
    }

    currentCategory = category;

    const tabs = {
        classroom: "classroomTab",
        location: "locationTab",
        favorites: "favoritesTab"
    };

    Object.entries(tabs).forEach(([key, elementId]) => {

        const tab = document.getElementById(elementId);

        const isActive = key === category;

        tab.classList.toggle(
            "active",
            isActive
        );

        tab.setAttribute(
            "aria-pressed",
            String(isActive)
        );

    });

    renderRooms();

}


// =========================================
// สร้างการ์ดสถานที่อัตโนมัติ
// =========================================

function renderRooms() {

    const grid =
        document.getElementById("roomGrid");

    const emptyFavorites =
        document.getElementById("emptyFavorites");

    grid.innerHTML = "";


    // กรองสถานที่ตามหมวดหมู่

    const visibleRooms = Object.entries(routes)
        .filter(([id, room]) => {

            if (currentCategory === "favorites") {

                return favorites.includes(id);

            }

            return room.category === currentCategory;

        });


    // แสดงข้อความเมื่อไม่มีรายการโปรด

    const isEmpty =
        currentCategory === "favorites" &&
        visibleRooms.length === 0;

    emptyFavorites.hidden = !isEmpty;

    grid.hidden = isEmpty;


    // สร้างการ์ดแต่ละสถานที่

    visibleRooms.forEach(([id, room]) => {

        const isFavorite = favorites.includes(id);


        // กล่องครอบการ์ด

        const wrapper = document.createElement("div");

        wrapper.className = "room-wrapper";

        wrapper.classList.toggle(
            "is-favorite",
            isFavorite
        );


        // ปุ่มเข้าสู่เส้นทาง

        const button = document.createElement("button");

        button.className = "room-card";

        button.type = "button";

        button.innerHTML = `
            <span class="room-icon">${room.icon}</span>
            <h3>${room.name}</h3>
            <span>${room.english}</span>
        `;

        button.addEventListener("click", () => {

            startRoute(id);

        });


        // ปุ่มดาวรายการโปรด

        const favoriteButton =
            document.createElement("button");

        favoriteButton.type = "button";

        favoriteButton.className = "favorite-button";

        favoriteButton.classList.toggle(
            "is-favorite",
            isFavorite
        );

        favoriteButton.textContent =
            isFavorite ? "★" : "☆";

        favoriteButton.dataset.favoriteId = id;

        favoriteButton.title = isFavorite
            ? "นำออกจากรายการโปรด"
            : "เพิ่มรายการโปรด";

        favoriteButton.setAttribute(
            "aria-label",
            `${favoriteButton.title}: ${room.name}`
        );

        favoriteButton.setAttribute(
            "aria-pressed",
            String(isFavorite)
        );


        // กดดาวโดยไม่เข้าสู่หน้านำทาง

        favoriteButton.addEventListener(
            "click",
            event => {

                event.stopPropagation();

                toggleFavorite(id);

            }
        );


        // เพิ่มการ์ดและปุ่มดาวลงในหน้าหลัก

        wrapper.appendChild(button);

        wrapper.appendChild(favoriteButton);

        grid.appendChild(wrapper);

    });

}


// =========================================
// เริ่มต้นการเดินทาง
// =========================================

function startRoute(room) {

    if (!routes[room] || !routes[room].images.length) {

        alert("ยังไม่มีข้อมูลเส้นทาง");
        return;

    }

    currentRoute = routes[room];
    currentStep = 0;

    document.getElementById("home").hidden = true;

    document.getElementById("navigation").hidden = false;

    document.getElementById("roomName").textContent =
        currentRoute.icon + " " + currentRoute.name;

    document.getElementById("roomEnglish").textContent =
        currentRoute.english;

    showStep();

    window.scrollTo(0, 0);

}


// =========================================
// แสดงภาพและความคืบหน้า
// =========================================

function showStep() {

    if (!currentRoute) return;

    const total = currentRoute.images.length;

    const percent = Math.round(
        (currentStep + 1) / total * 100
    );

    const routeImage =
        document.getElementById("routeImage");

    const instruction =
        document.getElementById("instruction");

    const nextButton =
        document.getElementById("nextButton");


    // ตรวจสอบข้อผิดพลาดในการโหลดภาพ

    routeImage.onerror = function () {

        if (!currentRoute) return;

        instruction.textContent =
            "ไม่สามารถโหลดภาพได้: " +
            currentRoute.images[currentStep];

    };


    // แสดงข้อมูลเส้นทาง

    routeImage.alt =
        `${currentRoute.name} - จุดนำทางที่ ${currentStep + 1}`;

    document.getElementById("stepCounter").textContent =
        `จุดนำทางที่ ${currentStep + 1} / ${total}`;

    document.getElementById("percentage").textContent =
        `${percent}%`;

    document.getElementById("progressBar").style.width =
        `${percent}%`;

    document.getElementById("prevButton").disabled =
        currentStep === 0;


    // เมื่อถึงจุดหมายปลายทาง

    if (currentStep === total - 1) {

        instruction.textContent =
            `✓ ถึง${currentRoute.name}แล้ว!`;

        nextButton.textContent =
            "✓ เสร็จสิ้นการเดินทาง";

    } else {

        instruction.textContent =
            `เดินตามเส้นทางในภาพที่ ${currentStep + 1}`;

        nextButton.textContent =
            "เดินทางต่อ →";

    }


    // โหลดภาพปัจจุบัน

    routeImage.src =
        currentRoute.images[currentStep];


    // โหลดภาพถัดไปล่วงหน้า

    if (currentStep < total - 1) {

        const nextImage = new Image();

        nextImage.src =
            currentRoute.images[currentStep + 1];

    }

}


// =========================================
// เดินทางต่อ
// =========================================

function nextStep() {

    if (!currentRoute) return;

    if (currentStep < currentRoute.images.length - 1) {

        currentStep++;
        showStep();

    } else {

        goHome();

    }

}


// =========================================
// ย้อนกลับ
// =========================================

function previousStep() {

    if (currentRoute && currentStep > 0) {

        currentStep--;
        showStep();

    }

}


// =========================================
// เริ่มเส้นทางใหม่
// =========================================

function restartRoute() {

    if (!currentRoute) return;

    currentStep = 0;
    showStep();

}


// =========================================
// กลับหน้าหลัก
// =========================================

function goHome() {

    document.getElementById("home").hidden = false;

    document.getElementById("navigation").hidden = true;

    currentStep = 0;
    currentRoute = null;


    // กลับไปยัง TAB ที่เลือกไว้
    // รวมถึง TAB รายการโปรด

    selectCategory(currentCategory);

    window.scrollTo(0, 0);

}


// =========================================
// ควบคุมด้วย Keyboard
// =========================================

document.addEventListener("keydown", event => {

    if (!currentRoute) return;

    if (
        event.altKey ||
        event.ctrlKey ||
        event.metaKey
    ) return;

    if (event.key === "ArrowRight") {

        event.preventDefault();
        nextStep();

    }

    if (event.key === "ArrowLeft") {

        event.preventDefault();
        previousStep();

    }

    if (event.key === "Escape") {

        goHome();

    }

});


// =========================================
// ซิงค์รายการโปรดระหว่างแท็บเบราว์เซอร์
// =========================================

window.addEventListener("storage", event => {

    if (
        event.key === FAVORITES_KEY ||
        event.key === null
    ) {

        favorites = loadFavorites();

        renderRooms();

    }

});


// =========================================
// เริ่มต้นเว็บไซต์
// =========================================

selectCategory("classroom");
