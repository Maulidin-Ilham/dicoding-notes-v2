/* eslint-disable react/prop-types */
import CardNote from "../components/CardNote";
import Container from "../components/Container";

const Home = ({ notes }) => {
  return (
    <Container>
      <div className="flex flex-col  ">
        <input
          type="text"
          placeholder="Cari berdasarkan judul"
          className="p-3 rounded-md border-2 border-gray-200 outline-none focus:border-gray-500 w-full"
        />
        <h1 className="text-center font-semibold mt-6 text-xl mb-6 ">
          Catatan Aktif
        </h1>
        <div className="flex flex-col space-y-5 md:grid md:grid-cols-3 md:gap-5 md:space-y-0 lg:grid-cols-4">
          {notes.length > 0 &&
            notes.map((note) => <CardNote key={note.id} note={note} />)}
          {notes.length == 0 && (
            <>
              <h1>Notes tidak ada</h1>
            </>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Home;
