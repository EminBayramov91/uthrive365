import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/ui/PageHeader";
import bookImage from "@assets/Social_Media-3_1776517721929.png";

export default function BookPage() {
  return (
    <MainLayout>
      <div className="w-full max-w-[86%] mx-auto overflow-hidden rounded-3xl">
        <img
          src={bookImage}
          alt="The Personal Energy Map book cover"
          className="w-full h-[400px] md:h-[450px] lg:h-[480px] object-cover object-center"
        />
      </div>
      <PageHeader
        className="mt-8"
        title="The Personal Energy Map"
        description="A practical guide to seeing where your energy is going and what to do next."
      />
      <div className="max-w-4xl mx-auto px-4 pb-24 space-y-6">
        <p className="text-lg text-foreground leading-relaxed">
          Available on Amazon.
        </p>
      </div>
    </MainLayout>
  );
}