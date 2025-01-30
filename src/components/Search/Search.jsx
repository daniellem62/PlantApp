function Search() {

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search plants..."
      />
      <button>Search</button>
    </form>
  );
}

export default Search;
