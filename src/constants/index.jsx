import { HeartHandshake, HousePlus, DraftingCompass, Headset} from "lucide-react";


const K={
    NAVLINKS: [
       { name: "Home",
        path: "/",
       },
       { name: "About",
        path: "/about",
       },
       { name: "Collection",
        path: "/collection",
       },
       { name: "Contact-us",
        path: "/contact-us",
       },
       
    ],

   SERVICES: [
    {
        title: "Amazing Deals",
        description: "Far far away, behind the word mountains, far from the countries Vokalia.",
        Icon: <HeartHandshake/>,
        bgColor: "#F5EBEB",
        iconBg: "#CB9696",
    },
    {
        title: "Quality Homes",
        description: "Far far away, behind the word mountains, far from the countries Vokalia.",
        Icon: <HousePlus/>,
        bgColor: "#DCEBDD",
        iconBg: "#CB9696",
    },
    {
        title: "Modern Design",
        description: "Far far away, behind the word mountains, far from the countries Vokalia.",
        Icon: <DraftingCompass/>,
        bgColor: "##F5EFD8",
        iconBg: "#CB9696",
    },
    {
        title: "Best Support",
        description: "Far far away, behind the word mountains, far from the countries Vokalia.",
        Icon: <Headset/>,
        bgColor: "#F5EBEB",
        iconBg: "#F4E6D8",
    },
   ] 
};

export default K;