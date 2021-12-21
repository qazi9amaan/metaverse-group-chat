import Login from '../components/Login'
import HomePage from "../components/Home";
import { useMoralis } from "react-moralis";

export default function Home() {
  const { authenticate, isAuthenticated } = useMoralis();
  if (!isAuthenticated) return <Login authenticate={authenticate} />;
  return <HomePage />;
}
