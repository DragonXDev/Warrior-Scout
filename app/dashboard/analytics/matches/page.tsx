'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';

const mockMatches = [
  {
    match: "Qualification 1",
    redAlliance: ["1234", "5678", "9012"],
    blueAlliance: ["3456", "7890", "1234"],
    redScore: 85,
    blueScore: 92,
    winner: "Blue"
  },
  {
    match: "Qualification 2",
    redAlliance: ["2345", "6789", "0123"],
    blueAlliance: ["4567", "8901", "2345"],
    redScore: 78,
    blueScore: 75,
    winner: "Red"
  },
  // Add more mock data as needed
];

export default function MatchAnalysis() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Match Analysis</h2>
      </div>

      <div className="grid gap-4 grid-cols-1">
        <Card>
          <CardHeader>
            <CardTitle>Match Filter</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="matchType">Match Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select match type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="qualification">Qualification</SelectItem>
                    <SelectItem value="playoff">Playoff</SelectItem>
                    <SelectItem value="practice">Practice</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="matchNumber">Match Number</Label>
                <Input id="matchNumber" type="number" placeholder="Enter match number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="teamNumber">Team Number</Label>
                <Input id="teamNumber" type="number" placeholder="Filter by team" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Match Results</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Match</TableHead>
                  <TableHead>Red Alliance</TableHead>
                  <TableHead>Blue Alliance</TableHead>
                  <TableHead className="text-right">Red Score</TableHead>
                  <TableHead className="text-right">Blue Score</TableHead>
                  <TableHead>Winner</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockMatches.map((match, index) => (
                  <TableRow key={index}>
                    <TableCell>{match.match}</TableCell>
                    <TableCell>{match.redAlliance.join(", ")}</TableCell>
                    <TableCell>{match.blueAlliance.join(", ")}</TableCell>
                    <TableCell className="text-right">{match.redScore}</TableCell>
                    <TableCell className="text-right">{match.blueScore}</TableCell>
                    <TableCell>
                      <span className={match.winner === "Red" ? "text-red-500" : "text-blue-500"}>
                        {match.winner}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Average Match Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">82.5</div>
              <p className="text-sm text-muted-foreground">Across all matches</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Highest Scoring Match</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">92</div>
              <p className="text-sm text-muted-foreground">Qualification 1 - Blue Alliance</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Match Win Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-xl font-bold text-red-500">45%</div>
                  <p className="text-sm text-muted-foreground">Red Alliance</p>
                </div>
                <div>
                  <div className="text-xl font-bold text-blue-500">55%</div>
                  <p className="text-sm text-muted-foreground">Blue Alliance</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
