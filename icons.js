
// =========================================
// HOGWORLDS PATHFINDER V2.0.1
// GOLDEN MAGICAL ICON SYSTEM
// =========================================

(() => {

    "use strict";


    // =====================================
    // CONFIGURATION
    // =====================================

    const CONFIG = {

        iconFolder: "./images/icons/",

        iconVersion: "2.0.1"

    };


    // =====================================
    // CHECK MAIN SYSTEM
    // =====================================

    if (typeof routes === "undefined") {

        console.warn(
            "Golden Icons: Route data not found"
        );

        return;

    }


    const roomGrid =
        document.getElementById("roomGrid");

    const recentGrid =
        document.getElementById("recentGrid");

    const roomName =
        document.getElementById("roomName");


    // =====================================
    // ICON FILE MAPPING
    // =====================================

    const ICON_FILES = {

        potions: "potions.png",

        dada: "dada.png",

        charms: "charms.png",

        transfiguration: "transfiguration.png",

        muggle: "muggle.png",

        herbology: "herbology.png",

        divination: "divination.png",

        alchemy: "alchemy.png",

        dance: "dance.png",

        flying: "flying.png",

        astronomy: "astronomy.png",

        transfiguration_yard:
            "transfiguration_yard.png",

        courtyard: "courtyard.png",

        clocktower: "clocktower.png",

        garden: "garden.png",

        beasts: "beasts.png",

        owlery: "owlery.png",

        observatory: "observatory.png",

        quidditch_training:
            "quidditch_training.png",

        astronomy_yard: "astronomy_yard.png",

        therapy: "therapy.png",

        pavilion: "pavilion.png",

        library: "library.png",

        forbidden_forest:
            "forbidden_forest.png"

    };


    // =====================================
    // HELPERS
    // =====================================

    function validRoom(id) {

        return (

            typeof id === "string" &&

            Object.prototype.hasOwnProperty.call(
                routes,
                id
            ) &&

            Object.prototype.hasOwnProperty.call(
                ICON_FILES,
                id
            )

        );

    }


    function getIconPath(id) {

        return (

            CONFIG.iconFolder +

            ICON_FILES[id] +

            "?v=" +

            CONFIG.iconVersion

        );

    }


    // =====================================
    // FALLBACK EMOJI
    // =====================================

    function createFallback(id) {

        const fallback =
            document.createElement("span");

        fallback.className =
            "magical-icon-fallback";

        fallback.textContent =
            routes[id]?.icon || "✨";

        fallback.setAttribute(
            "aria-hidden",
            "true"
        );

        return fallback;

    }


    // =====================================
    // CREATE CUSTOM ICON
    // =====================================

    function createIcon(id) {

        const image =
            document.createElement("img");

        image.className = "magical-icon";

        image.alt = "";

        image.draggable = false;

        image.decoding = "async";

        image.setAttribute(
            "aria-hidden",
            "true"
        );

        image.dataset.roomIcon = id;


        // ถ้าภาพโหลดไม่ได้
        // ให้ใช้ Emoji เดิมแทน

        image.addEventListener(
            "error",
            () => {

                image.replaceWith(
                    createFallback(id)
                );

            },
            { once: true }
        );


        image.src = getIconPath(id);

        return image;

    }


    // =====================================
    // FIND ROOM ID BY NAME
    // =====================================

    function findRoomByName(name) {

        const target =
            String(name).trim();

        return Object.keys(routes).find(
            id => {

                return (

                    validRoom(id) &&

                    routes[id].name.trim() ===
                        target

                );

            }
        );

    }


    // =====================================
    // REPLACE ICON CONTAINER
    // =====================================

    function replaceIcon(container, id) {

        if (
            !container ||
            !validRoom(id)
        ) return;


        // ป้องกันการสร้างภาพซ้ำ

        if (

            container.dataset.goldenIcon === id &&

            container.querySelector(
                ".magical-icon, .magical-icon-fallback"
            )

        ) return;


        container.dataset.goldenIcon = id;


        container.replaceChildren(
            createIcon(id)
        );

    }


    // =====================================
    // MAIN LOCATION CARDS
    // =====================================

    function updateRoomIcons() {

        if (!roomGrid) return;


        const cards =
            roomGrid.querySelectorAll(
                ".room-wrapper"
            );


        cards.forEach(wrapper => {

            const favoriteButton =
                wrapper.querySelector(
                    "[data-favorite-id]"
                );


            let id =
                favoriteButton?.dataset.favoriteId;


            // สำรองกรณีหา ID จากปุ่มดาวไม่พบ

            if (!validRoom(id)) {

                const title =
                    wrapper.querySelector(
                        ".room-card h3"
                    );

                if (title) {

                    id = findRoomByName(
                        title.textContent
                    );

                }

            }


            if (!validRoom(id)) return;


            const iconContainer =
                wrapper.querySelector(
                    ".room-icon"
                );


            replaceIcon(
                iconContainer,
                id
            );

        });

    }


    // =====================================
    // RECENTLY VISITED ICONS
    // =====================================

    function updateRecentIcons() {

        if (!recentGrid) return;


        const cards =
            recentGrid.querySelectorAll(
                ".recent-card"
            );


        cards.forEach(card => {

            const nameElement =
                card.querySelector(
                    ".recent-name"
                );

            const iconContainer =
                card.querySelector(
                    ".recent-icon"
                );


            if (
                !nameElement ||
                !iconContainer
            ) return;


            const id = findRoomByName(
                nameElement.textContent
            );


            if (!validRoom(id)) return;


            replaceIcon(
                iconContainer,
                id
            );

        });

    }


    // =====================================
    // NAVIGATION PAGE ICON
    // =====================================

    function updateNavigationIcon() {

        if (!roomName) return;

        if (

            typeof currentRoute === "undefined" ||

            !currentRoute

        ) return;


        const id = Object.keys(routes).find(
            key => routes[key] === currentRoute
        );


        if (!validRoom(id)) return;


        // ป้องกันการสร้างภาพซ้ำ

        if (

            roomName.dataset.goldenIcon === id &&

            roomName.querySelector(
                ".magical-icon, .magical-icon-fallback"
            )

        ) return;


        roomName.dataset.goldenIcon = id;


        const name =
            document.createElement("span");

        name.className =
            "magical-room-name";

        name.textContent =
            routes[id].name;


        roomName.replaceChildren(

            createIcon(id),

            name

        );

    }


    // =====================================
    // REFRESH ALL CUSTOM ICONS
    // =====================================

    function refreshIcons() {

        updateRoomIcons();

        updateRecentIcons();

        updateNavigationIcon();

    }


    // =====================================
    // AUTOMATIC ICON UPDATES
    // =====================================

    let refreshScheduled = false;


    function scheduleRefresh() {

        if (refreshScheduled) return;

        refreshScheduled = true;


        requestAnimationFrame(() => {

            refreshScheduled = false;

            refreshIcons();

        });

    }


    const observer = new MutationObserver(
        scheduleRefresh
    );


    // ตรวจจับการสร้างการ์ดใหม่
    // โดยไม่แก้ระบบ Favorites หรือ Search

    [roomGrid, recentGrid, roomName]

        .filter(Boolean)

        .forEach(element => {

            observer.observe(
                element,
                {
                    childList: true,
                    subtree: true,
                    characterData: true
                }
            );

        });


    // =====================================
    // INITIALIZATION
    // =====================================

    refreshIcons();


    console.log(
        "HOGWORLDS V2.0.1 — Golden Magical Icons Ready"
    );

})();
