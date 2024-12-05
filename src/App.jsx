import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
      <Button variant="primary">Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      </div>
      <hr />
      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */}
      <Alert type="error">This is error alert box</Alert>
      <Alert type="warning">This is warning alert box</Alert>
      <Alert type="info">This is info alert box</Alert>
      <Alert type="success">This is success alert box</Alert>
      </div>
    </div>
  );
}

export default App;