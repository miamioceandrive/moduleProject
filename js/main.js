
// У ивентов online: true — ивент онлайн (на мобилке выводится строка Online Event)


const ICONS = {
    logo: "assets/icons/meetLogo.png",
};

const HERO_IMAGE = "assets/images/headImg.png";
const JOIN_IMAGE = "assets/images/joinMeetup.png";


const categoriesData = [
    { title: "Travel and Outdoor", icon: "forest", color: "#1f6f50", image: "" },
    { title: "Social Activities", icon: "local_pizza", color: "#8a1538", image: "" },
    { title: "Hobbies and Passions", icon: "interests", color: "#f5a623", image: "" },
    { title: "Sports and Fitness", icon: "sports_soccer", color: "#00798a", image: "" },
    { title: "Health and Wellbeing", icon: "spa", color: "#1f6f50", image: "" },
    { title: "Technology", icon: "smart_toy", color: "#8a1538", image: "" },
    { title: "Art and Culture", icon: "theater_comedy", color: "#f5a623", image: "" },
    { title: "Games", icon: "casino", color: "#00798a", image: "" },
];

const citiesData = [
    { name: "New York", image: "assets/images/ny.png" },
    { name: "San Francisco", image: "assets/images/sf.png" },
    { name: "Chicago", image: "assets/images/chicago.png" },
    { name: "Nashville", image: "assets/images/nashville.png" },
    { name: "Miami", image: "assets/images/miami.png" },
];

const howWorksData = [
    {
        icon: "search",
        title: "Discover events and groups",
        text: "See who's hosting local events for all the things you love",
        link: "Search events and groups",
    },
    {
        icon: "add",
        title: "Start a group to host events",
        text: "Create your own Meetup group, and draw from a community of millions",
        link: "Start a group",
    },
];

// title и text выводятся только в мобильной версии
const friendshipsData = [
    {
        image: "assets/images/friendships1.png",
        title: "I Used Meetup to Make Friends at Brunch",
        text: "New Jersey-based writer and college student Brianna Stryker wanted to meet friends in her hometown. Learn how she used Meetup to make connections by joining a Girls Night Out Meetup group.",
    },
    {
        image: "assets/images/friendships2.png",
        title: "How to Turn Casual Connections into Close Friendships",
        text: "It's proven that close friendships are harder to make as an adult. But don't sweat it: here's what you can do to simplify the process.",
    },
    {
        image: "assets/images/friendships3.png",
        title: "Do You Have the “Right” Number of Friends?",
        text: "Studies from around the world have tried to help people answer this question. Learn about the three tiers of friendship and how to fulfill them.",
    },
];


const footerData = {
    columns: [
        {
            title: "Your Account",
            links: ["Sign up", "Log in", "Help", "Become an Affiliate"],
        },
        {
            title: "Discover",
            links: ["Groups", "Calendar", "Topics", "Cities", "Online Events", "Local Guides", "Make Friends"],
        },
        {
            title: "Meetup",
            links: ["About", "Blog", "Meetup Pro", "Careers", "Apps", "Podcast"],
        },
    ],
    
    socials: [
        { name: "Facebook", icon: "fa-facebook" },
        { name: "Twitter", icon: "fa-twitter" },
        { name: "YouTube", icon: "fa-youtube" },
        { name: "Instagram", icon: "fa-instagram" },
        { name: "TikTok", icon: "fa-tiktok" },
    ],
    apps: [
        { name: "Google Play", caption: "GET IT ON", icon: "fa-google-play" },
        { name: "App Store", caption: "Download on the", icon: "fa-apple" },
    ],
    bottomLinks: [
        "Terms of Service",
        "Privacy Policy",
        "Do Not Sell or Share My Personal Data",
        "Cookie Policy",
        "Help",
    ],
};

