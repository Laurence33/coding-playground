import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from "../components/Button";

export default function ButtonPage() {
  return <div>Button Page
    <Button className="mb-5" primary onClick={() => console.log("Hey!!!")}> <GoBell /> Primary</Button>
    <Button secondary> <GoCloudDownload /> Secondary</Button>
    <Button success outline> <GoDatabase /> Success</Button>
    <Button warning>Warning</Button>
    <Button danger rounded outline>Danger</Button>
  </div>
}