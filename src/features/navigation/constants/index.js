import {
  MdHomeFilled,
  MdOutlineChatBubbleOutline,
  MdBarChart,
  MdOutlineCalendarToday,
  MdFolderOpen,
  MdPowerSettingsNew,
  MdSettings,
} from "react-icons/md";

// Main Navigation Menus
export const menus = [
  {
    name: "Overview",
    icon: <MdHomeFilled />,
    id: "overview",
  },
  {
    name: "Stats",
    icon: <MdBarChart />,
    id: "stats",
  },
  {
    name: "Projects",
    icon: <MdFolderOpen />,
    id: "projects",
  },

  {
    name: "Chat",
    icon: <MdOutlineChatBubbleOutline />,
    id: "chat",
  },
  {
    name: "Calender",
    icon: <MdOutlineCalendarToday />,
    id: "calender",
  },
];

// Footer Navigation Menus
export const menus_footer = [
  {
    name: "Settings",
    icon: <MdSettings />,
    id: "settings",
  },
  {
    name: "Log out",
    icon: <MdPowerSettingsNew />,
    id: "logout",
  },
];
