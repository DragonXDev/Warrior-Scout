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

const mockTeams = [
  {
    number: "4159",
    name: "CardinalBotics",
    location: "Santa Clara, CA",
    rookieYear: 2012,
    status: "active"
  },
  {
    number: "254",
    name: "The Cheesy Poofs",
    location: "San Jose, CA",
    rookieYear: 1999,
    status: "active"
  },
  // Add more mock data as needed
];

export default function TeamsDatabase() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Teams Database</h2>
        <Button>Add New Team</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Search and Filter</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Input placeholder="Search by team number..." />
            <Input placeholder="Search by team name..." />
            <Input placeholder="Filter by location..." />
            <Button className="w-full">Search</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Team List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Team Number</TableHead>
                <TableHead>Team Name</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Rookie Year</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockTeams.map((team) => (
                <TableRow key={team.number}>
                  <TableCell className="font-medium">{team.number}</TableCell>
                  <TableCell>{team.name}</TableCell>
                  <TableCell>{team.location}</TableCell>
                  <TableCell>{team.rookieYear}</TableCell>
                  <TableCell>
                    <Badge
                      variant={team.status === "active" ? "default" : "secondary"}
                    >
                      {team.status}
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Teams</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">3,647</div>
            <p className="text-sm text-muted-foreground">Registered teams worldwide</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Active Teams</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">3,245</div>
            <p className="text-sm text-muted-foreground">Currently active teams</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Rookie Teams</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">142</div>
            <p className="text-sm text-muted-foreground">New teams this season</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
