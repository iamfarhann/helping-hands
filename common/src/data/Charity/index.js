/* charity dummy data list :-
- Navbar
- Banner section
- Feature section
- Branch section
- Work section
- Milestone block
- Humanity block
- Promotion block
- Donation section
- Blog section
- Client block
- Footer
  - menu widget
  - copyright 
  - social links
*/

/* ------------------------------------ */
// Navbar menu
/* ------------------------------------ */
export const menuItems = [
  {
    label: "Categories",
    path: "#feature",
    offset: "81",
  },
  {
    label: "Top Organizations",
    path: "#branch",
    offset: "100",
  },
  {
    label: "Fundraisers",
    path: "#fundraisers",
    offset: "81",
  },
  {
    label: "Micro Donations",
    path: "#socialFundraising",
    offset: "81",
  },
  {
    label: "Scattered Data",
    path: "#socialFundraising",
    offset: "81",
  },
  {
    label: "Portfolios",
    path: "#socialFundraising",
    offset: "81",
  },
  {
    label: "Our Blog",
    path: "#blog",
    offset: "81",
  },
];

/* ------------------------------------ */
// Banner section data
/* ------------------------------------ */
//import bannerSlide1 from "/image/charity/banner/slide1.png";
//import bannerSlide2 from "/image/charity/banner/slide2.png";
//import bannerSlide3 from "/image/charity/banner/slide3.png";
//import bannerSlide4 from "/image/charity/banner/slide4.jpg";

export const bannerSlides = [
  {
    id: 1,
    thumb_url: "/image/charity/banner/slide3.png",
  },
  {
    id: 2,
    thumb_url: "/image/charity/banner/slide2.png",
  },
  {
    id: 3,
    thumb_url: "/image/charity/banner/slide3.png",
  },
  {
    id: 4,
    thumb_url: "/image/charity/banner/slide4.jpg",
  },
];

/* ------------------------------------ */
// Feature section data
// /* ------------------------------------ */
// import featureIcon1 from "/image/charity/feature/1.svg";
// import featureIcon2 from "/image/charity/feature/2.svg";
// import featureIcon3 from "/image/charity/feature/3.svg";
// import featureIcon4 from "/image/charity/feature/4.svg";
// import featureIcon5 from "/image/charity/feature/5.svg";
// import featureIcon6 from "/image/charity/feature/6.svg";

export const featureData = {
  title: "  Want to make a difference?  ",
  slogan: "You can choose to donate for a category that you prefer",
  features: [
    {
      id: 1,
      icon: "/image/charity/feature/1.svg",
      title: "Animals ",
      description:
        "If you want to change the world, one wish at a time, help kids",
    },
    {
      id: 2,
      icon: "/image/charity/feature/2.svg",
      title: "Art & Culture",
      description: "Make it happen with your donation",
    },
    {
      id: 3,
      icon: "/image/charity/feature/3.svg",
      title: "Food",
      description: "Feed the needy people who look up to you .",
    },
    {
      id: 4,
      icon: "/image/charity/feature/4.svg",
      title: "Family",
      description: "Support them to fulfil their school dreams",
    },
    {
      id: 5,
      icon: "/image/charity/feature/5.svg",
      title: "Disasters",

      description: "If you want to change the world, one wish at.",
    },
    {
      id: 6,
      icon: "/image/charity/feature/6.svg",
      title: "Health",
      description: "If you want to change the world, one wish at a time.",
    },
  ],
};

/* ------------------------------------ */
// Branch section data
/* ------------------------------------ */
// import thumbImage from "/image/charity/branch/image.png";
// import thumbImage1 from "/image/charity/branch/image1.png";
// import thumbImage2 from "/image/charity/branch/image2.png";
// import thumbImage3 from "/image/charity/branch/image3.png";
// import thumbImage4 from "/image/charity/branch/image4.png";
// import thumbImage5 from "/image/charity/branch/image5.png";

