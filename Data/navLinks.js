import WatchButton from "@/component/buttons/WatchButton";
import ConnectButton from "@/component/buttons/ConnectButton";

export const navlinks = [
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
    id: 6,
    title: "Success thoughts",
    link: "/success-thought",
  },
];
