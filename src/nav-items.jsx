import { HomeIcon, Users, BookOpen, Activity } from "lucide-react";
import Index from "./pages/Index.jsx";
import Feed from "./pages/Feed.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Feed",
    to: "/feed",
    icon: <Activity className="h-4 w-4" />,
    page: <Feed />,
  },
  {
    title: "Grupos",
    to: "/grupos",
    icon: <Users className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Recursos",
    to: "/recursos",
    icon: <BookOpen className="h-4 w-4" />,
    page: <Index />,
  },
];