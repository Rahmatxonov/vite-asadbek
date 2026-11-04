function Student(props) {
  console.log(props);

  return (
    <>
      <h2>Hello {props.userName}</h2>
    </>
  );
}

export default Student;

// #car object yaratasiz va bu obj ni ikkinchi componentaga props orqali uzatasiz va DOM ga chiqarasiz
