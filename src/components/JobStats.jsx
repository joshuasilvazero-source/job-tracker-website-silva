function JobStats({ jobs }) {
  const total = jobs.length;
  const interviews = jobs.filter((job) => job.status === "Interview").length;
  const offers = jobs.filter((job) => job.status === "Offer").length;
  const rejected = jobs.filter((job) => job.status === "Rejected").length;

  return (
    <section className="card stats">
      <h2>Dashboard</h2>

      <div className="stats-grid">
        <div>
          <strong>{total}</strong>
          <span>Total</span>
        </div>

        <div>
          <strong>{interviews}</strong>
          <span>Interviews</span>
        </div>

        <div>
          <strong>{offers}</strong>
          <span>Offers</span>
        </div>

        <div>
          <strong>{rejected}</strong>
          <span>Rejected</span>
        </div>
      </div>
    </section>
  );
}

export default JobStats;
