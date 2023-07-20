import { siteConfig } from "@/config/siteConfig";
import { Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Footer from "./footer";

const LeftSide = () => {
  return (
    <div className="flex-1 w-full xl:h-full px-8 pt-8 xl:p-8 xl:max-w-md">
      <div className="flex flex-col w-full h-full space-y-6 rounded-md">
        {/* Avatar */}
        <div className="h-24 w-24 relative">
          <Image
            alt="avatar"
            src="/pp-new3.png"
            priority
            loading="eager"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        {/* Content Container */}
        <div>
          {/* Title */}
          <h3 className="text-primary text-xl font-semibold">
            {siteConfig.title}
          </h3>
          {/* Full Name */}
          <h1 className="text-4xl font-bold mt-2">{siteConfig.creator}</h1>
          {/* Bio */}
          <p className="text-2x font-light text-neutral-500">
            {siteConfig.bio}
          </p>
        </div>
        {/* Buttons Container */}
        <div className="flex items-center justify-between gap-6 text-sm">
          <a
            className="flex items-center w-full gap-2 px-3 py-2 border rounded-md border-neutral-200 dark:border-neutral-800"
            href={siteConfig.locationLink}
          >
            <MapPin size="14" />
            {siteConfig.location}
          </a>
          <a
            className="flex items-center w-full gap-2 px-3 py-2 border rounded-md border-neutral-200 dark:border-neutral-800"
            href={`mailto:${siteConfig.email}`}
          >
            <Mail size="14" />
            Contact Me
          </a>
        </div>
        <div>
          {/* Footer */}
          <div className="hidden xl:flex">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
