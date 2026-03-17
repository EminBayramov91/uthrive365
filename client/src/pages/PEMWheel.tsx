import MainLayout from "@/components/layout/MainLayout";

export default function PEMWheel() {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Page Title */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            Personal Energy Map (PEM) Wheel
          </h1>
        </div>

        {/* Intro Section */}
        <section className="mb-12 space-y-4">
          <p className="text-lg text-foreground leading-relaxed">
            Use this tool to rate 10 areas of your life across three categories: Priority, Time, and Satisfaction.
          </p>
          <p className="text-lg text-foreground leading-relaxed">
            Rate each area from 1 to 10.
          </p>
          <p className="text-lg text-foreground leading-relaxed">
            The goal is not perfection. The goal is clarity.
          </p>
        </section>

        {/* Directions Section */}
        <section className="mb-12 bg-background border border-border p-8 rounded-2xl">
          <h2 className="text-2xl font-display font-bold text-primary mb-6">How to Use This Tool</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-[#B8A58C] font-bold mt-1">•</span>
              <span className="text-lg text-foreground leading-relaxed">
                <span className="font-semibold">Priority</span> = how important this area is in your life right now
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#B8A58C] font-bold mt-1">•</span>
              <span className="text-lg text-foreground leading-relaxed">
                <span className="font-semibold">Time</span> = how much time, energy, or attention you are currently giving it
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#B8A58C] font-bold mt-1">•</span>
              <span className="text-lg text-foreground leading-relaxed">
                <span className="font-semibold">Satisfaction</span> = how satisfied you feel with this area right now
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#B8A58C] font-bold mt-1">•</span>
              <span className="text-lg text-foreground leading-relaxed">
                Rate each area from 1 to 10 as honestly as you can
              </span>
            </li>
          </ul>
        </section>

        {/* Scoring Table Placeholder */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold text-primary mb-6">Rate Your Life Areas</h2>
          <div className="bg-background border border-border p-8 rounded-2xl min-h-[200px] flex items-center justify-center text-center">
            <p className="text-muted-foreground">Scoring table will appear here</p>
          </div>
        </section>

        {/* Wheel/Chart Preview Placeholder */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold text-primary mb-6">Your PEM Wheel</h2>
          <div className="bg-background border border-border p-8 rounded-2xl min-h-[300px] flex items-center justify-center text-center">
            <p className="text-muted-foreground">Your Personal Energy Map wheel visualization will appear here</p>
          </div>
        </section>

        {/* Action Buttons Placeholder */}
        <section className="mb-12 flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <div className="px-8 py-3 bg-background border border-border rounded-xl text-center text-muted-foreground">
            Action buttons will appear here
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
