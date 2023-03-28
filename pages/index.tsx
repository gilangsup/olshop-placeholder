import Navbar from "@/components/Navbar";
import {
  Tooltip,
  LineChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Line,
} from "recharts";

const data = [
  { name: "Aprli", Register: 1000, Placement: 2000, Graduates: 1000 },
  { name: "May", Register: 2000, Placement: 1500, Graduates: 2000 },
  { name: "June", Register: 3000, Placement: 1000, Graduates: 3000 },
  { name: "July", Register: 1000, Placement: 400, Graduates: 900 },
];

export default function Home() {
  return (
    <div>
      <Navbar/>
        <div className="flex flex-col w-full m-5">
          {/* START CONTENT HERE */}
          <div>
            <div className="flex justify-center">
              <div className="text-center">
                <LineChart
                  width={500}
                  height={200}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 80,
                    bottom: 3,
                  }}
                  barSize={20}
                >
                  <XAxis
                    padding={{ left: 10, right: 10 }}
                  />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <CartesianGrid strokeDasharray="5 5" />
                  <Line
                    dataKey="Register"
                    fill="#8884d8"
                  />
                  <Line
                    dataKey="Placement"
                    fill="#8884d8"
                  />
                  <Line
                    dataKey="Graduates"
                    fill="#8884d8"
                  />
                </LineChart>
              </div>
            </div>
          </div>

          {/* END CONTENT HERE */}
        </div>
    </div>
  )
}
