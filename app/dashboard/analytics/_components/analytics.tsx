import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PageContainer from "@/components/layout/page-container";
import { BarChart, LineChart } from "@tremor/react";

// Mock data - replace with actual data later
const scoutingData = [
  {
    date: "Jan 23",
    "Assignments Completed": 12,
    "Teams Scouted": 15,
  },
  {
    date: "Feb 23",
    "Assignments Completed": 18,
    "Teams Scouted": 22,
  },
  {
    date: "Mar 23",
    "Assignments Completed": 25,
    "Teams Scouted": 28,
  },
];

const teamPerformanceData = [
  {
    category: "Autonomous",
    value: 85,
  },
  {
    category: "Teleop",
    value: 92,
  },
  {
    category: "Endgame",
    value: 78,
  },
];

const scoutActivityData = [
  {
    name: "Active",
    value: 12,
  },
  {
    name: "Inactive",
    value: 3,
  },
  {
    name: "On Leave",
    value: 2,
  },
];

export default function AnalyticsPage() {
  return (
    <PageContainer>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Scouting Analytics</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Scouting Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <LineChart
                data={scoutingData}
                index="date"
                categories={["Assignments Completed", "Teams Scouted"]}
                colors={["blue", "green"]}
                yAxisWidth={40}
                height="h-72"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Team Performance Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart
                data={teamPerformanceData}
                index="category"
                categories={["value"]}
                colors={["blue"]}
                yAxisWidth={40}
                height="h-72"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Scout Activity Status</CardTitle>
            </CardHeader>
            <CardContent>
              {/* <PieChart
                data={scoutActivityData}
                index="name"
                category="value"
                colors={["green", "red", "yellow"]}
                height="h-72"
              /> */}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>New assignment created</span>
                  <span className="text-sm text-gray-500">2 mins ago</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Team 254 scouting completed</span>
                  <span className="text-sm text-gray-500">15 mins ago</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>New scout added to team</span>
                  <span className="text-sm text-gray-500">1 hour ago</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Analytics report generated</span>
                  <span className="text-sm text-gray-500">2 hours ago</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
}
