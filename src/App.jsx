import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import JobForm from "./components/JobForm.jsx";
import JobList from "./components/JobList.jsx";
import JobStats from "./components/JobStats.jsx";
import SearchAndFilter from "./components/SearchAndFilter.jsx";
import { sampleJobs } from "./data/sampleJobs.js";

function App() {
  const [jobs, setJobs] = useState(() => {
    const savedJobs = localStorage.getItem("jobs");
    return savedJobs ? JSON.parse(savedJobs) : sampleJobs;
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  function addJob(newJob) {
    setJobs([newJob, ...jobs]);
  }

  function deleteJob(id) {
    setJobs(jobs.filter((job) => job.id !== id));
  }

  function updateStatus(id, newStatus) {
    setJobs(
      jobs.map((job) =>
        job.id === id ? { ...job, status: newStatus } : job
      )
    );
  }

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || job.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <main className="app">
      <Header />

      <section className="layout">
        <div className="left-column">
          <JobForm onAddJob={addJob} />
          <JobStats jobs={jobs} />
        </div>

        <div className="right-column">
          <SearchAndFilter
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
          />

          <JobList
            jobs={filteredJobs}
            onDeleteJob={deleteJob}
            onUpdateStatus={updateStatus}
          />
        </div>
      </section>
    </main>
  );
}

export default App;
