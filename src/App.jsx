import Student from "./components/Student";
function App() {
  const myCar = {
    brand: "Chevrolet",
    name: "malibu",
    color: "black",
    price: 50000000,
    img: "https://a1.drive-data.ru/cOri7QwQfT4dKsy-4koCjSXzrrE-1920.jpg",
  };
  return (
    <>
      <Student car={myCar} />
    </>
  );
}
export default App;
