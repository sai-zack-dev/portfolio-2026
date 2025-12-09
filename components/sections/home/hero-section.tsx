import { AuroraText } from "@/components/ui/aurora-text";
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";
import { MorphingText } from "@/components/ui/morphing-text";
import { RainbowButton } from "@/components/ui/rainbow-button";

export default function HeroSection() {
  return (
    <>
      <div className="flex min-h-screen w-full max-w-4xl items-center justify-center mx-auto py-24 h-screen flex-col sm:flex-row">
        <div className="w-full h-full justify-center items-center flex p-5">
          <PixelatedCanvas
            src="/frame.png"
            width={400}
            height={400}
            shape="circle"
            backgroundColor="#ffffff00"
            responsive
            tintColor="#666666"
            distortionMode="swirl"
            tintStrength={0.5}
            className="rounded-xl z-10"
          />
        </div>
        <div className="w-full h-full justify-center items-start flex flex-col p-5 gap-3 z-2">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {" "}
            Hello, It's me.
          </p>
          <AuroraText className="text-6xl font-bold">
            {" "}
            &lt; Sai Zack /&gt;
          </AuroraText>
          {/* <h1 className="text-6xl font-bold text-black dark:text-white"> &lt; Sai Zack /&gt;</h1> */}
          <div className="flex gap-1 text-2xl font-bold text-gray-800 dark:text-gray-200">
            <h1>Software</h1>
            <MorphingText
              texts={["Engineer", "Developer", "Architecture", "Designer"]}
            />
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300 max-w-md mb-4">
            I build web, mobile, and desktop solutions in JavaScript and PHP,
            along with supporting UI/UX work. I deliver complete,
            production-ready applications from idea to launch.
          </p>
          <RainbowButton variant="outline">Download Resume</RainbowButton>
        </div>
      </div>
    </>
  );
}
