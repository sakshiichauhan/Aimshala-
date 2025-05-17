import { useState, ChangeEvent, useRef, useEffect } from "react";
import { Trash2, X,ChevronDown } from "lucide-react";
import { AiOutlineLink } from "react-icons/ai";
import { CiImageOn } from "react-icons/ci";
import ProfileImage from "@/assets/Consultant/Profile/01.png";
import Calendar from "@/assets/Consultant/Calendar.png";
import DiscardChanges from "./Discard";
import MediaCard from "./MediaCard";
import Img1 from "@/assets/Consultant/Profile/01.png";
import Img2 from "@/assets/Consultant/Profile/02.png";
import Img3 from "@/assets/Consultant/Profile/03.png";
import Img4 from "@/assets/Consultant/Profile/04.png";
import Img5 from "@/assets/Consultant/Profile/05.png";
import Img6 from "@/assets/Consultant/Profile/06.png";
import Img7 from "@/assets/Consultant/Profile/07.png";
import Img8 from "@/assets/Consultant/Profile/08.png";
import Img9 from "@/assets/Consultant/Profile/09.png";
import Img10 from "@/assets/Consultant/Profile/10.png";
import Img11 from "@/assets/Consultant/Profile/11.png";
import Img12 from "@/assets/Consultant/Profile/12.png";
import Img13 from "@/assets/Consultant/Profile/13.png";
import Img14 from "@/assets/Consultant/Profile/14.png";
import CheckLayout from './Check';

const imageList = [
  Img1, Img2, Img3, Img4, Img5, Img6, Img7,
  Img8, Img9, Img10, Img11, Img12, Img13, Img14,
];

interface EditProfileProps {
  onClose: () => void;
}

