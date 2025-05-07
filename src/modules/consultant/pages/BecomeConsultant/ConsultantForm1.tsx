import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Academic from '@/assets/Consultant/BecomeConsultant/image1.png';
import Career from '@/assets/Consultant/BecomeConsultant/image2.png';
import StudyAbroad from '@/assets/Consultant/BecomeConsultant/image3.png';
import Emotional from '@/assets/Consultant/BecomeConsultant/image4.png';

const ConsultantForm1 = () => {
    const navigate = useNavigate();
    const consultingTypes = [
        {
            image: Academic,
            title: 'Student Consultation',
            description: 'Help with educational planning.',
        },
        {
            image: Career,
            title: 'Career Consultation',
            description: 'Assist in career choices.',
        },
        {
            image: StudyAbroad,
            title: 'International Studies',
            description: 'Guide students in studying abroad.',
        },
        {
            image: Emotional,
            title: 'Emotional Well-being',
            description: 'Overcoming fear of failure, exams, or uncertain situations.',
        },
    ];

    const [selected, setSelected] = useState<number[]>([]);

    const toggleSelection = (index: number) => {
        setSelected((prevSelected: number[]) =>
            prevSelected.includes(index)
                ? prevSelected.filter((i) => i !== index)
                : [...prevSelected, index]
        );
    };

    const handleNext = () => {
        if (selected.length > 0) {
            navigate('/consultant/become-consultant/form2');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#FFF5FF] to-[#F0F8F8] flex flex-col items-center justify-center   font-poppins">

            <div className="text-center mb-12">
                <h1 className="text-[48px] md:text-[42px] font-bold text-[#000000] leading-tight">
                    Become a <span className="text-[#94278F]">Consultant</span>
                </h1>
                <p className="text-[24px] md:text-[20px] text-[#383838] font-medium mt-3">
                    Choose Your Consulting types
                </p>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 w-full max-w-[1100px] px-14">
                {consultingTypes.map((type, index) => (
                    <div
                        key={index}
                        className={`relative bg-white border ${selected.includes(index) ? 'border-[#94278F]' : 'border-[#E5E7EB]'
                            } rounded-[20px] w-full max-w-[232px] h-[240px] p-6 flex flex-col items-center text-center mx-auto shadow-md hover:shadow-lg transition duration-300 cursor-pointer`}
                        onClick={() => toggleSelection(index)}
                    >
                        <input
                            type="checkbox"
                            className="absolute top-4 right-4 w-[20px] h-[20px] rounded-[6px] border border-gray-300 accent-[#94278F] cursor-pointer"
                            checked={selected.includes(index)}
                            onChange={() => toggleSelection(index)}
                        />
                        <div className="w-[105px] h-[105px] mb-4">
                            <img src={type.image} alt={type.title} className="w-full h-full object-contain" />
                        </div>
                        <h3 className="text-[16px] font-semibold text-[#111827] mb-1">{type.title}</h3>
                        <p className="text-[13px] text-[#6B7280]">{type.description}</p>
                    </div>
                ))}
            </div>


            <div className="mt-16">
                <button
                    onClick={handleNext}
                    className="h-[50px] w-[180px] bg-[#94278F] text-white text-[16px] font-medium rounded-[10px] hover:bg-[#7a1f76] transition duration-200 shadow-md"
                    disabled={selected.length === 0}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default ConsultantForm1;