const eventsData = [
    {
        title: "Day Trading Idea and Strategy",
        category: "Business",
        distance: 5,
        date: "MON, MAR 18 · 7:00 PM PDT",
        going: 1,
        price: "Free",
        image: "assets/images/eventDayTrading.png",
        online: false,
    },
    {
        title: "Let's Talk Networking: JPMorgan Chase in Palo Alto",
        category: "Business",
        distance: 25,
        date: "TUE, MAR 19 · 5:00 PM PDT",
        going: 41,
        price: "Free",
        image: "assets/images/eventLetsTalk.png",
        online: false,
    },
    {
        title: "Tech Talks & Quiz: Next-Gen Database Solutions for Emerging Use Cases",
        category: "Technology",
        distance: null,
        date: "WED, MAR 13 · 6:00 PM PDT",
        going: 40,
        price: "Free",
        image: "assets/images/eventTechTalks.png",
        online: true,
    },
    {
        title: "INFORMS San Francisco Chapter In-Person Event",
        category: "Health and Wellbeing",
        distance: 50,
        date: "THU, MAR 28 · 5:00 PM PDT",
        going: 41,
        price: "Free",
        image: "assets/images/eventInforms.png",
        online: false,
    },
    {
        title: "AI Wednesdays - Meet and Greet!",
        category: "Technology",
        distance: 5,
        date: "WED, MAR 13 · 6:30 PM PDT",
        going: 29,
        price: "Free",
        image: "assets/images/eventAi.png",
        online: false,
    },
    {
        title: "ROS By-The-Bay March 2024",
        category: "Social Activities",
        distance: null,
        date: "THU, MAR 21 · 6:00 PM PDT",
        going: 51,
        price: "Free",
        image: "assets/images/eventROS.png",
        online: true,
    },
    {
        title: "Free Christian Singles' Dinner",
        category: "Hobbies and Passions",
        distance: 10,
        date: "FRI, MAR 29 · 6:00 PM PDT",
        going: 11,
        price: "Free",
        image: "assets/images/eventFreeChristian.png",
        online: false,
    },
    {
        title: "In-person: Deep Dive into RAG Architectures (Food served)",
        category: "Hobbies and Passions",
        distance: 50,
        date: "THU, MAR 14 · 5:00 PM PDT",
        going: 16,
        price: "Free",
        image: "assets/images/eventInPerson.png",
        online: false,
    },
];

const onlineEventsData = [
    {
        title: "Amazing On-Demand 15 Min Interviews with Top Coaches and Speakers",
        category: "Business",
        distance: 25,
        date: "THU, MAR 14 · 6:00 PM PDT",
        going: 3,
        price: "Free",
        image: "assets/images/upcomingAmazing.png",
        online: true,
    },
    {
        title: "Vision Pro Developers Online Meetup",
        category: "Technology",
        distance: null,
        date: "WED, MAR 13 · 7:00 PM PDT",
        going: 51,
        price: "Free",
        image: "assets/images/upcomingVisionPro.png",
        online: true,
    },
    {
        title: "Significant Musical Moments",
        category: "Hobbies and Passions",
        distance: 10,
        date: "WED, MAR 13 · 6:00 PM PDT",
        going: 16,
        price: "Free",
        image: "assets/images/upcomingSignificant.png",
        online: true,
    },
    {
        title: "FREE Webinar : Introduction to Power BI",
        category: "Technology",
        distance: null,
        date: "THU, MAR 14 · 5:30 PM PDT",
        going: 33,
        price: "Free",
        image: "assets/images/upcomingFree.png",
        online: true,
    },
];

// ---------- Хелперы ----------

function createElement(tag, className, text) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (text !== undefined) el.textContent = text;
    return el;
}

// Иконка: если путь задан — <img>, иначе заглушка
function createIcon(src, className = "icon") {
    if (src) {
        const img = createElement("img", className);
        img.src = src;
        img.alt = "";
        return img;
    }
    return createElement("span", `${className} placeholder`);
}

// Иконка из Google Material Symbols
function createMaterialIcon(name, className = "") {
    return createElement("span", `material-symbols-outlined ${className}`.trim(), name);
}

