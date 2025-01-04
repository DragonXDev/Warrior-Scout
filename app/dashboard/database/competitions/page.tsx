'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const mockCompetitions = [
  {
    name: "Silicon Valley Regional",
    location: "San Jose, CA",
    date: "2024-03-15",
    type: "Regional",
    status: "upcoming",
    teams: 45
  },
  {
    name: "World Championship",
    location: "Houston, TX",
    date: "2024-04-20",
    type: "Championship",
    status: "upcoming",
    teams: 400
  },
  // Add more mock data as needed
];

export default function CompetitionsDatabase() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Competitions Database</h2>
        <Button>Add New Competition</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Search and Filter</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Input placeholder="Search by name..." />
            <Input placeholder="Search by location..." />
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Competition Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="regional">Regional</SelectItem>
                <SelectItem value="district">District</SelectItem>
                <SelectItem value="championship">Championship</SelectItem>
                <SelectItem value="offseason">Off-Season</SelectItem>
              </SelectContent>
            </Select>
            <Button className="w-full">Search</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Competition List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Teams</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockCompetitions.map((competition, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{competition.name}</TableCell>
                  <TableCell>{competition.location}</TableCell>
                  <TableCell>{competition.date}</TableCell>
                  <TableCell>{competition.type}</TableCell>
                  <TableCell>{competition.teams}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        competition.status === "upcoming"
                          ? "default"
                          : competition.status === "ongoing"
                          ? "secondary"
                          : "outline"
                      }
                    >
                      {competition.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">View</Button>
                      <Button variant="outline" size="sm">Edit</Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">187</div>
            <p className="text-sm text-muted-foreground">Events this season</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">45</div>
            <p className="text-sm text-muted-foreground">Events scheduled</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Ongoing Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">12</div>
            <p className="text-sm text-muted-foreground">Currently running</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Completed Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">130</div>
            <p className="text-sm text-muted-foreground">Events completed</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
