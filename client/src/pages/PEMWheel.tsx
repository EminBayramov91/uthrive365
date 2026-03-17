import MainLayout from "@/components/layout/MainLayout";
import { useState, useRef } from "react";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, Tooltip, ResponsiveContainer } from "recharts";

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

  // Format data for the radar chart
  const chartData = lifeAreas.map((area) => ({
    name: area,
    Priority: scores[area]?.priority || 5,
    Time: scores[area]?.time || 5,
    Satisfaction: scores[area]?.satisfaction || 5
  }));

  // Custom tick renderer for category labels - default rendering
  const CustomAngleTick = (props) => {
    const { x, y, payload } = props;
    
    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#4F5F5A"
          fontSize={12}
          fontWeight={500}
        >
          {payload.value}
        </text>
      </g>
    );
  };

  // Custom tick renderer for radius axis labels
  const CustomRadiusTick = (props) => {
    const { x, y, payload } = props;
    
    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={-8}
          y={5}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#6F877F"
          fontSize={10}
        >
          {payload.value}
        </text>
      </g>
    );
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
          <div>
            <p className="text-lg text-foreground leading-relaxed">
              Rate each area from 1 to 10, where 1 = low and 10 = high.
            </p>
            <p className="text-lg text-foreground leading-relaxed text-muted-foreground mt-2">
              10 means the highest level of Priority, Time, or Satisfaction.
            </p>
          </div>
          <p className="text-lg text-foreground leading-relaxed">
            The goal is not perfection. The goal is clarity.
          </p>
        </section>

        {/* Help Button Section */}
        <section className="mb-12">
          <a
            href="/pem/help"
            className="inline-block px-6 py-3 bg-secondary text-primary font-bold rounded-xl hover:bg-secondary/90 transition-colors"
          >
            How to Read Your PEM Wheel
          </a>
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

        {/* PEM Wheel Chart */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold text-primary mb-6">Your PEM Wheel</h2>
          <div className="bg-background border border-border p-8 rounded-2xl">
            <ResponsiveContainer width="100%" height={500}>
              <RadarChart
                data={chartData}
                margin={{ top: 50, right: 180, bottom: 50, left: 180 }}
              >
                <PolarGrid 
                  strokeDasharray="0" 
                  stroke="#C0C0C0" 
                  radialLines={{ stroke: "#C0C0C0", strokeWidth: 1.5 }}
                />
                <PolarAngleAxis 
                  dataKey="name" 
                  tick={<CustomAngleTick />}
                />
                <PolarRadiusAxis 
                  angle={90} 
                  domain={[0, 10]}
                  ticks={[2, 4, 6, 8, 10]}
                  tick={<CustomRadiusTick />}
                  stroke="#B0B0B0"
                  strokeWidth={2}
                />
                <Radar
                  name="Priority"
                  dataKey="Priority"
                  stroke="#DC2626"
                  strokeWidth={2.5}
                  fill="#DC2626"
                  fillOpacity={0.15}
                  isAnimationActive={true}
                />
                <Radar
                  name="Time"
                  dataKey="Time"
                  stroke="#2563EB"
                  strokeWidth={2.5}
                  fill="#2563EB"
                  fillOpacity={0.15}
                  isAnimationActive={true}
                />
                <Radar
                  name="Satisfaction"
                  dataKey="Satisfaction"
                  stroke="#16A34A"
                  strokeWidth={2.5}
                  fill="#16A34A"
                  fillOpacity={0.15}
                  isAnimationActive={true}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #D0D0D0",
                    borderRadius: "8px",
                    color: "#4F5F5A",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                  }}
                  cursor={{ stroke: "#B8A58C", strokeWidth: 1.5 }}
                />
                <Legend 
                  verticalAlign="bottom" 
                  height={25}
                  wrapperStyle={{ paddingTop: "30px" }}
                  iconType="line"
                  wrapperClassName="text-sm"
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Action Buttons Placeholder */}
        <section className="mb-12 flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <div className="px-8 py-3 bg-background border border-border rounded-xl text-center text-muted-foreground">
            Export options coming soon
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