// Картинка
function createImage(src, className, alt = "") {
    if (src) {
        const img = createElement("img", className);
        img.src = src;
        img.alt = alt;
        return img;
    }
    return createElement("div", `${className} placeholder`);
}

// ---------- Header ----------

function renderHeader() {
    const header = document.getElementById("header");
    const inner = createElement("div", "header__inner");

    const logo = createElement("a", "header__logo");
    logo.href = "#";
    if (ICONS.logo) {
        logo.append(createIcon(ICONS.logo, "header__logo-img"));
    } else {
        logo.textContent = "Meetup";
    }

    const search = createElement("form", "search");
    const searchField = createElement("label", "search__field");
    const searchInput = createElement("input", "search__input");
    searchInput.type = "text";
    searchInput.placeholder = "Search events";
    searchField.append(createMaterialIcon("search", "search__icon"), searchInput);

    const locationInput = createElement("input", "search__input search__location");
    locationInput.type = "text";
    locationInput.value = "Mountain View, CA";

    const searchBtn = createElement("button", "search__btn");
    searchBtn.type = "submit";
    searchBtn.append(createMaterialIcon("search", "search__btn-icon"));

    search.append(searchField, locationInput, searchBtn);
    search.addEventListener("submit", (e) => e.preventDefault());

    const nav = createElement("nav", "header__nav");
    const lang = createElement("button", "header__lang");
    lang.append(createMaterialIcon("language", "m-icon"), document.createTextNode("English"));
    const login = createElement("a", "header__login", "Log in");
    login.href = "#";
    const signup = createElement("a", "btn btn--small", "Sign up");
    signup.href = "#";
    nav.append(lang, login, signup);

    inner.append(logo, search, nav);
    header.append(inner);
}

// ---------- Hero ----------

function renderHero() {
    const hero = document.getElementById("hero");
    const inner = createElement("div", "container hero__inner");

    const content = createElement("div", "hero__content");
    const title = createElement("h1", "hero__title", "The people platform—Where interests become friendships");
    const text = createElement(
        "p",
        "hero__text",
        "Whatever your interest, from hiking and reading to networking and skill sharing, there are thousands of people who share it on Meetup. Events are happening every day—sign up to join the fun."
    );
    const btn = createElement("a", "btn", "Join Meetup");
    btn.href = "#";
    content.append(title, text, btn);

    inner.append(content, createImage(HERO_IMAGE, "hero__image"));
    hero.append(inner);
}

// ---------- Events ----------

function createEventCard(event) {
    const card = createElement("article", "event-card");

    const media = createElement("div", "event-card__media");
    media.append(createImage(event.image, "event-card__image", event.title));

    const title = createElement("h3", "event-card__title", event.title);

    const categoryText = event.distance !== null
        ? `${event.category} (${event.distance} km)`
        : event.category;
    const category = createElement("p", "event-card__category", categoryText);

    const date = createElement("p", "event-card__row event-card__date");
    date.append(createMaterialIcon("calendar_today", "m-icon"), createElement("span", "", event.date));

    const meta = createElement("div", "event-card__row event-card__info");
    const going = createElement("span", "event-card__meta");
    going.append(createMaterialIcon("check_circle", "m-icon"),createElement("span", "", `${event.going} going`));
    const price = createElement("span", "event-card__meta");
    price.append(createMaterialIcon("confirmation_number", "m-icon"),createElement("span", "", event.price));
    meta.append(going, price);

    card.append(media, title, category, date, meta);

    // Только для мобильной версии
    if (event.online) {
        const online = createElement("p", "event-card__online");
        online.append(createMaterialIcon("videocam", "m-icon"), createElement("span", "", "Online Event"));
        card.append(online);
    }
    card.append(createElement("p", "event-card__attendees", `${event.going} attendees`));

    return card;
}

