const departmentMappings = {
    "Software Engineer": "Engineering",
    "Software Developer": "Engineering",
    "Software Architect": "Engineering",
    "Full Stack Developer": "Engineering",
    "DevOps Engineer": "Engineering",
    "Systems Architect": "Engineering",
    "Network Engineer": "Engineering",
    "Security Analyst": "IT Security",
    "Civil Engineer": "Construction",
    "Structural Engineer": "Construction",
    "Construction Project Manager": "Construction Management",
    "Construction Supervisor": "Construction Management",
    "Architect": "Design and Architecture",
    "Data Analyst": "Data Science",
    "Data Scientist": "Data Science",
    "Business Intelligence Analyst": "Data Science",
    "Machine Learning Engineer": "Data Science",
    "Quantitative Analyst": "Data Science",
    "Research Analyst": "Research and Development",
    "Financial Consultant": "Finance",
    "Financial Analyst": "Finance",
    "Financial Planner": "Finance",
    "Financial Software Developer": "Finance",
    "Credit Analyst": "Finance",
    "Loan Officer": "Finance",
    "Wealth Manager": "Finance",
    "Auditor": "Finance",
    "Accountant": "Finance",
    "Financial Controller": "Finance",
    "Investment Advisor": "Finance",
    "Risk Manager": "Finance",
    "Investment Banker": "Finance",
    "Treasury Analyst": "Finance",
    "Financial Analyst": "Finance",
    "Investment Manager": "Finance",
    "Actuary": "Finance",
    "IT Consultant": "IT and Technical Support",
    "Systems Administrator": "IT and Technical Support",
    "Database Administrator": "IT and Technical Support",
    "IT Specialist": "IT and Technical Support",
    "Network Administrator": "IT and Technical Support",
    "Cybersecurity Analyst": "IT Security",
    "Marketing Manager": "Marketing",
    "Brand Strategist": "Marketing",
    "Social Media Specialist": "Marketing",
    "Advertising Manager": "Marketing",
    "Market Research Analyst": "Marketing",
    "Digital Marketer": "Digital Marketing",
    "Content Creator": "Content Development",
    "SEO Specialist": "Digital Marketing",
    "Marketing Analyst": "Marketing",
    "Marketing Automation Specialist": "Digital Marketing",
    "CRM Manager": "Marketing",
    "Marketing Director": "Marketing",
    "Content Strategist": "Content Development",
    "Brand Manager": "Marketing",
    "Digital Marketing Specialist": "Digital Marketing",
    "Public Relations Specialist": "Public Relations",
    "UI/UX Designer": "Design",
    "Creative Director": "Creative",
    "Graphic Designer": "Creative",
    "Copywriter": "Content Development",
    "Landscape Architect": "Design and Architecture",
    "Project Manager": "Project Management",
    "Construction Planner": "Construction Management",
    "Building Inspector": "Construction Management",
    "Urban Planner": "Urban Planning",
    "Estimator": "Construction Management",
    "Site Supervisor": "Construction Management"
};

const getDepartmentFromDesignation = (designation) => departmentMappings[designation] || "Unknown Department";

module.exports=getDepartmentFromDesignation
