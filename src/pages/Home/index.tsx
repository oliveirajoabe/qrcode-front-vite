import useHomeModel from "./model";
import HomeView from "./view";

export default function Home() {
  const model = useHomeModel();
  return <HomeView {...model} />;
}