// sectionId — id секции в html
function renderEvents({ sectionId, title: titleText, events, location: locationText }) {
    const section = document.getElementById(sectionId);
    const inner = createElement("div", "container");

    const head = createElement("div", "events__head");
    const headLeft = createElement("div", "events__head-left");
    const title = createElement("h2", "events__title", titleText);
    headLeft.append(title);
    if (locationText) {
        const location = createElement("button", "events__location");
        location.append(createElement("span", "", locationText), createMaterialIcon("edit", "m-icon"));
        headLeft.append(location);
    }

    const seeAll = createElement("a", "events__see-all", "See all events");
    seeAll.href = "#";
    head.append(headLeft, seeAll);

    const list = createElement("div", "events__list");
    events.forEach((event) => list.append(createEventCard(event)));

    inner.append(head, list);
    section.append(inner);
}

// ---------- Join Meetup ----------

function renderJoin() {
    const section = document.getElementById("join");
    const inner = createElement("div", "container");
    const banner = createElement("div", "join__banner");

    const content = createElement("div", "join__content");
    const title = createElement("h2", "join__title", "Join Meetup");
    const text = createElement(
        "p",
        "join__text",
        "People use Meetup to meet new people, learn new things, find support, get out of their comfort zones, and pursue their passions, together. Membership is free."
    );
    const btn = createElement("a", "btn btn--pink join__btn", "Sign up");
    btn.href = "#";
    content.append(title, text, btn);

    banner.append(content, createImage(JOIN_IMAGE, "join__image"));
    inner.append(banner);
    section.append(inner);
}

// ---------- Categories ----------

function createCategoryCard(category) {
    const card = createElement("a", "category-card");
    card.href = "#";

    let icon;
    if (category.image) {
        icon = createIcon(category.image, "category-card__icon");
    } else {
        icon = createMaterialIcon(category.icon, "category-card__icon");
        icon.style.color = category.color;
    }

    card.append(icon, createElement("span", "category-card__title", category.title));
    return card;
}

function renderCategories(categories) {
    const section = document.getElementById("categories");
    const inner = createElement("div", "container");

    const title = createElement("h2", "categories__title", "Explore top categories");
    const list = createElement("div", "categories__list");
    categories.forEach((category) => list.append(createCategoryCard(category)));

    inner.append(title, list);
    section.append(inner);
}

// ---------- Popular cities ----------

function createCityCard(city) {
    const card = createElement("a", "city-card");
    card.href = "#";
    card.append(
        createImage(city.image, "city-card__image", city.name),
        createElement("span", "city-card__name", city.name)
    );
    return card;
}

function renderCities(cities) {
    const section = document.getElementById("cities");
    const inner = createElement("div", "container");

    const title = createElement("h2", "section-title", "Popular cities on Meetup");
    const subtitle = createElement(
        "p",
        "cities__subtitle",
        "Looking for fun things to do near you? See what Meetup organizers are planning in cities around the country."
    );
    const list = createElement("div", "cities__list");
    cities.forEach((city) => list.append(createCityCard(city)));

    inner.append(title, subtitle, list);
    section.append(inner);
}

// ---------- How Meetup works ----------

function createHowCard(item) {
    const card = createElement("div", "how-card");

    const content = createElement("div", "how-card__content");
    const title = createElement("h3", "how-card__title", item.title);
    const text = createElement("p", "how-card__text", item.text);
    const link = createElement("a", "how-card__link", item.link);
    link.href = "#";
    content.append(title, text, link);

    card.append(createMaterialIcon(item.icon, "how-card__icon"), content);
    return card;
}

function renderHowWorks(items) {
    const section = document.getElementById("how-works");
    const inner = createElement("div", "container");

    const title = createElement("h2", "section-title", "How Meetup works");
    const list = createElement("div", "how-works__list");
    items.forEach((item) => list.append(createHowCard(item)));

    inner.append(title, list);
    section.append(inner);
}

// ---------- Friendships ----------

