import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import { setDetails } from "../redux/Slices/registerFormSlice";

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
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailId, setEmailId] = useState("");
  const [domain, setDomain] = useState("");
  const [guidance, setGuidance] = useState(false);
  const [needGuidance, setNeedGuidance] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (domain === "not-sure") {
      setGuidance(true);
    } else {
      setGuidance(false);
      setNeedGuidance(false);
    }
  }, [domain]);

  function clearForm() {
    setName("");
    setAge("");
    setPhoneNumber("");
    setEmailId("");
    setDomain("");
    setGuidance(false);
    setNeedGuidance(false);
  }

  function submitDetails(e) {
    e.preventDefault();

    const obj = {
      studentFullName: name,
      studentPhoneNumber: phoneNumber,
      studentAge: age,
      studentEmailId: emailId,
      studentDomain: domain,
      assistance: needGuidance,
    };


    dispatch(setDetails(obj));
    clearForm();
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

          <form onSubmit={submitDetails} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-xl px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Age */}
            <div>
              <label className="text-sm font-medium text-gray-700">Age</label>
              <Select
                isSearchable={false}
                options={ageOptions}
                onChange={(e) => setAge(e.value)}
                placeholder="Select age range"
                styles={selectStyles}
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={emailId}
                required
                onChange={(e) => setEmailId(e.target.value)}
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-xl px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-600"
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
                required
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter your phone number"
                className="w-full border border-gray-300 rounded-xl px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-600"
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
                onChange={(e) => setDomain(e.value)}
                placeholder="Select a domain"
                styles={selectStyles}
                required
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

            {/* Buttons */}
            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-xl font-medium transition"
              >
                Submit
              </button>

              <button
                type="button"
                onClick={clearForm}
                className="flex-1 border border-gray-300 hover:bg-gray-100 text-gray-700 py-2.5 rounded-xl font-medium transition"
              >
                Clear
              </button>
            </div>
          </form>

          <p className="text-xs text-center text-gray-400 mt-4">
            We’ll contact you with personalized guidance and next steps
          </p>
        </div>
      </div>
    </div>
  );
}
