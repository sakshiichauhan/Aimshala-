import React, { useState } from 'react';
import Eduction from "@/assets/Icons/ConsultantProfile/img1.png";
import Honors from "@/assets/Icons/ConsultantProfile/img2.png";
import Awards from "@/assets/Icons/ConsultantProfile/img3.png";
import Licenses from "@/assets/Icons/ConsultantProfile/img4.png";
import Skill from "@/assets/Icons/ConsultantProfile/img5.png";
import Languages from "@/assets/Icons/ConsultantProfile/img6.png";
import Project from "@/assets/Icons/ConsultantProfile/img7.png";
import Courses from "@/assets/Icons/ConsultantProfile/img8.png";
import Volunteer from "@/assets/Icons/ConsultantProfile/img9.png";
import Publications from "@/assets/Icons/ConsultantProfile/img10.png";
import { CirclePlus, Plus } from "lucide-react";
import AddEducation from '../../../pages/Popups/ProfileSection/AddEduction';
import AddExperience from '../../../pages/Popups/ProfileSection/AddExperience';
import AddHonors from '../../../pages/Popups/ProfileSection/AddHonors';
import AddLicense from '../../../pages/Popups/ProfileSection/AddLicense';
import AddSkill from '../../../pages/Popups/ProfileSection/AddSkill';
import AddLanguage from '../../../pages/Popups/ProfileSection/AddLanguage';
import AddProject from '../../../pages/Popups/ProfileSection/AddProject';
import AddCourse from '../../../pages/Popups/ProfileSection/AddCourse';
import AddVolunteer from '../../../pages/Popups/ProfileSection/AddVolunteer';
import AddPublication from '../../../pages/Popups/ProfileSection/AddPublication';

