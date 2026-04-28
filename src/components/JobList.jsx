import JobCard from "./JobCard.jsx";

function JobList({ jobs, onDeleteJob, onUpdateStatus }) {
  if (jobs.length === 0) {
    return (
      <section className="empty-state">
        <h2>No jobs found</h2>
        <p>Try changing your search or add a new job application.</p>
      </section>
    );
  }

  return (
    <section className="job-list">
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          job={job}
          onDeleteJob={onDeleteJob}
          onUpdateStatus={onUpdateStatus}
        />
      ))}
    </section>
  );
}

export default JobList;
