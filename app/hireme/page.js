'use client';
import { FaReact, FaWhatsapp, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa'; // Import icons
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";

const teamMembers = [
    {
        id: 1,
        name: "MD Wakiullah",
        role: "Web Developer",
        image: "https://i.ibb.co.com/jv6PccV9/wakiullah.jpg",
        bio: "Passionate about building responsive and user-friendly web applications like Portfolio, Blogs, Edu, E-commerce, and more.",
        skills: [
            { name: "NextJS", icon: <RiNextjsFill /> },
            { name: "React", icon: <FaReact className="text-blue-500" /> },
            { name: "Firebase", icon: <IoLogoFirebase className="text-[#FF9100]" /> },
            { name: "CSS", icon: <RiTailwindCssFill /> },
        ],
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/mdwakiullah/",
            github: "https://github.com/wakiullah",
            facebook: "https://facebook.com/mwakiullah",
            whatsapp: "https://wa.me/+8801308163654",
        },
    },
];

export default function HireUsf() {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-10">
            <div className="md:w-3/4 mx-auto px-4">
                <h1 className="text-2xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">
                    Hire Our Team
                </h1>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
                    Meet our talented team members and connect with them for your next project.
                </p>
                <div className="space-y-8 md:space-y-0 md:gap-8">
                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            className="flex flex-col md:flex-row items-center bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* Image Section */}
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full md:w-1/3 h-64 md:h-auto object-cover"
                            />
                            {/* Content Section */}
                            <div className="p-6 flex-1">
                                <h3 className="text-lg font-bold text-blue-500 mb-2">
                                    Hire {member.role}
                                </h3>
                                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                                    {member.name}
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">{member.bio}</p>
                                <div className="mb-4">
                                    <p className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                                        Skills:
                                    </p>
                                    <div className="flex flex-wrap gap-4">
                                        {member.skills.map((skill, i) => (
                                            <div
                                                key={i}
                                                className="flex items-center space-x-2 bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded-full"
                                            >
                                                {skill.icon}
                                                <span className="text-gray-800 dark:text-gray-100 text-sm font-medium">
                                                    {skill.name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                                        Contact:
                                    </p>
                                    <div className="flex items-center space-x-4">
                                        {member.socialLinks?.whatsapp && (
                                            <a
                                                href={member.socialLinks.whatsapp}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-green-500 hover:text-green-700"
                                            >
                                                <FaWhatsapp size={20} />
                                            </a>
                                        )}
                                        {member.socialLinks?.facebook && (
                                            <a
                                                href={member.socialLinks.facebook}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:text-blue-800"
                                            >
                                                <FaFacebook size={20} />
                                            </a>
                                        )}
                                        {member.socialLinks?.linkedin && (
                                            <a
                                                href={member.socialLinks.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-500 hover:text-blue-700"
                                            >
                                                <FaLinkedin size={20} />
                                            </a>
                                        )}
                                        {member.socialLinks?.github && (
                                            <a
                                                href={member.socialLinks.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-800 dark:text-gray-100 hover:text-gray-900 dark:hover:text-gray-300"
                                            >
                                                <FaGithub size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}