import React, { useState } from 'react'

import sbImg from '../assets/u1GwprK5yFRK0UsCdKzY2MWG8nJpRHhpNzG8h0c4.webp';
import { HiOutlineHome } from "react-icons/hi";
import { TbShirt } from "react-icons/tb";
import { BsBox2 } from "react-icons/bs";
import { GoPeople } from "react-icons/go";
import { FiPieChart } from "react-icons/fi";
import { TbMessageQuestion } from "react-icons/tb";
import { LuNewspaper } from "react-icons/lu";
import { TbSpeakerphone } from "react-icons/tb";
import { CiShare2 } from "react-icons/ci";
import { IoIosArrowBack, IoMdClose } from "react-icons/io";


const Sidebar = () => {
   const [isOpen, setIsOpen] = useState(true);

   const toggleSidebar = () => {
     setIsOpen(!isOpen);
   };
  return (
    <div>
      {/* Toggle button */}
      <button
      className='lg:hidden'
        onClick={toggleSidebar}
        style={{
          position: "fixed",
          top: "10px",
          right: "10px", // Adjust the button position based on the sidebar state
          zIndex: 1000,
          background: "#00414d",
          color: "#fff",
          padding: "6px",
          borderRadius: "50%",
          border: "1px solid ",
        }}
      >
        {isOpen ? <IoMdClose size={20} /> : <IoIosArrowBack size={20} />}
      </button>

      {/* Sidebar */}
      <div
        dir="rtl"
        className='sidebar custom-scrollbar text-white lg:w-260px'
        
        style={{
          width: isOpen ? "260px" : "0",
          minHeight: "calc(100vh - 56px)",
          height: "800px",
          maxHeight: "100%",
          marginTop: "56px",
          backgroundColor: "#00414d",
          overflowY: "scroll",
        }}
      >
        <div className="sidebarLogo ">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            {/* badge */}
            <span
              style={{
                backgroundColor: "#f9c02e",
                color: "#271c01",
                borderRadius: "20px",
                //   width:'fit-content !important',
                height: "21.5px",
                fontSize: "12px",
                lineHeight: "12px",
                textAlign: "center",
                verticalAlign: "middle",
                padding: "2px 10px 4px",
                marginBottom: "-15px",
              }}
            >
              سبيشل
            </span>
            <img
              src={sbImg}
              alt="sbpic"
              style={{
                width: "65px",
                height: "65px",
                objectFit: "cover",
                border: "2px dashed #f9c02e",
                borderRadius: "50%",
              }}
            />
          </div>
        </div>

        <p className="text-center ">متجر الهدايا</p>
        <div
          style={{
            border: "1px solid #baf3e6",
            borderRadius: "25px",
            width: "fit-content",
            fontSize: "14px",
            margin: "16px auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            //   gap: "10px",
            overflow: "hidden",
          }}
        >
          <p
            className="text-center "
            style={{
              padding: "4px 12px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "12px",
            }}
          >
            زياره المتجر
            <IoIosArrowBack />
          </p>
          {/* share icon */}

          <button
            style={{
              backgroundColor: "#baf3e6",
              height: "30.6px",
              padding: "4px 12px",
              color: "#003c47",
              fontSize: "13px",
              fontWeight: 600,
            }}
          >
            <CiShare2 />
          </button>
        </div>

        {/* sidebar list */}
        <ul className="sidebarList ">
          <li>
            <a href="#" className="sidebarLink ">
              <HiOutlineHome />
              الرئيسية
            </a>
          </li>
          <li>
            <a href="#" className="sidebarLink ">
              <TbShirt />
              المنتجات
            </a>
          </li>
          <li>
            <a href="#" className="sidebarLink ">
              <BsBox2 />
              الطلبات
            </a>
          </li>
          <li>
            <a href="#" className="sidebarLink ">
              <GoPeople />
              العملاء
            </a>
          </li>
          <li>
            <a href="#" className="sidebarLink ">
              <FiPieChart />
              التقارير
            </a>
          </li>
          <li>
            <a href="#" className="sidebarLink ">
              <TbMessageQuestion />
              الأسئلة والتقييمات
            </a>
          </li>
          <li>
            <a href="#" className="sidebarLink ">
              <LuNewspaper />
              الصفحات التعريفية
            </a>
          </li>
          <li>
            <a href="#" className="sidebarLink ">
              <TbSpeakerphone />
              الأدوات التسويقية
            </a>
          </li>
          {/* navigation headers */}
          <li className="mt-8 navHeader">
            <a
              href="#f"
              style={{
                color: "#76e8cd",
                fontWeight: "600",
              }}
            >
              قنوات البيع
            </a>
          </li>
          <li>
            <a href="#" className="sidebarLink ">
              محلي
            </a>
          </li>
          <li>
            <a href="#" className="sidebarLink ">
              سلة بوينت
            </a>
          </li>
          {/* ادوات مسانده */}
          <li className="mt-8 navHeader">
            <a
              href="#f"
              style={{
                color: "#76e8cd",
                fontWeight: "600",
              }}
            >
              ادوات مسانده
            </a>
          </li>
          <li>
            <a href="#" className="sidebarLink ">
              <TbSpeakerphone />
              الأدوات التسويقية
            </a>
          </li>
          <li>
            <a href="#" className="sidebarLink ">
              الأدوات التسويقية
            </a>
          </li>
          {/* اعدادات */}
          <li className="mt-8 navHeader">
            <a
              href="#f"
              style={{
                color: "#76e8cd",
                fontWeight: "600",
              }}
            >
              قنوات البيع
            </a>
          </li>
          <li>
            <a href="#" className="sidebarLink ">
              <TbSpeakerphone />
              الأدوات التسويقية
            </a>
          </li>
          <li>
            <a href="#" className="sidebarLink ">
              الأدوات التسويقية
            </a>
          </li>

          {/* مظهر المنتج */}
          <li className="mt-8 navHeader">
            <a
              href="#f"
              style={{
                color: "#76e8cd",
                fontWeight: "600",
              }}
            >
              قنوات البيع
            </a>
          </li>
          <li>
            <a href="#" className="sidebarLink ">
              <TbSpeakerphone />
              الأدوات التسويقية
            </a>
          </li>
          <li>
            <a href="#" className="sidebarLink ">
              الأدوات التسويقية
            </a>
          </li>
          {/* متجر التطبيقات */}
          <li className="mt-8 navHeader">
            <a
              href="#f"
              style={{
                color: "#76e8cd",
                fontWeight: "600",
              }}
            >
              قنوات البيع
            </a>
          </li>
          <li>
            <a href="#" className="sidebarLink ">
              <TbSpeakerphone />
              الأدوات التسويقية
            </a>
          </li>
          <li>
            <a href="#" className="sidebarLink ">
              الأدوات التسويقية
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar
