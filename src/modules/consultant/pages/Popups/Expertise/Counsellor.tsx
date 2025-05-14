// import React, { useState } from 'react';

// type FormType = 'academic' | 'career';

// const CounsellorForm = () => {
//     const [activeTab, setActiveTab] = useState<FormType>('academic');

//     const [academicForm, setAcademicForm] = useState({
//         name: '',
//         email: '',
//         currentGrade: '',
//         subjectInterest: '',
//     });

//     const [careerForm, setCareerForm] = useState({
//         name: '',
//         email: '',
//         careerGoals: '',
//         preferredIndustries: '',
//     });

//     const [errors, setErrors] = useState({});

//     const handleInputChange = (
//         e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//         formType: FormType
//     ) => {
//         const { name, value } = e.target;

//         if (formType === 'academic') {
//             setAcademicForm({ ...academicForm, [name]: value });
//         } else {
//             setCareerForm({ ...careerForm, [name]: value });
//         }
//     };

//     const validateForm = (formData: any) => {
//         const newErrors: any = {};
//         for (const key in formData) {
//             if (!formData[key]) {
//                 newErrors[key] = 'This field is required';
//             }
//         }
//         return newErrors;
//     };

//     const handleSubmit = (e: React.FormEvent, formType: FormType) => {
//         e.preventDefault();
//         const formData = formType === 'academic' ? academicForm : careerForm;
//         const validationErrors = validateForm(formData);

//         if (Object.keys(validationErrors).length > 0) {
//             setErrors(validationErrors);
//             return;
//         }

//         setErrors({});
//         console.log(`${formType} form submitted:`, formData);
//         alert('Form submitted successfully!');
//         // Reset form
//         if (formType === 'academic') {
//             setAcademicForm({ name: '', email: '', currentGrade: '', subjectInterest: '' });
//         } else {
//             setCareerForm({ name: '', email: '', careerGoals: '', preferredIndustries: '' });
//         }
//     };

//     return (
//         <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
//             <div className="flex justify-around mb-6">
//                 <button
//                     className={`px-4 py-2 rounded-md font-semibold ${activeTab === 'academic' ? 'bg-blue-600 text-white' : 'bg-gray-200'
//                         }`}
//                     onClick={() => setActiveTab('academic')}
//                 >
//                     Academic
//                 </button>
//                 <button
//                     className={`px-4 py-2 rounded-md font-semibold ${activeTab === 'career' ? 'bg-blue-600 text-white' : 'bg-gray-200'
//                         }`}
//                     onClick={() => setActiveTab('career')}
//                 >
//                     Career
//                 </button>
//             </div>

//             <form onSubmit={(e) => handleSubmit(e, activeTab)} className="space-y-4">
//                 <div>
//                     <label className="block font-medium">Name</label>
//                     <input
//                         type="text"
//                         name="name"
//                         value={activeTab === 'academic' ? academicForm.name : careerForm.name}
//                         onChange={(e) => handleInputChange(e, activeTab)}
//                         className="w-full mt-1 border border-gray-300 rounded px-3 py-2"
//                     />
//                     {errors['name'] && <p className="text-red-500 text-sm">{errors['name']}</p>}
//                 </div>

//                 <div>
//                     <label className="block font-medium">Email</label>
//                     <input
//                         type="email"
//                         name="email"
//                         value={activeTab === 'academic' ? academicForm.email : careerForm.email}
//                         onChange={(e) => handleInputChange(e, activeTab)}
//                         className="w-full mt-1 border border-gray-300 rounded px-3 py-2"
//                     />
//                     {errors['email'] && <p className="text-red-500 text-sm">{errors['email']}</p>}
//                 </div>

//                 {activeTab === 'academic' ? (
//                     <>
//                         <div>
//                             <label className="block font-medium">Current Grade</label>
//                             <input
//                                 type="text"
//                                 name="currentGrade"
//                                 value={academicForm.currentGrade}
//                                 onChange={(e) => handleInputChange(e, 'academic')}
//                                 className="w-full mt-1 border border-gray-300 rounded px-3 py-2"
//                             />
//                             {errors['currentGrade'] && <p className="text-red-500 text-sm">{errors['currentGrade']}</p>}
//                         </div>
//                         <div>
//                             <label className="block font-medium">Subject Interest</label>
//                             <input
//                                 type="text"
//                                 name="subjectInterest"
//                                 value={academicForm.subjectInterest}
//                                 onChange={(e) => handleInputChange(e, 'academic')}
//                                 className="w-full mt-1 border border-gray-300 rounded px-3 py-2"
//                             />
//                             {errors['subjectInterest'] && <p className="text-red-500 text-sm">{errors['subjectInterest']}</p>}
//                         </div>
//                     </>
//                 ) : (
//                     <>
//                         <div>
//                             <label className="block font-medium">Career Goals</label>
//                             <textarea
//                                 name="careerGoals"
//                                 value={careerForm.careerGoals}
//                                 onChange={(e) => handleInputChange(e, 'career')}
//                                 className="w-full mt-1 border border-gray-300 rounded px-3 py-2"
//                             />
//                             {errors['careerGoals'] && <p className="text-red-500 text-sm">{errors['careerGoals']}</p>}
//                         </div>
//                         <div>
//                             <label className="block font-medium">Preferred Industries</label>
//                             <input
//                                 type="text"
//                                 name="preferredIndustries"
//                                 value={careerForm.preferredIndustries}
//                                 onChange={(e) => handleInputChange(e, 'career')}
//                                 className="w-full mt-1 border border-gray-300 rounded px-3 py-2"
//                             />
//                             {errors['preferredIndustries'] && (
//                                 <p className="text-red-500 text-sm">{errors['preferredIndustries']}</p>
//                             )}
//                         </div>
//                     </>
//                 )}

//                 <button
//                     type="submit"
//                     className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition"
//                 >
//                     Submit
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default CounsellorForm;
