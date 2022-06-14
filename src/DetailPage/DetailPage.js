import { useParams } from "react-router-dom";

const Detail = () => {
  const params = useParams();
  console.log(params);

  return (
    <section>
      <h2>Detail Page {params}</h2>
    </section>
  );
};

export default Detail;