export const branchData = [
  {
    id: 1,
    menuItem: "Akhuwat",
    image: "/image/charity/branch/image1.jpg",
    slogan: "TOP ORGANIZATIONS",
    title: `With transparency score of <strong>75%</strong> 
    Akhuwat is one of the best organization.`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    linkUrl: "#1",
    linkText: "SEE MORE OF OUR IMPACT",
  },
  {
    id: 2,
    menuItem: "Shaukat Khanum",
    image: "/image/charity/branch/image2.jpg",
    slogan: "TOP ORGANIZATIONS",
    title: `With transparency score of <strong>75%</strong> 
    Shaukat Khanum is one of the best organization.`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    linkUrl: "#1",
    linkText: "SEE MORE OF OUR IMPACT",
  },
  {
    id: 3,
    menuItem: "Tahreek-e-ilm ",
    image: "/image/charity/branch/image3.jpg",
    slogan: "TOP ORGANIZATIONS",
    title: `With transparency score of <strong>75%</strong> 
    Tahreek-e-ilm is one of the best organization. `,
    description:
      "Despite being a small organization we’ve funded 29,725 water projects for 8.4 million people around the world.",
    linkUrl: "#1",
    linkText: "SEE MORE OF OUR IMPACT",
  },
  {
    id: 4,
    menuItem: "Alkhidmat Foundation",
    image: "/image/charity/branch/image4.jpg",
    slogan: "TOP ORGANIZATIONS",
    title: `We’ve funded <strong>10,792</strong> 
    water projects for 
    <strong>4.9 million</strong> people
    around the world.`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    linkUrl: "#1",
    linkText: "SEE MORE OF OUR IMPACT",
  },
  {
    id: 5,
    menuItem: "Meem Foundation",
    image: "/image/charity/branch/image5.jpg",
    slogan: "WITH YOUR CARE",
    title: `We’ve funded <strong>10,071</strong> 
    water projects for 
    <strong>3.7 million</strong> people
    around the world.`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    linkUrl: "#1",
    linkText: "SEE MORE OF OUR IMPACT",
  },
  {
    id: 6,
    menuItem: "Edhi Foundation",
    image: "/image/charity/branch/image6.jpg",
    slogan: "TOP ORGANIZATIONS",
    title: `We’ve funded <strong>19,792</strong> 
    water projects for 
    <strong>7.9 million</strong> people
    around the world.`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    linkUrl: "#1",
    linkText: "SEE MORE OF OUR IMPACT",
  },
];

/* ------------------------------------ */
// Work feature data
/* ------------------------------------ */

export const workData = {
  title: "How We Works",
  slogan:
    "Water is a non-profit organization bringing clean and safe drinking water to people in developing countries",
  features: [
    {
      id: 1,
      icon: "/image/charity/map-pin.svg",
      title: "We prove every project",
      description:
        "We track every dollar you raise, and show the projects you helped fund with photos.",
    },
    {
      id: 2,
      icon: "/image/charity/search-icon.svg",
      title: "We’re an open book",
      description:
        "We’ve consistently received the highest grades available for accountability.",
    },
    {
      id: 3,
      icon: "/image/charity/icon-100p.svg",
      title: "100% goes to the field",
      description:
        "Private donors cover our operating costs so 100% of your money can fund water projects.",
    },
  ],
};
/* ------------------------------------ */
// Milestone block data
/* ------------------------------------ */
export const milestoneData = {
  title: "OUR FIRST MILESTONE",
  amount: "$4M",
  text: "RAISED TO DATE",
  counterItems: [
    {
      id: 1,
      amount: "154",
      title: "Successful Project",
    },
    {
      id: 2,
      amount: "1534",
      title: "People Impacted",
    },
    {
      id: 3,
      amount: "71",
      title: "Supported Country",
    },
    {
      id: 4,
      amount: "15k",
      title: "Money Donated",
    },
  ],
};

/* ------------------------------------ */
// Humanity block data
/* ------------------------------------ */
//import humanityGlob from "/image/charity/humanity-glob.png";

export const humanityData = {
  image: "/image/charity/humanity-glob.png",
  slogan: "ONLINE SOCIAL FUNDRAISING",
  title: "We need your help to promotr humanity",
  text:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  lists: [
    {
      id: 1,
      text: "Let them drink pure",
    },
    {
      id: 2,
      text: "Ensure them medicare",
    },
    {
      id: 3,
      text: "create opportunity of education",
    },
  ],
};

/* ------------------------------------ */
// Promotion block data
/* ------------------------------------ */

export const promotionData = {
  slogan: "GET YOUR COMMUNITY ON BOARD",
  title: "We are creating a world with basic safety for all.",
  text1:
    "We exist to permanently end violent conict and exploitation facing our world’s most isolated and unprotected communities.",
  text2:
    "We partner with local visionaries in volatile conict zones to build community-run initiatives and drive global policy change to end violent conict, save lives, and give communities the safety they deserve.",
  lists: [
    {
      id: 1,
      text: "Let them drink pure",
    },
    {
      id: 2,
      text: "Ensure them medicare",
    },
    {
      id: 3,
      text: "create opportunity of education",
    },
  ],
  image: "/image/charity/promotion.svg",
};

/* ------------------------------------ */
// Donation form data
/* ------------------------------------ */
export const paymentPolicy = [
  {
    id: 1,
    title: "One Time",
    value: "oneTime",
    text: "One Time donation given",
  },
  {
    id: 2,
    title: "Ongoing",
    value: "ongoing",
    text: "Everymonth donation given",
  },
];
export const addCredits = [
  {
    id: 1,
    title: "Basic",
    value: "Basic",
    text: "PKR 250.00 Credits",
  },
  {
    id: 2,
    title: "Standard",
    value: "Standard",
    text: "PKR 500.00 Credits",
  },
];