export default function About() {
    const [isEducationOpen, setIsEducationOpen] = useState(false);
    const [isExperienceOpen, setIsExperienceOpen] = useState(false);
    const [isHonorsOpen, setIsHonorsOpen] = useState(false);
    const [isLicenseOpen, setIsLicenseOpen] = useState(false);
    const [isSkillOpen, setIsSkillOpen] = useState(false);
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const [isProjectOpen, setIsProjectOpen] = useState(false);
    const [isCourseOpen, setIsCourseOpen] = useState(false);
    const [isVolunteerOpen, setIsVolunteerOpen] = useState(false);
    const [isPublicationOpen, setIsPublicationOpen] = useState(false);

    return (
        <main className="min-h-screen py-6 font-poppins">
            <div className="grid grid-cols-1 gap-4 mt-4 rounded-2xl relative">
                {/* Education Section */}
                <div className="relative border rounded-xl p-4 bg-white">
                    <h3 className="text-[18px] font-semibold mb-2 text-[#93268F]">
                        Education
                    </h3>
                    <div className="flex flex-col items-center justify-center text-center">
                        <img
                            src={Eduction}
                            alt="Education icon"
                            className="w-[64px] h-[64px] mb-2 object-contain"
                        />
                        <p className="text-[#767477] text-[16px] mb-1">
                            No education records. Add your qualifications here.
                        </p>
                        <button
                            onClick={() => setIsEducationOpen(true)}
                            className="group font-medium w-auto h-[30px] rounded-[6px] text-[20px] text-[#0FBBC3] hover:text-[#6b1c68] flex items-center justify-center gap-3 mt-4"
                        >
                            <span className="group-hover:text-[#6b1c68]">Add Now</span>
                            <Plus size={20} className="text-[#0FBBC3] group-hover:text-[#6b1c68]" />
                        </button>

                    </div>
                    <button
                        onClick={() => setIsEducationOpen(true)}
                        className="absolute top-2 right-2 p-2"
                    >
                        <CirclePlus className="w-[31.43px] h-[31.43px] border-[#93268F] rounded-full text-[#93268F]" />
                    </button>
                </div>

                {/* Experience Section */}
                <div className="relative border rounded-xl p-4 bg-white">
                    <h3 className="text-[18px] font-semibold mb-2 text-[#93268F] ">Experience</h3>
                    <div className="flex flex-col items-center justify-center text-center">
                        <img src={Honors} alt="Honors icon" className="w-[64px] h-[64px] mb-2 object-contain" />
                        <p className="text-[#767477] text-[16px] mb-1">No experience records. List your professional experiences here.</p>
                        <button
                            onClick={() => setIsExperienceOpen(true)}
                            className="group font-medium w-auto h-[30px] rounded-[6px] text-[20px] text-[#0FBBC3] hover:text-[#6b1c68] flex items-center justify-center gap-3 mt-4"
                        >
                             <span className="group-hover:text-[#6b1c68]">Add Now</span>
                            <Plus size={20} className="text-[#0FBBC3]  group-hover:text-[#6b1c68]" />
                        </button>
                    </div>
                    <button
                        onClick={() => setIsExperienceOpen(true)}
                        className="absolute top-2 right-2 p-2"
                    >
                        <CirclePlus className="w-[31.43px] h-[31.43px] border-[#93268F] rounded-full text-[#93268F]" />
                    </button>
                </div>

                {/* Honors & Awards Section */}
                <div className="relative border rounded-xl p-4 bg-white">
                    <h3 className="text-[18px] font-semibold mb-2 text-[#93268F]">Honors & Awards</h3>
                    <div className="flex flex-col items-center justify-center text-center">
                        <img src={Awards} alt="Honors icon" className="w-[64px] h-[64px] mb-2 object-contain" />
                        <p className="text-[#767477] text-[16px] mb-1">No honors or awards. Share your recognitions here.</p>
                        <button
                            onClick={() => setIsHonorsOpen(true)}
                            className="group font-medium w-auto h-[30px] rounded-[6px] text-[20px] text-[#0FBBC3] hover:text-[#6b1c68] flex items-center justify-center gap-3 mt-4"
                        >
                           <span className="group-hover:text-[#6b1c68]">Add Now</span>
                            <Plus size={20} className="text-[#0FBBC3]  group-hover:text-[#6b1c68]" />
                        </button>
                    </div>
                    <button
                        onClick={() => setIsHonorsOpen(true)}
                        className="absolute top-2 right-2 p-2"
                    >
                        <CirclePlus className="w-[31.43px] h-[31.43px] border-[#93268F] rounded-full text-[#93268F]" />
                    </button>
                </div>

                {/* Licenses & Certifications Section */}
                <div className="relative border rounded-xl p-4 bg-white">
                    <h3 className="text-[18px] font-semibold mb-2 text-[#93268F]">Licenses & Certifications</h3>
                    <div className="flex flex-col items-center justify-center text-center">
                        <img src={Licenses} alt="License icon" className="w-[64px] h-[64px] mb-2 object-contain" />
                        <p className="text-[#767477] text-[16px] mb-1">No licenses or certifications. Display your credentials here.</p>
                        <button
                            onClick={() => setIsLicenseOpen(true)}
                            className="group font-medium w-auto h-[30px] rounded-[6px] text-[20px] text-[#0FBBC3] hover:text-[#6b1c68] flex items-center justify-center gap-3 mt-4"
                        >
                            <span className="group-hover:text-[#6b1c68]">Add Now</span>
                            <Plus size={20} className="text-[#0FBBC3]  group-hover:text-[#6b1c68]" />
                        </button>
                    </div>
                    <button
                        onClick={() => setIsLicenseOpen(true)}
                        className="absolute top-2 right-2 p-2"
                    >
                        <CirclePlus className="w-[31.43px] h-[31.43px] border-[#93268F] rounded-full text-[#93268F]" />
                    </button>
                </div>

                {/* Skills Section */}
                <div className="relative border rounded-xl p-4 bg-white">
                    <h3 className="text-[18px] font-semibold mb-2 text-[#93268F]">Skills</h3>
                    <div className="flex flex-col items-center justify-center text-center">
                        <img src={Skill} alt="Skills icon" className="w-[64px] h-[64px] mb-2 object-contain" />
                        <p className="text-[#767477] text-[16px] mb-1">No skills added. Showcase your skills here.</p>
                        <button
                            onClick={() => setIsSkillOpen(true)}
                            className="group font-medium w-auto h-[30px] rounded-[6px] text-[20px] text-[#0FBBC3] hover:text-[#6b1c68] flex items-center justify-center gap-3 mt-4"
                        >
                        <span className="group-hover:text-[#6b1c68]">Add Now</span>
                            <Plus size={20} className="text-[#0FBBC3]  group-hover:text-[#6b1c68]" />
                        </button>
                    </div>
                    <button
                        onClick={() => setIsSkillOpen(true)}
                        className="absolute top-2 right-2 p-2"
                    >
                        <CirclePlus className="w-[31.43px] h-[31.43px] border-[#93268F] rounded-full text-[#93268F]" />
                    </button>
                </div>

                {/* Languages Section */}
                <div className="relative border rounded-xl p-4 bg-white">
                    <h3 className="text-[18px] font-semibold mb-2 text-[#93268F]">Languages</h3>
                    <div className="flex flex-col items-center justify-center text-center">
                        <img src={Languages} alt="Languages icon" className="w-[64px] h-[64px] mb-2 object-contain" />
                        <p className="text-[#767477] text-[16px] mb-1">No languages added. List languages you speak here.</p>
                        <button
                            onClick={() => setIsLanguageOpen(true)}
                            className="group font-medium w-auto h-[30px] rounded-[6px] text-[20px] text-[#0FBBC3] hover:text-[#6b1c68] flex items-center justify-center gap-3 mt-4"
                        >
                           <span className="group-hover:text-[#6b1c68]">Add Now</span>
                            <Plus size={20} className="text-[#0FBBC3]  group-hover:text-[#6b1c68]" />
                        </button>
                    </div>
                    <button
                        onClick={() => setIsLanguageOpen(true)}
                        className="absolute top-2 right-2 p-2"
                    >
                        <CirclePlus className="w-[31.43px] h-[31.43px] border-[#93268F] rounded-full text-[#93268F]" />
                    </button>
                </div>

                {/* Projects Section */}
                <div className="relative border rounded-xl p-4 bg-white ">
                    <h3 className="text-[18px] font-semibold mb-2 text-[#93268F]">Projects</h3>
                    <div className="flex flex-col items-center justify-center text-center">
                        <img src={Project} alt="Projects icon" className="w-[64px] h-[64px] mb-2 object-contain" />
                        <p className="text-[#767477] text-[16px] mb-1">No projects added. Showcase your projects here.</p>
                        <button
                            onClick={() => setIsProjectOpen(true)}
                            className="group font-medium w-auto h-[30px] rounded-[6px] text-[20px] text-[#0FBBC3] hover:text-[#6b1c68] flex items-center justify-center gap-3 mt-4"
                        >
                            <span className="group-hover:text-[#6b1c68]">Add Now</span>
                            <Plus size={20} className="text-[#0FBBC3]  group-hover:text-[#6b1c68]" />
                        </button>
                    </div>
                    <button
                        onClick={() => setIsProjectOpen(true)}
                        className="absolute top-2 right-2 p-2"
                    >
                        <CirclePlus className="w-[31.43px] h-[31.43px] border-[#93268F] rounded-full text-[#93268F]" />
                    </button>
                </div>

                {/* Courses Section */}
                <div className="relative border rounded-xl p-4 bg-white">
                    <h3 className="text-[18px] font-semibold mb-2 text-[#93268F]">Courses</h3>
                    <div className="flex flex-col items-center justify-center text-center">
                        <img src={Courses} alt="Courses icon" className="w-[64px] h-[64px] mb-2 object-contain" />
                        <p className="text-[#767477] text-[16px] mb-1">No courses added. List relevant courses here.</p>
                        <button
                            onClick={() => setIsCourseOpen(true)}
                            className="group font-medium w-auto h-[30px] rounded-[6px] text-[20px] text-[#0FBBC3] hover:text-[#6b1c68] flex items-center justify-center gap-3 mt-4"
                        >
                           <span className="group-hover:text-[#6b1c68]">Add Now</span>
                            <Plus size={20} className="text-[#0FBBC3]  group-hover:text-[#6b1c68]" />
                        </button>
                    </div>
                    <button
                        onClick={() => setIsCourseOpen(true)}
                        className="absolute top-2 right-2 p-2"
                    >
                        <CirclePlus className="w-[31.43px] h-[31.43px] border-[#93268F] rounded-full text-[#93268F]" />
                    </button>
                </div>

                {/* Volunteer Experiences Section */}
                <div className="relative border rounded-xl p-4 bg-white ">
                    <h3 className="text-[18px] font-semibold mb-2 text-[#93268F]">Volunteer Experiences</h3>
                    <div className="flex flex-col items-center justify-center text-center">
                        <img src={Volunteer} alt="Volunteer icon" className="w-[64px] h-[64px] mb-2 object-contain" />
                        <p className="text-[#767477] text-[16px] mb-1">No volunteer experiences. Share your volunteer work here.</p>
                        <button
                            onClick={() => setIsVolunteerOpen(true)}
                            className="group font-medium w-auto h-[30px] rounded-[6px] text-[20px] text-[#0FBBC3] hover:text-[#6b1c68] flex items-center justify-center gap-3 mt-4"
                        >
                           <span className="group-hover:text-[#6b1c68]">Add Now</span>
                            <Plus size={20} className="text-[#0FBBC3]  group-hover:text-[#6b1c68]" />
                        </button>
                    </div>
                    <button
                        onClick={() => setIsVolunteerOpen(true)}
                        className="absolute top-2 right-2 p-2"
                    >
                        <CirclePlus className="w-[31.43px] h-[31.43px] border-[#93268F] rounded-full text-[#93268F]" />
                    </button>
                </div>

                {/* Publications Section */}
                <div className="relative border rounded-xl p-4 bg-white">
                    <h3 className="text-[18px] font-semibold mb-2 text-[#93268F]">Publications</h3>
                    <div className="flex flex-col items-center justify-center text-center">
                        <img src={Publications} alt="Publications icon" className="w-[64px] h-[64px] mb-2 object-contain" />
                        <p className="text-[#767477] text-[16px] mb-1">No publications added. Add your published works here.</p>
                        <button
                            onClick={() => setIsPublicationOpen(true)}
                            className="group font-medium w-auto h-[30px] rounded-[6px] text-[20px] text-[#0FBBC3] hover:text-[#6b1c68] flex items-center justify-center gap-3 mt-4"
                        >
                           <span className="group-hover:text-[#6b1c68]">Add Now</span>
                            <Plus size={20} className="text-[#0FBBC3]  group-hover:text-[#6b1c68]" />
                        </button>
                    </div>
                    <button
                        onClick={() => setIsPublicationOpen(true)}
                        className="absolute top-2 right-2 p-2"
                    >
                        <CirclePlus className="w-[31.43px] h-[31.43px] border-[#93268F] rounded-full text-[#93268F]" />
                    </button>
                </div>
            </div>

            {/* Popup Modals */}
            {isEducationOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black/20 z-50 flex items-center justify-center p-4 overflow-y-auto">
                    <div className="w-full max-w-[790px] bg-white rounded-lg shadow-lg relative max-h-[100vh]">
                        <AddEducation onClose={() => setIsEducationOpen(false)} />
                    </div>
                </div>
            )}

            {isExperienceOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black/20 z-50 flex items-center justify-center p-4 overflow-y-auto">
                    <div className="w-full max-w-[790px] bg-white rounded-lg shadow-lg relative max-h-[100vh]">
                        <AddExperience onClose={() => setIsExperienceOpen(false)} />
                    </div>
                </div>
            )}

            {isHonorsOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black/20 z-50 flex items-center justify-center p-4 overflow-y-auto">
                    <div className="w-full max-w-[790px] bg-white rounded-lg shadow-lg relative max-h-[100vh]">
                        <AddHonors onClose={() => setIsHonorsOpen(false)} />
                    </div>
                </div>
            )}

            {isLicenseOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black/20 z-50 flex items-center justify-center p-4 overflow-y-auto">
                    <div className="w-full max-w-[790px] bg-white rounded-lg shadow-lg relative max-h-[100vh]">
                        <AddLicense onClose={() => setIsLicenseOpen(false)} />
                    </div>
                </div>
            )}

            {isSkillOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black/20 z-50 flex items-center justify-center p-4 overflow-y-auto">
                    <div className="w-full max-w-[768px] bg-white rounded-lg shadow-lg relative max-h-[100vh]">
                        <AddSkill onClose={() => setIsSkillOpen(false)} />
                    </div>
                </div>
            )}

            {isLanguageOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black/20 z-50 flex items-center justify-center p-4 overflow-y-auto">
                
                        <AddLanguage onClose={() => setIsLanguageOpen(false)} />
                
                </div>
            )}

            {isProjectOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black/20 z-50 flex items-center justify-center p-4 overflow-y-auto">
                    
                        <AddProject onClose={() => setIsProjectOpen(false)} />
                    
                </div>
            )}

            {isCourseOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black/20 z-50 flex items-center justify-center p-4 overflow-y-auto">
                    
                        <AddCourse onClose={() => setIsCourseOpen(false)} />
                   
                </div>
            )}

            {isVolunteerOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black/20 z-50 flex items-center justify-center p-4 overflow-y-auto">
                  
                        <AddVolunteer onClose={() => setIsVolunteerOpen(false)} />
                 
                </div>
            )}

            {isPublicationOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black/20 z-50 flex items-center justify-center p-4 overflow-y-auto">
                   
                        <AddPublication onClose={() => setIsPublicationOpen(false)} />
                    </div>
               
            )}
        </main>
    );
}