function SearchAndFilter({
  searchTerm,
  setSearchTerm,
  statusFilter,
  setStatusFilter
}) {
  return (
    <section className="card controls">
      <input
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Search by title, company, or location..."
      />

      <select
        value={statusFilter}
        onChange={(event) => setStatusFilter(event.target.value)}
      >
        <option>All</option>
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>
    </section>
  );
}

export default SearchAndFilter;
