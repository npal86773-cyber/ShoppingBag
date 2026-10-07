import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <div><Navbar />
    <div><Outlet/></div></div>
  )
}
export default Home
