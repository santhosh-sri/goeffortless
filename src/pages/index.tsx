import Landing from "@/components/Landing";
import data from "../data/landing.json";

export default function Home() {
  return (
    <div>
      <Landing {...data}/>
    </div>
  );
}
