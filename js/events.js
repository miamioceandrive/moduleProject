// ---------- Данные ----------

const CITY = "New York, NY";
// Карта OpenStreetMap 
const MAP_URL = "https://www.openstreetmap.org/export/embed.html?bbox=-74.03,40.69,-73.93,40.79&layer=mapnik";

// Фильтры над списком (пока без логики)
const filtersData = ["Any type", "Any distance", "Any category"];

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

function createFilters(filters) {
    const wrap = createElement("div", "filters");
    filters.forEach((text) => {
        const btn = createElement("button", "filters__btn");
        btn.type = "button";
        btn.append(createElement("span", "", text), createMaterialIcon("expand_more", "filters__icon"));
        wrap.append(btn);
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
    searchEventsData.forEach((event) => list.append(createEventRow(event)));

    content.append(title, tabs, createFilters(filtersData), list);
    inner.append(content, createMapCard());
    page.append(inner);
}

// ---------- Init ----------

renderHeader();
renderSearchPage();
renderFooter(footerData);
