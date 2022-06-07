import { useParams } from "react-router-dom";

const Detail = (props) => {
  const { params } = useParams();
  console.log(params);

  return (
    <section>
      <h2>Detail Page: { params }</h2>
      {/* <span>{props.id}</span> */}
    </section>
  );
};

export default Detail;
