import { HomeIcon, Users, BookOpen } from "lucide-react";
import Index from "./pages/Index.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
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