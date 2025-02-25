import React from "react";
import img1 from "../../../assets/spaceImages/1(1).jpg";
import img2 from "../../../assets/spaceImages/2(1).jpg";
import img3 from "../../../assets/spaceImages/5(1).jpg";
import img4 from "../../../assets/spaceImages/7(1).jpg";
import image from "../../../assets/spaceImages/5.jpg";
import { FaBrain, FaBriefcase, FaDumbbell } from "react-icons/fa";

export const imageGallery = [
  { id: 1, src: img1 },
  { id: 2, src: img2 },
  { id: 3, src: img3 },
  { id: 4, src: img4 },
];

export const membershipPlan = [
  {
    id: 1,
    img: image,
    title: "Private Office Space",
    description:
      "Confidentiality is key. Understanding that, the customized private office plans at Eccosphere are built to exclusively provide you with safe and secure co sharing office spaces within a single location, so that you always enjoy full autonomy.",
  },
  {
    id: 2,
    img: image,
    title: "Dedicated Desk",
    description:
      "We provide you with an interesting concept of ‘Dedicated’ Desk plans as part of our coworking office space membership option. These plans allow you as a member to feel at home and have your own fixed personal space in a buzzing hub of creativity and commerce.",
  },
  {
    id: 2,
    img: image,
    title: "Coworking-Night",
    description:
      "Anyone who is committed towards his or her work knows that work does not stop, be it day or night. At Eccosphere, we have exciting hot desk plans not just for the day, but also for the night.",
  },
  {
    id: 2,
    img: image,
    title: "Meeting Rooms",
    description:
      "Full of light and positivity, our meeting/conference rooms designed keeping creativity in mind. Furnished along with all the possible modern amenities, it is a prefect space to have a impactful meeting or to close deal!!",
  },
  {
    id: 2,
    img: image,
    title: "Event Space",
    description:
      "Looking for the perfect venue to host your next event? Look no further than our versatile event space at Eccosphere Coworking. Whether you’re planning a workshop, seminar, networking event, or celebration, our space is designed to meet your needs and exceed your expectations",
  },
  {
    id: 2,
    img: image,
    title: "Day Pass",
    description:
      "Access to any open seats in the common area. Just shop up, Set up shop, and get to work",
  },
];

export const pointList = [
  {
    id: 1,
    spaceFeatures: [
      {
        list: "A modern, shared office space designed for productivity and collaboration.",
      },
      {
        list: "Connect with like-minded professionals, entrepreneurs, and freelancers.",
      },
      {
        list: "Choose from private offices, shared desks, and meeting rooms tailored to your needs.",
      },
      {
        list: "Green spaces, meditation zones, and ergonomic workstations for a stress-free experience.",
      },
    ],
  },
  {
    id: 2,
    spaceFeatures: [
      {
        list: "Flexible workspaces for remote teams and individual freelancers.",
      },
      {
        list: "Access to premium amenities and resources for your productivity needs.",
      },
      {
        list: "Support from our team of experienced professionals and mentors.",
      },
      {
        list: "A supportive community for networking and collaboration.",
      },
      {
        list: "Regular events and workshops to keep you motivated and engaged.",
      },
    ],
  },
];

export const whyChooseUs = [
  {
    id: 1,
    icon: <FaBrain style={{ color: "green", width: "40px", height: "40px" }} />,
    title: "Mind",
    description: "Zen Garden, Library, Meditation",
  },
  {
    id: 2,
    icon: (
      <FaDumbbell style={{ color: "green", width: "40px", height: "40px" }} />
    ),
    title: "Body",
    description: "Sports & CrossFit Gym",
  },
  {
    id: 3,
    icon: (
      <FaBriefcase style={{ color: "green", width: "40px", height: "40px" }} />
    ),
    title: "Work",
    description: "High-speed WiFi, Outdoor Café, Networking Events",
  },
];

export const workspaces = [
  { id: 1, name: "Private Offices", image: image },
  { id: 2, name: "Open Workspaces", image: image },
  { id: 3, name: "Meeting Rooms", image: image },
  { id: 4, name: "Community Café", image: image },
];

export const testimonials = [
  {
    id: 1,
    quote:
      "Eccosphere has transformed the way I work. Amazing community and work environment!",
    name: "Amit Sharma",
    company: "Startup Founder",
    image: image,
  },
  {
    id: 2,
    quote:
      "The best co-working space! Great facilities, networking, and a truly inspiring place.",
    name: "Priya Verma",
    company: "Freelance Designer",
    image: image,
  },
  {
    id: 3,
    quote:
      "The best co-working space! Great facilities, networking, and a truly inspiring place.",
    name: "Monika Verma",
    company: "Freelance Designer",
    image: image,
  },
  {
    id: 4,
    quote:
      "The best co-working space! Great facilities, networking, and a truly inspiring place.",
    name: "Vishal Sharma",
    company: "Freelance Designer",
    image: image,
  },
];

export const partners = [image, image, image, image];

export const amenities = [
  {
    id: 1,
    title: "Private Office Space",
    description: "description",
  },
  {
    id: 2,
    title: "Private Office Space",
    description: "description",
  },
  {
    id: 2,
    title: "Private Office Space",
    description: "description",
  },
  {
    id: 2,
    title: "Private Office Space",
    description: "description",
  },
  {
    id: 2,
    title: "Private Office Space",
    description: "description",
  },
  {
    id: 2,
    title: "Private Office Space",
    description: "description",
  },
];
