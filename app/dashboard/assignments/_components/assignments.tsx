"use client";

import { Button } from "@/components/ui/button";
import PageContainer from "@/components/layout/page-container";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Mock data - replace with actual data later
const initialAssignments = [
  {
    id: 1,
    teamNumber: "254",
    eventName: "Silicon Valley Regional",
    scoutName: "John Doe",
    status: "Pending",
    dueDate: "2024-03-15",
    priority: "High",
  },
  {
    id: 2,
    teamNumber: "1678",
    eventName: "Silicon Valley Regional",
    scoutName: "Jane Smith",
    status: "Completed",
    dueDate: "2024-03-14",
    priority: "Medium",
  },
];

const mockScouts = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
];

export default function AssignmentsPage() {
  const [assignments, setAssignments] = useState(initialAssignments);
  const [newAssignment, setNewAssignment] = useState({
    teamNumber: "",
    eventName: "",
    scoutName: "",
    dueDate: "",
    priority: "Medium",
  });

  const handleAddAssignment = () => {
    const assignment = {
      id: assignments.length + 1,
      ...newAssignment,
      status: "Pending",
    };
    setAssignments([...assignments, assignment]);
    setNewAssignment({
      teamNumber: "",
      eventName: "",
      scoutName: "",
      dueDate: "",
      priority: "Medium",
    });
  };

  const handleRemoveAssignment = (id: number) => {
    setAssignments(assignments.filter((assignment) => assignment.id !== id));
  };

  const handleEmailAssignment = (assignment: any) => {
    // Implement email functionality here
    const subject = `Scouting Assignment: Team ${assignment.teamNumber}`;
    const body = `
      Event: ${assignment.eventName}
      Due Date: ${assignment.dueDate}
      Priority: ${assignment.priority}
    `;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <PageContainer>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Scouting Assignments</h2>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Create Assignment</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Assignment</DialogTitle>
                <DialogDescription>
                  Create a new scouting assignment for a team.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="teamNumber">Team Number</Label>
                  <Input
                    id="teamNumber"
                    value={newAssignment.teamNumber}
                    onChange={(e) =>
                      setNewAssignment({ ...newAssignment, teamNumber: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="eventName">Event Name</Label>
                  <Input
                    id="eventName"
                    value={newAssignment.eventName}
                    onChange={(e) =>
                      setNewAssignment({ ...newAssignment, eventName: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="scoutName">Assign To</Label>
                  <Select
                    onValueChange={(value) =>
                      setNewAssignment({ ...newAssignment, scoutName: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a scout" />
                    </SelectTrigger>
                    <SelectContent>
                      {mockScouts.map((scout) => (
                        <SelectItem key={scout.id} value={scout.name}>
                          {scout.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="dueDate">Due Date</Label>
                  <Input
                    id="dueDate"
                    type="date"
                    value={newAssignment.dueDate}
                    onChange={(e) =>
                      setNewAssignment({ ...newAssignment, dueDate: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="priority">Priority</Label>
                  <Select
                    onValueChange={(value) =>
                      setNewAssignment({ ...newAssignment, priority: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="High">High</SelectItem>
                      <SelectItem value="Medium">Medium</SelectItem>
                      <SelectItem value="Low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button onClick={handleAddAssignment}>Create Assignment</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Team Number</TableHead>
              <TableHead>Event</TableHead>
              <TableHead>Assigned To</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>Priority</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {assignments.map((assignment) => (
              <TableRow key={assignment.id}>
                <TableCell>{assignment.teamNumber}</TableCell>
                <TableCell>{assignment.eventName}</TableCell>
                <TableCell>{assignment.scoutName}</TableCell>
                <TableCell>{assignment.status}</TableCell>
                <TableCell>{assignment.dueDate}</TableCell>
                <TableCell>{assignment.priority}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEmailAssignment(assignment)}
                    >
                      Email
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleRemoveAssignment(assignment.id)}
                    >
                      Remove
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </PageContainer>
  );
}
