import MainLayout from "@/components/layout/MainLayout";
import { useState } from "react";

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
  "Character",
] as const;

type LifeArea = (typeof lifeAreas)[number];
type ScoreCategory = "priority" | "time" | "satisfaction";
type ScoreSet = Record<ScoreCategory, number>;
type Scores = Record<LifeArea, ScoreSet>;

const scoreOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const seriesConfig: Array<{
  key: ScoreCategory;
  label: string;
  stroke: string;
  fill: string;
}> = [
  {
    key: "priority",
    label: "Priority",
    stroke: "#C84A3F",
    fill: "rgba(200, 74, 63, 0.15)",
  },
  {
    key: "time",
    label: "Time",
    stroke: "#2E6FB7",
    fill: "rgba(46, 111, 183, 0.13)",
  },
  {
    key: "satisfaction",
    label: "Satisfaction",
    stroke: "#2F8B57",
    fill: "rgba(47, 139, 87, 0.13)",
  },
];

function createDefaultScores(): Scores {
  return lifeAreas.reduce((acc, area) => {
    acc[area] = { priority: 5, time: 5, satisfaction: 5 };
    return acc;
  }, {} as Scores);
}

function polarPoint(
  center: number,
  angleDegrees: number,
  radius: number,
): { x: number; y: number } {
  const angleRadians = (angleDegrees * Math.PI) / 180;
  return {
    x: center + Math.cos(angleRadians) * radius,
    y: center + Math.sin(angleRadians) * radius,
  };
}

function readableTangentRotation(angleDegrees: number): number {
  let rotation = angleDegrees + 90;

  while (rotation > 180) rotation -= 360;
  while (rotation <= -180) rotation += 360;

  if (rotation > 90) rotation -= 180;
  if (rotation < -90) rotation += 180;

  return rotation;
}

function PEMWheelDiagram({ scores }: { scores: Scores }) {
  const center = 320;
  const maxRadius = 190;
  const labelRadius = 266;
  const viewBoxSize = 640;
  const angleStep = 360 / lifeAreas.length;

  const spokes = lifeAreas.map((area, index) => {
    const angle = -90 + index * angleStep;
    const outer = polarPoint(center, angle, maxRadius);
    const labelPoint = polarPoint(center, angle, labelRadius);

    return {
      area,
      angle,
      outer,
      labelPoint,
      labelRotation: readableTangentRotation(angle),
    };
  });

  const polygonPoints = (category: ScoreCategory) =>
    spokes
      .map(({ area, angle }) => {
        const radius = (scores[area][category] / 10) * maxRadius;
        const point = polarPoint(center, angle, radius);
        return `${point.x},${point.y}`;
      })
      .join(" ");

  return (
    <div className="w-full pb-2">
      <svg
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
        role="img"
        aria-labelledby="pem-wheel-title pem-wheel-description"
        className="mx-auto block h-auto w-full max-w-[680px]"
      >
        <title id="pem-wheel-title">Personal Energy Map wheel diagram</title>
        <desc id="pem-wheel-description">
          Circular PEM Wheel diagram with ten evenly spaced life areas and
          three score series for priority, time, and satisfaction.
        </desc>

        <rect
          x="28"
          y="28"
          width="584"
          height="584"
          rx="24"
          fill="#F7F6F1"
          stroke="#D9DED9"
        />

        {[2, 4, 6, 8, 10].map((tick) => {
          const radius = (tick / 10) * maxRadius;
          return (
            <g key={tick}>
              <circle
                cx={center}
                cy={center}
                r={radius}
                fill="none"
                stroke={tick === 10 ? "#AEBBB4" : "#D1D8D3"}
                strokeWidth={tick === 10 ? 1.8 : 1.2}
              />
              <text
                x={center + 8}
                y={center - radius + 4}
                fill="#6F877F"
                fontSize="12"
                fontWeight="600"
              >
                {tick}
              </text>
            </g>
          );
        })}

        {spokes.map(({ area, outer }) => (
          <line
            key={`spoke-${area}`}
            x1={center}
            y1={center}
            x2={outer.x}
            y2={outer.y}
            stroke="#C2CCC6"
            strokeWidth="1.2"
          />
        ))}

        {seriesConfig.map((series) => (
          <polygon
            key={series.key}
            points={polygonPoints(series.key)}
            fill={series.fill}
            stroke={series.stroke}
            strokeWidth="3"
            strokeLinejoin="round"
          />
        ))}

        {seriesConfig.map((series) =>
          spokes.map(({ area, angle }) => {
            const radius = (scores[area][series.key] / 10) * maxRadius;
            const point = polarPoint(center, angle, radius);
            return (
              <circle
                key={`${series.key}-${area}`}
                cx={point.x}
                cy={point.y}
                r="4"
                fill={series.stroke}
                stroke="#FFFFFF"
                strokeWidth="1.5"
              />
            );
          }),
        )}

        {spokes.map(({ area, labelPoint, labelRotation }) => (
          <text
            key={`label-${area}`}
            x={labelPoint.x}
            y={labelPoint.y}
            transform={`rotate(${labelRotation} ${labelPoint.x} ${labelPoint.y})`}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#3F5F56"
            fontSize="15"
            fontWeight="700"
            letterSpacing="0"
          >
            {area}
          </text>
        ))}

        <circle cx={center} cy={center} r="5" fill="#B8A58C" />
      </svg>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
        {seriesConfig.map((series) => (
          <div key={series.key} className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <span
              className="h-3 w-8 rounded-full"
              style={{ backgroundColor: series.stroke }}
              aria-hidden="true"
            />
            {series.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PEMWheel() {
  const [scores, setScores] = useState<Scores>(() => createDefaultScores());

  const handleScoreChange = (
    area: LifeArea,
    category: ScoreCategory,
    value: string,
  ) => {
    setScores((currentScores) => ({
      ...currentScores,
      [area]: {
        ...currentScores[area],
        [category]: Number.parseInt(value, 10),
      },
    }));
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
            role="button"
            className="inline-block px-6 py-3 bg-secondary text-[#F4F1EA] font-bold rounded-xl hover:bg-secondary/90 transition-colors"
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
                    value={scores[area].priority}
                    onChange={(e) => handleScoreChange(area, "priority", e.target.value)}
                    className="px-3 py-2 rounded-lg border border-border bg-background text-foreground text-center hover:border-primary transition-colors cursor-pointer"
                  >
                    {scoreOptions.map((num) => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>

                  {/* Time Dropdown */}
                  <select
                    value={scores[area].time}
                    onChange={(e) => handleScoreChange(area, "time", e.target.value)}
                    className="px-3 py-2 rounded-lg border border-border bg-background text-foreground text-center hover:border-primary transition-colors cursor-pointer"
                  >
                    {scoreOptions.map((num) => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>

                  {/* Satisfaction Dropdown */}
                  <select
                    value={scores[area].satisfaction}
                    onChange={(e) => handleScoreChange(area, "satisfaction", e.target.value)}
                    className="px-3 py-2 rounded-lg border border-border bg-background text-foreground text-center hover:border-primary transition-colors cursor-pointer"
                  >
                    {scoreOptions.map((num) => (
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
            <PEMWheelDiagram scores={scores} />
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
