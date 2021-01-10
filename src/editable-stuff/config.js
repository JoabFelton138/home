// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Joab",
  middleName: "",
  lastName: "Felton",
  message: "Passionate about all things tech.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/JoabFelton138",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/joab-felton/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/16apx8s6zlVwCu7Aea6jdJtXOnAb6GsNP8QAsTv7gWZo/edit",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/0.jpg"),
  imageSize: 375,
  message:
    "I'm a highly driven and enthusiastic individual; inquisitive in nature, my studies and professional experiences have provided me with an aptitude for logical problem solving. Having achieved a first class degree in Computer Science, and through recently completing a 12 week bootcamp in Data Engineering, I am currently seeking a full-time employment opportunity with an ambitious and rewarding organisation in order to develop upon my technical capabilites and fulfill my aspiration of working within the broad and exciting world of technology.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "JoabFelton138", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["Brew_App_Generation", "TicTacToeJavaSwing", "Craig_Hunt_Coaching_FYP", "Cafe_Connect_Data_Pipeline_Generation"],
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "Java", value: 65 },
    { name: "PHP", value: 90 },
    { name: "Amazon Web Services", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "Bootstrap", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaborative", value: 90 },
    { name: "Persistent", value: 75 },
    { name: "Adaptable", value: 85 },
    { name: "Adept Problem Solver", value: 75 },
    { name: "Resilient", value: 90 },
    { name: "Inquisitive", value: 70 },
    { name: "Creative", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for Technical Graduate opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "joab_felton91@hotmail.co.uk",
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch };
