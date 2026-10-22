// ---------- Данные ----------

const CITY = "New York, NY";
// Карта OpenStreetMap. bbox — границы области: запад, юг, восток, север
const MAP_URL = "https://www.openstreetmap.org/export/embed.html?bbox=-74.03,40.69,-73.93,40.79&layer=mapnik";

// Фильтры: key — по какому полю фильтруем, value "" — без фильтра
const filtersData = [
    {
        key: "type",
        options: [
            { value: "", label: "Any type" },
            { value: "online", label: "Online" },
            { value: "offline", label: "In person" },
        ],
    },
    {
        key: "distance",
        options: [
            { value: "", label: "Any distance" },
            { value: "5", label: "Within 5 km" },
            { value: "10", label: "Within 10 km" },
            { value: "25", label: "Within 25 km" },
            { value: "50", label: "Within 50 km" },
        ],
    },
    {
        key: "category",
        options: [
            { value: "", label: "Any category" },
            { value: "Hobbies and Passions", label: "Hobbies and Passions" },
            { value: "Technology", label: "Technology" },
        ],
    },
];

// Текущие значения фильтров
const activeFilters = { type: "", distance: "", category: "" };

// type: "online" | "offline"; distance — км или null; attendees, spotsLeft — необязательные
const searchEventsData = [
    {
        title: "All Nations - Manhattan Missions Church Bible Study",
        category: "Hobbies and Passions",
        distance: 5,
        date: "WED, MAR 13 · 11:30 PM UTC",
        type: "offline",
        attendees: null,
        spotsLeft: null,
        image: "assets/images/eventAllNations.png",
    },
    {
        title: "INFJ Personality Type - Coffee Shop Meet & Greet",
        category: "Hobbies and Passions",
        distance: 25,
        date: "SAT, MAR 23 · 3:00 PM UTC",
        type: "offline",
        attendees: 99,
        spotsLeft: null,
        image: "assets/images/eventCoffeeShop.png",
    },
    {
        title: "NYC AI Users - AI Tech Talks, Demo & Social: RAG Search and Customer Experience",
        category: "Technology",
        distance: 50,
        date: "WED, MAR 13 · 11:30 PM UTC",
        type: "offline",
        attendees: 43,
        spotsLeft: 2,
        image: "assets/images/eventNYUsers.png",
    },
    {
        title: "Book 40+ Appointments Per Month Using AI and Automation",
        category: "Technology",
        distance: null,
        date: "WED, MAR 13 · 11:30 PM UTC",
        type: "online",
        attendees: null,
        spotsLeft: null,
        image: "assets/images/eventBook40+.png",
    },
    {
        title: "Dump writing group weekly meetup",
        category: "Hobbies and Passions",
        distance: null,
        date: "WED, MAR 13 · 11:00 PM UTC",
        type: "online",
        attendees: 77,
        spotsLeft: null,
        image: "assets/images/dumpWriting.png",
    },
    {
        title: "Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community",
        category: "Hobbies and Passions",
        distance: null,
        date: "THU, MAR 14 · 11:00 PM UTC",
        type: "online",
        attendees: 140,
        spotsLeft: null,
        image: "assets/images/eventOver40s.png",
    },
];

// ---------- Список ивентов ----------

function createEventRow(event) {
    const row = createElement("article", "event-row");

    const info = createElement("div", "event-row__info");
    const categoryText = event.distance !== null
        ? `${event.category} (${event.distance} km)`
        : event.category;
    info.append(
        createElement("p", "event-row__date", event.date),
        createElement("h3", "event-row__title", event.title),
        createElement("p", "event-row__category", categoryText)
    );

    // Строка «Online Event» — видна только в мобильной версии
    if (event.type === "online") {
        const online = createElement("p", "event-row__online");
        online.append(createMaterialIcon("videocam"), createElement("span", "", "Online Event"));
        info.append(online);
    }

    row.append(createImage(event.image, "event-row__image", event.title), info);

    if (event.attendees !== null || event.spotsLeft !== null) {
        const footer = createElement("p", "event-row__footer");
        if (event.attendees !== null) {
            footer.append(createElement("span", "", `${event.attendees} attendees`));
        }
        if (event.spotsLeft !== null) {
            footer.append(createElement("span", "event-row__spots", `${event.spotsLeft} spots left`));
        }
        row.append(footer);
    }

    return row;
}

