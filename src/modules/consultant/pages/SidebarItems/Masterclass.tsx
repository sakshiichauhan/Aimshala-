// import { Search, SquareArrowOutUpRight } from "lucide-react";
// import { MoreVertical } from "lucide-react";
// import { Video } from "lucide-react";
// import { Mic } from "lucide-react";
// import { useState } from "react";
// import { Italic, List, Code } from 'lucide-react';
// import {
//     CallControls,
//     CallingState,
//     SpeakerLayout,
//     StreamCall,
//     StreamTheme,
//     StreamVideo,
//     StreamVideoClient,
//     useCallStateHooks,
//     User,
// } from '@stream-io/video-react-sdk';
// import '@stream-io/video-react-sdk/dist/css/styles.css';
// import "@/index.css"

// const apiKey = 'mmhfdzb5evj2';
// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL3Byb250by5nZXRzdHJlYW0uaW8iLCJzdWIiOiJ1c2VyL0JhcnJpc3NfT2ZmZWUiLCJ1c2VyX2lkIjoiQmFycmlzc19PZmZlZSIsInZhbGlkaXR5X2luX3NlY29uZHMiOjYwNDgwMCwiaWF0IjoxNzQ0OTg2NzMwLCJleHAiOjE3NDU1OTE1MzB9.bQQEm6xRHY5e16IKsqrSjTx7I8mNYxUmDpQMML1hBys';
// const userId = 'Barriss_Offee';
// const callId = 'hfXI0hsiuSQA';

// const user: User = {
//     id: userId,
//     name: 'Oliver',
//     image: 'https://getstream.io/random_svg/?id=oliver&name=Oliver',
// };

// const client = new StreamVideoClient({ apiKey, user, token });
// const call = client.call('default', callId);
// call.join({ create: true });


// export default function Masterclass() {
//     return <section>
//         <div className="flex h-screen overflow-hidden mt-20">
//             <div className="flex-1 overflow-auto">
//                 {/* <VideoSection /> */}
//                 <NoteSection />
//             </div>
//             <div className="hidden md:block w-[400px] bg-white m-5">
//                 <ParticipantSection />
//             </div>
//         </div>
//     </section>
// }

// function ParticipantSection() {
//     const [activeTab, setActiveTab] = useState('chat');
//     return (
//         <div className="h-full border border-gray-300 rounded-lg p-3 font-poppins">
//             <div className="flex border border-gray-200 px-6 py-2 bg-gray-100 rounded-lg text-md font-semibold">
//                 <button
//                     className={`flex-1 py-3 text-center rounded-xl ${activeTab === 'chat' ? 'bg-white text-[var(--purple)] shadow-md' : 'text-gray-500'}`}
//                     onClick={() => setActiveTab('chat')}
//                 >
//                     Chat
//                 </button>
//                 <button
//                     className={`flex-1 py-3 text-center rounded-xl   ${activeTab === 'participants' ? 'bg-white text-[var(--purple)] shadow-md' : 'text-gray-500'}`}
//                     onClick={() => setActiveTab('participants')}
//                 >
//                     Participants
//                 </button>
//             </div>

//             <div className="p-4">
//                 <div className="relative mb-4">
//                     <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 " size={20} />
//                     <input
//                         type="text"
//                         placeholder="Search for people"
//                         className="w-full pl-10 pr-4 py-2 border border-[var(--purple)] rounded-lg"
//                     />
//                 </div>

