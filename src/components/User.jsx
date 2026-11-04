import Student from "./Student";

function User(props) {
  const name = props.ism;

  return (
    <>
      <Student userName={name} />
    </>
  );
}

export default User;
