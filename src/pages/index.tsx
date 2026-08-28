import HomePage from "@/components/pages/home/HomePage";
import data from "../data/landing.json";

export default function Home() {
  return <HomePage metadata={data.metadata} />;
}
