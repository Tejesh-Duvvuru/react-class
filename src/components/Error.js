import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log("useRouter", err);
  return (
    <>
      <h1>Opps!!</h1>
      <h2>Something went wrong</h2>
      <h2>{err.status}</h2>
    </>
  );
};

export default Error;
