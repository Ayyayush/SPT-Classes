import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import { setDetails } from "../redux/Slices/registerFormSlice";
import axios from "axios";
import { ADMIN_ENDPOINTS, USER_ENDPOINTS } from "./endpoint";
import toast from "react-hot-toast";

/* ================= OPTIONS ================= */

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
    boxShadow: state.isFocused
      ? "0 0 0 2px rgba(37, 99, 235, 0.3)"
      : "none",
    "&:hover": { borderColor: "#2563eb" },
  }),
};

/* ================= REGISTER FORM ================= */

export default function RegisterForm({ onClose }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailId, setEmailId] = useState("");
  const [domain, setDomain] = useState(null);
  const [guidance, setGuidance] = useState(false);
  const [needGuidance, setNeedGuidance] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (domain?.value === "not-sure") {
      setGuidance(true);
    } else {
      setGuidance(false);
      setNeedGuidance(false);
    }
  }, [domain]);

  async function submitDetails(e) {
    try {
      e.preventDefault();
      e.stopPropagation();

      if (name.trim() === "") {
        toast.error("Name can't be empty");
        return;
      }
      if (!age) {
        toast.error("Select the age");
        return;
      }
      const regexEmailId = /^[a-zA-Z0-9]+@gmail\.(com|in|net|org)$/;
      if (!regexEmailId.test(emailId)) {
        toast.error("Invalid email!");
        return;
      }
      const regexPhoneNumber = /^[0-9]{10}$/;
      if (!regexPhoneNumber.test(phoneNumber)) {
        toast.error("Invalid phone number!");
        return;
      }
      if (!domain) {
        toast.error("Select the domain");
        return;
      }

      const obj = {
        studentFullName: name,
        studentPhoneNumber: phoneNumber,
        studentAge: age.value,
        studentEmailId: emailId,
        studentDomain: domain.value,
        needGuidance: needGuidance,
      };

      const sheetData = [
        [name, age.value, emailId, phoneNumber, domain.value, needGuidance],
      ];

      dispatch(setDetails(obj));

      setName("");
      setPhoneNumber("");
      setEmailId("");
      setAge(null);
      setDomain(null);
      setGuidance(false);
      setNeedGuidance(false);

      await axios.post(
        `${ADMIN_ENDPOINTS}/addStudentInfo`,
        { studentDetails: obj },
        { withCredentials: true }
      );

      await axios.post(
        `${USER_ENDPOINTS}/addDataInSheet`,
        { values: sheetData },
        { withCredentials: true }
      );

      toast.success("Data saved successfully");
      onClose(); // close modal after success
    } catch (error) {
      toast.error("Something went wrong");
      console.log("error while submitting registration details", error);
    }
  }

  return (
    <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl p-6 sm:p-8 animate-fadeIn">

      {/* CLOSE BUTTON */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl"
      >
        ✕
      </button>

      <h1 className="text-2xl sm:text-3xl font-semibold text-center mb-2 text-gray-800">
        Begin Your Learning Journey 🚀
      </h1>
      <p className="text-center text-sm text-gray-500 mb-6">
        Register to get personalized course guidance from our experts
      </p>

      <div className="space-y-4">
        {/* Name */}
        <div>
          <label className="text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full mt-1 border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-600 outline-none"
          />
        </div>

        {/* Age */}
        <div>
          <label className="text-sm font-medium text-gray-700">Age</label>
          <Select
            isSearchable={false}
            options={ageOptions}
            value={age}
            onChange={setAge}
            placeholder="Select age range"
            styles={selectStyles}
          />
        </div>

        {/* Email */}
        <div>
          <label className="text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
            placeholder="you@example.com"
            className="w-full mt-1 border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-600 outline-none"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            WhatsApp / Phone Number
          </label>
          <input
            type="tel"
            value={phoneNumber}
            maxLength={10}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter your phone number"
            className="w-full mt-1 border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-600 outline-none"
          />
        </div>

        {/* Domain */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Preferred Learning Domain
          </label>
          <Select
            isSearchable={false}
            options={domainOptions}
            value={domain}
            onChange={setDomain}
            placeholder="Select a domain"
            styles={selectStyles}
          />
        </div>

        {/* Guidance */}
        <div
          className={`transition-all duration-500 overflow-hidden ${
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
        <button
          onClick={submitDetails}
          className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-xl transition"
        >
          Get Course Details
        </button>
      </div>

      <p className="text-xs text-center text-gray-400 mt-4">
        We’ll contact you with personalized guidance and next steps
      </p>
    </div>
  );
}
