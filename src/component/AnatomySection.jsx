// src/components/AnatomySection.jsx
import React from "react";
import anatomyImage from "../assets/human-body-frontal.png"; // Update as needed
import heart from "../assets/heart.png"; // Update as needed
import lung from "../assets/lung.png"; // Update as needed
import bone from "../assets/bone.png"; // Update as needed

const cart = [
  { body_part: "Heart", img: heart, width: "w-9/10", date: "28-6-2025", color: "bg-red-300" },
  { body_part: "Lung", img: lung, width: "w-2/5", date: "02-5-2025", color: "bg-blue-300" },
  { body_part: "Bone", img: bone, width: "w-7/10", date: "08-1-2025", color: "bg-yellow-300" },
];

const AnatomySection = () => {
  return (
    <div className="flex flex-1 items-center w-full lg:w-1/2 bg-base-300 p-4 rounded-2xl shadow-md">
      <div className="relative">
        <h2 className="text-xl font-semibold mb-4">Anatomy Overview</h2>
        <div className="relative max-w-md mx-auto">
          <img src={anatomyImage} alt="Human Anatomy" className="w-2/3 object-contain mx-auto" />

          {/* Health Indicators */}
          <div className="absolute top-[17%] left-[50%] font-medium bg-primary px-2 py-1 rounded-lg shadow opacity-50 hover:opacity-80 text-base-300">
            ❤️ Healthy Heart
          </div>
          <div className="absolute top-[30%] left-[20%] font-medium flex items-center gap-1 bg-success px-2 py-1 rounded-lg shadow opacity-50 hover:opacity-80 text-base-300">
            <span>Lungs</span>
            <img src={lung} alt="lung" className="w-4 h-4" />
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-lungs"
              viewBox="0 0 16 16"
            >
              <path d="M8.5 1.5a.5.5 0 1 0-1 0v5.243L7 7.1V4.72C7 3.77 6.23 3 5.28 3c-.524 0-1.023.27-1.443.592-.431.332-.847.773-1.216 1.229-.736.908-1.347 1.946-1.58 2.48-.176.405-.393 1.16-.556 2.011-.165.857-.283 1.857-.241 2.759.04.867.233 1.79.838 2.33.67.6 1.622.556 2.741-.004l1.795-.897A2.5 2.5 0 0 0 7 11.264V10.5a.5.5 0 0 0-1 0v.764a1.5 1.5 0 0 1-.83 1.342l-1.794.897c-.978.489-1.415.343-1.628.152-.28-.25-.467-.801-.505-1.63-.037-.795.068-1.71.224-2.525.157-.82.357-1.491.491-1.8.19-.438.75-1.4 1.44-2.25.342-.422.703-.799 1.049-1.065.358-.276.639-.385.833-.385a.72.72 0 0 1 .72.72v3.094l-1.79 1.28a.5.5 0 0 0 .58.813L8 7.614l3.21 2.293a.5.5 0 1 0 .58-.814L10 7.814V4.72a.72.72 0 0 1 .72-.72c.194 0 .475.11.833.385.346.266.706.643 1.05 1.066.688.85 1.248 1.811 1.439 2.249.134.309.334.98.491 1.8.156.814.26 1.73.224 2.525-.038.829-.224 1.38-.505 1.63-.213.19-.65.337-1.628-.152l-1.795-.897A1.5 1.5 0 0 1 10 11.264V10.5a.5.5 0 0 0-1 0v.764a2.5 2.5 0 0 0 1.382 2.236l1.795.897c1.12.56 2.07.603 2.741.004.605-.54.798-1.463.838-2.33.042-.902-.076-1.902-.24-2.759-.164-.852-.38-1.606-.558-2.012-.232-.533-.843-1.571-1.579-2.479-.37-.456-.785-.897-1.216-1.229C11.743 3.27 11.244 3 10.72 3 9.77 3 9 3.77 9 4.72V7.1l-.5-.357z" />
            </svg> */}
          </div>

          <div className="absolute top-[80%] left-[22%] font-medium bg-warning px-2 py-1 rounded-lg shadow opacity-50 hover:opacity-80 text-base-300">
            Foot 👣
          </div>
          <div className="absolute top-[55%] left-[52%] font-medium bg-info px-2 py-1 rounded-lg shadow opacity-50 hover:opacity-80 text-base-300">
            🦴 Healthy Leg
          </div>
        </div>
      </div>
      <div className="flex-1/2 flex flex-col gap-4">
        {cart.map((val, indx) => (
          <div key={indx} className="bg-base-100 px-2 py-4 rounded-md">
            <div className="flex items-center gap-1 font-medium leading-10">
              <img src={val.img} alt="img" className="w-4 h-4" />
              {val.body_part}
            </div>
            <div className="text-xs leading-7">{val.date}</div>
            <div className={`${val.color} ${val.width} h-2 rounded-md`}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnatomySection;