//                 <div className="space-y-4" >
//                     {/* container for participant items */}
//                     <div className='border border-gray-200 rounded-lg p-3'>
//                         <div className="flex items-center justify-between">
//                             <div className="flex items-center gap-3">
//                                 <div className="bg-purple-100 w-10 h-10 rounded-full flex items-center justify-center">
//                                     <span className="text-[var(--purple)]">SS</span>
//                                 </div>
//                                 <div>
//                                     <p className="font-medium">You</p>
//                                     <p className="text-sm text-gray-500">Student</p>
//                                 </div>
//                             </div>
//                             <div className="flex items-center gap-2">
//                                 <Mic size={20} className="text-gray-500" />
//                                 <Video size={20} className="text-gray-500" />
//                                 <MoreVertical size={20} className="text-gray-500" />
//                             </div>
//                         </div>
//                     </div>
//                     {/* Add more participants similarly */}
//                     <div className='border border-gray-200 rounded-lg p-3'>
//                         <div className="flex items-center justify-between">
//                             <div className="flex items-center gap-3">
//                                 <div className="bg-purple-100 w-10 h-10 rounded-full flex items-center justify-center">
//                                     <span className="text-[var(--purple)]">SS</span>
//                                 </div>
//                                 <div>
//                                     <p className="font-medium">You</p>
//                                     <p className="text-sm text-gray-500">Student</p>
//                                 </div>
//                             </div>
//                             <div className="flex items-center gap-2">
//                                 <Mic size={20} className="text-gray-500" />
//                                 <Video size={20} className="text-gray-500" />
//                                 <MoreVertical size={20} className="text-gray-500" />
//                             </div>
//                         </div>
//                     </div>
//                     {/* Example participant item */}
//                     <div className='border border-gray-200 rounded-lg p-3'>
//                         <div className="flex items-center justify-between">
//                             <div className="flex items-center gap-3">
//                                 <div className="bg-purple-100 w-10 h-10 rounded-full flex items-center justify-center">
//                                     <span className="text-[var(--purple)]">SS</span>
//                                 </div>
//                                 <div>
//                                     <p className="font-medium">You</p>
//                                     <p className="text-sm text-gray-500">Student</p>
//                                 </div>
//                             </div>
//                             <div className="flex items-center gap-2">
//                                 <Mic size={20} className="text-gray-500" />
//                                 <Video size={20} className="text-gray-500" />
//                                 <MoreVertical size={20} className="text-gray-500" />
//                             </div>
//                         </div>
//                     </div>
//                     {/*  */}
//                     <div className='border border-gray-200 rounded-lg p-3'>
//                         <div className="flex items-center justify-between">
//                             <div className="flex items-center gap-3">
//                                 <div className="bg-purple-100 w-10 h-10 rounded-full flex items-center justify-center">
//                                     <span className="text-[var(--purple)]">SS</span>
//                                 </div>
//                                 <div>
//                                     <p className="font-medium">You</p>
//                                     <p className="text-sm text-gray-500">Student</p>
//                                 </div>
//                             </div>
//                             <div className="flex items-center gap-2">
//                                 <Mic size={20} className="text-gray-500" />
//                                 <Video size={20} className="text-gray-500" />
//                                 <MoreVertical size={20} className="text-gray-500" />
//                             </div>
//                         </div>
//                     </div>
//                     {/*  */}
//                     <div className='border border-gray-200 rounded-lg p-3'>
//                         <div className="flex items-center justify-between">
//                             <div className="flex items-center gap-3">
//                                 <div className="bg-purple-100 w-10 h-10 rounded-full flex items-center justify-center">
//                                     <span className="text-purple-700">SS</span>
//                                 </div>
//                                 <div>
//                                     <p className="font-medium">You</p>
//                                     <p className="text-sm text-gray-500">Student</p>
//                                 </div>
//                             </div>
//                             <div className="flex items-center gap-2">
//                                 <Mic size={20} className="text-gray-500" />
//                                 <Video size={20} className="text-gray-500" />
//                                 <MoreVertical size={20} className="text-gray-500" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <button className="w-full mt-4 py-2 border border-[var(--purple)] text-[var(--purple)] rounded-full hover:bg-purple-50 inline-flex items-center gap-2 justify-center font-medium">
//                     <span><SquareArrowOutUpRight /></span>
//                     <span>Share a link with others to join</span>
//                 </button>
//             </div>
//         </div>
//     );
// }


// function NoteSection() {
//     const [content, setContent] = useState('');
//     const [isBold, setIsBold] = useState(false);
//     const [isItalic, setIsItalic] = useState(false);
//     const [isCode, setIsCode] = useState(false);
//     const [isList, setIsList] = useState(false);

//     const handleFormat = (type: string) => {
//         switch (type) {
//             case 'bold':
//                 setIsBold(!isBold);
//                 break;
//             case 'italic':
//                 setIsItalic(!isItalic);
//                 break;
//             case 'code':
//                 setIsCode(!isCode);
//                 break;
//             case 'list':
//                 setIsList(!isList);
//                 break;
//             default:
//                 break;
//         }
//     };

//     const handleSave = async () => {
//         try {
//             // TODO: Replace with your actual API endpoint
//             const response = await fetch('/api/notes', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ content }),
//             });

