import { GridItemInterface } from "@/config/siteConfig";
import Image from "next/image";
import Link from "next/link";

const EquipmentsBox = ({ item }: { item: GridItemInterface }) => {
  return (
    <div className="flex flex-col justify-end w-full h-full rounded-3xl overlfow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-neutral-950/60 to-neutral-950/90"></div>
      <div />
      {/* Background Image */}
      <Image
        className="object-center object-cover"
        fill
        src={item.image ?? ""}
        alt="bg-image"
      />
      {/* Content Container */}
      <div className="relative z-20 p-8">
        {/* Title */}
        <div className="text-sm font-medium text-white mb-3">{item.title}</div>
        {/* Items */}
        <div className="flex flex-wrap items-center gap-3">
          {item.equipments?.map((equipment) => {
            return (
              <Link
                className="px-2 py-1 text-sm font-medium bg-white rounded-lg dark:bg-neutral-900"
                key={equipment.link}
                href={equipment.link}
              >
                {equipment.title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EquipmentsBox;
