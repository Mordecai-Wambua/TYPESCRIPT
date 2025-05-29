import Button from "./components/Button";
import User from "./components/User";
import User2 from "./components/User2";

export default function App() {
  return (
    <div>
      <User name="Alex" age={20} isStudent={true} />
      <User2>
        <p>Hello</p>
      </User2>

      <Button
        label="Click"
        onClick={() => console.log("Clicked")}
        disabled={false}
      />
    </div>
  );
}
