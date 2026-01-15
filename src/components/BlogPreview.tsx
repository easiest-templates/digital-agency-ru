import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface BlogPost {
  title: string;
  excerpt: string;
}

const posts: BlogPost[] = [
  {
    title: "Искусство цифрового повествования",
    excerpt:
      "Как анимации и интерактивность создают захватывающие истории в вебе.",
  },
  {
    title: "Производительность в эпоху WebGL",
    excerpt:
      "Оптимизация 3D-сцен для плавной работы на всех устройствах.",
  },
  {
    title: "GSAP или Framer Motion: детальный разбор",
    excerpt:
      "Когда использовать какую библиотеку для создания потрясающих анимаций.",
  },
];

export function BlogPreview() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.from(".blog-title", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".blog-post", {
      scrollTrigger: {
        trigger: ".blog-grid",
        start: "top 80%",
      },
      y: 100,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

  return (
    <section id="blog" ref={containerRef} className="py-20 md:py-32 bg-[#111]">
      <div className="container mx-auto px-4">
        <h2 className="blog-title text-4xl md:text-6xl font-bold text-center mb-16">
          Из нашего блога
        </h2>
        <div className="blog-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="blog-post bg-[#1a1a1a] p-8 rounded-lg flex flex-col"
            >
              <h3 className="text-2xl font-bold mb-4">{post.title}</h3>
              <p className="text-neutral-400 mb-6 flex-grow">{post.excerpt}</p>
              <button className="group text-white font-semibold flex items-center gap-2 hover:text-neutral-300 transition-colors">
                Читать далее{" "}
                <ArrowRight
                  className="transition-transform group-hover:translate-x-1"
                  size={20}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
