import project1 from "@/images/project1.webp";
import project2 from "@/images/project2.webp";
import project3 from "@/images/project3.webp";
import project4 from "@/images/project4.webp";
import project5 from "@/images/project5.webp";
import css from "@/images/css.png";
import html from "@/images/html.png";
import javascript from "@/images/javascript.png";
import php from "@/images/php.png";
import mysql from "@/images/mysql.png";
import c from "@/images/c.png";
import cpp from "@/images/cpp.png";
import python from "@/images/python.png";
import java from "@/images/java.png";
import cicd from "@/images/cicd.png";
import project6 from "@/images/project6.webp";

const projects = [
  {
    date: "April, 2023",
    category: "Software Engineering",
    title: "Self-Checkout System",
    description:
      "Developed a Java-based self-checkout system with a user-friendly GUI, optimized for streamlined retail transactions. The system supports advanced product recognition and efficient payment processing, ensuring robust performance. Rigorously modeled and tested using JUnit, it guarantees high reliability and enhanced customer experience.",
    technologies: [java],
    image: project6,  
    link: "https://gitlab.com/shahriarbin.zaman/SelfCheckoutSystem",  
},
 
  {
    date: "December, 2022",
    category: "Web Development",
    title: "Gym Management System",
    description:
      "Designed with fitness enthusiasts in mind, our gym management system simplifies operations for fitness centers. Its intuitive interface enables members to seamlessly schedule classes, manage their memberships, and track payments in real-time - all while delivering a superior user experience.",
    technologies: [css, html, javascript, php, mysql],
    image: project1,
    link: "https://gitlab.com/shahriarbin.zaman/CPSC471Project",
  },
  {
    date: "November, 2022",
    category: "Operating System",
    title: "Dynamic Memory Allocator",
    description:
      "This simulator replicates the C library functions malloc() and free(), managing memory with an ordered list of dynamic partitions. It prioritizes efficient memory allocation and deallocation, finding suitable partitions and merging freed space to optimize utilization and illuminate the intricacies of memory management.",
    technologies: [c, cpp],
    image: project2,
    link: "https://gitlab.com/shahriarbin.zaman/dynamic-memory-allocator",
  },
  {
    date: "May, 2022",
    category: "Data Science",
    title: "COVID 19 Automated Data Collection",
    description:
      "Leveraging data collection and automation skills, I compiled and validated COVID-19 data from trusted sources. To ensure continuous access to the latest information, I implemented a CI/CD pipeline using GitLab. This guarantees up-to-date data for analysis, aiding in ongoing research of the COVID-19 pandemic.",
    technologies: [python, cicd],
    image: project3,
    link: "https://gitlab.com/shahriarbin.zaman/data-automation",
  },
  {
    date: "August, 2021",
    category: "Algorithms",
    title: "Flight Paths",
    description:
      "Designed for travel optimization, this project leverages extensive airline data to map out all potential flight routes between cities. The system pinpoints the shortest path between two destinations based on time and cost. This powerful tool empowers travelers to make data-driven decisions, saving time and maximizing their travel budgets.",
    technologies: [java],
    image: project4,
    link: "https://gitlab.com/shahriarbin.zaman/flight-paths",
  },
];

export { projects };