export const currencyOptions = [
  {
    id: 1,
    value: "usd",
    title: "$ USD",
  },
  {
    id: 2,
    value: "gbp",
    title: "£ GBP",
  },
  {
    id: 3,
    value: "cny",
    title: "¥ CNY",
  },
];

/* ------------------------------------ */
// Blog post data
/* ------------------------------------ */
// import thumb1 from "/image/charity/blog/thumb-1.png";
// import thumb2 from "/image/charity/blog/thumb-2.png";

export const posts = [
  {
    id: 1,
    title: "Uganda Embraces South Sudanese Refugees, For Now",
    excerpt:
      "72 million children around the world are not enrolled in school. Concern Worldwide focuses on providing basic education to those…",
    thumbUrl: "/image/charity/blog/thumb-1.png",
    btnText: "Learn More ",
    btnUrl: "#1",
  },
  {
    id: 2,
    title: "BRITs Week 2019 together with O2 is here",
    excerpt:
      "72 million children around the world are not enrolled in school. Concern Worldwide focuses on providing basic education to those…",
    thumbUrl: "/image/charity/blog/thumb-2.png",
    btnText: "Learn More ",
    btnUrl: "#1",
  },
];

/* ------------------------------------ */
// Client block data
/* ------------------------------------ */

export const clients = [
  {
    id: 1,
    logo: "/image/charity/clients/1.png",
    name: "windows",
    link: "#1",
  },
  {
    id: 2,
    logo: "/image/charity/clients/2.png",
    name: "airbnb",
    link: "#2",
  },
  {
    id: 3,
    logo: "/image/charity/clients/3.png",
    name: "adidas",
    link: "#3",
  },
  {
    id: 4,
    logo: "/image/charity/clients/4.png",
    name: "ibm",
    link: "#4",
  },
  {
    id: 5,
    logo: "/image/charity/clients/5.png",
    name: "amazon",
    link: "#5",
  },
  {
    id: 6,
    logo: "/image/charity/clients/6.png",
    name: "google",
    link: "#6",
  },
];

/* ------------------------------------ */
// Footer data section
/* ------------------------------------ */
export const menuWidgets = [
  {
    id: 1,
    title: "FUNDRAISE FOR",
    menu: [
      {
        id: 1,
        text: "Medical",
        link: "#1",
      },
      {
        id: 2,
        text: "Emergency",
        link: "#1",
      },
      {
        id: 3,
        text: "Memorial",
        link: "#1",
      },
      {
        id: 4,
        text: "Education",
        link: "#1",
      },
      {
        id: 5,
        text: "Charity",
        link: "#1",
      },
      {
        id: 6,
        text: "Nonprofit organization",
        link: "#1",
      },
    ],
  },
  {
    id: 2,
    title: "LEARN MORE",
    menu: [
      {
        id: 1,
        text: "How invisiblechildren works",
        link: "#1",
      },
      {
        id: 2,
        text: "Pricing and Fees",
        link: "#1",
      },
      {
        id: 3,
        text: "Common questions",
        link: "#1",
      },
      {
        id: 4,
        text: "Success stories",
        link: "#1",
      },
      {
        id: 5,
        text: "Supported countries",
        link: "#1",
      },
    ],
  },
  {
    id: 3,
    title: "RESOURCES",
    menu: [
      {
        id: 1,
        text: "Help center",
        link: "#1",
      },
      {
        id: 2,
        text: "Blog",
        link: "#1",
      },
      {
        id: 3,
        text: "GoFundMe Stories",
        link: "#1",
      },
      {
        id: 4,
        text: "Press center",
        link: "#1",
      },
      {
        id: 5,
        text: "Careers",
        link: "#1",
      },
      {
        id: 6,
        text: "About",
        link: "#1",
      },
    ],
  },
];

export const copyright = [
  {
    id: 1,
    text: "Privacy Policy",
    link: "1#",
  },
  {
    id: 2,
    text: "Terms and Conditions",
    link: "1#",
  },
];

import { Icon } from "react-icons-kit";
import { linkedin } from "react-icons-kit/fa/linkedin";
import { facebook } from "react-icons-kit/fa/facebook";
import { twitter } from "react-icons-kit/fa/twitter";
import { github } from "react-icons-kit/fa/github";

export const socialLinks = [
  {
    id: 1,
    icon: <Icon icon={linkedin} />,
    name: "linkedin",
    link: "1#",
  },
  {
    id: 2,
    icon: <Icon icon={facebook} />,
    name: "facebook",
    link: "2#",
  },
  {
    id: 3,
    icon: <Icon icon={twitter} />,
    name: "twitter",
    link: "3#",
  },
  {
    id: 4,
    icon: <Icon icon={github} />,
    name: "github",
    link: "4#",
  },
];
