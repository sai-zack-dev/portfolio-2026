import Folder from "@/components/ui/folder";
import BounceCards from "@/components/ui/bounce-cards";

export default function Hobbies() {
  const images = [
    "https://picsum.photos/400/400?grayscale",
    "https://picsum.photos/500/500?grayscale",
    "https://picsum.photos/600/600?grayscale",
    "https://picsum.photos/700/700?grayscale",
    "https://picsum.photos/300/300?grayscale",
  ];

  const transformStyles = [
    "rotate(5deg) translate(-150px)",
    "rotate(0deg) translate(-70px)",
    "rotate(-5deg)",
    "rotate(5deg) translate(70px)",
    "rotate(-5deg) translate(150px)",
  ];
  return (
    <main className="flex min-h-screen w-full max-w-4xl items-center justify-center bg-white dark:bg-black sm:items-start mx-auto py-24 h-screen">
      <div className="w-full h-full bg-purple-100 justify-center flex flex-col items-center gap-10">
        <Folder size={2} color="#5227FF" className="custom-folder" />
        <BounceCards
          className="custom-bounceCards"
          images={images}
          containerWidth={500}
          containerHeight={250}
          animationDelay={1}
          animationStagger={0.3}
          easeType="elastic.out(1, 0.5)"
          transformStyles={transformStyles}
          enableHover={true}
        />
      </div>
    </main>
  );
}
