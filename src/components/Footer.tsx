import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { GlowScene } from "./GlowScene";

export function Footer() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-black text-white py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Suspense fallback={null}>
            <GlowScene />
          </Suspense>
        </Canvas>
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Есть проект на примете?
        </h2>
        <p className="text-lg text-neutral-300 mb-8">
          Давайте создадим что-то невероятное вместе.
        </p>
        <button
          onClick={scrollToContact}
          className="bg-white text-black font-bold py-4 px-8 rounded-full text-lg transition-transform hover:scale-105"
        >
          Связаться с нами
        </button>
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400">
            &copy; {new Date().getFullYear()} Vortex Digital. Все права
            защищены.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-neutral-400 hover:text-white">
              Telegram
            </a>
            <a href="#" className="text-neutral-400 hover:text-white">
              VK
            </a>
            <a href="#" className="text-neutral-400 hover:text-white">
              Behance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
