'use client';

import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

const data = [
  {
    name: "Match 1",
    mobility: 5,
    scoring: 15,
    docking: 12,
  },
  {
    name: "Match 2",
    mobility: 5,
    scoring: 18,
    docking: 15,
  },
  {
    name: "Match 3",
    mobility: 5,
    scoring: 16,
    docking: 12,
  },
  {
    name: "Match 4",
    mobility: 5,
    scoring: 20,
    docking: 15,
  },
  {
    name: "Match 5",
    mobility: 5,
    scoring: 22,
    docking: 15,
  },
  {
    name: "Match 6",
    mobility: 5,
    scoring: 17,
    docking: 15,
  },
  {
    name: "Match 7",
    mobility: 5,
    scoring: 19,
    docking: 15,
  },
];

export function AreaGraph() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>FRC Autonomous Performance</CardTitle>
        <CardDescription>
          Showing autonomous performance data for the last 7 matches
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorMobility" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorScoring" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorDocking" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ffc658" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#ffc658" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis tickFormatter={(value) => `${value} pts`} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="mobility"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorMobility)"
              name="Mobility Points"
            />
            <Area
              type="monotone"
              dataKey="scoring"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorScoring)"
              name="Scoring Points"
            />
            <Area
              type="monotone"
              dataKey="docking"
              stroke="#ffc658"
              fillOpacity={1}
              fill="url(#colorDocking)"
              name="Docking Points"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month 
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Match 1 - Match 7
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
