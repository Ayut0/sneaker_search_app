import { Link, useParams } from "react-router-dom";

const Detail = () => {
  const params = useParams();
  console.log(params);

  return (
    <section>
      <h2>Detail Page</h2>
      <Link to="/home">Back to home</Link>
    </section>
  );
};

export default Detail;
