import nugosauce from "../images/PanelImages/nugosauce.png";
import hostilealiens from "../images/PanelImages/hostilealiens.png";
import todolist from "../images/PanelImages/todolist.png";
import incollaboration from "../images/PanelImages/incollaboration.png";
import Flow from "../images/PanelImages/Flow.png";
import filter from "../images/PanelImages/filter.png";
import clock from "../images/PanelImages/clock.png";
import calendar from "../images/PanelImages/calendar.png";

export const data = [
  {
    title: "Nug o'Sauce",
    image: nugosauce,
    description:
      "A tug of war game, whereby the player who presses their button the most times wins.",
    requirements:
      "Be responsive, be able to see how many times each player has won and be able to refresh the game, only using HTML, CSS and Javascript.",
    url: "http://nug-of-sauce.danmjones.co.uk/"
  },
  {
    title: "Hostile Aliens",
    image: hostilealiens,
    description:
      "A game in which the user has to destroy a group of hostile aliens by clicking a fire button. Each time the fire button is pressed, damage is dealt to the aliens.",
    requirements:
      "Be responsive, be able to refesh the game and be able to see how much damage is being dealt and to who, only using HTML, CSS and Javascript",
    url: "http://hostilealiens.danmjones.co.uk/"
  },
  {
    title: "To Do List",
    image: todolist,
    description:
      "A to do list tool that a logged in user can use to create, update and delete personal to do lists.",
    requirements:
      "Authentication and hosted with firebase, the user needs to be able to create new list items that are personal to them when they are logged in, using React.js.",
    url: "https://todo.danmjones.co.uk/"
  },
  {
    title: "In Collaboration",
    image: incollaboration,
    description:
      "This was a client project that we had to work on for four weeks during our time at nology.",
    requirements:
      "A logged in user should be able to create posts and events on their own community feed, which are then stored in a database. A member of a community should also recieve notifications when another member of their community creates a post.",
    url: "https://incollaboration.nology.io/login"
  },
  {
    title: "Javascript Clock",
    image: clock,
    description:
      "This was a personal interest project that I undertook in my spare time to improve my vanilla javascript.",
    requirements:
      "There were no official requirements. However, when I set out to complete this project, I wanted to have an analogue clock, digital clock and a stop watch",
    url: "http://clocks.danmjones.co.uk/"
  },
  {
    title: "Flow Wellbeing",
    image: Flow,
    description: "In progress",
    requirements: "In progress"
  },
  {
    title: "Filter Buttons",
    image: filter,
    description:
      "This was a brief set for us, whereby the user should be able to filter through a group of posts in a database and select all posts that match that filter type",
    requirements:
      "The application needed to be hosted in firebase and data from the database needed to be dynamically rendered onto the web page.",
    url: "https://danandaleobrief.danmjones.co.uk/"
  },
  {
    title: "API Calendar",
    image: calendar,
    description:
      "This was a brief where we had to use an API key to access data from a google calendar and create our own calendar using the same information.",
    requirements:
      "It had to be visually appealing, the user had to be able to filter out events they did not wish to see using React.js.",
    url: "https://calendar.danmjones.co.uk/"
  }
];
