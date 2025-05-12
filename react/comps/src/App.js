import Button from "./components/Button";
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';

export default function App() {
  return <div>App
    <Button className="mb-5" primary onClick={() => console.log("Hey!!!")}> <GoBell /> Primary</Button>
    <Button secondary> <GoCloudDownload /> Secondary</Button>
    <Button success outline> <GoDatabase /> Success</Button>
    <Button warning>Warning</Button>
    <Button danger rounded outline>Danger</Button>
  </div>
}