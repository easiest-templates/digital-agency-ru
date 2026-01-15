import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-24"
    >
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h2 className="text-5xl md:text-7xl font-bold mb-4">Напишите нам</h2>
        <p className="text-lg text-neutral-300 mb-12">
          Мы будем рады услышать вас. Оставьте сообщение ниже.
        </p>
        <form className="space-y-6 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              type="text"
              placeholder="Ваше имя"
              className="bg-[#1a1a1a] border-neutral-700 text-white"
            />
            <Input
              type="email"
              placeholder="Ваш email"
              className="bg-[#1a1a1a] border-neutral-700 text-white"
            />
          </div>
          <Input
            type="text"
            placeholder="Тема"
            className="bg-[#1a1a1a] border-neutral-700 text-white"
          />
          <Textarea
            placeholder="Ваше сообщение"
            rows={6}
            className="bg-[#1a1a1a] border-neutral-700 text-white"
          />
          <div className="text-center">
            <Button
              type="submit"
              size="lg"
              className="bg-white text-black hover:bg-neutral-200 font-bold text-lg px-10 py-6"
            >
              Отправить
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
