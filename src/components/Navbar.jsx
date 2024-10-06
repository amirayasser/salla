import React, { useState } from 'react'
import { HiOutlineMoon } from "react-icons/hi2";
import { GoGift } from "react-icons/go";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import Dropdown from './DropDown';

import profilePic from '../assets/112e28edfaa501b1942f68247921fcec.png';

import { MdKeyboardArrowDown } from "react-icons/md";
import Profileropdown from './Profileropdown';
import Tooltip from './Tooltip';


const Navbar = ({darkMode, setDarkMode}) => {

  return (
    <div
      className={`navbar fixed top-0 left-0 flex-wrap  lg:flex-nowrap ${
        darkMode ? "dark" : ""
      }`}
      style={{
        width: "100%",
        verticalAlign: "middle",
        height: "56px",
        backgroundColor: darkMode ? "#212121" : "#fcfcfc",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        className="w-full lg:w-64 bg:white flex justify-center lg:block "
        style={{
          // width: "260px",
          height: "100%",
          backgroundColor: "#00414d",
          padding: "5px 0",
          paddingRight: "18px",
        }}
      >
        <svg
          width="90"
          height="40"
          viewBox="0 0 477 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M475.61 142.063L464.042 45.6284C460.931 19.6647 438.861 0.0785532 412.707 0.0785532H302.221C276.067 0.0785532 253.997 19.6647 250.885 45.6284L239.329 142.063C237.571 156.731 242.181 171.483 251.991 182.532C261.789 193.589 275.888 199.921 290.665 199.921H424.275C439.039 199.921 453.139 193.589 462.949 182.532C472.746 171.486 477.369 156.734 475.61 142.063ZM443.922 165.773C438.671 171.689 431.426 174.943 423.529 174.943H291.414C283.505 174.943 276.257 171.689 271.021 165.773C265.77 159.858 263.408 152.281 264.344 144.429L275.77 49.0755C277.411 35.3928 289.048 25.0574 302.84 25.0574H412.091C425.879 25.0574 437.52 35.3897 439.16 49.0755L450.598 144.429C451.535 152.281 449.157 159.858 443.922 165.773Z"
            fill="#BBF3E5"
          />
          <path
            d="M423.849 112.462C422.03 109.674 419.236 107.761 415.979 107.076C412.716 106.39 409.393 107.015 406.604 108.831C373.338 130.526 340.964 130.523 307.635 108.828C304.846 107.012 301.514 106.387 298.26 107.079C295.003 107.767 292.212 109.683 290.396 112.471C288.58 115.26 287.958 118.589 288.647 121.846C289.335 125.103 291.251 127.894 294.039 129.71C314.867 143.269 336.1 150.142 357.148 150.142C378.2 150.142 399.417 143.266 420.215 129.704C423.003 127.885 424.915 125.091 425.601 121.834C426.29 118.58 425.668 115.251 423.849 112.462Z"
            fill="#BBF3E5"
          />
          <path
            d="M197.218 60.4018L185.399 64.4743C186.689 68.6465 188.278 74.6042 188.278 78.0786C188.278 81.852 185.894 84.136 181.326 84.136C176.659 84.136 173.879 83.0423 173.879 76.8852V66.2598H161.366V76.8852C161.366 83.0423 158.586 84.136 153.619 84.136C148.752 84.136 145.973 83.0423 145.973 76.8852V66.2598H133.36V76.7855C133.36 83.0423 129.982 84.1329 122.734 84.1329C115.287 84.1329 112.704 82.6435 112.704 74.4985V28.9215H99.4955V75.1994C99.4955 82.7462 96.9124 84.136 89.4683 84.136H89.4653C83.6043 84.136 80.133 82.9486 80.133 75.4985V41.3323H67.7161V48.3897C44.1783 53.2477 35.7402 63.0816 35.7402 75.3988C35.7402 87.1118 43.4834 94.6647 54.8037 94.6647C63.2508 94.6647 67.5136 90.3928 69.4049 84.6314C71.0937 94.861 77.0424 100.813 88.6526 100.819L88.6707 100.822C97.5106 100.822 102.474 96.8489 104.559 90.7915C107.142 97.5438 113 100.822 121.937 100.822C130.178 100.822 135.541 97.8429 137.625 91.6858C139.71 97.9426 144.677 100.822 151.728 100.822C158.78 100.822 163.647 97.8429 165.631 91.5861C167.716 97.8429 172.783 100.822 180.925 100.822C193.239 100.822 200.786 92.7764 200.786 78.1782C200.792 72.8157 199.302 65.4653 197.218 60.4018ZM67.7191 75.0967C65.7372 76.6858 61.9578 77.8822 56.3958 77.8822C51.3294 77.8822 46.2689 76.4955 46.2689 73.1148C46.2689 69.4351 51.5288 65.7644 67.7161 63.0816V75.0967H67.7191Z"
            fill="#BBF3E5"
          />
          <path
            d="M74.42 38.2508C78.4502 38.2508 81.7674 35.3263 81.7674 31.2175C81.7674 26.8731 78.2901 24.1843 74.42 24.1843C70.3898 24.1843 66.991 26.9486 66.991 31.2175C66.991 35.565 70.6254 38.2508 74.42 38.2508Z"
            fill="#BBF3E5"
          />
          <path
            d="M57.8128 38.2508C61.843 38.2508 65.1602 35.3263 65.1602 31.2175C65.1602 26.8731 61.6829 24.1843 57.8128 24.1843C53.7826 24.1843 50.3838 26.9486 50.3838 31.2175C50.3838 35.565 54.0182 38.2508 57.8128 38.2508Z"
            fill="#BBF3E5"
          />
          <path
            d="M0.157227 171.924L2.11191 161.305C5.93366 164.024 12.7312 166.486 18.4201 166.486C23.3476 166.486 26.2358 164.873 26.2358 162.154C26.2358 154.764 0.583205 161.643 0.583205 143.722C0.583205 134.378 8.31432 128.263 20.8007 128.263C27.5107 128.263 33.7131 130.133 38.13 132.426L36.0062 142.789C31.843 140.58 26.5772 138.541 21.4805 138.541C16.8098 138.541 13.9216 140.323 13.9216 142.873C13.9216 150.604 39.5741 143.979 39.5741 160.71C39.5741 169.885 30.8249 176.338 17.9125 176.338C10.1814 176.341 3.97897 174.048 0.157227 171.924Z"
            fill="#BBF3E5"
          />
          <path
            d="M82.5497 129.792H95.9697V175.066H82.5497V167.592C78.8972 173.027 73.7159 176.172 67.0059 176.172C55.6223 176.172 44.6646 168.103 44.6646 152.387C44.6646 136.671 55.1117 128.432 67.0059 128.432C73.6313 128.432 78.8126 130.894 82.5497 135.822V129.792ZM82.5497 152.218C80.0875 143.807 75.16 139.562 69.5528 139.562C63.5226 139.562 58.8488 144.063 58.8488 152.218C58.8488 160.287 63.6041 165.045 69.6374 165.045C75.5014 165.042 80.3413 159.861 82.5497 152.218Z"
            fill="#BBF3E5"
          />
          <path
            d="M105.825 175.066V115.35H119.245V175.066H105.825Z"
            fill="#BBF3E5"
          />
          <path
            d="M129.1 175.066V115.35H142.52V175.066H129.1Z"
            fill="#BBF3E5"
          />
          <path
            d="M188.048 129.792H201.468V175.066H188.048V167.592C184.396 173.027 179.214 176.172 172.504 176.172C161.121 176.172 150.163 168.103 150.163 152.387C150.163 136.671 160.61 128.432 172.504 128.432C179.13 128.432 184.311 130.894 188.048 135.822V129.792ZM188.048 152.218C185.586 143.807 180.659 139.562 175.051 139.562C169.021 139.562 164.347 144.063 164.347 152.218C164.347 160.287 169.103 165.045 175.136 165.045C180.997 165.042 185.84 159.861 188.048 152.218Z"
            fill="#BBF3E5"
          />
        </svg>
      </div>

      <div className="nav-wrapper px-10 flex justify-between items-center flex-grow">
        <div
          className="flex items-center relative overflow-hidden bg-white"
          style={{
            width: "fit-content",
            borderRadius: "5px",
            height: "38px",
            backgroundColor: darkMode ? "#272626" : "#FFFFFF",
          }}
        >
          <input
            className="w-auto lg:w-[350px]"
            type="text"
            placeholder="ابحث برقم الطلب"
            style={{
              maxWidth: "350px",
              height: "38px",
              border: "1px solid #eee",
              color: "#999",
              fontSize: "14px",
              padding: "8px 20px",
              position: "relative",
              backgroundColor: darkMode ? "#272626" : "#FFFFFF",
            }}
          />
          <Tooltip text="للبحث عن اكتر من طلب يرجى الالتزام بالصيغه التاليه"
          className='hidden lg:block'
          >
            <AiOutlineInfoCircle
            className='hidden lg:block'
              style={{ position: "absolute", right: "326px", top: "11px" }}
            />
          </Tooltip>

          <Dropdown />
          <button
            className="flex items-center justify-center"
            style={{
              backgroundColor: "#baf3e6",
              height: "38px",
              width: "48px",
            }}
          >
            <IoSearch />
          </button>
        </div>

        <div className="flex items-center  mx-3 lg:mx-0">
          <div className="flex items-center justify-center gap-3 ">
            <button
              className="hidden lg:flex"
              style={{
                border: "1px solid #baf3e6",
                borderRadius: "50%",
                cursor: "pointer",
                width: "38px",
                height: "38px",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              <GoGift />
            </button>
            <button
              className="mx-1 lg:mx-0"
              style={{
                backgroundColor: darkMode ? "#baf3e6" : "#fcfcfc",
                border: "1px solid #baf3e6",
                borderRadius: "50%",
                cursor: "pointer",
                width: "38px",
                height: "38px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => {
                setDarkMode(!darkMode);
              }}
            >
              <HiOutlineMoon />
            </button>
          </div>

          {/* profile */}
          <div className="flex items-center gap-3 p-2 mt-2 mx-3  absolute top-0 left-0 lg:static">
            <img
              src={profilePic}
              alt="profile"
              style={{ width: "28px", height: "28px", borderRadius: "50%" }}
            />
            <span className="text-sm text-gray-600 hidden lg:inline-block">متجر الهدايا</span>
            <Profileropdown/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar
