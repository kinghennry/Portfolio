import ip from "./images/IMG_20210401_110516_521.JPG";
// import eb from "./images/IMG_20210401_110544_772.JPG";
// import mange from "./images/IMG_20210401_110558_635.JPG";
import fb from "./images/IMG_20210401_111030_063.JPG";
// import bk from "./images/IMG_20210401_111041_268.JPG";
// import netflix from "./images/IMG_20210401_111051_791.JPG";
// import fylo from "./images/IMG_20210401_111101_905.JPG";

export const routes = [
  {
    id: 1,
    link: "Home",
    page: "/",
    color: "green",
  },
  {
    id: 2,
    link: "Portfolio",
    page: "/portfolio",
  },
];

export const projects = [
  {
    id: 1,
    name: "Shortly",
    img: fb,
    desc: "This Project Required me to build a facebook clone with react. I used Google auth for login, along with google firebase to store posts and image urls and to give it the real time functionality.",
    git: "https://github.com/kinghennry/facebook-frontend",
    site: "https://facebook-clone-5cc75.web.app",
  },
  {
    id: 2,
    name: "IP Address Tracker",
    img: ip,
    desc: "This Project Required me to build a fully responsive Ip address tracker with React , react leaflet for the map and the IP Geolocation API by IPify.",
    git: "https://github.com/kinghennry/ip-address",
    site: "https://ip-addresstracker.netlify.app",
  },
  //   {
  //     id: 3,
  //     name: "Netlify Clone",
  //     img: netflix,
  //     desc: "This Project Required me to build a fully responsive Netflix clone with React and TMDB APIs to get the movie list...",
  //     git: "https://github.com/kinghennry/netlify",
  //     site: "https://mynetflix-clone.netlify.app/",
  //   },
  //   {
  //     id: 4,
  //     name: "Bookmark",
  //     img: bk,
  //     desc: "This Project Required me to build a fully responsive landing page to the designs provided. I used React for the areas that required interactivity,such as the accordion and dynamic tab rendering.",
  //     git: "https://github.com/kinghennry/bookmark",
  //     site: "https://bookmark-clone.netlify.app/",
  //   },
  //   {
  //     id: 5,
  //     name: "Manage",
  //     img: mange,
  //     desc: "This Project Required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and Javascript for the areas that required interactivity,such as the navigation bar and testimonial slider.",
  //     git: "https://github.com/kinghennry/manage",
  //     site: "https://manage-clone.netlify.app/",
  //   },
  //   {
  //     id: 6,
  //     name: "Easybank",
  //     img: eb,
  //     desc: "This Project Required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid , flexbox and Javascript for the areas that required interactivity,such as the navigation bar .",
  //     git: "https://github.com/kinghennry/easybank",
  //     site: "https://easybank-clone.netlify.app/",
  //   },
];
