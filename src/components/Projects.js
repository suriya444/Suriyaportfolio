import websiteImg1 from '../assets/ecommerce-websites.jpg';
import websiteImg2 from '../assets/food-ecommerce.jpg';
import websiteImg3 from '../assets/website-blog.jpg';

export default function Projects() {
    const config = {
        projects: [
            {
                name: 'E-commerce Website',
                description: 'An online shopping platform built using the MERN Stack with features like user authentication, cart management, and payment integration.',
                tech: 'React.js, Node.js, MongoDB, Express.js',
                link: 'https://shopeasy-navy.vercel.app',
                image: websiteImg1
            },
            {
                name: 'Food Delivery Website',
                description: 'A Swiggy-like food ordering website offering real-time menu updates, built using React.js on the frontend and Node.js on the backend.',
                tech: 'React.js, Node.js, Express, Vercel',
                link: 'https://food-two-chi.vercel.app/',
                image: websiteImg2
            },
            {
                name: 'Blog Website',
                description: 'A blogging platform that allows users to write, edit, and share posts. Supports CRUD operations with MongoDB as the database.',
                tech: 'React.js, MongoDB, Express.js, Node.js',
                link: 'https://github.com/suriya444/blog',
                image: websiteImg3
            }
        ]
    };

    return (
        <section id="projects" className="flex flex-col py-20 px-5 justify-center bg-primary text-white">
            <div className="w-full px-10">
                <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
                <p className="mb-10">Here are some of my best projects. Click on the links to explore them in detail.</p>
                <div className="flex flex-col gap-10">
                    {config.projects.map((project, index) => (
                        <div
                            key={index}
                            className="flex flex-col md:flex-row bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                        >
                            <img
                                src={project.image}
                                alt={`${project.name} thumbnail`}
                                className="h-[200px] w-full md:w-[300px] object-cover rounded-lg mb-5 md:mb-0"
                            />
                            <div className="flex flex-col justify-between ml-0 md:ml-5">
                                <div>
                                    <h2 className="text-3xl font-bold mb-2">{project.name}</h2>
                                    <p className="text-lg mb-2">{project.description}</p>
                                    <p className="text-sm text-secondary mb-4">Technologies: {project.tech}</p>
                                </div>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="self-start bg-secondary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition"
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
