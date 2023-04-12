import WatchButton from "@/component/buttons/WatchButton";
import ConnectButton from "@/component/buttons/ConnectButton";
import GiveButton from "@/component/buttons/GiveButton";

export const mobilenavLinks = [
  {
    id: 0,
    title: "About Us",
    link: "/about",
  },
  {
    id: 1,
    title: <ConnectButton />,
    link: "/connect",
  },
  {
    id: 2,
    title: "Events",
    link: "/events",
  },
  {
    id: 3,
    title: <WatchButton />,
    link: "/watch#view",
  },
  {
    id: 4,
    title: "Resources",
    link: "/resources/prayer-points",
  },
  {
    id: 5,
    title: "Success thoughts",
    link: "/success-thought",
  },
  {
    id: 6,
    title: "Bookstore",
    link: "./bookstore",
  },
  
  {
    id: 8,
    title: "Team Leaders",
    link: "./team",
  },
  {
    id: 9,
    title: "Testimonies",
    link: "./testimonies",
  },
  {
    id: 10,
    title: "Register for Event",
    link: "./forms/register_events",
  },
  {
    id: 7,
    title: <GiveButton />,
    link: "/give",
  },
];
