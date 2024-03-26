import { useState } from "react";
import CardNote from "../components/CardNote";
import Container from "../components/Container";
import { useSearchParams } from "react-router-dom";
import NoBook from "../components/NoBook";
import PropTypes from "prop-types";

import useFetchNotes from "../hooks/useFetchNotes";
import Loading from "../components/Loading";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams("");
  const [search, setSearch] = useState(searchParams.get("title") || "");
  const { notes, loading } = useFetchNotes();
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleInputChange = (value) => {
    setSearch(value);
    setSearchParams({ title: `${value}` });
  };

  return (
    <Container>
      <div className="flex flex-col  ">
        <input
          type="text"
          placeholder="Cari berdasarkan judul"
          className="p-3 rounded-md border-2 border-gray-200 outline-none focus:border-gray-500 w-full"
          value={search}
          onChange={(e) => handleInputChange(e.target.value)}
        />
        <h1 className="text-center font-semibold mt-6 text-xl mb-6 ">
          Catatan Aktif
        </h1>
        <div className="flex flex-col space-y-5 md:grid md:grid-cols-3 md:gap-5 md:space-y-0 lg:grid-cols-4">
          {loading && <Loading />}
          {!loading &&
            filteredNotes.length > 0 &&
            filteredNotes.map((note) => <CardNote key={note.id} note={note} />)}
          {!loading && filteredNotes.length == 0 && (
            <div className="flex flex-col justify-center items-center my-6 md:col-start-2 lg:col-start-2 lg:col-span-2">
              <NoBook>Maaf Catatan Kosong...</NoBook>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

Home.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      archived: PropTypes.bool.isRequired,
      createdAt: PropTypes.string.isRequired,
    })
  ),
};

export default Home;
