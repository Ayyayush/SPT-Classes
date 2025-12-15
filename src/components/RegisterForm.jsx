import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { setDetails } from "../redux/Slices/registerFormSlice";
import axios from "axios";
import { ADMIN_ENDPOINTS } from "./endpoint";
import toast from "react-hot-toast";

const ageOptions = [
  { value: "under-16", label: "Under 16" },
  { value: "16-18", label: "16 – 18" },
  { value: "18-22", label: "18 – 22" },
  { value: "22-plus", label: "22+" },
];

const domainOptions = [
  { value: "web-dev", label: "Web Development" },
  { value: "app-dev", label: "App Development" },
  { value: "dsa", label: "Data Structures & Algorithms" },
  { value: "data-science", label: "Data Science / AI" },
  { value: "ml", label: "Machine Learning" },
  { value: "cyber", label: "Cyber Security" },
  { value: "cp", label: "Competitive Programming" },
  { value: "not-sure", label: "Not sure yet" },
];

const selectStyles = {
  control: (base, state) => ({
    ...base,
    borderRadius: "0.75rem",
    padding: "2px",
    borderColor: state.isFocused ? "#2563eb" : "#d1d5db",
    boxShadow: state.isFocused ? "0 0 0 2px rgba(37, 99, 235, 0.3)" : "none",
    "&:hover": { borderColor: "#2563eb" },
  }),
};

export default function RegisterForm() {
    const [name, setName] = useState("")
    const [age, setAge] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState("")
    const [emailId, setEmailId] = useState("")
    const [domain, setDomain] = useState(null)
    const [guidance, setGuidance] = useState(false)
    const [needGuidance, setNeedGuidance] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        if (domain?.value === "not-sure") {
            setGuidance(true)
        }else{
            setGuidance(false)
            setNeedGuidance(false)
        }
    }, [domain])

    async function submitDetails(e) {
        try {
            e.preventDefault();
            e.stopPropagation();

            setName(prev=>prev.trim())
            if(name===""){
                toast.error("name cant be empty");
                return;
            }
            if(!age){
                toast.error("Select the age");
                return;
            }


            const regexEmailId = /^[a-zA-Z0-9]+@gmail\.(com|in|net|org)$/;
            if (!regexEmailId.test(emailId)) {
                console.log("invalid mail")
                toast.error("Invalid email!");
                return;
            } 
            
            const regexPhoneNumber=/^[0-9]{10}$/
            if (!regexPhoneNumber.test(phoneNumber)) {
                console.log("invalid phone number")
                toast.error("Invalid phone number!");
                return;
            } 

            if(!domain){
                toast.error("Select the domain");
                return;
            }



            const obj = {
                studentFullName: name,
                studentPhoneNumber: phoneNumber,
                studentAge: age?.value,
                studentEmailId: emailId,
                studentDomain: domain?.value,
                needGuidance: needGuidance
            }
            dispatch(setDetails(obj))

            setName("");
            setPhoneNumber("")
            setEmailId("")
            setAge(null)
            setDomain(null)
            setGuidance(false)
            setNeedGuidance(false)
            console.log(obj)
            await axios.post(`${ADMIN_ENDPOINTS}/addStudentInfo`,{studentDetails:obj},{withCredentials:true})
            toast.success("Data saved successfully")

        } catch (error) {
            toast.error("Something went wrong")
            console.log("error while submitting registration details" + error)
        }
    }


  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl">
        <div className="p-6 sm:p-8">
          <h1 className="text-2xl sm:text-3xl font-semibold text-center mb-2 text-gray-800">
            Begin Your Learning Journey with SPT 🚀
          </h1>
          <p className="text-center text-sm text-gray-500 mb-6">
            Register to get personalized course guidance from our experts
          </p>

                    <div className="space-y-4">
                        {/* Name */}
                        <div className="flex flex-col">
                            <label className="text-sm font-medium mb-1 text-gray-700">Full Name</label>
                            <input
                                type="text"
                                value={name}
                                required
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your name"
                                className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                        </div>

                        {/* Age */}
                        <div className="flex flex-col">
                            <label className="text-sm font-medium mb-1 text-gray-700">Age</label>
                            <Select
                                isSearchable={false}
                                options={ageOptions}
                                value={age}
                                onChange={(e) => setAge(e)}
                                placeholder="Select age range"
                                styles={selectStyles}
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col">
                            <label className="text-sm font-medium mb-1 text-gray-700">Email</label>
                            <input
                                type="email"
                                value={emailId}
                                required
                                pattern="^[a-zA-Z0-9]+@gmail\.(com|in|net|org)$" 
                                onChange={(e) => setEmailId(e.target.value)}
                                placeholder="you@example.com"
                                className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                        </div>

                        {/* Phone */}
                        <div className="flex flex-col">
                            <label className="text-sm font-medium mb-1 text-gray-700">WhatsApp / Phone Number</label>
                            <input
                                type="tel"
                                value={phoneNumber}
                                maxLength={10}
                                inputMode="numeric"
                                required
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                placeholder="Enter your phone number"
                                className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                        </div>

                        {/* Domain */}
                        <div className="flex flex-col">
                            <label className="text-sm font-medium mb-1 text-gray-700">Preferred Learning Domain</label>
                            <Select
                                isSearchable={false}
                                options={domainOptions}
                                required
                                value={domain}
                                onChange={(e) => setDomain(e)}
                                placeholder="Select a domain"
                                styles={selectStyles}
                            />
                        </div>

            {/* Guidance */}
            <div
              className={`overflow-hidden transition-all duration-500 ${
                guidance ? "max-h-20 mt-2 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={needGuidance}
                  onChange={(e) => setNeedGuidance(e.target.checked)}
                  className="w-5 h-5 text-blue-600 rounded"
                />
                <span className="text-sm text-gray-700">
                  Do you want guidance from our expert{" "}
                  <span className="font-semibold">CHANCHAD</span> over a call?
                </span>
              </label>
            </div>

                        {/* Submit */}
                        <div
                            onClick={(e) => submitDetails(e)}
                            className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-xl transition-colors flex justify-center"
                        >
                            Get Course Details
                        </div>
                    </div>

          <p className="text-xs text-center text-gray-400 mt-4">
            We’ll contact you with personalized guidance and next steps
          </p>
        </div>
      </div>
    </div>
  );
}
