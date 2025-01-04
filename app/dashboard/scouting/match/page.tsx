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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Mock data for scouters
const mockScouters = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@team4159.org",
    phone: "(555) 123-4567",
    grade: "11th",
    experience: "Veteran",
    status: "active"
  },
  {
    id: 2,
    name: "Emma Johnson",
    email: "emma.j@team4159.org",
    phone: "(555) 234-5678",
    grade: "10th",
    experience: "New",
    status: "active"
  },
  {
    id: 3,
    name: "Michael Chen",
    email: "michael.c@team4159.org",
    phone: "(555) 345-6789",
    grade: "12th",
    experience: "Veteran",
    status: "inactive"
  },
  {
    id: 4,
    name: "Sarah Wilson",
    email: "sarah.w@team4159.org",
    phone: "(555) 456-7890",
    grade: "9th",
    experience: "New",
    status: "active"
  },
  // Add more mock scouters as needed
];

// Mock data for events
const mockEvents = [
  {
    id: "svr2024",
    name: "Silicon Valley Regional 2024",
    date: "March 21-24, 2024",
    location: "San Jose, CA"
  },
  {
    id: "sfr2024",
    name: "San Francisco Regional 2024",
    date: "March 14-17, 2024",
    location: "San Francisco, CA"
  },
  // Add more events as needed
];

export default function MatchScouting() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Match Scouting Assignments</h2>
        <div className="flex space-x-2">
          <Button variant="outline">Add Scouter</Button>
          <Button>Generate Assignments</Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Event Selection</CardTitle>
            <Select>
              <SelectTrigger className="w-[300px]">
                <SelectValue placeholder="Select event" />
              </SelectTrigger>
              <SelectContent>
                {mockEvents.map((event) => (
                  <SelectItem key={event.id} value={event.id}>
                    {event.name} - {event.date}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Scouters</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Grade</TableHead>
                <TableHead>Experience</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockScouters.map((scouter) => (
                <TableRow key={scouter.id}>
                  <TableCell className="font-medium">{scouter.name}</TableCell>
                  <TableCell>{scouter.email}</TableCell>
                  <TableCell>{scouter.phone}</TableCell>
                  <TableCell>{scouter.grade}</TableCell>
                  <TableCell>
                    <Badge variant={scouter.experience === "Veteran" ? "default" : "secondary"}>
                      {scouter.experience}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant={scouter.status === "active" ? "default" : "destructive"}
                      className={scouter.status === "active" ? "bg-green-500" : ""}
                    >
                      {scouter.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className={scouter.status === "active" ? "text-red-500 hover:text-red-600" : "text-green-500 hover:text-green-600"}
                      >
                        {scouter.status === "active" ? "Deactivate" : "Activate"}
                      </Button>
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
            <CardTitle>Total Scouters</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {mockScouters.length}
            </div>
            <p className="text-sm text-muted-foreground">Registered scouters</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Active Scouters</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {mockScouters.filter(s => s.status === "active").length}
            </div>
            <p className="text-sm text-muted-foreground">Available for assignments</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Veteran Scouters</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {mockScouters.filter(s => s.experience === "Veteran").length}
            </div>
            <p className="text-sm text-muted-foreground">Experienced scouters</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
