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
    link: "/watch",
  },
  {
    id: 6,
    title: "Success thoughts",
    link: "/success-thought",
  },
  {
    id: 7,
    title: <GiveButton />,
    link: "/partnership/#give",
  },
];
