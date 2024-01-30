import { AndroidIcon, Unity3dIcon, PythonIcon } from "../assets/icons/Icons";

const projects = [
  {
    name: "Fintrade",
    descriptions: [
      "Fintrade is a Python-based automation tool that simplifies financial data analysis. It connects to the National Stock Exchange (NSE), retrieves real-time data, and generates daily stock and indices chart reports in PDF format.",
      "Using Pandas and web scraping techniques, Fintrade performs backend computations to provide valuable insights into the financial markets.",
      "Customize settings in the config.py file to tailor the tool to your needs. Start simplifying your financial analysis with Fintrade today!",
    ],
    link: {
      github: "https://github.com/ajitgoud/FinTrade",
      label: "Fintrade",
    },
    techstack: ["Python", "Pandas", "Web scrapping"],
    Icon: PythonIcon,
  },
  {
    name: "Vernin",
    descriptions: [
      "Vernin is an Android app designed to bridge the gap for physically disabled students seeking academic support. Through the app, students can post their scribe requirements, and nearby scribes receive notifications to provide assistance.",
      "With real-time chat functionality and a user-friendly interface crafted with Figma, Vernin ensures seamless communication and accessibility.",
      "Leveraging Firebase, Google libraries, and Android Jetpack, Vernin empowers students to connect with the help they need to excel academically. Simplify academic support with Vernin today!",
    ],
    techstack: [
      "Android SDK",
      "Retrofit",
      "REST Api",
      "Firebase",
      "Glide",
      "Google map",
      "Figma",
      "Cloud functions",
      "Cloud messaging",
    ],
    Icon: AndroidIcon,
  },
  {
    name: "Wall HD",
    descriptions: [
      "WallHD is an Android wallpaper app that connects to the Unsplash RESTful API, offering users a diverse selection of stunning for their device's home and lock screens.",
      "With features like downloading, setting wallpapers, and bookmarking, it provides a seamless wallpaper experience. Built using modern Android SDK, Firebase, Retrofit, and following MVVM architecture, WallHD offers efficient image loading and a user-friendly Material Design interface.",
    ],
    link: {
      youtube: "https://www.youtube.com/watch?v=jfgTQTQAblc",
      github: "https://github.com/ajitgoud/WallHD",
      label: "WallHD",
    },
    techstack: [
      "Android SDK",
      "Retrofit",
      "REST Api",
      "Unsplash Api",
      "Firebase",
      "Google sign in",
      "Material design",
    ],
    Icon: AndroidIcon,
  },
  {
    name: "Todo notes",
    descriptions: [
      "Todo Notes is a feature-rich Android note-taking app that simplifies the process of creating and managing your notes. Built using Android Jetpack libraries like Room and SharedPreferences, it offers efficient data storage and customizable app preferences.",
      "Create, edit, and organize your notes effortlessly with a user-friendly interface. Whether you need to jot down ideas, to-dos, or reminders, Todo Notes is the perfect tool for keeping your notes organized and accessible.",
      "Start simplifying your note-taking experience with Todo Notes today!",
    ],

    link: {
      github: "https://github.com/ajitgoud/TodoNotes",
      label: "TodoNotes",
    },
    techstack: ["Android SDK", "Room", "MVVM"],
    Icon: AndroidIcon,
  },
  {
    name: "GpayListener",
    descriptions: [
      "GpayListener is an Android app designed to simplify payment tracking for Google Pay users.",
      "Its background service listens for Google Pay notifications and automatically triggers API calls to StreamsLab for seamless payment tracking.",
      "With a minimalistic and non-intrusive design, GpayListener ensures that users can effortlessly monitor and record their received payments.",
      "Built with the Android SDK and Retrofit, it offers a straightforward solution for keeping track of financial transactions.",
    ],

    link: {
      github: "https://github.com/ajitgoud/GpayNotificationListener",
      label: "GpayListener",
    },
    techstack: ["Android SDK", "Retrofit", "REST Api", "Services"],
    Icon: AndroidIcon,
  },

  {
    name: "Treasure hunt",
    descriptions: [
      "Treasure Hunt is an engaging 3D game created with Unity3D, where players embark on an exciting adventure to find the hidden castle and complete the treasure hunt.",
      "Utilizing the Unity3D engine and C#, the game offers immersive gameplay and challenges players to explore and discover their way to victory. With the addition of Adobe Fuse, Treasure Hunt delivers captivating visuals and an exhilarating gaming experience.",
    ],
    techstack: ["Unity3d", "3D modelling"],
    Icon: Unity3dIcon,
  },
];

export default projects;