// ---------- Фильтрация ----------

// Оставляет только ивенты, подходящие под все выбранные фильтры.
// Пустой фильтр ("") пропускается, return false — ивент выкидывается.
function filterEvents(events) {
    return events.filter((event) => {
        const { type, distance, category } = activeFilters;
        if (type && event.type !== type) return false;
        // distance в select — строка, поэтому Number(); у онлайн-ивентов расстояния нет (null)
        if (distance && (event.distance === null || event.distance > Number(distance))) return false;
        if (category && event.category !== category) return false;
        return true;
    });
}

// Очищает список и рисует заново только отфильтрованные ивенты
function renderEventList() {
    const list = document.getElementById("event-rows");
    list.innerHTML = "";

    const events = filterEvents(searchEventsData);
    if (events.length === 0) {
        list.append(createElement("p", "event-rows__empty", "No events found. Try changing the filters."));
        return;
    }
    events.forEach((event) => list.append(createEventRow(event)));
}

// Для каждого фильтра создаёт <select>; при выборе запоминает значение и перерисовывает список
function createFilters(filters) {
    const wrap = createElement("div", "filters");
    filters.forEach((filter) => {
        const label = createElement("label", "filters__btn");
        const select = createElement("select", "filters__select");
        filter.options.forEach((option) => {
            const opt = createElement("option", "", option.label);
            opt.value = option.value;
            select.append(opt);
        });

        select.addEventListener("change", () => {
            activeFilters[filter.key] = select.value;
            renderEventList();
        });

        label.append(select, createMaterialIcon("expand_more", "filters__icon"));
        wrap.append(label);
    });
    return wrap;
}

// ---------- Карта ----------

function createMapCard() {
    const aside = createElement("aside", "map-card");

    const label = createElement("p", "map-card__label", "Find events near");
    const city = createElement("h2", "map-card__city", CITY);

    const map = createElement("div", "map-card__map");
    const close = createElement("button", "map-card__close");
    close.type = "button";
    close.setAttribute("aria-label", "Close map");
    close.append(createMaterialIcon("close"));

    const browse = createElement("button", "map-card__browse");
    browse.type = "button";
    browse.append(createElement("span", "", "Browse in map"), createMaterialIcon("open_in_full"));

    const frame = createElement("iframe", "map-card__image");
    frame.src = MAP_URL;
    frame.title = `Map of ${CITY}`;
    frame.loading = "lazy";
    frame.tabIndex = -1;

    // Browse in map — включает живую карту, крестик — возвращает превью
    function setMapActive(active) {
        map.classList.toggle("map-card__map--active", active);
        frame.tabIndex = active ? 0 : -1;
    }
    browse.addEventListener("click", () => setMapActive(true));
    close.addEventListener("click", () => setMapActive(false));

    map.append(frame, close, browse);
    aside.append(label, city, map);
    return aside;
}

// ---------- Страница ----------

function renderSearchPage() {
    const page = document.getElementById("search-page");
    const inner = createElement("div", "container search-page__inner");

    const content = createElement("section", "search-page__content");
    const title = createElement("h1", "search-page__title", `Events near ${CITY}`);

    const tabs = createElement("div", "tabs");
    tabs.append(createLink("Events", "tabs__item tabs__item--active"));

    const list = createElement("div", "event-rows");
    list.id = "event-rows";

    content.append(title, tabs, createFilters(filtersData), list);
    inner.append(content, createMapCard());
    page.append(inner);

    renderEventList();
}

// ---------- Init ----------

renderHeader();
renderSearchPage();
renderFooter(footerData);
