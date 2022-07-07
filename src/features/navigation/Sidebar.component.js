import React from "react";
import { GrHomeRounded } from "react-icons/gr";
import { BsCalendarDate } from "react-icons/bs";
import { IoMdStats , IoMdText} from "react-icons/io";
import { AiOutlineFolderOpen } from "react-icons/ai";
import logoSrc from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";

const menus = [
  {
    name: "Overview",
    icon: <GrHomeRounded />,
    id: "overview",
  },
  {
    name: "Stats",
    icon: <IoMdStats />,
    id: "stats",
  },
  {
    name: "Projects",
    icon: <AiOutlineFolderOpen />,
    id: "projects",
  },

  {
    name: "Chat",
    icon: <IoMdText />,
    id: "chat",
  },
  {
    name: "Calender",
    icon: <BsCalendarDate />,
    id: "calender",
  },
];

export const Sidebar = () => {

    const navigate = useNavigate();
    
    const handleClick = (id) => {
        navigate(`/dashboard/${id}`);
    }
    
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <div className="sidebar-header-logo">
                    <img src={logoSrc} alt="logo" />
                </div>
            </div>
            <div className="sidebar-menu">
                {menus.map((menu, index) => {
                    return (
                        <div
                            key={index}
                            className="sidebar-menu-item"
                            onClick={() => handleClick(menu.id)}
                        >
                            {menu.icon}
                            <span>{menu.name}</span>
                        </div>
                    );
                }
                )}
            </div>
        </div>
    );
                
};
