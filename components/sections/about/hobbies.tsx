"use client";

import { useState } from "react";
import Folder from "@/components/ui/folder";
import BounceCards from "@/components/ui/bounce-cards";
import Header from "@/components/common/Header";
import { CgGym } from "react-icons/cg";
import { LiaUtensilsSolid } from "react-icons/lia";
import { IoAirplaneOutline } from "react-icons/io5";

type Hobby = "gym" | "cooking" | "travel" | null;

export default function Hobbies() {
  const [selectedHobby, setSelectedHobby] = useState<Hobby>(null);
  const [images, setImages] = useState<string[]>([]);

  const transformStyles = [
    "rotate(5deg) translate(-150px)",
    "rotate(0deg) translate(-70px)",
    "rotate(-5deg)",
    "rotate(5deg) translate(70px)",
    "rotate(-5deg) translate(150px)",
  ];

  const hobbyImages: Record<Exclude<Hobby, null>, string[]> = {
    gym: [
      "https://picsum.photos/400/400?gym",
      "https://picsum.photos/500/500?fitness",
      "https://picsum.photos/600/600?workout",
      "https://picsum.photos/700/700?training",
      "https://picsum.photos/300/300?muscle",
    ],
    cooking: [
      "https://picsum.photos/400/400?food",
      "https://picsum.photos/500/500?cooking",
      "https://picsum.photos/600/600?kitchen",
      "https://picsum.photos/700/700?chef",
      "https://picsum.photos/300/300?recipe",
    ],
    travel: [
      "https://picsum.photos/400/400?travel",
      "https://picsum.photos/500/500?plane",
      "https://picsum.photos/600/600?beach",
      "https://picsum.photos/700/700?mountain",
      "https://picsum.photos/300/300?city",
    ],
  };

  const handleHobbiesClick = (hobby: Exclude<Hobby, null>) => {
    setSelectedHobby(hobby);
    setImages(hobbyImages[hobby]);
  };

  const items: React.ReactNode[] = [
    <button
      key="gym"
      className="text-black flex gap-1 justify-center items-center text-xs w-full h-full"
      onClick={() => handleHobbiesClick("gym")}
    >
      <CgGym />
      Gym
    </button>,
    <button
      key="cooking"
      className="text-black flex gap-1 justify-center items-center text-xs w-full h-full"
      onClick={() => handleHobbiesClick("cooking")}
    >
      <LiaUtensilsSolid />
      Cooking
    </button>,
    <button
      key="travel"
      className="text-black flex gap-1 justify-center items-center text-xs w-full h-full"
      onClick={() => handleHobbiesClick("travel")}
    >
      <IoAirplaneOutline />
      Travel
    </button>,
  ];

  return (
    <div className="w-full h-full justify-center flex flex-col py-24">
      <Header
        title="Know More About Me"
        description="Here is my hobbies and interests outside of coding and technology."
      />

      <div className="relative flex justify-center w-full mt-40 mb-10 mx-auto">
        <Folder
          size={1.5}
          color="#008CFA"
          className="custom-folder"
          items={items}
        />
        <p className="text-black dark:text-white absolute -bottom-15 text-lg">
          Personal Hobbies
        </p>
        <p className="absolute -bottom-20 text-sm text-blue-400">
          3 items
        </p>
      </div>

      {/* {selectedHobby && (
        <BounceCards
          key={selectedHobby} // forces re-animation on change
          className="custom-bounceCards"
          images={images}
          containerWidth={500}
          containerHeight={250}
          animationDelay={0.5}
          animationStagger={0.25}
          easeType="elastic.out(1, 0.5)"
          transformStyles={transformStyles}
          enableHover={true}
        />
      )} */}
    </div>
  );
}
