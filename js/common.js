// Общий код для всех страниц: хелперы, хедер, футер.

const ICONS = {
    logo: "assets/icons/meetLogo.png",
};

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
    // icons
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

// ---------- Хелперы ----------

function createElement(tag, className, text) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (text !== undefined) el.textContent = text;
    return el;
}

// Icons
function createIcon(src, className = "icon") {
    if (src) {
        const img = createElement("img", className);
        img.src = src;
        img.alt = "";
        return img;
    }
    return createElement("span", `${className} placeholder`);
}

// Icons from Google Material Symbols
function createMaterialIcon(name, className = "") {
    return createElement("span", `material-symbols-outlined ${className}`.trim(), name);
}

// Image
function createImage(src, className, alt = "") {
    if (src) {
        const img = createElement("img", className);
        img.src = src;
        img.alt = alt;
        return img;
    }
    return createElement("div", `${className} placeholder`);
}

function createLink(text, className, href = "#") {
    const link = createElement("a", className, text);
    link.href = href;
    return link;
}

// ---------- Header ----------

function renderHeader() {
    const header = document.getElementById("header");
    const inner = createElement("div", "header__inner");

    const logo = createElement("a", "header__logo");
    logo.href = "index.html";
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
    const login = createLink("Log in", "header__login");
    const signup = createLink("Sign up", "btn btn--small");
    nav.append(lang, login, signup);

    inner.append(logo, search, nav);
    header.append(inner);
}

// ---------- Footer ----------

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
