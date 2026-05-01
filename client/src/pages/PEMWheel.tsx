import MainLayout from "@/components/layout/MainLayout";
import { useState } from "react";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, Tooltip, ResponsiveContainer } from "recharts";

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

const scoreOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const;
const radialTicks = [2, 4, 6, 8, 10] as unknown as {
  value?: number;
  coordinate: number;
  index?: number;
}[];

type LifeArea = (typeof lifeAreas)[number];
type ScoreCategory = "priority" | "time" | "satisfaction";
type AreaScores = Record<ScoreCategory, number>;
type Scores = Record<LifeArea, AreaScores>;
type ChartDatum = {
  name: LifeArea;
  Priority: number;
  Time: number;
  Satisfaction: number;
};
type TickProps = {
  x?: number;
  y?: number;
  payload?: {
    value?: string | number;
  };
};
type RadarPoint = {
  x: number;
  y: number;
};
type RoundedRadarShapeProps = {
  points?: RadarPoint[];
  stroke?: string;
  strokeWidth?: number | string;
  fill?: string;
  fillOpacity?: number | string;
};

function createInitialScores(): Scores {
  return lifeAreas.reduce((acc, area) => {
    acc[area] = { priority: 5, time: 5, satisfaction: 5 };
    return acc;
  }, {} as Scores);
}

function normalizeReadableRotation(degrees: number) {
  let normalized = degrees;
  while (normalized > 180) normalized -= 360;
  while (normalized <= -180) normalized += 360;

  if (normalized > 90) return normalized - 180;
  if (normalized < -90) return normalized + 180;
  return normalized;
}

function getLabelRotation(label: string | number) {
  const index = lifeAreas.findIndex((area) => area === String(label));
  const areaIndex = index >= 0 ? index : 0;
  const spokeAngle = -90 + areaIndex * (360 / lifeAreas.length);
  const perpendicularAngle = spokeAngle + 90;

  return normalizeReadableRotation(perpendicularAngle);
}

function CustomAngleTick({ x = 0, y = 0, payload }: TickProps) {
  const label = payload?.value;

  if (label === undefined) {
    return null;
  }

  return (
    <g transform={`translate(${x},${y}) rotate(${getLabelRotation(label)})`}>
      <text
        x={0}
        y={0}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#2F5B52"
        fontSize={12}
        fontWeight={600}
      >
        {label}
      </text>
    </g>
  );
}

function CustomRadiusTick({ x = 0, y = 0, payload }: TickProps) {
  const label = payload?.value;

  if (label === undefined || label === 0) {
    return null;
  }

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={-8}
        y={4}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#6F877F"
        fontSize={10}
      >
        {label}
      </text>
    </g>
  );
}

function getPointCenter(points: RadarPoint[]) {
  return points.reduce(
    (center, point) => ({
      x: center.x + point.x / points.length,
      y: center.y + point.y / points.length,
    }),
    { x: 0, y: 0 },
  );
}

function getClosedSmoothPath(points: RadarPoint[]) {
  if (points.length < 3) {
    return "";
  }

  const commands = [`M ${points[0].x} ${points[0].y}`];

  points.forEach((point, index) => {
    const previous = points[(index - 1 + points.length) % points.length];
    const next = points[(index + 1) % points.length];
    const nextAfter = points[(index + 2) % points.length];
    const controlStart = {
      x: point.x + (next.x - previous.x) / 6,
      y: point.y + (next.y - previous.y) / 6,
    };
    const controlEnd = {
      x: next.x - (nextAfter.x - point.x) / 6,
      y: next.y - (nextAfter.y - point.y) / 6,
    };

    commands.push(
      `C ${controlStart.x} ${controlStart.y} ${controlEnd.x} ${controlEnd.y} ${next.x} ${next.y}`,
    );
  });

  commands.push("Z");
  return commands.join(" ");
}

function RoundedRadarShape({
  points = [],
  stroke,
  strokeWidth,
  fill,
  fillOpacity,
}: RoundedRadarShapeProps) {
  if (points.length < 3) {
    return <g />;
  }

  const center = getPointCenter(points);
  const radii = points.map((point) =>
    Math.hypot(point.x - center.x, point.y - center.y),
  );
  const minRadius = Math.min(...radii);
  const maxRadius = Math.max(...radii);
  const sharedShapeProps = {
    stroke,
    strokeWidth,
    fill,
    fillOpacity,
    strokeLinejoin: "round" as const,
  };

  if (maxRadius - minRadius < 0.5) {
    return (
      <circle
        {...sharedShapeProps}
        cx={center.x}
        cy={center.y}
        r={(minRadius + maxRadius) / 2}
      />
    );
  }

  return (
    <path
      {...sharedShapeProps}
      d={getClosedSmoothPath(points)}
    />
  );
}

export default function PEMWheel() {
  const [scores, setScores] = useState<Scores>(() => createInitialScores());

  const handleScoreChange = (area: LifeArea, category: ScoreCategory, value: string) => {
    const nextValue = Number.parseInt(value, 10);

    setScores((currentScores) => ({
      ...currentScores,
      [area]: {
        ...currentScores[area],
        [category]: Number.isNaN(nextValue) ? currentScores[area][category] : nextValue,
      },
    }));
  };

  const chartData: ChartDatum[] = lifeAreas.map((area) => ({
    name: area,
    Priority: scores[area].priority,
    Time: scores[area].time,
    Satisfaction: scores[area].satisfaction,
  }));

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
          <div className="bg-background border border-border p-4 sm:p-8 rounded-2xl overflow-x-auto">
            <div className="h-[560px] min-w-[560px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                  data={chartData}
                  cx="50%"
                  cy="46%"
                  outerRadius="82%"
                  margin={{ top: 48, right: 72, bottom: 78, left: 72 }}
                >
                  <PolarGrid
                    gridType="circle"
                    radialLines={true}
                    strokeDasharray="0"
                    stroke="#C6D1CC"
                    strokeWidth={1}
                  />
                  <PolarAngleAxis
                    dataKey="name"
                    tick={<CustomAngleTick />}
                    tickLine={false}
                    axisLine={false}
                    tickSize={22}
                  />
                  <PolarRadiusAxis
                    angle={90}
                    domain={[0, 10]}
                    ticks={radialTicks}
                    tick={<CustomRadiusTick />}
                    tickLine={false}
                    axisLine={false}
                    stroke="#AEBDB7"
                  />
                  <Radar
                    name="Priority"
                    dataKey="Priority"
                    stroke="#DC2626"
                    strokeWidth={2.5}
                    fill="#DC2626"
                    fillOpacity={0.15}
                    shape={<RoundedRadarShape />}
                    isAnimationActive={false}
                  />
                  <Radar
                    name="Time"
                    dataKey="Time"
                    stroke="#2563EB"
                    strokeWidth={2.5}
                    fill="#2563EB"
                    fillOpacity={0.15}
                    shape={<RoundedRadarShape />}
                    isAnimationActive={false}
                  />
                  <Radar
                    name="Satisfaction"
                    dataKey="Satisfaction"
                    stroke="#16A34A"
                    strokeWidth={2.5}
                    fill="#16A34A"
                    fillOpacity={0.15}
                    shape={<RoundedRadarShape />}
                    isAnimationActive={false}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #D0D0D0",
                      borderRadius: "8px",
                      color: "#4F5F5A",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    }}
                    cursor={{ stroke: "#B8A58C", strokeWidth: 1.5 }}
                  />
                  <Legend
                    verticalAlign="bottom"
                    height={25}
                    wrapperStyle={{ paddingTop: "30px", fontSize: "14px" }}
                    iconType="line"
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
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
