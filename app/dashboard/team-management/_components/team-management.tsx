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

// Mock data - replace with actual data later
const initialScouts = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Lead Scout",
    assignedTeams: 5,
    completedTasks: 15,
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Scout",
    assignedTeams: 3,
    completedTasks: 10,
  },
];

export default function TeamManagementPage() {
  const [scouts, setScouts] = useState(initialScouts);
  const [newScout, setNewScout] = useState({ name: "", email: "", role: "" });

  const handleAddScout = () => {
    const scout = {
      id: scouts.length + 1,
      ...newScout,
      assignedTeams: 0,
      completedTasks: 0,
    };
    setScouts([...scouts, scout]);
    setNewScout({ name: "", email: "", role: "" });
  };

  const handleRemoveScout = (id: number) => {
    setScouts(scouts.filter((scout) => scout.id !== id));
  };

  const handleEmailScout = (email: string) => {
    // Implement email functionality here
    window.location.href = `mailto:${email}`;
  };

  return (
    <PageContainer>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Scouting Team Management</h2>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Add Scout</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Scout</DialogTitle>
                <DialogDescription>
                  Add a new member to your scouting team.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={newScout.name}
                    onChange={(e) =>
                      setNewScout({ ...newScout, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={newScout.email}
                    onChange={(e) =>
                      setNewScout({ ...newScout, email: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="role">Role</Label>
                  <Input
                    id="role"
                    value={newScout.role}
                    onChange={(e) =>
                      setNewScout({ ...newScout, role: e.target.value })
                    }
                  />
                </div>
              </div>
              <DialogFooter>
                <Button onClick={handleAddScout}>Add Scout</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Assigned Teams</TableHead>
              <TableHead>Completed Tasks</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {scouts.map((scout) => (
              <TableRow key={scout.id}>
                <TableCell>{scout.name}</TableCell>
                <TableCell>{scout.email}</TableCell>
                <TableCell>{scout.role}</TableCell>
                <TableCell>{scout.assignedTeams}</TableCell>
                <TableCell>{scout.completedTasks}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEmailScout(scout.email)}
                    >
                      Email
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleRemoveScout(scout.id)}
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
