"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Dreamskrin transformed our approach to customer engagement. Their web solutions and expertise in AI have brought a seamless experience to our clients, streamlining our tour booking process like never before.",
    name: "Shakh Darren",
    title: "Founder, Toursnactivtis.com",
  },
  {
    quote:
      "The security solutions provided by Dreamskrin are top-notch. Their deep understanding of cybersecurity and proactive strategies have been invaluable in safeguarding our operations and ensuring data integrity.",
    name: "Yateenraj Poojari",
    title: "Cybersecurity Specialist",
  },
  {
    quote:
      "Collaborating with Dreamskrin was a game-changer for our HR consulting firm. Their AI-driven insights and scalable infrastructure solutions have enabled us to support our clients with precision and agility.",
    name: "Aditya Vinchurkar",
    title: "TGO, HR and Business Consulting",
  },
  {
    quote:
      "Our partnership with Dreamskrin has allowed us to bring innovative, data-driven solutions to our clients. Their team's professionalism and technical acumen are unparalleled, paving the way for new opportunities.",
    name: "Yousseff Himzi",
    title: "Co-Founder, TGO HR and Business Consulting",
  },
  {
    quote:
      "Dreamskrin's expertise in app development and MLOps has enhanced our product offerings at Fiction Technologies. Their commitment to quality and efficiency is clear in every phase of development.",
    name: "Pratik Desai",
    title: "Fiction Technologies",
  },
  {
    quote:
      "Dreamskrin’s cloud and web solutions have modernized our approach to financial and real estate management. Their intuitive infrastructure setup has streamlined our operations and improved scalability across our platforms.",
    name: "Calvin Mekat",
    title: "Finance and Real Estate Specialist",
  },
];
