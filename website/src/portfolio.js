const greeting = {
  username: "Aqil",
  title: "Hi all, I'm Aqil",
  // subTitle: emoji(
  //   "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  // ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
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


export {
  greeting,
  projects
};
