import pricetracker from "../assets/pricetracker.PNG";
import superheroapi from "../assets/superheroapi.PNG";
import comingsoon from "../assets/comingsoon.PNG";
import mywebsite from "../assets/mywebsite.png";

/*
This is our local API. We pass this data we created dynamically.
If we want to add one more project all we need to do is create another data with imgsrc, projectTitle etc.
*/


const ProjectCardData = [
    {
        imgsrc : pricetracker,
        projectTitle: "Frontend - Market price tracker (Cryptocurrency)",
        projectDetails: "As someone interested in the financial market I wanted to create a web application project that allows the user to search for a cryptocurrency which then displays relevant data on it (real time data such as price, marketcap etc). I wanted to find and use an open stock prices API however couldn't find a good one so instead used a cryptocurrency API (similar concept).",
        view : "https://www.youtube.com/",
        source: "https://github.com/Andrew-Ham/Cryptocurrency-display---FRONTEND"
    },
    {
        imgsrc : superheroapi,
        projectTitle: "Backend - CRUD API connected with EF Core.",
        projectDetails: "I wanted to branch out and work on a backend project so I built a character API that creates, reads, updates and deletes from a local SQL database using EF core. I wanted to branch out and learn as much I could so I learnt and integrated EF Core, E2E testing with Postman, caching, api throttling and much more which can be see on my youtube video/github!",
        view : "https://www.youtube.com/",
        source: "https://github.com/Andrew-Ham/Character_API---BACKEND"

    },
    {
        imgsrc : mywebsite,
        projectTitle: "Frontend - My project website",
        projectDetails: "I wanted to learn and create a responsive react portfolio website (which you are viewing!)! For this project I wanted to be conscious of best file/folder structure as well as focus more on styling components, component breakdown and reusing components. While creating my website I also made sure the website's styling is suitable for mobile devices!  ",
        view : "https://www.youtube.com/",
        source: "https://github.com/Andrew-Ham/Character_API---BACKEND"
    },
    {
        imgsrc : comingsoon,
        projectTitle: "New project coming soon (fullstack project)",
        projectDetails: "After looking back and seeing the progress I made on my projects I appreciated how much I learnt and seeing the myself continually improve is why I am passionate about learning. In this upcoming project I want to test myself create a fullstack project. Like with my other projects I want to challenge myself and enjoy the journey from starting from scratch and completion!",
        view : "",
        source: ""
    }
];

export default ProjectCardData;