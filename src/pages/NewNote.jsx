import Container from "../components/Container";

const NewNote = () => {
  return (
    <>
      <Container>
        <div className="md:flex md:flex-col md:items-center">
          <div className="bg-gray-200 border border-gray-200 p-4 rounded-md shadow-md md:w-7/12 lg:w-6/12">
            <form action="" className="flex flex-col space-y-3 w-full">
              <input
                type="text"
                placeholder="Judul..."
                className="p-3 rounded-md outline-none border border-transparent focus:border focus:border-gray-500"
              />
              <textarea
                name="body"
                id="body"
                cols="30"
                rows="10"
                className="rounded-md resize-none p-3 outline-none border border-transparent focus:border focus:border-gray-500"
                placeholder="Body..."
              ></textarea>
              <button
                type="submit"
                className="p-3 bg-black text-white rounded-md hover:opacity-80 transition  duration-200 ease-in-out"
              >
                Simpan
              </button>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default NewNote;
