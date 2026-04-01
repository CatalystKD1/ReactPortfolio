import { Code, User, Briefcase, BriefcaseMedical } from "lucide-react";

export const AboutSection = () => {
    return (
        <section 
        id="about"
        className="py-24 px-4 relative scroll-mt-20">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Software Developer and Musician</h3>
                        <p className="text-muted-foreground">
                        I am a Computer Science Student at the University of Waterloo 
                        who specializes in Software Development and Data Science.</p>

                        <p className="text-muted-foreground">
                        I am experience in Agile and Scrum Software Development Life Cycles and 
                        love learning new technologies that I can bring into the work force.</p>

                        <p className="text-muted-forground">
                        During my spare time when I am not programming, I am jamming and performing open-mics with my background
                        or working on my latest sewing project.</p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>

                            {<a href="Jordan McCrank Software Developer Resume 2026.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Download Resume
                            </a>}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                {/** Information about programming */}
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Software Development</h4>
                                    <p className="text-muted-foreground">
                                        Create user focused application that align with requirements.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Versitile Programmer</h4>
                                    <p className="text-muted-foreground">
                                        Familiar with a variety of languages, frameworks and technologies.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Work Experience</h4>
                                    <p className="text-muted-foreground">
                                        Participated in projects from conception to completion using agile methodologies.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}