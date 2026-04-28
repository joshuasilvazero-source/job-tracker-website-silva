import { useState } from "react";

const emptyForm = {
    title: "",
    company: "",
    recruiter: "",
    priority: "Medium",
    location: "",
    salary: "",
    status: "Applied",
    dateApplied: "",
    link: "",
    notes: ""
};

function JobForm({ onAddJob }) {
    const [formData, setFormData] = useState(emptyForm);

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        // Validation Starts here
        if (!formData.title.trim()) {
            alert("Please enter a job title.");
            return;
        }
        if (!formData.company.trim()) {
            alert("Please enter a company name");
            return;
        }
        
        if (!formData.link && !formData.link.startsWith("http")) {
            alert("Please enter a valid job  link starting with http:// or https://");
            return;
        }
        // Validation ends here
        const newJob = {
            id: crypto.randomUUID(),
            ...formData,
            dateApplied: formData.dateapplied || new Date().toISOString().split("T")[0]
        };
        onAddJob(newJob);
        setFormData(emptyForm);
    }

    return (
        <form className="card form" onSubmit={handleSubmit}>
            <h2>Add Job</h2>

            <label>
                Job Title
                <input
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Frontend Developer"
                />
            </label>

            <label>
                Company
                <input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company name"
                />
            </label>

            <label>
                Recruiter
                <input
                    name="recruiter"
                    value={formData.recruiter}
                    onChange={handleChange}
                    placeholder="John Doe, (555) 123-4657"></input>
            </label>
            <label>
                Priority
                <select name="priority" value={formData.priority} onChange={handleChange}>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                </select>
            </label>

            <label>
                Location
                <input
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Remote or city"
                />
            </label>

            <label>
                Salary
                <input
                    name="salary"
                    value={formData.salary}
                    onChange={handleChange}
                    placeholder="$60,000"
                />
            </label>

            <label>
                Status
                <select name="status" value={formData.status} onChange={handleChange}>
                    <option>Applied</option>
                    <option>Interview</option>
                    <option>Offer</option>
                    <option>Rejected</option>
                </select>
            </label>

            <label>
                Date Applied
                <input
                    type="date"
                    name="dateApplied"
                    value={formData.dateApplied}
                    onChange={handleChange}
                />
            </label>

            <label>
                Job Link
                <input
                    name="link"
                    value={formData.link}
                    onChange={handleChange}
                    placeholder="https://..."
                />
            </label>

            <label>
                Notes
                <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Recruiter name, interview details, follow-up reminders..."
                />
            </label>

            <button type="submit">Add Job</button>
        </form>
    );
}

export default JobForm;
