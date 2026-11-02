import Button from "./components/Button";
import car from "./images/car.webp";
import { FaAngellist } from "react-icons/fa6";

function App() {
  return (
    <>
      <h1 className="title">Hello React</h1>
      <img style={{ width: "200px" }} src={car} alt="error" />
      {/* component */}
      <FaAngellist />

      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
    </>
  );
}
export default App;
