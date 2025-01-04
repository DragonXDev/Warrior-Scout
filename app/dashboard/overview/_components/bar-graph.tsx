'use client';

import * as React from 'react';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

const data = [
  {
    name: "Match 1",
    teleop: 45,
    auto: 32,
  },
  {
    name: "Match 2",
    teleop: 52,
    auto: 38,
  },
  {
    name: "Match 3",
    teleop: 48,
    auto: 35,
  },
  {
    name: "Match 4",
    teleop: 55,
    auto: 40,
  },
  {
    name: "Match 5",
    teleop: 58,
    auto: 42,
  },
  {
    name: "Match 6",
    teleop: 50,
    auto: 37,
  },
  {
    name: "Match 7",
    teleop: 54,
    auto: 39,
  },
];

export function BarGraph() {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>FRC Match Performance</CardTitle>
          <CardDescription>
            Showing match performance data
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <XAxis
              dataKey="name"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value} pts`}
            />
            <Bar
              dataKey="teleop"
              fill="#adfa1d"
              radius={[4, 4, 0, 0]}
              name="Teleop Points"
            />
            <Bar
              dataKey="auto"
              fill="#2563eb"
              radius={[4, 4, 0, 0]}
              name="Auto Points"
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
