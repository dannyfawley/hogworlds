
// =========================================
// HOGWORLD PATHFINDER V1.3
// ข้อมูลห้องเรียนทั้งหมด
// =========================================

const routes = {

    // 01 ห้องปรุงยา
    potions: {
        name: "ห้องปรุงยา",
        english: "Potions Classroom",
        icon: "⚗️",

        images: [
            "images/potions/1.jpg",
            "images/potions/3.png",
            "images/potions/4.png",
            "images/potions/5.png",
            "images/potions/6.png"
        ]
    },

    // 02 ห้องป้องกันตัวจากศาสตร์มืด
    dada: {
        name: "ห้องป้องกันตัวจากศาสตร์มืด",
        english: "Defence Against the Dark Arts",
        icon: "🛡️",

        images: [
            "images/dada/1.jpg",
            "images/dada/2.jpg",
            "images/dada/7.png",
            "images/dada/8.png",
            "images/dada/9.png"
        ]
    },

    // 03 ห้องคาถา
    charms: {
        name: "ห้องคาถา",
        english: "Charms Classroom",
        icon: "🪄",

        images: [
            "images/charms/1.jpg",
            "images/charms/2.jpg",
            "images/charms/10.png",
            "images/charms/11.png"
        ]
    },

    // 04 ห้องวิชาแปลงกาย
    transfiguration: {
        name: "ห้องวิชาแปลงกาย",
        english: "Transfiguration Classroom",
        icon: "🦋",

        images: [
            "images/transfiguration/1.jpg",
            "images/transfiguration/2.jpg",
            "images/transfiguration/10.png",
            "images/transfiguration/12.png"
        ]
    },

    // 05 ห้องวิชามักเกิ้ล
    muggle: {
        name: "ห้องวิชามักเกิ้ล",
        english: "Muggle Studies Classroom",
        icon: "🔌",

        images: [
            "images/muggle/1.jpg",
            "images/muggle/2.jpg",
            "images/muggle/22.jpg",
            "images/muggle/24.jpg"
        ]
    },

    // 06 เรือนกระจกสมุนไพร
    herbology: {
        name: "เรือนกระจก (สมุนไพร)",
        english: "Herbology Greenhouse",
        icon: "🌿",

        images: [
            "images/herbology/25.jpg",
            "images/herbology/26.jpg"
        ]
    },

    // 07 ห้องเรียนพยากรณ์
    divination: {
        name: "ห้องเรียนพยากรณ์",
        english: "Divination Classroom",
        icon: "🔮",

        images: [
            "images/divination/1.jpg",
            "images/divination/2.jpg",
            "images/divination/22.jpg",
            "images/divination/23.jpg"
        ]
    },

    // 08 ห้องเล่นแร่แปรธาตุ
    alchemy: {
        name: "ห้องเล่นแร่แปรธาตุ",
        english: "Alchemy Classroom",
        icon: "⚖️",

        images: [
            "images/alchemy/1.jpg",
            "images/alchemy/2.jpg",
            "images/alchemy/22.jpg",
            "images/alchemy/28.jpg"
        ]
    },

    // 09 ห้องเต้นรำ
    dance: {
        name: "ห้องเต้นรำ",
        english: "Dance Hall",
        icon: "💃",

        images: [
            "images/dance/1.jpg",
            "images/dance/2.jpg",
            "images/dance/22.jpg",
            "images/dance/29.jpg"
        ]
    }

};


// =========================================
// ตัวแปรควบคุมเส้นทาง
// =========================================

let currentRoute = null;
let currentStep = 0;


// =========================================
// สร้างปุ่มห้องเรียนอัตโนมัติ
// =========================================

function renderRooms() {

    const grid = document.getElementById("roomGrid");

    grid.innerHTML = "";

    Object.entries(routes).forEach(([id, room]) => {

        const button = document.createElement("button");

        button.className = "room-card";

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

    const totalRooms = Object.keys(routes).length;

    const totalImages = Object.values(routes).reduce(
        (sum, room) => sum + room.images.length,
        0
    );

    document.getElementById("roomSummary").textContent =
        `${totalRooms} จุดหมายปลายทาง · ${totalImages} ภาพนำทาง`;

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

    const routeImage = document.getElementById("routeImage");

    routeImage.src = currentRoute.images[currentStep];

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


    // เมื่อถึงภาพสุดท้าย

    if (currentStep === total - 1) {

        document.getElementById("instruction").textContent =
            `✓ ถึง${currentRoute.name}แล้ว!`;

        document.getElementById("nextButton").textContent =
            "✓ เสร็จสิ้นการเดินทาง";

    } else {

        document.getElementById("instruction").textContent =
            `เดินตามเส้นทางในภาพที่ ${currentStep + 1}`;

        document.getElementById("nextButton").textContent =
            "เดินทางต่อ →";

    }


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

    window.scrollTo(0, 0);

}


// =========================================
// ควบคุมด้วยปุ่มลูกศรบน Keyboard
// =========================================

document.addEventListener("keydown", event => {

    if (!currentRoute) return;

    if (event.altKey || event.ctrlKey || event.metaKey) return;

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

renderRooms();
