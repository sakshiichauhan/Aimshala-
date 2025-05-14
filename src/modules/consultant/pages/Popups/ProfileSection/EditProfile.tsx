
import { useState, ChangeEvent } from "react";
import ProfileImage from "@/assets/Consultant/BecomeConsultant/image1.png";
import { Trash2, X } from "lucide-react";
import DiscardChanges from "./Discard";
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

const imageList: string[] = [
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

  // Form Fields
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [headline, setHeadline] = useState('');
  const [bio, setBio] = useState('');
  const [videoFile, setVideoFile] = useState<File | null>(null);

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
    if (file) {
      setVideoFile(file);
    }
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
    const data = {
      fullName,
      username,
      dob,
      gender,
      headline,
      bio,
      profileImage,
      videoFile,
    };
    console.log("Profile saved with data:", data);
  };

  const handleClose = () => {
    setShowDiscardPopup(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#FFF5FF] to-[#F0F8F8] font-poppins">
      <div className="w-[791px] bg-white rounded-lg shadow-lg">
        {/* Header */}
        <div className="bg-[#F5F5F5] rounded-t-lg flex items-center justify-between px-6 min-h-[60px]">
          <h1 className="text-lg font-semibold">Edit Expertise</h1>
          <button onClick={handleClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form className="space-y-6 p-6">
          {/* Profile Image */}
          <div className="w-[727px] h-[256px] border border-[#DCDCDC] rounded-[8px] pt-[14.5px] px-4 flex flex-col justify-center items-center gap-4 mx-auto mb-6 bg-white">
            <p className="text-gray-500 text-sm">Current Image</p>
            <img
              src={activeImage}
              alt="Profile"
              className="h-[120px] w-[120px] rounded-full object-cover border border-gray-300 shadow"
            />
            <div className="flex gap-4 mt-2">
              <label htmlFor="upload-input" className="px-5 py-2 border border-[#7A206F] text-[#7A206F] rounded-lg hover:bg-[#7A206F] hover:text-white transition cursor-pointer">
                Upload new Image
              </label>
              <input type="file" id="upload-input" className="hidden" accept="image/*" onChange={handleImageChange} />

              <button
                type="button"
                onClick={() => {
                  setActiveImage(ProfileImage);
                  setProfileImage(ProfileImage);
                  setSelectedAvatar(ProfileImage);
                }}
                className="p-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition"
              >
                <Trash2 size={20} />
              </button>
            </div>
          </div>

          {/* Avatar List */}
          <div className="w-[727px] p-[14.5px_16px] border border-gray-300 rounded-[8px]">
            <p className="font-medium mb-2 text-sm text-center text-[#898989]">Choose Image</p>
            <div className="grid grid-cols-7 gap-[5px]">
              {imageList.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`img-${index + 1}`}
                  onClick={() => handleAvatarClick(img)}
                  className={`w-[80px] h-[80px] rounded-full object-cover cursor-pointer border transition ${
                    selectedAvatar === img
                      ? "border-[#94278F] ring-2 ring-[#94278F]"
                      : "border-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Form Fields */}
          <div className="relative w-full">
            <label className="absolute -top-2 left-2 bg-white px-1 text-sm">Full Name</label>
            <input value={fullName} onChange={(e) => setFullName(e.target.value)} type="text" placeholder="Enter Full Name" className="w-full p-3 border border-[#DCDCDC] rounded-md" />
          </div>

          <div className="relative w-full">
            <label className="absolute -top-2 left-2 bg-white px-1 text-sm">Username</label>
            <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Enter Username" className="w-full p-3 border border-[#DCDCDC] rounded-md" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative w-full">
              <label className="absolute -top-2 left-2 bg-white px-1.5 text-sm">Date of Birth</label>
              <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} className="w-full p-3 border border-[#DCDCDC] rounded-md text-[#898989]" />
            </div>
            <div className="relative w-full">
              <label className="absolute -top-2 left-2 bg-white px-1.5 text-sm">Gender</label>
              <select value={gender} onChange={(e) => setGender(e.target.value)} className="w-full p-3 border border-[#DCDCDC] rounded-md text-[#898989]">
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div className="relative w-full">
            <label className="absolute -top-2 left-2 bg-white px-1 text-sm">Headline</label>
            <input value={headline} onChange={(e) => setHeadline(e.target.value)} type="text" placeholder="Enter Headline" className="w-full p-3 border border-[#DCDCDC] rounded-md" />
          </div>

          <div className="relative w-full">
            <label className="absolute -top-2 left-2 bg-white px-1 text-sm">Bio/About you</label>
            <textarea value={bio} onChange={(e) => setBio(e.target.value)} placeholder="Enter Bio/About you" maxLength={250} className="w-full p-3 border border-[#DCDCDC] rounded-md text-sm resize-none h-[111px]" />
          </div>

         

          <div className="relative w-full">
            <label className="absolute -top-2 left-2 bg-white px-1 text-sm">Bio/About you</label>
            <textarea value={bio} onChange={(e) => setBio(e.target.value)} placeholder="Enter Bio/About you" maxLength={250} className="w-full p-3 border border-[#DCDCDC] rounded-md text-sm resize-none h-[111px]" />
          </div>

          {/* Intro Video Upload */}
          <div>
            <p className="text-sm font-medium">Intro Video</p>
            <p className="text-xs text-gray-500 mb-1">Upload a Short Intro Video (3–5 minutes)</p>
            <label htmlFor="video-upload" className="w-[140px] h-[36px] bg-[#F5E9F4] text-[#94278F] rounded-full text-sm font-medium flex items-center justify-center cursor-pointer">
              + Add Media
            </label>
            <input type="file" accept="video/*" id="video-upload" className="hidden" onChange={handleVideoUpload} />
            {videoFile && <p className="text-xs text-gray-500 mt-1">{videoFile.name}</p>}
          </div>
        </form>

        {/* Footer */}
        <div className="bg-[#F5F5F5] rounded-b-lg flex items-center justify-between px-[24px] py-[16px] w-[791px] h-[78px]">
          <button onClick={handleDelete} className="text-[#000000] text-[18px] font-medium hover:text-red-700">
            Delete Expertise
          </button>
          <button onClick={handleSave} className="w-[170px] h-[46px] bg-[#94278F] text-white text-[20px] rounded-[12px] hover:bg-[#7A206F] transition-colors">
            Save
          </button>
        </div>

        {/* Discard Modal */}
        {showDiscardPopup && (
          <div className="fixed top-0 left-0 w-full h-full bg-black/20 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <DiscardChanges onCancel={() => setShowDiscardPopup(false)} onDiscard={onClose} />
          </div>
        )}
      </div>
    </div>
  );
};

export default EditProfile;
