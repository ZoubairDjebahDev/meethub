import {
  CalendarMinus2,
  CalendarPlus2,
  Home,
  Plus,
  Video,
} from "lucide-react";

export const sidebarLinks = [
  {
    label: "Home",
    route: "/",
    Icon: Home,
  },
  {
    label: "Upcoming",
    route: "/upcoming",
    Icon: CalendarPlus2,
  },
  {
    label: "Previous",
    route: "/previous",
    Icon: CalendarMinus2,
  },
  {
    label: "Recordings",
    route: "/recordings",
    Icon: Video,
  },
  {
    label: "Personal Room",
    route: "/personal-room",
    Icon: Plus,
  },
];
