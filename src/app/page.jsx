import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <div>
      {/* Background Animation */}
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.5}
        duration={2}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "absolute inset-0 h-full w-full skew-y-12"
        )}
      />
      <div className="flex flex-col mt-20 md:flex-row justify-center ">
        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8 text-center md:text-left px-8">
          <div className="flex-1 max-w-lg">
            <h1 className="text-4xl font-bold mb-4">
              Hey there! I'm{" "}
              <span className="italic text-yellow-400">Azka Bariqlana</span>
            </h1>
            <p className="text-lg mb-6">
              I'm a web developer focused on building modern, high-performance
              websites. My goal is to blend creativity with technical skills to
              create user-friendly and visually appealing web applications.
            </p>
          </div>

          <div className="flex-1 flex justify-center">
            <img
              src="/images/copy.jpg"
              alt="Azka Bariqlana"
              className="w-48 h-48 rounded-full shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
