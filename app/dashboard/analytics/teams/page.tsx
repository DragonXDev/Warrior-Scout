'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';

const mockData = [
  { match: 1, autoScore: 15, teleopScore: 25, totalScore: 40 },
  { match: 2, autoScore: 18, teleopScore: 28, totalScore: 46 },
  { match: 3, autoScore: 12, teleopScore: 30, totalScore: 42 },
  { match: 4, autoScore: 20, teleopScore: 35, totalScore: 55 },
  { match: 5, autoScore: 16, teleopScore: 32, totalScore: 48 }
];

export default function TeamAnalytics() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Team Performance Analytics</h2>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Team Search</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <div className="flex-1">
                <Label htmlFor="teamNumber">Team Number</Label>
                <Input id="teamNumber" placeholder="Enter team number" />
              </div>
              <div className="flex-1">
                <Label htmlFor="competition">Competition</Label>
                <Input id="competition" placeholder="Enter competition name" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Performance Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={mockData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="match" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="autoScore" stroke="#8884d8" name="Auto Score" />
                  <Line type="monotone" dataKey="teleopScore" stroke="#82ca9d" name="Teleop Score" />
                  <Line type="monotone" dataKey="totalScore" stroke="#ffc658" name="Total Score" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Score Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={mockData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="match" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="autoScore" fill="#8884d8" name="Auto Score" />
                  <Bar dataKey="teleopScore" fill="#82ca9d" name="Teleop Score" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Performance Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium">Average Auto Score</p>
                  <p className="text-2xl font-bold">16.2</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Average Teleop Score</p>
                  <p className="text-2xl font-bold">30.0</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Highest Total Score</p>
                  <p className="text-2xl font-bold">55</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Consistency Rating</p>
                  <p className="text-2xl font-bold">85%</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
