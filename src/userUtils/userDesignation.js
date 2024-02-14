const companyDesignations = {
    "BankTech Solutions": ["Software Engineer", "Data Analyst", "Financial Consultant", "Project Manager", "Business Analyst"],
    "Global Finance Innovations": ["Financial Analyst", "Investment Advisor", "Risk Manager", "Accountant", "Financial Controller"],
    "SoftwareGenius Inc.": ["Software Developer", "QA Engineer", "UI/UX Designer", "DevOps Engineer", "Product Manager"],
    "TechBridge Systems": ["Systems Architect", "Network Engineer", "Security Analyst", "Systems Analyst", "Database Administrator"],
    "FinancialFrontiers Ltd.": ["Credit Analyst", "Financial Planner", "Loan Officer", "Wealth Manager", "Auditor"],
    "MarketingMasters Group": ["Marketing Manager", "Brand Strategist", "Social Media Specialist", "Advertising Manager", "Market Research Analyst"],
    "DigitalPros Corporation": ["Digital Marketer", "Content Creator", "SEO Specialist", "Digital Marketer", "Content Creator"],
    "DataPulse Innovations": ["Data Scientist", "Business Intelligence Analyst", "Machine Learning Engineer", "Data Scientist", "Business Intelligence Analyst"],
    "InfoTech Solutions": ["IT Consultant", "Systems Administrator", "Database Administrator", "IT Specialist", "Network Administrator"],
    "CodeCrafters Ltd.": ["Software Architect", "Full Stack Developer", "DevOps Engineer", "Software Engineer", "UI/UX Designer"],
    "FinServe Technologies": ["Financial Software Developer", "Financial Analyst", "Quantitative Analyst", "Financial Software Developer", "Financial Analyst"],
    "Innovative Marketing Solutions": ["Marketing Director", "Advertising Manager", "Market Research Analyst", "Marketing Director", "Advertising Manager"],
    "ConstructionCompass Ltd.": ["Construction Manager", "Civil Engineer", "Architect", "Construction Manager", "Civil Engineer"],
    "BuildRight Corporation": ["Project Manager", "Construction Supervisor", "Estimator", "Project Manager", "Construction Supervisor"],
    "BrickWorks Innovations": ["Structural Engineer", "Construction Planner", "Building Inspector", "Structural Engineer", "Construction Planner"],
    "Skyline Solutions Inc.": ["Urban Planner", "Landscape Architect", "Construction Manager", "Urban Planner", "Landscape Architect"],
    "FinanceFusion Group": ["Financial Controller", "Investment Banker", "Treasury Analyst", "Financial Controller", "Investment Banker"],
    "BrightMind Solutions": ["Research Analyst", "Data Scientist", "Quantitative Analyst", "Research Analyst", "Data Scientist"],
    "MarketSpark Technologies": ["Marketing Analyst", "Marketing Automation Specialist", "CRM Manager", "Marketing Analyst", "Marketing Automation Specialist"],
    "CreativeConcepts Inc.": ["Creative Director", "Graphic Designer", "Copywriter", "Creative Director", "Graphic Designer"],
    "ConstructionCrest Ltd.": ["Construction Manager", "Site Supervisor", "Civil Engineer", "Construction Manager", "Site Supervisor"],
    "FinanceForge Corporation": ["Financial Analyst", "Investment Manager", "Actuary", "Financial Analyst", "Investment Manager"],
    "TechSavvy Solutions": ["IT Specialist", "Network Administrator", "Cybersecurity Analyst", "IT Specialist", "Network Administrator"],
    "MarketingMarvels Group": ["Marketing Manager", "Brand Manager", "Digital Marketing Specialist", "Marketing Manager", "Brand Manager"],
    "InnovativeBuilders Ltd.": ["Construction Manager", "Architect", "Civil Engineer", "Construction Manager", "Architect"],
    "MarketMingle Corporation": ["Market Research Analyst", "Marketing Coordinator", "Public Relations Specialist", "Market Research Analyst", "Marketing Coordinator"],
    "FinancialEdge Technologies": ["Financial Analyst", "Investment Advisor", "Risk Analyst", "Financial Analyst", "Investment Advisor"],
    "SoftwareSphere Inc.": ["Software Engineer", "UI/UX Designer", "Product Manager", "Software Engineer", "UI/UX Designer"],
    "MarketingMomentum Ltd.": ["Marketing Director", "Advertising Manager", "Content Strategist", "Marketing Director", "Advertising Manager"],
    "ConstructionCrafters Group": ["Construction Project Manager", "Construction Estimator", "Structural Engineer", "Construction Project Manager", "Construction Estimator"],
    "BankSoft Innovations": ["Software Engineer", "Data Analyst", "Financial Consultant", "Project Manager", "Business Analyst"],
    "Global Banking Technologies": ["Financial Analyst", "Investment Advisor", "Risk Manager", "Accountant", "Financial Controller"],
    "FinanceWorks Inc.": ["Software Developer", "QA Engineer", "UI/UX Designer", "DevOps Engineer", "Product Manager"],
    "TechSolutions Bank": ["Systems Architect", "Network Engineer", "Security Analyst", "Systems Analyst", "Database Administrator"],
    "DigitalFinance Innovations": ["Credit Analyst", "Financial Planner", "Loan Officer", "Wealth Manager", "Auditor"],
    "MarketGenius Group": ["Marketing Manager", "Brand Strategist", "Social Media Specialist", "Advertising Manager", "Market Research Analyst"],
    "DataDriven Finance": ["Digital Marketer", "Content Creator", "SEO Specialist", "Digital Marketer", "Content Creator"],
    "TechPulse Corporation": ["Data Scientist", "Business Intelligence Analyst", "Machine Learning Engineer", "Data Scientist", "Business Intelligence Analyst"],
    "InnovativeFinance Solutions": ["IT Consultant", "Systems Administrator", "Database Administrator", "IT Specialist", "Network Administrator"],
    "FinancialFusion Ltd.": ["Software Architect", "Full Stack Developer", "DevOps Engineer", "Software Engineer", "UI/UX Designer"],
    "SoftwareFrontiers Inc.": ["Financial Software Developer", "Financial Analyst", "Quantitative Analyst", "Financial Software Developer", "Financial Analyst"],
    "BankingBridge Systems": ["Marketing Director", "Advertising Manager", "Market Research Analyst", "Marketing Director", "Advertising Manager"],
    "MarketingTech Innovations": ["Construction Manager", "Civil Engineer", "Architect", "Construction Manager", "Civil Engineer"],
    "FinancePros Group": ["Project Manager", "Construction Supervisor", "Estimator", "Project Manager", "Construction Supervisor"],
    "Global DataFinance Solutions": ["Structural Engineer", "Construction Planner", "Building Inspector", "Structural Engineer", "Construction Planner"],
    "TechMasters Corporation": ["Urban Planner", "Landscape Architect", "Construction Manager", "Urban Planner", "Landscape Architect"],
    "BankingMinds Ltd.": ["Financial Controller", "Investment Banker", "Treasury Analyst", "Financial Controller", "Investment Banker"],
    "DigitalMarketing Solutions": ["Research Analyst", "Data Scientist", "Quantitative Analyst", "Research Analyst", "Data Scientist"],
    "FinanceSphere Group": ["Marketing Analyst", "Marketing Automation Specialist", "CRM Manager", "Marketing Analyst", "Marketing Automation Specialist"],
    "SoftwareSavvy Inc.": ["Creative Director", "Graphic Designer", "Copywriter", "Creative Director", "Graphic Designer"],
    "DataFinance Innovations": ["Construction Manager", "Site Supervisor", "Civil Engineer", "Construction Manager", "Site Supervisor"],
    "TechEdge Technologies": ["Financial Analyst", "Investment Manager", "Actuary", "Financial Analyst", "Investment Manager"],
    "MarketingWorks Corporation": ["IT Specialist", "Network Administrator", "Cybersecurity Analyst", "IT Specialist", "Network Administrator"],
    "FinanceGenius Ltd.": ["Marketing Manager", "Brand Manager", "Digital Marketing Specialist", "Marketing Manager", "Brand Manager"],
    "BankingPros Group": ["Construction Manager", "Architect", "Civil Engineer", "Construction Manager", "Architect"],
    "DigitalFrontiers Solutions": ["Market Research Analyst", "Marketing Coordinator", "Public Relations Specialist", "Market Research Analyst", "Marketing Coordinator"],
    "TechMarket Innovations": ["Financial Analyst", "Investment Advisor", "Risk Analyst", "Financial Analyst", "Investment Advisor"],
    "FinanceCrafters Corporation": ["Software Engineer", "UI/UX Designer", "Product Manager", "Software Engineer", "UI/UX Designer"],
    "DataBank Solutions": ["Marketing Director", "Advertising Manager", "Content Strategist", "Marketing Director", "Advertising Manager"],
    "SoftwareSpark Inc.": ["Construction Project Manager", "Construction Estimator", "Structural Engineer", "Construction Project Manager", "Construction Estimator"],
    "MarketingPulse Technologies": ["Software Engineer", "Data Analyst", "Financial Consultant", "Project Manager", "Business Analyst"],
    "FinanceMingle Group": ["Financial Analyst", "Investment Advisor", "Risk Manager", "Accountant", "Financial Controller"],
    "TechBuilders Ltd.": ["Software Developer", "QA Engineer", "UI/UX Designer", "DevOps Engineer", "Product Manager"],
    "DigitalEdge Corporation": ["Systems Architect", "Network Engineer", "Security Analyst", "Systems Analyst", "Database Administrator"],
    "BankingConcepts Inc.": ["Credit Analyst", "Financial Planner", "Loan Officer", "Wealth Manager", "Auditor"],
    "Global FinanceTech Solutions": ["Marketing Manager", "Brand Strategist", "Social Media Specialist", "Advertising Manager", "Market Research Analyst"],
    "SoftwareMomentum Group": ["Digital Marketer", "Content Creator", "SEO Specialist", "Digital Marketer", "Content Creator"],
    "DataMarketing Innovations": ["Data Scientist", "Business Intelligence Analyst", "Machine Learning Engineer", "Data Scientist", "Business Intelligence Analyst"],
    "TechForge Ltd.": ["IT Consultant", "Systems Administrator", "Database Administrator", "IT Specialist", "Network Administrator"],
    "FinanceSphere Corporation": ["Software Architect", "Full Stack Developer", "DevOps Engineer", "Software Engineer", "UI/UX Designer"],
    "BankingSpark Solutions": ["Financial Software Developer", "Financial Analyst", "Quantitative Analyst", "Financial Software Developer", "Financial Analyst"],
    "DigitalGenius Inc.": ["Marketing Director", "Advertising Manager", "Market Research Analyst", "Marketing Director", "Advertising Manager"],
    "MarketingFrontiers Group": ["Construction Manager", "Civil Engineer", "Architect", "Construction Manager", "Civil Engineer"],
    "TechPros Technologies": ["Project Manager", "Construction Supervisor", "Estimator", "Project Manager", "Construction Supervisor"],
    "DataFinanceMasters Ltd.": ["Structural Engineer", "Construction Planner", "Building Inspector", "Structural Engineer", "Construction Planner"],
    "SoftwareCrafters Group": ["Urban Planner", "Landscape Architect", "Construction Manager", "Urban Planner", "Landscape Architect"],
    "BankingMingle Corporation": ["Financial Controller", "Investment Banker", "Treasury Analyst", "Financial Controller", "Investment Banker"],
    "Global TechFinance Innovations": ["Research Analyst", "Data Scientist", "Quantitative Analyst", "Research Analyst", "Data Scientist"],
    "MarketingWorks Solutions": ["Marketing Analyst", "Marketing Automation Specialist", "CRM Manager", "Marketing Analyst", "Marketing Automation Specialist"],
    "FinancePulse Inc.": ["Creative Director", "Graphic Designer", "Copywriter", "Creative Director", "Graphic Designer"],
    "SoftwareBridge Systems": ["Construction Manager", "Site Supervisor", "Civil Engineer", "Construction Manager", "Site Supervisor"],
    "BankingInnovations Group": ["Financial Analyst", "Investment Manager", "Actuary", "Financial Analyst", "Investment Manager"],
    "TechMarketing Corporation": ["IT Specialist", "Network Administrator", "Cybersecurity Analyst", "IT Specialist", "Network Administrator"],
    "DigitalFinanceWorks Ltd.": ["Marketing Manager", "Brand Manager", "Digital Marketing Specialist", "Marketing Manager", "Brand Manager"],
    "MarketingSphere Solutions": ["Construction Manager", "Architect", "Civil Engineer", "Construction Manager", "Architect"],
    "FinanceTechMasters Inc.": ["Market Research Analyst", "Marketing Coordinator", "Public Relations Specialist", "Market Research Analyst", "Marketing Coordinator"],
    "SoftwarePros Group": ["Financial Analyst", "Investment Advisor", "Risk Analyst", "Financial Analyst", "Investment Advisor"],
    "BankingEdge Technologies": ["Software Engineer", "UI/UX Designer", "Product Manager", "Software Engineer", "UI/UX Designer"],
    "TechSavvy Finance": ["Marketing Director", "Advertising Manager", "Content Strategist", "Marketing Director", "Advertising Manager"],
    "DigitalMarketing Innovations": ["Construction Project Manager", "Construction Estimator", "Structural Engineer", "Construction Project Manager", "Construction Estimator"],
    "FinanceFrontiers Corporation": ["Financial Analyst", "Investment Manager", "Actuary", "Financial Analyst", "Investment Manager"],
    "SoftwareMingle Ltd.": ["IT Specialist", "Network Administrator", "Cybersecurity Analyst", "IT Specialist", "Network Administrator"],
    "BankingGenius Group": ["Marketing Manager", "Brand Manager", "Digital Marketing Specialist", "Marketing Manager", "Brand Manager"],
    "Global DataTech Solutions": ["Construction Manager", "Architect", "Civil Engineer", "Construction Manager", "Architect"],
    "MarketingCrafters Corporation": ["Market Research Analyst", "Marketing Coordinator", "Public Relations Specialist", "Market Research Analyst", "Marketing Coordinator"],
    "FinanceSpark Inc.": ["Financial Analyst", "Investment Advisor", "Risk Analyst", "Financial Analyst", "Investment Advisor"]
};

const getDesignation = (companyName) => {
    const designations = companyDesignations[companyName];
    if (designations && designations.length > 0) {
        const randomIndex = Math.floor(Math.random() * designations.length);
        return designations[randomIndex];
    } else {
        return "Unknown Designation";
    }
};

const getRandomCompanyDesignation = () => {
    const companyNames = Object.keys(companyDesignations);
    const randomCompanyIndex = Math.floor(Math.random() * companyNames.length);
    const designations = companyDesignations[companyNames[randomCompanyIndex]];
    const randomDesignationIndex = Math.floor(Math.random() * designations.length);
    return designations[randomDesignationIndex];
};

module.exports = {getDesignation,getRandomCompanyDesignation};
