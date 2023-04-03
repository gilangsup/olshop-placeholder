import {useEffect} from 'react'
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
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { getCurrentUserData } from 'stores/user/userSelector';

const data = [
  { name: "Aprli", Aqua: 1000, Indomie: 2000, Snack: 1000 },
  { name: "May", Aqua: 2000, Indomie: 1500, Snack: 2000 },
  { name: "June", Aqua: 3000, Indomie: 1000, Snack: 3000 },
  { name: "July", Aqua: 1000, Indomie: 400, Snack: 900 },
];


export default function Home() {

  const [cookies, setCookies] = useCookies(['userToken'])
  const router = useRouter()
  const currentUser = useSelector(getCurrentUserData)
  

  useEffect(() => {
    if (!cookies.userToken) {
      router.push("/login")
    }
    
  }, [])
  

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
                    dataKey="Aqua"
                    fill="#8884d8"
                  />
                  <Line
                    dataKey="Indomie"
                    fill="#8884d8"
                  />
                  <Line
                    dataKey="Snack"
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
