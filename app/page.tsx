import Image from "next/image";
import { siteConfig } from "../config/siteConfig";
import { Mail, MapPin } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import GridItem from "@/components/grid-item";
import SocialBox from "@/components/grid-items/social-box";
import MentorshipBox from "@/components/grid-items/mentorship-box";
import ProjectBox from "@/components/grid-items/project-box";
import EquipmentsBox from "@/components/grid-items/equipments-box";

export default function Home() {
  return (
    <main className="flex flex-1 w-full h-full gap-10">
      {/* Left Side */}
      <div className="flex-1 h-full max-w-md p-8">
        <div className="flex flex-col h-full space-y-6 rounded-md">
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
          {/* Footer */}
          <div className="border-t border-neutral-200 dark:border-neutral-800 pt-6 text-xs flex items-center justify-between">
            <div className="text-neutral-500">
              Built by @jonbrickdesigns | © jonbickdesings. All Rights Reserved
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className="flex-1 h-full p-6">
        {/* Grid Container */}
        <div className="w-full h-full overflow-y-auto p-6 grid grid-cols-4 auto-rows-[76px] gap-10">
          {/* Grid Items */}
          {siteConfig.items.map((item, index) => {
            return (
              <GridItem key={item.title + index} size={item.layout}>
                {item.type === "social" ? (
                  <SocialBox item={item} />
                ) : item.type === "mentor" ? (
                  <MentorshipBox item={item} />
                ) : item.type === "project" ? (
                  <ProjectBox item={item} />
                ) : item.type === "equipment" ? (
                  <EquipmentsBox item={item} />
                ) : (
                  <div>Not implemented yet</div>
                )}
              </GridItem>
            );
          })}
        </div>
      </div>
    </main>
  );
}
