function Student({ car }) {
  console.log(car);

  return (
    <>
      <div>
        <img src={car.img} alt={car.name} />
        <h2>{car.name}</h2>
        <h3>{car.color}</h3>
        <h4>{car.price}</h4>
        <h5>{car.brand}</h5>
      </div>
    </>
  );
}

export default Student;
