'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function MatchPlanning() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Match Planning</h2>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Match Setup</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Match Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select match type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="qualification">Qualification</SelectItem>
                    <SelectItem value="quarterfinal">Quarterfinal</SelectItem>
                    <SelectItem value="semifinal">Semifinal</SelectItem>
                    <SelectItem value="final">Final</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Match Number</Label>
                <Input type="number" placeholder="Enter match number" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="space-y-4">
                <h3 className="font-semibold text-red-500">Red Alliance</h3>
                <div className="space-y-2">
                  <Label>Team 1</Label>
                  <Input placeholder="Enter team number" />
                </div>
                <div className="space-y-2">
                  <Label>Team 2</Label>
                  <Input placeholder="Enter team number" />
                </div>
                <div className="space-y-2">
                  <Label>Team 3</Label>
                  <Input placeholder="Enter team number" />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-blue-500">Blue Alliance</h3>
                <div className="space-y-2">
                  <Label>Team 1</Label>
                  <Input placeholder="Enter team number" />
                </div>
                <div className="space-y-2">
                  <Label>Team 2</Label>
                  <Input placeholder="Enter team number" />
                </div>
                <div className="space-y-2">
                  <Label>Team 3</Label>
                  <Input placeholder="Enter team number" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Strategy Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label>Auto Strategy</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select strategy" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="aggressive">Aggressive Scoring</SelectItem>
                    <SelectItem value="defensive">Defensive Position</SelectItem>
                    <SelectItem value="balanced">Balanced Approach</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Priority Objectives</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="scoring">Maximum Scoring</SelectItem>
                    <SelectItem value="defense">Defense Focus</SelectItem>
                    <SelectItem value="hybrid">Hybrid Approach</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full">Generate Strategy</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>Match Strategy Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div>
                  <Label>Autonomous Period Plan</Label>
                  <Textarea 
                    placeholder="Detail the autonomous strategy..."
                    className="min-h-[100px]"
                  />
                </div>
                <div>
                  <Label>Teleop Strategy</Label>
                  <Textarea 
                    placeholder="Detail the teleop strategy..."
                    className="min-h-[100px]"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <Label>Defense Assignments</Label>
                  <Textarea 
                    placeholder="Specify defense assignments and rotations..."
                    className="min-h-[100px]"
                  />
                </div>
                <div>
                  <Label>Endgame Plan</Label>
                  <Textarea 
                    placeholder="Detail the endgame strategy..."
                    className="min-h-[100px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-4 space-x-2">
              <Button variant="outline">Save Draft</Button>
              <Button>Share with Team</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
