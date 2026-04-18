import MainLayout from "@/components/layout/MainLayout";
import bookImage from "@assets/Social_Media-3_1776517721929.png";

export default function BookPage() {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-[minmax(0,400px)_minmax(0,1fr)] items-center">
          <div className="flex justify-center md:justify-start">
            <img
              src={bookImage}
              alt="The Personal Energy Map book cover"
              className="w-full max-w-[400px] rounded-3xl shadow-lg object-cover object-center"
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary">
              The Personal Energy Map
            </h1>
            <p className="text-lg md:text-xl text-foreground leading-relaxed max-w-2xl">
              A practical guide to seeing where your energy is going and what to do next.
            </p>
            <a
              href="https://www.amazon.com/dp/B0GXGYVTVW"
              target="_blank"
              rel="noreferrer"
              role="button"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-[#F4F1EA] font-bold rounded-xl hover:bg-primary/90 transition-colors shadow-md"
            >
              Get the Book on Amazon
            </a>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}