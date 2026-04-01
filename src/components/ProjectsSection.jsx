//import NotFound from "./NotFound";
import { ExternalLink,  Computer , ArrowRight} from "lucide-react";

const projects = [
    { // Virtual Machine
        id: 1,
        title: "Stack Based Virtual Machine",
        description: "Virtual Machine for a custom made stack based Assembly Language in C++.",
        image: "/projects/Virtual-Machine.png",
        tags: ["C++", "GCC"],
        demoUrl: "#",
        githubUrl: "https://github.com/CatalystKD1/First-Virtual-Machine"
    },
    { // Datafy Music Database
        id: 2,
        title: "Datafy Music Database",
        description: "Music Database project to create playlist, share songs and find new artists.",
        image: "/projects/Datafy_App.jpg",
        tags: ["React", "JavaScript", "TailwindCSS", "Python", "Node.js", "SQL", "MySQL"],
        demoUrl: "#",
        githubUrl: "https://github.com/CatalystKD1/Datafy_Music_Databse"
    },
    { // MySQL Video Game COllection
        id: 3,
        title: "Video Game Collection App Using MySQL",
        description: "App to view and sort videos games that you have in your collection.",
        image: "/projects/GameCollection.png",
        tags: ["Python", "SQL", "MySQL"],
        demoUrl: "#",
        githubUrl: "https://github.com/CatalystKD1/MySQL-Video-Game-Collection"
    },
    {  // MovieFinder App
        id: 4,
        title: "Movie Finder App",
        description: "Application to search for movies using the IMDB API.",
        image: "/projects/MovieDatabase.jpg",
        tags: ["React", "JavaScript", "CSS", "IMDB API"],
        demoUrl: "#",
        githubUrl: "https://github.com/CatalystKD1/MovieFinderAPP"
    },
    { // Duck Bugging
        id: 5,
        title: "Duck Debugging",
        description: "Application that follows allows you to record your ideas. Follows the Rubber Duck Debugging Principles.",
        image: "/projects/DuckBugging.jpg",
        tags: ["JavaScript", "Three.js", "HTML", "CSS", "Vite", "Blender"],
        demoUrl: "https://catalystkd1.github.io/Duck_Bugging/",
        githubUrl: "https://github.com/CatalystKD1/Duck_Bugging"
    },
    { // LaTex Compiler
        id: 6,
        title: "LaTex Compiler",
        description: "A LaTex compiler that let's you edit variables without editing the Latex file",
        image: "/projects/LaTex_Compiler_app.jpg",
        tags: ["React", "JavaScript", "CSS", "Express.js", "pdflatex", "Node.js"],
        demoUrl: "#",
        githubUrl: "https://github.com/CatalystKD1/LaTexCompiller"
    },
    { // NASA APOD APP
        id: 7,
        title: "NASA APOD App",
        description: "An application that allows you to view NASA's Astronomy Picture of the Day",
        image: "/projects/NASA_APOD_APP.jpg",
        tags: ["React", "JavaScript", "CSS", "HTML", "NASA APOD API"],
        demoUrl: "#",
        githubUrl: "https://github.com/CatalystKD1/React-NASA-API"
    }, 
    { // ToDo App
        id: 8,
        title: "ToDo List",
        description: "Simple ToDo list project to keep track of tasks that need to be completed and checked off completed tasks.",
        image: "/projects/ToDo.png",
        tags: ["JavaScript", "HTML", "CSS", "SQL", "MySQL", "Node.js"],
        demoUrl: "#",
        githubUrl: "https://github.com/CatalystKD1/Todo-List-Project"
    },
    { // JS Snake
        id: 9,
        title: "JavaScript Sname",
        description: "Recreation of the classic game Snake.",
        image: "/projects/Snake.jpg",
        tags: ["JavaScript", "CSS", "HTML"],
        demoUrl: "#",
        githubUrl: "https://github.com/CatalystKD1/JavaScript-Snake"
    },
]

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative scroll-mt-20">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold md-4 text-center">
                Featured <span className="text-primary"> Projects </span></h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent proejcts. Each was created in alignment with my interests and with consideration of the users.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            
                                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                                <div className="flex justify-between items-center">
                                        <div className="flex justify-between items-center">
                                            <div className="flex space-x-3">
                                               <a 
                                                    /** Make change to send to the 404 page instead please */
                                                    href={project.demoUrl} 
                                                    target="_blank"
                                                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                                >
                                                    <ExternalLink size={20}/>
                                                </a>
                                                <a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                                >
                                                    <Computer size={20}/>
                                                </a>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a 
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        href="https://github.com/CatalystKD1"
                    >
                        Check My GitHub <ArrowRight size={16} />
                    </a>
                </div>

            </div>
        </section>
    );
};