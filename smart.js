
// =========================================
// HOGWORLDS PATHFINDER V2.0
// SMART NAVIGATION
// SEARCH + RECENT + DIRECT LINK
// =========================================

(() => {

    // =====================================
    // CONFIGURATION
    // =====================================

    const CONFIG = {

        websiteURL:
            "https://dannyfawley.github.io/hogworlds/",

        recentLimit: 3,

        recentKey:
            "hogworlds_recent_v2"

    };


    // =====================================
    // ตรวจสอบระบบเดิม
    // =====================================

    if (
        typeof routes === "undefined" ||
        typeof renderRooms !== "function" ||
        typeof selectCategory !== "function" ||
        typeof startRoute !== "function" ||
        typeof goHome !== "function"
    ) {

        console.warn(
            "Smart Navigation: Main system not found"
        );

        return;

    }


    const $ = id => document.getElementById(id);

    const searchInput = $("smartSearch");
    const searchClear = $("clearSearch");
    const searchStatus = $("searchStatus");
    const searchEmpty = $("searchEmpty");

    const recentSection = $("recentSection");
    const recentGrid = $("recentGrid");

    const shareButton = $("shareButton");
    const roomGrid = $("roomGrid");


    // ตรวจสอบ HTML ที่จำเป็น

    if (
        !searchInput ||
        !searchClear ||
        !searchStatus ||
        !searchEmpty ||
        !recentSection ||
        !recentGrid ||
        !shareButton ||
        !roomGrid ||
        !$("clearRecent") ||
        !$("emptyFavorites")
    ) {

        console.warn(
            "Smart Navigation: Required HTML not found"
        );

        return;

    }


    let activeRoomID = null;


    // เก็บฟังก์ชันระบบเดิม

    const originalRenderRooms = renderRooms;
    const originalSelectCategory = selectCategory;
    const originalStartRoute = startRoute;
    const originalGoHome = goHome;


    // =====================================
    // LOCAL STORAGE
    // =====================================

    function readStorage(key, fallback) {

        try {

            return JSON.parse(
                localStorage.getItem(key)
            ) ?? fallback;

        } catch {

            return fallback;

        }

    }


    function writeStorage(key, value) {

        try {

            localStorage.setItem(
                key,
                JSON.stringify(value)
            );

            return true;

        } catch {

            return false;

        }

    }


    function validRoom(id) {

        return (
            typeof id === "string" &&
            Object.prototype.hasOwnProperty.call(
                routes,
                id
            )
        );

    }


    // =====================================
    // RECENTLY VISITED
    // =====================================

    function loadRecent() {

        const saved = readStorage(
            CONFIG.recentKey,
            []
        );

        if (!Array.isArray(saved)) {

            return [];

        }

        return [...new Set(
            saved.filter(validRoom)
        )].slice(0, CONFIG.recentLimit);

    }


    let recentRooms = loadRecent();


    function renderRecent() {

        recentGrid.innerHTML = "";

        recentSection.hidden =

            recentRooms.length === 0 ||

            searchInput.value.trim() !== "";


        recentRooms.forEach(id => {

            const room = routes[id];

            const card =
                document.createElement("button");

            card.type = "button";

            card.className = "recent-card";


            const icon =
                document.createElement("span");

            icon.className = "recent-icon";

            icon.textContent = room.icon;


            const name =
                document.createElement("span");

            name.className = "recent-name";

            name.textContent = room.name;


            card.appendChild(icon);

            card.appendChild(name);


            card.addEventListener(
                "click",
                () => startRoute(id)
            );


            recentGrid.appendChild(card);

        });

    }


    function rememberRoom(id) {

        if (!validRoom(id)) return;


        recentRooms = [

            id,

            ...recentRooms.filter(
                item => item !== id
            )

        ].slice(0, CONFIG.recentLimit);


        writeStorage(
            CONFIG.recentKey,
            recentRooms
        );


        renderRecent();

    }


    // ล้างประวัติการเดินทาง

    $("clearRecent").addEventListener(
        "click",
        () => {

            recentRooms = [];

            const saved = writeStorage(
                CONFIG.recentKey,
                []
            );

            renderRecent();

            if (typeof showToast === "function") {

                showToast(
                    saved
                        ? "ล้างประวัติการเดินทางแล้ว"
                        : "ล้างประวัติสำหรับการเปิดเว็บครั้งนี้แล้ว"
                );

            }

        }
    );


    // อัปเดตประวัติระหว่างแท็บ

    window.addEventListener(
        "storage",
        event => {

            if (
                event.key === CONFIG.recentKey ||
                event.key === null
            ) {

                recentRooms = loadRecent();

                renderRecent();

            }

        }
    );


    // =====================================
    // QUICK SEARCH
    // =====================================

    const SEARCH_ALIASES = {

        potions:
            "ปรุงยา potion",

        dada:
            "ป้องกันตัว ศาสตร์มืด ดาด้า defense dada",

        charms:
            "คาถา spell",

        transfiguration:
            "แปลงกาย",

        transfiguration_yard:
            "แปลงกาย ลานเรียน",

        herbology:
            "สมุนไพร เรือนกระจก",

        quidditch_training:
            "ควิดดิช ควิชดิช สนามซ้อม quidditch",

        library:
            "สมุด หนังสือ",

        garden:
            "สวน มิสเฟอร์ มิสเฟลอร์",

        pavilion:
            "ศาลา มิสเฟอร์ มิสเฟลอร์",

        forbidden_forest:
            "ป่า forest",

        therapy:
            "บำบัด รักษา healer",

        observatory:
            "หอดูดาว กล้องดูดาว",

        owlery:
            "นกฮูก owl"

    };


    function normalize(value) {

        return String(value)

            .normalize("NFKC")

            .toLocaleLowerCase()

            .trim();

    }


    function matchesSearch(id, query) {

        const room = routes[id];

        const text = normalize([

            room.name,

            room.english,

            id.replace(/_/g, " "),

            SEARCH_ALIASES[id] || ""

        ].join(" "));


        return query

            .split(/\s+/)

            .every(word => text.includes(word));

    }


    // =====================================
    // แสดงผลการค้นหา
    // รักษาการ์ดและปุ่มดาวเดิม
    // =====================================

    renderRooms = function (...args) {

        const query = normalize(
            searchInput.value
        );


        searchClear.hidden = !query;

        searchStatus.hidden = !query;

        searchEmpty.hidden = true;


        // เมื่อไม่ได้ค้นหา
        // ใช้ระบบแสดงการ์ดเดิม

        if (!query) {

            const result =
                originalRenderRooms.apply(
                    this,
                    args
                );

            renderRecent();

            return result;

        }


        // ค้นหาข้ามหมวดหมู่

        const previousCategory =
            currentCategory;

        const foundCards = [];


        try {

            for (const category of [

                "classroom",

                "location"

            ]) {

                currentCategory = category;


                originalRenderRooms.apply(
                    this,
                    args
                );


                const cards = Array.from(
                    roomGrid.children
                );


                cards.forEach(card => {

                    const star = card.querySelector(
                        "[data-favorite-id]"
                    );

                    const id =
                        star?.dataset.favoriteId;


                    if (
                        validRoom(id) &&
                        matchesSearch(id, query)
                    ) {

                        foundCards.push(card);

                    }

                });

            }

        } finally {

            currentCategory =
                previousCategory;

        }


        roomGrid.replaceChildren(
            ...foundCards
        );


        roomGrid.hidden =
            foundCards.length === 0;


        $("emptyFavorites").hidden = true;


        searchEmpty.hidden =
            foundCards.length !== 0;


        searchStatus.textContent =

            `พบ ${foundCards.length} สถานที่ จากทุกหมวดหมู่`;


        renderRecent();

    };


    // ค้นหาทันทีขณะพิมพ์

    searchInput.addEventListener(
        "input",
        () => renderRooms()
    );


    // รองรับ Keyboard

    searchInput.addEventListener(
        "keydown",
        event => {

            if (event.isComposing) return;


            if (event.key === "Escape") {

                event.stopPropagation();

                searchInput.value = "";

                renderRooms();

            }


            if (event.key === "Enter") {

                const query = normalize(
                    searchInput.value
                );

                if (!query) return;


                const firstCard =
                    roomGrid.querySelector(
                        ".room-card"
                    );

                if (firstCard) {

                    event.preventDefault();

                    firstCard.click();

                }

            }

        }
    );


    // ปุ่มล้างคำค้นหา

    searchClear.addEventListener(
        "click",
        () => {

            searchInput.value = "";

            renderRooms();

            searchInput.focus();

        }
    );


    // เมื่อเปลี่ยนหมวดหมู่
    // ให้ล้างคำค้นหา

    selectCategory = function (...args) {

        searchInput.value = "";

        return originalSelectCategory.apply(
            this,
            args
        );

    };


    // =====================================
    // DIRECT LINK
    // =====================================

    function getRoomURL(id) {

        const url = new URL(
            CONFIG.websiteURL
        );

        url.searchParams.set(
            "room",
            id
        );

        return url.href;

    }


    // เปลี่ยน URL ตามสถานที่
    // โดยไม่โหลดหน้าเว็บใหม่

    function updateRoomURL(id) {

        if (
            location.protocol !== "https:" &&
            location.protocol !== "http:"
        ) return;


        try {

            const url = new URL(
                location.href
            );


            if (id) {

                url.searchParams.set(
                    "room",
                    id
                );

            } else {

                url.searchParams.delete(
                    "room"
                );

            }


            history.replaceState(
                history.state,
                "",
                url.href
            );

        } catch (error) {

            console.warn(
                "Unable to update URL",
                error
            );

        }

    }


    // =====================================
    // COPY ROOM LINK
    // =====================================

    async function copyRoomLink() {

        if (!validRoom(activeRoomID)) {

            return;

        }


        const url = getRoomURL(
            activeRoomID
        );


        try {

            await navigator.clipboard.writeText(
                url
            );


            if (typeof showToast === "function") {

                showToast(
                    "✓ คัดลอกลิงก์สถานที่แล้ว"
                );

            }

        } catch {

            // กรณีเบราว์เซอร์ไม่อนุญาต Clipboard

            window.prompt(
                "คัดลอกลิงก์นี้เพื่อส่งให้เพื่อน",
                url
            );

        }

    }


    shareButton.addEventListener(
        "click",
        copyRoomLink
    );


    // =====================================
    // เชื่อมระบบใหม่กับระบบนำทางเดิม
    // =====================================

    startRoute = function (id, ...args) {

        if (!validRoom(id)) {

            return originalStartRoute.call(
                this,
                id,
                ...args
            );

        }


        const result =
            originalStartRoute.call(
                this,
                id,
                ...args
            );


        // ตรวจสอบว่าเปิดเส้นทางสำเร็จ

        if (
            currentRoute !== routes[id]
        ) return result;


        activeRoomID = id;


        // บันทึกสถานที่ล่าสุด

        rememberRoom(id);


        // อัปเดตลิงก์บน Address Bar

        updateRoomURL(id);


        return result;

    };


    // =====================================
    // กลับหน้าหลัก
    // รักษาระบบ Animation เดิม
    // =====================================

    goHome = function (...args) {

        const result =
            originalGoHome.apply(
                this,
                args
            );


        activeRoomID = null;


        updateRoomURL(null);


        renderRecent();


        return result;

    };


    // =====================================
    // เปิดเส้นทางจากลิงก์โดยตรง
    // =====================================

    function openDirectLink() {

        const params = new URLSearchParams(
            location.search
        );


        const id = params.get("room");


        if (!id) return;


        if (validRoom(id)) {

            selectCategory(
                routes[id].category
            );

            startRoute(id);

        } else {

            if (typeof showToast === "function") {

                showToast(
                    "ไม่พบสถานที่จากลิงก์นี้"
                );

            }

            updateRoomURL(null);

        }

    }


    // =====================================
    // INITIALIZATION
    // =====================================

    renderRooms();

    openDirectLink();


    console.log(

        "HOGWORLDS V2.0 — Smart Navigation Ready"

    );

})();