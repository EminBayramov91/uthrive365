import MainLayout from "@/components/layout/MainLayout";
import { useState } from "react";

export default function PEMWheel() {
  const lifeAreas = [
    "Body",
    "Mental",
    "Emotional",
    "Spiritual",
    "Family",
    "Love",
    "Social",
    "Wealth",
    "Purpose",
    "Character"
  ];

  const [scores, setScores] = useState(
    lifeAreas.reduce((acc, area) => ({
      ...acc,
      [area]: { priority: 5, time: 5, satisfaction: 5 }
    }), {})
  );

  const handleScoreChange = (area, category, value) => {
    setScores({
      ...scores,
      [area]: {
        ...scores[area],
        [category]: parseInt(value)
      }
    });
  };
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

        {/* Scoring Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold text-primary mb-6">Rate Your Life Areas</h2>
          <div className="bg-background border border-border rounded-2xl overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-4 gap-4 p-4 bg-primary/5 border-b border-border">
              <div className="font-semibold text-primary">Area</div>
              <div className="font-semibold text-primary text-center">Priority</div>
              <div className="font-semibold text-primary text-center">Time</div>
              <div className="font-semibold text-primary text-center">Satisfaction</div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-border">
              {lifeAreas.map((area, idx) => (
                <div key={idx} className="grid grid-cols-4 gap-4 p-4 items-center hover:bg-primary/2 transition-colors">
                  <div className="font-medium text-foreground">{area}</div>
                  
                  {/* Priority Dropdown */}
                  <select
                    value={scores[area]?.priority || 5}
                    onChange={(e) => handleScoreChange(area, "priority", e.target.value)}
                    className="px-3 py-2 rounded-lg border border-border bg-background text-foreground text-center hover:border-primary transition-colors cursor-pointer"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>

                  {/* Time Dropdown */}
                  <select
                    value={scores[area]?.time || 5}
                    onChange={(e) => handleScoreChange(area, "time", e.target.value)}
                    className="px-3 py-2 rounded-lg border border-border bg-background text-foreground text-center hover:border-primary transition-colors cursor-pointer"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>

                  {/* Satisfaction Dropdown */}
                  <select
                    value={scores[area]?.satisfaction || 5}
                    onChange={(e) => handleScoreChange(area, "satisfaction", e.target.value)}
                    className="px-3 py-2 rounded-lg border border-border bg-background text-foreground text-center hover:border-primary transition-colors cursor-pointer"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
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
