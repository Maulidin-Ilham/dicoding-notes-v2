import { useParams } from "react-router-dom";
import Container from "../components/Container";

const DetailPage = () => {
  const { noteId } = useParams();
  return (
    <>
      <Container>
        <h1>Detail page {noteId}</h1>
      </Container>
    </>
  );
};

export default DetailPage;
