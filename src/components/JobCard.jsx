function JobCard({ job, onDeleteJob, onUpdateStatus }) {
  return (
    <article className="card job-card">
      <div className="job-card-header">
        <div>
          <h2>{job.title}</h2>
          <p>{job.company}</p>
        </div>

        <span className={`badge ${job.status.toLowerCase()}`}>
          {job.status}
        </span>
      </div>

      <div className="job-details">
        <p><strong>Location:</strong> {job.location || "Not listed"}</p>
        <p><strong>Salary:</strong> {job.salary || "Not listed"}</p>
        <p><strong>Date Applied:</strong> {job.dateApplied}</p>
      </div>

      {job.notes && <p className="notes">{job.notes}</p>}

      <div className="job-actions">
        <select
          value={job.status}
          onChange={(event) => onUpdateStatus(job.id, event.target.value)}
        >
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>

        {job.link && (
          <a href={job.link} target="_blank" rel="noreferrer">
            View Job
          </a>
        )}

        <button className="delete-btn" onClick={() => onDeleteJob(job.id)}>
          Delete
        </button>
      </div>
    </article>
  );
}

export default JobCard;
