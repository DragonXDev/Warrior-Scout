'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';

export default function PitScouting() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Pit Scouting</h2>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Team Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="teamNumber">Team Number</Label>
              <Input id="teamNumber" type="number" placeholder="Enter team number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="robotName">Robot Name</Label>
              <Input id="robotName" placeholder="Enter robot name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="weight">Robot Weight (lbs)</Label>
              <Input id="weight" type="number" placeholder="Enter robot weight" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Robot Capabilities</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="autoCapable" />
              <Label htmlFor="autoCapable">Autonomous Capable</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="visionProcessing" />
              <Label htmlFor="visionProcessing">Vision Processing</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="balancing" />
              <Label htmlFor="balancing">Balancing Capability</Label>
            </div>
            <div className="space-y-2">
              <Label htmlFor="drivetrainType">Drivetrain Type</Label>
              <Input id="drivetrainType" placeholder="Enter drivetrain type" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Technical Specifications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="programmingLanguage">Programming Language</Label>
              <Input id="programmingLanguage" placeholder="Enter programming language" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="motorTypes">Motor Types</Label>
              <Input id="motorTypes" placeholder="Enter motor types used" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="batteryConfig">Battery Configuration</Label>
              <Input id="batteryConfig" placeholder="Enter battery configuration" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Additional Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Label htmlFor="notes">Special Features & Notes</Label>
              <Textarea
                id="notes"
                placeholder="Enter any special features, unique mechanisms, or additional notes"
                className="min-h-[100px]"
              />
            </div>
            <Button className="mt-4 w-full">Submit Pit Report</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
