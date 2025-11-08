import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaYoutube} from 'react-icons/fa';
import { MdContactPage } from "react-icons/md";

const greeting = {
  username: "Aqil",
  title: "Welcome, I'm Aqil",
  // subTitle: emoji(
  //   "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  // ),
  resumeLink:
    "https://videos.archivedbyaqil.com/Resume_Aqil_FA_Number_Less.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

const projects = [
  {name: "Fully Self Driving Car",
    link: "https://github.com/aqil18/fully-self-driving-pi", // Use a real link or '#'
    desc: "A simulation project demonstrating autonomy using convulutional neural networks and behavioural cloning.",
    thumbnail: "/picar.jpg" // More descriptive placeholder
  },
  {name: "UBC Workday Hero",
    link: "https://github.com/aqil18/ubc-workday-hero",
    desc: "A browser extension built to enhance the user experience of the UBC Workday system with custom shortcuts and UI improvements.",
    thumbnail: "/workday.png"
  },
  {name: "Sign Language Detector",
    link: "https://github.com/aqil18/sign-language-detector",
    desc: "A web application that translates sign language gestures into text using computer vision and machine learning.",
    thumbnail: "/signlang.png"
  }
  // Add more projects here
]

// --- Data for the connect links ---
// You can easily add or remove links here
const socialLinks = [
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    handle: "Connect Professionally",
    // Replace with your actual LinkedIn URL
    href: "https://www.linkedin.com/in/aqil-f" 
  },
  {
    name: "GitHub",
    icon: FaGithub,
    handle: "See My Code",
     // Replace with your actual GitHub URL
    href: "https://www.github.com/aqil18"
  },
  {
    name: "Email",
    icon: FaEnvelope,
    handle: "Send Me a Message",
     // Replace with your actual email
    href: "mailto:aqilfaizalali@gmail.com"
  },
  {
    name: "Resume",
    icon: MdContactPage,
    handle: "View My Resume",
     // Replace with your actual email
    href: "https://videos.archivedbyaqil.com/Resume_Aqil_FA_Number_Less.pdf"
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    handle: "Follow My Journey",
     // Replace with your actual Instagram URL
    href: "https://www.instagram.com/archivedbyaqil"
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@archivedbyaqil",
    handle: "Watch my demos",
    icon: FaYoutube,
  },
];

export {
  greeting,
  projects,
  socialLinks
};
