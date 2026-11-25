
// =========================================
// HOGWORLDS PATHFINDER V1.4
// UPDATED NAVIGATION ROUTES
// =========================================


// สร้างตำแหน่งไฟล์ภาพอัตโนมัติ

function getImages(folder, files) {
    return files.map(file => `images/${folder}/${file}`);
}


// =========================================
// ข้อมูลสถานที่ทั้งหมด
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


    // 03 ห้องคาถา — UPDATED

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


    // 04 ห้องวิชาแปลงกาย — UPDATED

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
            "13.jpg"
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


    // 06 เรือนกระจก — UPDATED

    herbology: {
        name: "เรือนกระจก (สมุนไพร)",
        english: "Herbology Greenhouse",
        icon: "🌿",
        category: "classroom",

        images: getImages("herbology", [
            "24.jpg",
            "25.jpg",
            "26.jpg"
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
            "1.jpg",
            "2.jpg",
            "22.jpg",
            "28.jpg"
        ])
    },


    // 09 ห้องเต้นรำ

    dance: {
        name: "ห้องเต้นรำ",
        english: "Dance Hall",
        icon: "💃",
        category: "classroom",

        images: getImages("dance", [
            "1.jpg",
            "2.jpg",
            "22.jpg",
            "29.jpg"
        ])
    },


    // 10 ห้องเรียนการบิน

    flying: {
        name: "ห้องเรียนการบิน",
        english: "Flying Classroom",
        icon: "🧹",
        category: "classroom",

        images: getImages("flying", [
            "30.jpg",
            "31.jpg",
            "34.jpg",
            "35.jpg",
            "37.jpg"
        ])
    },


    // 11 ห้องเรียนดาราศาสตร์

    astronomy: {
        name: "ห้องเรียนดาราศาสตร์",
        english: "Astronomy Classroom",
        icon: "🌌",
        category: "classroom",

        images: getImages("astronomy", [
            "40.jpg",
            "42.jpg",
            "43.jpg",
            "44.jpg"
        ])
    },


    // 12 ลานเรียนแปลงกาย

    transfiguration_yard: {
        name: "ลานเรียนแปลงกาย",
        english: "Transfiguration Courtyard",
        icon: "🦋",
        category: "classroom",

        images: getImages("transfiguration_yard", [
            "30.jpg",
            "31.jpg",
            "34.jpg",
            "35.jpg",
            "36.jpg"
        ])
    },


    // =====================================
    // หมวดสถานที่ทั่วไป
    // =====================================


    // 13 ลานหินข้างปราสาท

    courtyard: {
        name: "ลานหินข้างปราสาท",
        english: "Castle Courtyard",
        icon: "🏰",
        category: "location",

        images: getImages("courtyard", [
            "31.jpg",
            "38.jpg",
            "39.jpg"
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


    // 15 สวนมิสเฟลอร์ — UPDATED

    garden: {
        name: "สวนมิสเฟลอร์",
        english: "Ms. Fleurs' Garden",
        icon: "🌷",
        category: "location",

        images: getImages("garden", [
            "49.jpg",
            "50.jpg",
            "51.jpg",
            "52.jpg"
        ])
    },


    // 16 คอกสัตว์วิเศษ

    beasts: {
        name: "คอกสัตว์วิเศษ",
        english: "Magical Beasts Stable",
        icon: "🐉",
        category: "location",

        images: getImages("beasts", [
            "30.jpg",
            "31.jpg",
            "32.jpg",
            "33.jpg"
        ])
    },


    // 17 หอนกฮูก — UPDATED

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


    // 18 หอดูดาว — UPDATED

    observatory: {
        name: "หอดูดาว",
        english: "Observatory",
        icon: "🔭",
        category: "location",

        images: getImages("observatory", [
            "1.jpg",
            "2.jpg",
            "3.jpg",
            "4.jpg",
            "5.jpg"
        ])
    }

};


// =========================================
// ตัวแปรควบคุมระบบ
// =========================================

let currentCategory = "classroom";
let currentRoute = null;
let currentStep = 0;


// =========================================
// ระบบสลับหมวดหมู่
// =========================================

function selectCategory(category) {

    if (
        category !== "classroom" &&
        category !== "location"
    ) return;

    currentCategory = category;

    const classroomTab =
        document.getElementById("classroomTab");

    const locationTab =
        document.getElementById("locationTab");

    classroomTab.classList.toggle(
        "active",
        category === "classroom"
    );

    locationTab.classList.toggle(
        "active",
        category === "location"
    );

    classroomTab.setAttribute(
        "aria-pressed",
        category === "classroom"
    );

    locationTab.setAttribute(
        "aria-pressed",
        category === "location"
    );

    renderRooms();

}


// =========================================
// สร้างการ์ดสถานที่อัตโนมัติ
// =========================================

function renderRooms() {

    const grid = document.getElementById("roomGrid");

    grid.innerHTML = "";

    Object.entries(routes).forEach(([id, room]) => {

        if (room.category !== currentCategory) {
            return;
        }

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

        grid.appendChild(button);

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
// เริ่มต้นเว็บไซต์
// =========================================

selectCategory("classroom");
