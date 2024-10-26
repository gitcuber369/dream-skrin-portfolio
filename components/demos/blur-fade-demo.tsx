import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";
import Link from "next/link";

const works = [
  {
    background: "bg-gray-200",
    imageUrl: "/images/HepaScope.png",
    title: "HepaScope Liver Scan",
    link: "https://www.youtube.com/watch?v=yV8kNUDj_WU",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/business.webp",
    title: "Stanford Biohacks",
    link: "/stanford_poster.pdf",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/uzbpass.png",
    title: "UZBPASS",
    link: "https://uzbpass-tau.vercel.app/",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/toursnactivities.png",
    title: "Tours & Activities",
    link: "https://www.toursnactivities.com/",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/UCLA-Hackathon.png",
    title: "UCLA Hackathon",
    link: "https://github.com/harshalmore31/UCLA-Hackathon",
  },
];

export function BlurFadeDemo() {
  return (
    <section id="photos">
      <div className="grid md:grid-cols-2 gap-8 mt-10 justify-items-center">
        {works.map(({ imageUrl, title, link }, idx) => (
          <BlurFade
            key={title}
            delay={0.25 + idx * 0.05}
            inView
            className={`rounded-lg ${works[idx].background} p-4`}
          >
            <Link href={link} target="_blank" rel="noreferrer" download={link == "/stanford_poster.pdf"}>
              <Image
                height={10000}
                width={10000}
                className="
                h-5/6 w-full object-cover rounded-lg"
        
              
       
                src={imageUrl}
                alt={`Random stock image ${idx + 1}`}
              />
              <h3 className="text-lg font-semibold p-4">{title}</h3>
            </Link>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