function createFriendshipCard(item) {
    const card = createElement("article", "friendship-card");

    const body = createElement("div", "friendship-card__body");
    const title = createElement("h3", "friendship-card__title", item.title);
    const text = createElement("p", "friendship-card__text", item.text);
    const link = createElement("a", "friendship-card__link", "Read more");
    link.href = "#";
    body.append(title, text, link);

    card.append(createImage(item.image, "friendships__image", item.title), body);
    return card;
}

function renderFriendships(items) {
    const section = document.getElementById("friendships");
    const inner = createElement("div", "container");

    const title = createElement("h2", "section-title", "Friendships are made on Meetup");
    const text = createElement(
        "p",
        "friendships__text",
        "Since 2002, members have used Meetup to make new friends, meet like-minded people, spend time on hobbies, and connect with locals over shared interests. "
    );
    const learnLink = createElement("a", "friendships__link", "Learn how.");
    learnLink.href = "#";
    text.append(learnLink);

    const list = createElement("div", "friendships__list");
    items.forEach((item) => list.append(createFriendshipCard(item)));

    inner.append(title, text, list);
    section.append(inner);
}

// ---------- Footer ----------

function createLink(text, className) {
    const link = createElement("a", className, text);
    link.href = "#";
    return link;
}

function renderFooter(data) {
    const footer = document.getElementById("footer");
    const inner = createElement("div", "container footer__inner");

    // Верхняя строка
    const top = createElement("div", "footer__top");
    top.append(
        createElement("p", "footer__cta", "Create your own Meetup group."),
        createLink("Get Started", "footer__btn")
    );

    // Колонки ссылок
    const columns = createElement("div", "footer__columns");
    data.columns.forEach((column) => {
        const col = createElement("div", "footer__column");
        col.append(createElement("h4", "footer__column-title", column.title));
        const list = createElement("ul", "footer__links");
        column.links.forEach((text) => {
            const li = createElement("li");
            li.append(createLink(text, "footer__link"));
            list.append(li);
        });
        col.append(list);
        columns.append(col);
    });

    // Соцсети и приложения
    const middle = createElement("div", "footer__middle");

    const follow = createElement("div", "footer__follow");
    follow.append(createElement("h4", "footer__column-title", "Follow us"));
    const socials = createElement("div", "footer__socials");
    data.socials.forEach((social) => {
        const link = createElement("a", "footer__social");
        link.href = "#";
        link.setAttribute("aria-label", social.name);
        link.append(createElement("i", `fa-brands ${social.icon} footer__social-icon`));
        socials.append(link);
    });
    follow.append(socials);

    const apps = createElement("div", "footer__apps");
    data.apps.forEach((app) => {
        const link = createElement("a", "footer__app");
        link.href = "#";
        link.setAttribute("aria-label", app.name);
        const text = createElement("span", "footer__app-text");
        text.append(
            createElement("span", "footer__app-caption", app.caption),
            createElement("span", "footer__app-name", app.name)
        );
        link.append(createElement("i", `fa-brands ${app.icon} footer__app-icon`), text);
        apps.append(link);
    });

    middle.append(follow, apps);

    // Нижняя строка
    const bottom = createElement("div", "footer__bottom");
    bottom.append(createElement("span", "footer__copy", "© 2024 Meetup"));
    data.bottomLinks.forEach((text) => bottom.append(createLink(text, "footer__bottom-link")));

    inner.append(top, columns, middle, bottom);
    footer.append(inner);
}

// ---------- Init ----------

renderHeader();
renderHero();
renderEvents({
    sectionId: "events",
    title: "Events near",
    events: eventsData,
    location: "Mountain View, CA",
});
renderEvents({
    sectionId: "online-events",
    title: "Upcoming online events",
    events: onlineEventsData,
});
renderJoin();
renderCategories(categoriesData);
renderCities(citiesData);
renderHowWorks(howWorksData);
renderFriendships(friendshipsData);
renderFooter(footerData);