const EditProfile = ({ onClose }: EditProfileProps) => {
  const [profileImage, setProfileImage] = useState<string>(ProfileImage);
  const [selectedAvatar, setSelectedAvatar] = useState<string>(ProfileImage);
  const [activeImage, setActiveImage] = useState<string>(ProfileImage);
  const [showDiscardPopup, setShowDiscardPopup] = useState<boolean>(false);
  const [showMediaCard, setShowMediaCard] = useState<boolean>(false);
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [headline, setHeadline] = useState('');
  const [bio, setBio] = useState('');
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [showMediaOptions, setShowMediaOptions] = useState(false);
  const mediaOptionsRef = useRef<HTMLDivElement>(null);
  const [mediaForm, setMediaForm] = useState({ mediaLink: '' });
  const [showCheckPopup, setShowCheckPopup] = useState<boolean>(false);

  const toggleMediaOptions = () => setShowMediaOptions(prev => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mediaOptionsRef.current && !mediaOptionsRef.current.contains(event.target as Node)) {
        setShowMediaOptions(false);
      }
    };
    if (showMediaOptions) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMediaOptions]);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        const imageData = event.target?.result as string;
        setProfileImage(imageData);
        setActiveImage(imageData);
        setSelectedAvatar(imageData);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleVideoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setVideoFile(file);
  };

  const handleAvatarClick = (avatar: string) => {
    setSelectedAvatar(avatar);
    setActiveImage(avatar);
    setProfileImage(avatar);
  };

  const handleDelete = () => {
    console.log("Profile deleted!");
  };

  const handleSave = () => {
    const data = { fullName, username, dob, gender, headline, bio, profileImage, videoFile };
    console.log("Profile saved with data:", data);
    setShowCheckPopup(true); // Show the Check popup after saving
  };

  // Add this function to handle input change
  const handleMediaInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMediaForm(prev => ({ ...prev, [name]: value }));
  };

  const handleClose = () => {
    setShowDiscardPopup(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#FFF5FF] to-[#F0F8F8] font-poppins">
      <div className="w-[791px] bg-white rounded-lg shadow-lg">
        <div className="bg-[#F5F5F5] rounded-t-lg flex items-center justify-between px-6 min-h-[60px]">
          <h1 className="text-lg font-semibold">Edit Expertise</h1>
          <button onClick={handleClose} className="p-2 hover:bg-gray-100 rounded-full"><X className="w-6 h-6" /></button>
        </div>

        <form className="space-y-6 p-6">
          <div className="w-[727px] h-[254px] border border-[#DCDCDC] rounded-[8px] bg-white flex flex-col justify-center items-center gap-4">
            <p className="text-[#8A8A8A] text-[18px] font-normal">Current Image</p>
            <img src={activeImage} alt="Profile" className="h-[117px] w-[117px] rounded-full object-cover border border-gray-300" />
            <div className="flex items-center gap-4">
              <label htmlFor="upload-input" className="w-[253px] h-[46px] flex items-center justify-center px-6 py-2 text-[#94278F] text-[20px] font-normal border border-[#7A206F] rounded-[12px] cursor-pointer hover:bg-[#7A206F] hover:text-white transition">Upload new Image</label>
              <input type="file" id="upload-input" className="hidden" accept="image/*" onChange={handleImageChange} />
              <button type="button" onClick={() => { setActiveImage(ProfileImage); setProfileImage(ProfileImage); setSelectedAvatar(ProfileImage); }} className="w-[46px] h-[46px] flex items-center justify-center border border-[#FF4D4F] text-[#FF4D4F] rounded-[12px] hover:bg-[#FF4D4F] hover:text-white transition"><Trash2 size={20} /></button>
            </div>
          </div>

          <div className="w-[727px] p-[14.5px_16px] border border-gray-300 rounded-[8px]">
            <p className="font-normal mb-2 text-[18px] text-center text-[#898989]">Choose Avatar</p>
            <div className="grid grid-cols-7 gap-[5px]">
              {imageList.map((img, index) => (
                <img key={index} src={img} alt={`img-${index + 1}`} onClick={() => handleAvatarClick(img)} className={`w-[80px] h-[80px] rounded-full object-cover cursor-pointer border transition ${selectedAvatar === img ? "border-[#94278F] ring-2 ring-[#94278F]" : "border-gray-300"}`} />
              ))}
            </div>
          </div>

          <div className="relative w-full font-poppins">
            <label className="absolute -top-2 left-2 bg-white px-1 text-sm">Full Name</label>
            <input value={fullName} onChange={(e) => setFullName(e.target.value)} type="text" placeholder="Enter Full Name" className="w-full p-3 border border-[#DCDCDC] rounded-md placeholder:text-[#898989] placeholder:text-[18px] placeholder:font-normal" />
          </div>

          <div className="relative w-full">
            <label className="absolute -top-2 left-2 bg-white px-1 text-sm">Username</label>
            <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Enter Username" className="w-full p-3 border border-[#DCDCDC] rounded-md placeholder:text-[#898989] placeholder:text-[18px] placeholder:font-normal" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative w-full">
              <label className="absolute -top-2 left-2 bg-white px-1.5 text-sm">Date of Birth</label>
              <input type="date" id="dob" value={dob} onChange={(e) => setDob(e.target.value)} className="w-full p-3 pr-10 border border-[#DCDCDC] rounded-md text-[#898989] [&::-webkit-calendar-picker-indicator]:hidden" />
              <img src={Calendar} alt="Calendar" onClick={() => (document.getElementById("dob") as HTMLInputElement)?.showPicker?.()} className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer" />
            </div>

            <div className="relative w-full">
              <label className="absolute -top-2 left-2 bg-white px-1.5 text-sm">Gender</label>
              <select value={gender} onChange={(e) => setGender(e.target.value)} className="w-full appearance-none p-3 pr-10 border border-[#DCDCDC] rounded-md text-[#898989] text-[18px] ">
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#898989] pointer-events-none" />
            </div>
          </div>

          <div className="relative w-full">
            <label className="absolute -top-2 left-2 bg-white px-1 text-sm">Headline</label>
            <input value={headline} onChange={(e) => setHeadline(e.target.value)} type="text" placeholder="Enter Headline" className="w-full p-3 border border-[#DCDCDC] rounded-md placeholder:text-[#898989] placeholder:text-[18px] placeholder:font-normal" />
          </div>

          <div className="relative w-full">
            <label className="absolute -top-2 left-2 bg-white px-1 text-sm">Bio/About you</label>
            <textarea value={bio} onChange={(e) => setBio(e.target.value)} placeholder="Enter Bio/About you" maxLength={250} className="w-full p-3 border border-[#DCDCDC] rounded-md text-sm resize-none h-[111px] placeholder:text-[#898989] placeholder:text-[18px] placeholder:font-normal" />
          </div>

          <div className="relative">
            <p className="text-sm font-medium mb-2">Intro Video</p>
            <p className="text-[16px] text-[#6D7175] font-normal mb-2">Upload a Short Intro Video (3–5 minutes)</p>
            <button type="button" onClick={toggleMediaOptions} className="w-[115px] h-[30px] bg-[#93268F]/10 text-[#93268F] rounded-full text-[16px] font-normal flex items-center justify-center cursor-pointer">+ Add Media</button>
            {showMediaOptions && (
              <div ref={mediaOptionsRef} className="mt-2 w-[212px] h-[102px] border border-gray-200 rounded-md bg-white shadow-sm text-[15px] font-normal text-black z-10">
                <ul className="divide-y divide-gray-200">
                  <li
                    className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setShowMediaCard(true);
                      setShowMediaOptions(false);
                    }}
                  >
                    <AiOutlineLink className="w-[27px] h-[27px] text-[#1E232C] " />
                    <span>Add a link</span>
                  </li>
                  <li className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 cursor-pointer "
                    onClick={() => {
                      document.getElementById("video-upload")?.click();
                      setShowMediaOptions(false);
                    }}>
                    <CiImageOn className="w-[27px] h-[27px] text-[#1E232C]" />
                    <span>Upload a photo</span>
                  </li>
                </ul>
              </div>
            )}
            <input type="file" accept="video/*" id="video-upload" className="hidden" onChange={handleVideoUpload} />
            {videoFile && <p className="text-xs text-gray-500 mt-1">{videoFile.name}</p>}
          </div>
        </form>

        <div className="bg-[#F5F5F5] rounded-b-lg flex items-center justify-between px-[24px] py-[16px] w-[791px] h-[78px]">
          <button onClick={handleDelete} className="text-[#000000] text-[18px] font-medium hover:text-red-700">Delete Expertise</button>
          <button onClick={handleSave} className="w-[170px] h-[46px] bg-[#94278F] text-white text-[20px] rounded-[12px] hover:bg-[#7A206F] transition-colors">Save</button>
        </div>

        {showDiscardPopup && (
          <div className="fixed top-0 left-0 w-full h-full bg-black/20 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <DiscardChanges onCancel={() => setShowDiscardPopup(false)} onDiscard={onClose} />
          </div>
        )}

        {showMediaCard && (
          <div className="fixed top-0 left-0 w-full h-full bg-black/20 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <MediaCard
              onClose={() => setShowMediaCard(false)}
              onSave={() => {
                console.log('Media saved:', mediaForm);
                setShowMediaCard(false);
              }}
              onDelete={() => {
                console.log('Media card deleted');
                setMediaForm({ mediaLink: '' });
                setShowMediaCard(false);
              }}
              form={mediaForm}
              handleChange={handleMediaInputChange}
            />
          </div>
        )}

        {showCheckPopup && (
          <div className="fixed top-0 left-0 w-full h-full bg-black/20 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <div onClick={(e) => e.stopPropagation()}>
              <CheckLayout onDiscard={onClose} />
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default EditProfile;