import ipify from "./images/Ipify.png";
import kimono from "./images/Kimono.png";
import netflix from "./images/netflix.png";
import google from "./images/google.png";
import shortly from "./images/Shortly.png";

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
    img: shortly,
    desc: "This MERN Stack Project Required me to build a fully responsive Web-app That users can sign-up and shorten very long annoying links. I also used the shortener API to dispatch the shorten functionality.",
    tech: "MERN | Redux-Toolkit | Redux | Shorten API",
    git: "https://github.com/kinghennry/shortly",
    site: "https://my-shoortly.netlify.app/",
  },
  {
    id: 2,
    name: "IP Address Tracker",
    img: ipify,
    desc: "This Project Required me to build a fully responsive Ip address tracker with React , react leaflet for the map and the IP Geolocation API by IPify.",
    tech: "React | Geolocation API",
    git: "https://github.com/kinghennry/Ip-Address",
    site: "https://ip-addresstracker.netlify.app",
  },
  {
    id: 3,
    name: "Kimono Video App",
    img: kimono,
    desc: "This is a MERN Stack Project Done with Socket.io that Required me to build a web app that Allows Guests to make real time video calls.",
    tech: "MERN | Socket.io | Context-API",
    git: "https://github.com/kinghennry/video-app",
    site: "https://kimoono.netlify.app",
  },
  {
    id: 4,
    name: "NetFlix Clone",
    img: netflix,
    desc: "This Project Required me to build a fully responsive Netflix clone with React and TMDB APIs to get the movie list...",
    tech: "React, TMDB APIs",
    git: "https://github.com/kinghennry/netlify",
    site: "https://mynetflix-clone.netlify.app/",
  },
  {
    id: 5,
    name: "Google",
    img: google,
    desc: "This Project Required me to build a fully responsive Google Page with Real Time Search Functionality. I used React and The Google Search APIs to get realtime data.",
    tech: "React, Google Search APIs",
    git: "https://github.com/kinghennry/google",
    site: "https://my-google-cloone.netlify.app",
  },
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
