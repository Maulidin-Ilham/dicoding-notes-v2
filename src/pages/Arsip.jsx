/* eslint-disable react/prop-types */
import { useState } from "react";
import CardNote from "../components/CardNote";
import Container from "../components/Container";
import { useSearchParams } from "react-router-dom";

const Arsip = ({ notes }) => {
  const [searchParams, setSearchParams] = useSearchParams("");
  const [search, setSearch] = useState(searchParams.get("title") || "");

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleInputChange = (value) => {
    setSearch(value);
    setSearchParams({ title: `${value}` });
  };
  return (
    <>
      <Container>
        <div className="flex flex-col  ">
          <input
            type="text"
            placeholder="Cari berdasarkan judul"
            className="p-3 rounded-md border-2 border-gray-200 outline-none focus:border-gray-500 w-full"
            value={search}
            onChange={(e) => handleInputChange(e.target.value)}
          />
          <h1 className="text-center font-semibold mt-6 text-xl mb-6">
            Catatan Arsip
          </h1>
          <div className="flex flex-col space-y-5 md:grid md:grid-cols-3 md:gap-5 md:space-y-0 lg:grid-cols-4">
            {filteredNotes.length > 0 &&
              filteredNotes.map((note) => (
                <CardNote key={note.id} note={note} />
              ))}
            {filteredNotes.length == 0 && (
              <>
                <h1>Notes tidak ada</h1>
              </>
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Arsip;
