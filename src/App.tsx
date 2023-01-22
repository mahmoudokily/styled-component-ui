import "./styles.css";
import { Button, Input } from "./ui";

export default function App() {
  return (
    <div className="App">
      <Button loading$ variant="warning" $size="large">
        test
      </Button>
      <Input variant="danger" fill={true} placeholder="test input" />
    </div>
  );
}
