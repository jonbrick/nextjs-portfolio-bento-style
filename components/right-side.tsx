import { siteConfig } from "@/config/siteConfig";
import GridItem from "./grid-item";
import SocialBox from "./grid-items/social-box";
import MentorshipBox from "./grid-items/mentorship-box";
import ProjectBox from "./grid-items/project-box";
import EquipmentsBox from "./grid-items/equipments-box";

const RightSide = () => {
  return (
    <div className="flex-1 md:h-full">
      {/* Grid Container */}
      <div className="w-full md:h-full xl:overflow-y-auto p-6 grid grid-cols-2 md:grid-cols-4 auto-rows-[76px] gap-6 xl:gap-10">
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
  );
};

export default RightSide;
 