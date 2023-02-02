const handleSubmit = () => {
  console.log('search');
};

const Searchbar = () => {
  return (
    // TODO: search input slides left when click on search icon, display search icon only
    <form onSubmit={handleSubmit} className="search mr-3 hidden md:block w-full">
      <div className="form-control">
        <div className="input-group">
          <input type="search" placeholder="Search for books, authors" className="input w-full" />
          <button type="button" className="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </form>
  );
};

export default Searchbar;