//             if (!response.ok) {
//                 throw new Error('Failed to save notes');
//             }
//             // Handle successful save
//         } catch (error) {
//             console.error('Error saving notes:', error);
//         }
//     };

//     const getTextAreaStyle = () => {
//         let style = 'w-full min-h-[100px] resize-none outline-none';
//         if (isBold) style += ' font-bold';
//         if (isItalic) style += ' italic';
//         if (isCode) style += ' font-mono bg-gray-100 p-2 rounded';
//         return style;
//     };

//     return (
//         <div className='m-5 border border-gray-200 rounded-lg font-poppins bg-white'>
//             <div className="p-6">
//                 <h2 className="text-xl font-bold mb-4">Notes</h2>
//                 <div className='border border-gray-200 rounded-lg p-4'>
//                     <div className="border border-gray-200 rounded-lg p-4">
//                         <div className="flex items-center mb-4 border-b border-gray-200 pb-2 gap-3">
//                             <select className="border rounded px-2 py-1 border-gray-200 text-gray-500">
//                                 <option>Heading</option>
//                             </select>
//                             <button
//                                 onClick={() => handleFormat('bold')}
//                                 className={`p-1 hover:bg-gray-100 rounded ${isBold ? 'bg-gray-200' : ''}`}
//                             >
//                                 <p className='font-bold text-xl'>B</p>
//                             </button>
//                             <button
//                                 onClick={() => handleFormat('italic')}
//                                 className={`p-1 hover:bg-gray-100 rounded ${isItalic ? 'bg-gray-200' : ''}`}
//                             >
//                                 <Italic size={20} />
//                             </button>
//                             <button
//                                 onClick={() => handleFormat('list')}
//                                 className={`p-1 hover:bg-gray-100 rounded ${isList ? 'bg-gray-200' : ''}`}
//                             >
//                                 <List size={20} />
//                             </button>
//                             <button
//                                 onClick={() => handleFormat('code')}
//                                 className={`p-1 hover:bg-gray-100 rounded ${isCode ? 'bg-gray-200' : ''}`}
//                             >
//                                 <Code size={20} />
//                             </button>
//                             <span className="ml-auto text-gray-500">{1000 - content.length}</span>
//                         </div>
//                         <textarea
//                             className={getTextAreaStyle()}
//                             placeholder="Write here..."
//                             value={content}
//                             onChange={(e) => setContent(e.target.value)}
//                         />
//                     </div>
//                 </div>
//                 <div className="flex justify-end gap-3 mt-4">
//                     <button className="px-4 py-1 text-[var(--purple)] hover:bg-gray-100 rounded-md border border-[var(--purple)]/">
//                         Cancel
//                     </button>
//                     <button
//                         onClick={handleSave}
//                         className="px-4 py-1 bg-[#93268F] text-white rounded-md hover:bg-[#93268F]]/80 transition-all duration-300"
//                     >
//                         Save Notes
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }


// function VideoSection() {
//     return (
//         <div className='m-5'>
//             <StreamVideo client={client}>
//                 <StreamCall call={call}>
//                     <MyUILayout />
//                 </StreamCall>
//             </StreamVideo>
//         </div>
//     );
// }


// export const MyUILayout = () => {
//     const { useCallCallingState } = useCallStateHooks();
//     const callingState = useCallCallingState();

//     if (callingState !== CallingState.JOINED) {
//         return (
//             <div className='flex flex-col gap-4 justify-center items-center h-full'>
//                 <div className='animate-spin h-10 w-10 border-4 border-[var(--purple)] rounded-full border-t-transparent'></div>
//                 <div className='font-poppins text-lg'>Loading...</div>
//             </div>
//         );
//     }

//     return (
//         <div className="relative bg-transparent w-full overflow-hidden">
//             <StreamTheme>
//                 <SpeakerLayout participantsBarPosition='bottom' />
//                 <CallControls />
//             </StreamTheme>
//         </div>
//     );
// };

export default function Masterclass () {
    return <section>
        <div className="flex flex-col border rounded-[16px] font-poppins p-8 mt-20 bg-white h-screen">
            <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-5xl font-semibold text-gray-800 mb-4">Masterclass</h2>
                    <p className="text-gray-600">This section is not available for preview.</p>
                </div>
            </div>
        </div>
    </section>
}