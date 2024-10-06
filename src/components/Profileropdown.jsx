import React, { useState } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FiUser } from "react-icons/fi";
import { TbNotification } from "react-icons/tb";
import { BsPen } from "react-icons/bs";
import { MdCelebration } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";

const Profileropdown = () => {

    const [visible, setVisible] = useState(false);

    const showList = ()=>{
        setVisible(!visible);
    }



  return (
    <div className='profileDdBox'>
      <button onClick={showList} className='align-middle text-gray-600'>
        <MdKeyboardArrowDown />
      </button>

      { visible && <ul className="profileDropdown">
        <li>
          <a href="https://demo.salla.sa/profile" >
           <FiUser/>
            الملف الشخصي{" "}
          </a>
        </li>
        <li>
          <a
            href="https://demo.salla.sa/settings/component/notifications"
          >
            <TbNotification/>
            التنبيهات
          </a>
        </li>

        <li className="highlight">
          <a
            href="https://changelog.salla.sa/"
          >
           <MdCelebration/>
            تحديثات المنصة{" "}
          </a>
        </li>
        <li>
          <a
            href="https://demo.salla.sa/features/login"
          >
            <BsPen/>
            الاقتراحات{" "}
          </a>
        </li>
        <li className="divider"></li>
        <li>
          <a
            href="https://demo.salla.sa/logout"
            className="logout"
          >
            <FiLogOut/>
            تسجيل الخروج
          </a>
        </li>
      </ul>}
    </div>
  );
}

export default Profileropdown
