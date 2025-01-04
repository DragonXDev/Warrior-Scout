'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const mockTeams = [
  {
    number: "1234",
    avgScore: 85.5,
    autoReliability: 90,
    teleopStrength: 88,
    defenseRating: 75,
    compatibility: "High"
  },
  {
    number: "5678",
    avgScore: 78.3,
    autoReliability: 85,
    teleopStrength: 92,
    defenseRating: 80,
    compatibility: "Medium"
  },
  // Add more mock data as needed
];

export default function AllianceSelection() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Alliance Selection</h2>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-4">
        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>Available Teams</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Team</TableHead>
                  <TableHead className="text-right">Avg Score</TableHead>
                  <TableHead className="text-right">Auto</TableHead>
                  <TableHead className="text-right">Teleop</TableHead>
                  <TableHead className="text-right">Defense</TableHead>
                  <TableHead>Compatibility</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockTeams.map((team) => (
                  <TableRow key={team.number}>
                    <TableCell className="font-medium">{team.number}</TableCell>
                    <TableCell className="text-right">{team.avgScore}</TableCell>
                    <TableCell className="text-right">{team.autoReliability}%</TableCell>
                    <TableCell className="text-right">{team.teleopStrength}%</TableCell>
                    <TableCell className="text-right">{team.defenseRating}%</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          team.compatibility === "High"
                            ? "default"
                            : team.compatibility === "Medium"
                            ? "secondary"
                            : "outline"
                        }
                      >
                        {team.compatibility}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">Add to Alliance</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Current Alliance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm font-medium">Captain</p>
                <div className="flex items-center justify-between bg-secondary p-2 rounded-lg">
                  <span className="font-bold">Team 4159</span>
                  <Button variant="ghost" size="sm">Remove</Button>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">First Pick</p>
                <div className="border-2 border-dashed border-muted p-2 rounded-lg text-center">
                  <Button variant="ghost" className="w-full">Select Team</Button>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Second Pick</p>
                <div className="border-2 border-dashed border-muted p-2 rounded-lg text-center">
                  <Button variant="ghost" className="w-full">Select Team</Button>
                </div>
              </div>
              <div className="pt-4">
                <Button className="w-full">Finalize Alliance</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-4">
          <CardHeader>
            <CardTitle>Alliance Strength Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-sm font-medium">Predicted Alliance Score</p>
                <p className="text-2xl font-bold">245.5</p>
              </div>
              <div>
                <p className="text-sm font-medium">Auto Capability</p>
                <p className="text-2xl font-bold">87%</p>
              </div>
              <div>
                <p className="text-sm font-medium">Defense Rating</p>
                <p className="text-2xl font-bold">82%</p>
              </div>
              <div>
                <p className="text-sm font-medium">Compatibility Score</p>
                <p className="text-2xl font-bold">90%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
