import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

export function Header() {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!headerRef.current) return;

    gsap.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 2,
    });
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 p-4"
    >
      <div className="container mx-auto flex justify-between items-center bg-black/20 backdrop-blur-md p-4 rounded-full">
        <a href="#" className="text-white font-bold text-xl">
          Vortex
        </a>
        <nav className="hidden md:flex items-center gap-6 text-white">
          <button
            onClick={() => scrollTo("portfolio")}
            className="hover:text-neutral-300 transition-colors"
          >
            Портфолио
          </button>
          <button
            onClick={() => scrollTo("blog")}
            className="hover:text-neutral-300 transition-colors"
          >
            Блог
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="hover:text-neutral-300 transition-colors"
          >
            Контакты
          </button>
        </nav>
        <motion.button
          onClick={() => scrollTo("contact")}
          className="bg-white text-black font-semibold py-2 px-5 rounded-full"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Связаться
        </motion.button>
      </div>
    </motion.header>
  );
}
