const userSalary = {
  "BankTech Solutions": {
    "Software Engineer": [80000, 85000, 90000, 95000, 100000],
    "Data Analyst": [75000, 80000, 85000, 90000, 95000],
    "Financial Consultant": [90000, 95000, 100000, 105000, 110000],
    "Project Manager": [95000, 100000, 105000, 110000, 115000],
    "Business Analyst": [75000, 80000, 85000, 90000, 95000],
  },
  "Global Finance Innovations": {
    "Financial Analyst": [75000, 80000, 85000, 90000, 95000],
    "Investment Advisor": [85000, 90000, 95000, 100000, 105000],
    "Risk Manager": [90000, 95000, 100000, 105000, 110000],
    "Accountant": [70000, 75000, 80000, 85000, 90000],
    "Financial Controller": [95000, 100000, 105000, 110000, 115000],
  },
  "SoftwareGenius Inc.": {
    "Software Developer": [85000, 90000, 95000, 100000, 105000],
    "QA Engineer": [75000, 80000, 85000, 90000, 95000],
    "UI/UX Designer": [80000, 85000, 90000, 95000, 100000],
    "DevOps Engineer": [90000, 95000, 100000, 105000, 110000],
    "Product Manager": [95000, 100000, 105000, 110000, 115000],
  },
  "TechBridge Systems": {
    "Systems Architect": [90000, 95000, 100000, 105000, 110000],
    "Network Engineer": [85000, 90000, 95000, 100000, 105000],
    "Security Analyst": [80000, 85000, 90000, 95000, 100000],
    "Database Administrator": [85000, 90000, 95000, 100000, 105000],
    "IT Manager": [95000, 100000, 105000, 110000, 115000],
  },
  "FinancialFrontiers Ltd.": {
    "Credit Analyst": [70000, 75000, 80000, 85000, 90000],
    "Financial Planner": [85000, 90000, 95000, 100000, 105000],
    "Loan Officer": [75000, 80000, 85000, 90000, 95000],
    "Wealth Manager": [90000, 95000, 100000, 105000, 110000],
    "Auditor": [95000, 100000, 105000, 110000, 115000],
  },
  "MarketingMasters Group": {
    "Marketing Manager": [85000, 90000, 95000, 100000, 105000],
    "Brand Strategist": [80000, 85000, 90000, 95000, 100000],
    "Social Media Specialist": [70000, 75000, 80000, 85000, 90000],
    "Marketing Analyst": [75000, 80000, 85000, 90000, 95000],
    "Digital Marketing Manager": [90000, 95000, 100000, 105000, 110000],
  },
  "DigitalPros Corporation": {
    "Digital Marketer": [70000, 75000, 80000, 85000, 90000],
    "Content Creator": [60000, 65000, 70000, 75000, 80000],
    "SEO Specialist": [75000, 80000, 85000, 90000, 95000],
    "Digital Marketing Analyst": [65000, 70000, 75000, 80000, 85000],
    "Marketing Strategist": [85000, 90000, 95000, 100000, 105000],
  },
  "DataPulse Innovations": {
    "Data Scientist": [90000, 95000, 100000, 105000, 110000],
    "Business Intelligence Analyst": [85000, 90000, 95000, 100000, 105000],
    "Machine Learning Engineer": [95000, 100000, 105000, 110000, 115000],
  },
  "InfoTech Solutions": {
    "IT Consultant": [85000, 90000, 95000, 100000, 105000],
    "Systems Administrator": [80000, 85000, 90000, 95000, 100000],
    "Database Administrator": [85000, 90000, 95000, 100000, 105000],
    "IT Specialist": [80000, 85000, 90000, 95000, 100000],
    "Network Administrator": [80000, 85000, 90000, 95000, 100000],
  },
  "CodeCrafters Ltd.": {
    "Software Architect": [95000, 100000, 105000, 110000, 115000],
    "Full Stack Developer": [90000, 95000, 100000, 105000, 110000],
    "DevOps Engineer": [95000, 100000, 105000, 110000, 115000],
    "Software Engineer": [85000, 90000, 95000, 100000, 105000],
    "UI/UX Designer": [90000, 95000, 100000, 105000, 110000],
  },
  "FinServe Technologies": {
    "Financial Software Developer": [95000, 100000, 105000, 110000, 115000],
    "Financial Analyst": [85000, 90000, 95000, 100000, 105000],
    "Quantitative Analyst": [90000, 95000, 100000, 105000, 110000],
  },
  "Innovative Marketing Solutions": {
    "Marketing Director": [95000, 100000, 105000, 110000, 115000],
    "Advertising Manager": [90000, 95000, 100000, 105000, 110000],
    "Market Research Analyst": [85000, 90000, 95000, 100000, 105000],
  },
  "ConstructionCompass Ltd.": {
    "Construction Manager": [90000, 95000, 100000, 105000, 110000],
    "Civil Engineer": [85000, 90000, 95000, 100000, 105000],
    "Architect": [95000, 100000, 105000, 110000, 115000],
  },
  "BuildRight Corporation": {
    "Project Manager": [95000, 100000, 105000, 110000, 115000],
    "Construction Supervisor": [85000, 90000, 95000, 100000, 105000],
    "Estimator": [80000, 85000, 90000, 95000, 100000],
  },
  "BrickWorks Innovations": {
    "Structural Engineer": [90000, 95000, 100000, 105000, 110000],
    "Construction Planner": [85000, 90000, 95000, 100000, 105000],
    "Building Inspector": [80000, 85000, 90000, 95000, 100000],
  },
  "Skyline Solutions Inc.": {
    "Urban Planner": [95000, 100000, 105000, 110000, 115000],
    "Landscape Architect": [90000, 95000, 100000, 105000, 110000],
    "Construction Manager": [95000, 100000, 105000, 110000, 115000],
  },
  "FinanceFusion Group": {
    "Financial Controller": [100000, 105000, 110000, 115000, 120000],
    "Investment Banker": [105000, 110000, 115000, 120000, 125000],
    "Treasury Analyst": [95000, 100000, 105000, 110000, 115000],
  },
  "BrightMind Solutions": {
    "Research Analyst": [85000, 90000, 95000, 100000, 105000],
    "Data Scientist": [90000, 95000, 100000, 105000, 110000],
    "Quantitative Analyst": [95000, 100000, 105000, 110000, 115000],
  },
  "MarketSpark Technologies": {
    "Marketing Analyst": [85000, 90000, 95000, 100000, 105000],
    "Marketing Automation Specialist": [90000, 95000, 100000, 105000, 110000],
    "CRM Manager": [95000, 100000, 105000, 110000, 115000],
  },
  "CreativeConcepts Inc.": {
    "Creative Director": [100000, 105000, 110000, 115000, 120000],
    "Graphic Designer": [85000, 90000, 95000, 100000, 105000],
    Copywriter: [80000, 85000, 90000, 95000, 100000],
  },
  "ConstructionCrest Ltd.": {
    "Construction Manager": [95000, 100000, 105000, 110000, 115000],
    "Site Supervisor": [85000, 90000, 95000, 100000, 105000],
    "Civil Engineer": [90000, 95000, 100000, 105000, 110000],
  },
  "FinanceForge Corporation": {
    "Financial Analyst": [85000, 90000, 95000, 100000, 105000],
    "Investment Manager": [100000, 105000, 110000, 115000, 120000],
    Actuary: [110000, 115000, 120000, 125000, 130000],
  },
  "TechSavvy Solutions": {
    "IT Specialist": [80000, 85000, 90000, 95000, 100000],
    "Network Administrator": [90000, 95000, 100000, 105000, 110000],
    "Cybersecurity Analyst": [95000, 100000, 105000, 110000, 115000],
  },
  "MarketingMarvels Group": {
    "Marketing Manager": [100000, 105000, 110000, 115000, 120000],
    "Brand Manager": [90000, 95000, 100000, 105000, 110000],
    "Digital Marketing Specialist": [95000, 100000, 105000, 110000, 115000],
  },
  "InnovativeBuilders Ltd.": {
    "Construction Manager": [95000, 100000, 105000, 110000, 115000],
    Architect: [100000, 105000, 110000, 115000, 120000],
    "Civil Engineer": [90000, 95000, 100000, 105000, 110000],
  },
  "MarketMingle Corporation": {
    "Market Research Analyst": [85000, 90000, 95000, 100000, 105000],
    "Marketing Coordinator": [90000, 95000, 100000, 105000, 110000],
    "Public Relations Specialist": [95000, 100000, 105000, 110000, 115000],
  },
  "FinancialEdge Technologies": {
    "Financial Analyst": [85000, 90000, 95000, 100000, 105000],
    "Investment Advisor": [100000, 105000, 110000, 115000, 120000],
    "Risk Analyst": [90000, 95000, 100000, 105000, 110000],
  },
  "SoftwareSphere Inc.": {
    "Software Engineer": [95000, 100000, 105000, 110000, 115000],
    "UI/UX Designer": [90000, 95000, 100000, 105000, 110000],
    "Product Manager": [100000, 105000, 110000, 115000, 120000],
  },
  "MarketingMomentum Ltd.": {
    "Marketing Director": [105000, 110000, 115000, 120000, 125000],
    "Advertising Manager": [95000, 100000, 105000, 110000, 115000],
    "Content Strategist": [90000, 95000, 100000, 105000, 110000],
  },
  "ConstructionCrafters Group": {
    "Construction Project Manager": [100000, 105000, 110000, 115000, 120000],
    "Construction Estimator": [90000, 95000, 100000, 105000, 110000],
    "Structural Engineer": [95000, 100000, 105000, 110000, 115000],
  },
  "BankSoft Innovations": {
    "Software Engineer": [95000, 100000, 105000, 110000, 115000],
    "Data Analyst": [85000, 90000, 95000, 100000, 105000],
    "Financial Consultant": [90000, 95000, 100000, 105000, 110000],
    "Business Analyst":[90000, 95000, 100000, 105000, 110000]
  },
  "Global Banking Technologies": {
    "Financial Analyst": [85000, 90000, 95000, 100000, 105000],
    "Investment Advisor": [100000, 105000, 110000, 115000, 120000],
    "Risk Manager": [95000, 100000, 105000, 110000, 115000],
  },
  "FinanceWorks Inc.": {
    "Software Developer": [95000, 100000, 105000, 110000, 115000],
    "QA Engineer": [90000, 95000, 100000, 105000, 110000],
    "UI/UX Designer": [90000, 95000, 100000, 105000, 110000],
  },
  "TechSolutions Bank": {
    "Systems Architect": [105000, 110000, 115000, 120000, 125000],
    "Network Engineer": [95000, 100000, 105000, 110000, 115000],
    "Security Analyst": [100000, 105000, 110000, 115000, 120000],
  },
  "DigitalFinance Innovations": {
    "Credit Analyst": [85000, 90000, 95000, 100000, 105000],
    "Financial Planner": [90000, 95000, 100000, 105000, 110000],
    "Loan Officer": [95000, 100000, 105000, 110000, 115000],
  },
  "MarketGenius Group": {
    "Marketing Manager": [100000, 105000, 110000, 115000, 120000],
    "Brand Strategist": [95000, 100000, 105000, 110000, 115000],
    "Social Media Specialist": [90000, 95000, 100000, 105000, 110000],
  },
  "DataDriven Finance": {
    "Digital Marketer": [85000, 90000, 95000, 100000, 105000],
    "Content Creator": [80000, 85000, 90000, 95000, 100000],
    "SEO Specialist": [90000, 95000, 100000, 105000, 110000],
  },
  "TechPulse Corporation": {
    "Data Scientist": [95000, 100000, 105000, 110000, 115000],
    "Business Intelligence Analyst": [90000, 95000, 100000, 105000, 110000],
    "Machine Learning Engineer": [105000, 110000, 115000, 120000, 125000],
  },
  "InnovativeFinance Solutions": {
    "IT Consultant": [100000, 105000, 110000, 115000, 120000],
    "Systems Administrator": [90000, 95000, 100000, 105000, 110000],
    "Database Administrator": [95000, 100000, 105000, 110000, 115000],
  },
  "FinancialFusion Ltd.": {
    "Software Architect": [105000, 110000, 115000, 120000, 125000],
    "Full Stack Developer": [95000, 100000, 105000, 110000, 115000],
    "DevOps Engineer": [100000, 105000, 110000, 115000, 120000],
  },
  "SoftwareFrontiers Inc.": {
    "Financial Software Developer": [100000, 105000, 110000, 115000, 120000],
    "Financial Analyst": [90000, 95000, 100000, 105000, 110000],
    "Quantitative Analyst": [95000, 100000, 105000, 110000, 115000],
  },
  "BankingBridge Systems": {
    "Marketing Director": [105000, 110000, 115000, 120000, 125000],
    "Advertising Manager": [95000, 100000, 105000, 110000, 115000],
    "Market Research Analyst": [90000, 95000, 100000, 105000, 110000],
  },
  "MarketingTech Innovations": {
    "Construction Manager": [95000, 100000, 105000, 110000, 115000],
    "Civil Engineer": [90000, 95000, 100000, 105000, 110000],
    Architect: [100000, 105000, 110000, 115000, 120000],
  },
  "FinancePros Group": {
    "Project Manager": [100000, 105000, 110000, 115000, 120000],
    "Construction Supervisor": [90000, 95000, 100000, 105000, 110000],
    Estimator: [85000, 90000, 95000, 100000, 105000],
  },
  "Global DataFinance Solutions": {
    "Structural Engineer": [95000, 100000, 105000, 110000, 115000],
    "Construction Planner": [90000, 95000, 100000, 105000, 110000],
    "Building Inspector": [85000, 90000, 95000, 100000, 105000],
  },
  "TechMasters Corporation": {
    "Urban Planner": [105000, 110000, 115000, 120000, 125000],
    "Landscape Architect": [95000, 100000, 105000, 110000, 115000],
    "Construction Manager": [100000, 105000, 110000, 115000, 120000],
  },
  "BankingMinds Ltd.": {
    "Financial Controller": [110000, 115000, 120000, 125000, 130000],
    "Investment Banker": [115000, 120000, 125000, 130000, 135000],
    "Treasury Analyst": [100000, 105000, 110000, 115000, 120000],
  },
  "DigitalMarketing Solutions": {
    "Research Analyst": [85000, 90000, 95000, 100000, 105000],
    "Data Scientist": [95000, 100000, 105000, 110000, 115000],
    "Quantitative Analyst": [90000, 95000, 100000, 105000, 110000],
  },
  "FinanceSphere Group": {
    "Marketing Analyst": [90000, 95000, 100000, 105000, 110000],
    "Marketing Automation Specialist": [95000, 100000, 105000, 110000, 115000],
    "CRM Manager": [100000, 105000, 110000, 115000, 120000],
  },
  "SoftwareSavvy Inc.": {
    "Creative Director": [105000, 110000, 115000, 120000, 125000],
    "Graphic Designer": [90000, 95000, 100000, 105000, 110000],
    Copywriter: [85000, 90000, 95000, 100000, 105000],
  },
  "DataFinance Innovations": {
    "Construction Manager": [95000, 100000, 105000, 110000, 115000],
    "Site Supervisor": [90000, 95000, 100000, 105000, 110000],
    "Civil Engineer": [95000, 100000, 105000, 110000, 115000],
  },
  "TechEdge Technologies": {
    "Financial Analyst": [85000, 90000, 95000, 100000, 105000],
    "Investment Manager": [100000, 105000, 110000, 115000, 120000],
    Actuary: [110000, 115000, 120000, 125000, 130000],
  },
  "MarketingWorks Corporation": {
    "IT Specialist": [80000, 85000, 90000, 95000, 100000],
    "Network Administrator": [90000, 95000, 100000, 105000, 110000],
    "Cybersecurity Analyst": [95000, 100000, 105000, 110000, 115000],
  },
  "FinanceGenius Ltd.": {
    "Marketing Manager": [100000, 105000, 110000, 115000, 120000],
    "Brand Manager": [90000, 95000, 100000, 105000, 110000],
    "Digital Marketing Specialist": [95000, 100000, 105000, 110000, 115000],
  },
  "BankingPros Group": {
    "Construction Manager": [95000, 100000, 105000, 110000, 115000],
    Architect: [100000, 105000, 110000, 115000, 120000],
    "Civil Engineer": [90000, 95000, 100000, 105000, 110000],
  },
  "DigitalFrontiers Solutions": {
    "Market Research Analyst": [85000, 90000, 95000, 100000, 105000],
    "Marketing Coordinator": [90000, 95000, 100000, 105000, 110000],
    "Public Relations Specialist": [95000, 100000, 105000, 110000, 115000],
  },
  "TechMarket Innovations": {
    "Financial Analyst": [85000, 90000, 95000, 100000, 105000],
    "Investment Advisor": [100000, 105000, 110000, 115000, 120000],
    "Risk Analyst": [90000, 95000, 100000, 105000, 110000],
  },
  "FinanceCrafters Corporation": {
    "Software Engineer": [95000, 100000, 105000, 110000, 115000],
    "UI/UX Designer": [90000, 95000, 100000, 105000, 110000],
    "Product Manager": [100000, 105000, 110000, 115000, 120000],
  },
  "DataBank Solutions": {
    "Marketing Director": [105000, 110000, 115000, 120000, 125000],
    "Advertising Manager": [95000, 100000, 105000, 110000, 115000],
    "Content Strategist": [90000, 95000, 100000, 105000, 110000],
  },
  "SoftwareSpark Inc.": {
    "Construction Project Manager": [100000, 105000, 110000, 115000, 120000],
    "Construction Estimator": [90000, 95000, 100000, 105000, 110000],
    "Structural Engineer": [95000, 100000, 105000, 110000, 115000],
  },
  "MarketingPulse Technologies": {
    "Software Engineer": [95000, 100000, 105000, 110000, 115000],
    "Data Analyst": [85000, 90000, 95000, 100000, 105000],
    "Financial Consultant": [90000, 95000, 100000, 105000, 110000],
  },
  "FinanceMingle Group": {
    "Financial Analyst": [85000, 90000, 95000, 100000, 105000],
    "Investment Advisor": [100000, 105000, 110000, 115000, 120000],
    "Risk Manager": [95000, 100000, 105000, 110000, 115000],
  },
  "TechBuilders Ltd.": {
    "Software Developer": [95000, 100000, 105000, 110000, 115000],
    "QA Engineer": [90000, 95000, 100000, 105000, 110000],
    "UI/UX Designer": [90000, 95000, 100000, 105000, 110000],
  },
  "DigitalEdge Corporation": {
    "Systems Architect": [105000, 110000, 115000, 120000, 125000],
    "Network Engineer": [95000, 100000, 105000, 110000, 115000],
    "Security Analyst": [100000, 105000, 110000, 115000, 120000],
  },
  "BankingConcepts Inc.": {
    "Credit Analyst": [85000, 90000, 95000, 100000, 105000],
    "Financial Planner": [90000, 95000, 100000, 105000, 110000],
    "Loan Officer": [95000, 100000, 105000, 110000, 115000],
  },
  "Global FinanceTech Solutions": {
    "Marketing Manager": [100000, 105000, 110000, 115000, 120000],
    "Brand Strategist": [95000, 100000, 105000, 110000, 115000],
    "Social Media Specialist": [90000, 95000, 100000, 105000, 110000],
  },
  "SoftwareMomentum Group": {
    "Digital Marketer": [85000, 90000, 95000, 100000, 105000],
    "Content Creator": [80000, 85000, 90000, 95000, 100000],
    "SEO Specialist": [90000, 95000, 100000, 105000, 110000],
  },
  "DataMarketing Innovations": {
    "Data Scientist": [95000, 100000, 105000, 110000, 115000],
    "Business Intelligence Analyst": [90000, 95000, 100000, 105000, 110000],
    "Machine Learning Engineer": [105000, 110000, 115000, 120000, 125000],
  },
  "TechForge Ltd.": {
    "IT Consultant": [100000, 105000, 110000, 115000, 120000],
    "Systems Administrator": [90000, 95000, 100000, 105000, 110000],
    "Database Administrator": [95000, 100000, 105000, 110000, 115000],
  },
  "FinanceSphere Corporation": {
    "Software Architect": [105000, 110000, 115000, 120000, 125000],
    "Full Stack Developer": [95000, 100000, 105000, 110000, 115000],
    "DevOps Engineer": [100000, 105000, 110000, 115000, 120000],
  },
  "BankingSpark Solutions": {
    "Financial Software Developer": [100000, 105000, 110000, 115000, 120000],
    "Financial Analyst": [90000, 95000, 100000, 105000, 110000],
    "Quantitative Analyst": [95000, 100000, 105000, 110000, 115000],
  },
  "DigitalGenius Inc.": {
    "Marketing Director": [105000, 110000, 115000, 120000, 125000],
    "Advertising Manager": [95000, 100000, 105000, 110000, 115000],
    "Market Research Analyst": [90000, 95000, 100000, 105000, 110000],
  },
  "MarketingFrontiers Group": {
    "Construction Manager": [95000, 100000, 105000, 110000, 115000],
    "Civil Engineer": [90000, 95000, 100000, 105000, 110000],
    Architect: [100000, 105000, 110000, 115000, 120000],
  },
  "TechPros Technologies": {
    "Project Manager": [100000, 105000, 110000, 115000, 120000],
    "Construction Supervisor": [90000, 95000, 100000, 105000, 110000],
    Estimator: [85000, 90000, 95000, 100000, 105000],
  },
  "DataFinanceMasters Ltd.": {
    "Structural Engineer": [95000, 100000, 105000, 110000, 115000],
    "Construction Planner": [90000, 95000, 100000, 105000, 110000],
    "Building Inspector": [85000, 90000, 95000, 100000, 105000],
  },
  "SoftwareCrafters Group": {
    "Urban Planner": [105000, 110000, 115000, 120000, 125000],
    "Landscape Architect": [95000, 100000, 105000, 110000, 115000],
    "Construction Manager": [100000, 105000, 110000, 115000, 120000],
  },
  "BankingMingle Corporation": {
    "Financial Controller": [110000, 115000, 120000, 125000, 130000],
    "Investment Banker": [115000, 120000, 125000, 130000, 135000],
    "Treasury Analyst": [100000, 105000, 110000, 115000, 120000],
  },
  "Global TechFinance Innovations": {
    "Research Analyst": [85000, 90000, 95000, 100000, 105000],
    "Data Scientist": [95000, 100000, 105000, 110000, 115000],
    "Quantitative Analyst": [90000, 95000, 100000, 105000, 110000],
  },
  "MarketingWorks Solutions": {
    "Marketing Analyst": [90000, 95000, 100000, 105000, 110000],
    "Marketing Automation Specialist": [95000, 100000, 105000, 110000, 115000],
    "CRM Manager": [100000, 105000, 110000, 115000, 120000],
  },
  "FinancePulse Inc.": {
    "Creative Director": [105000, 110000, 115000, 120000, 125000],
    "Graphic Designer": [90000, 95000, 100000, 105000, 110000],
    Copywriter: [85000, 90000, 95000, 100000, 105000],
  },
  "SoftwareBridge Systems": {
    "Construction Manager": [95000, 100000, 105000, 110000, 115000],
    "Site Supervisor": [90000, 95000, 100000, 105000, 110000],
    "Civil Engineer": [95000, 100000, 105000, 110000, 115000],
  },
  "BankingInnovations Group": {
    "Financial Analyst": [85000, 90000, 95000, 100000, 105000],
    "Investment Manager": [100000, 105000, 110000, 115000, 120000],
    Actuary: [110000, 115000, 120000, 125000, 130000],
  },
  "TechMarketing Corporation": {
    "IT Specialist": [80000, 85000, 90000, 95000, 100000],
    "Network Administrator": [90000, 95000, 100000, 105000, 110000],
    "Cybersecurity Analyst": [95000, 100000, 105000, 110000, 115000],
  },
  "DigitalFinanceWorks Ltd.": {
    "Marketing Manager": [100000, 105000, 110000, 115000, 120000],
    "Brand Manager": [90000, 95000, 100000, 105000, 110000],
    "Digital Marketing Specialist": [95000, 100000, 105000, 110000, 115000],
  },
  "MarketingSphere Solutions": {
    "Construction Manager": [95000, 100000, 105000, 110000, 115000],
    Architect: [100000, 105000, 110000, 115000, 120000],
    "Civil Engineer": [90000, 95000, 100000, 105000, 110000],
  },
  "FinanceTechMasters Inc.": {
    "Market Research Analyst": [90000, 95000, 100000, 105000, 110000],
    "Marketing Coordinator": [95000, 100000, 105000, 110000, 115000],
    "Public Relations Specialist": [100000, 105000, 110000, 115000, 120000],
  },
  "SoftwarePros Group": {
    "Financial Analyst": [90000, 95000, 100000, 105000, 110000],
    "Investment Advisor": [100000, 105000, 110000, 115000, 120000],
    "Risk Analyst": [95000, 100000, 105000, 110000, 115000],
  },
  "BankingEdge Technologies": {
    "Software Engineer": [90000, 95000, 100000, 105000, 110000],
    "UI/UX Designer": [85000, 90000, 95000, 100000, 105000],
    "Product Manager": [95000, 100000, 105000, 110000, 115000],
  },
  "TechSavvy Finance": {
    "Marketing Director": [105000, 110000, 115000, 120000, 125000],
    "Advertising Manager": [95000, 100000, 105000, 110000, 115000],
    "Content Strategist": [90000, 95000, 100000, 105000, 110000],
  },
  "DigitalMarketing Innovations": {
    "Construction Project Manager": [100000, 105000, 110000, 115000, 120000],
    "Construction Estimator": [90000, 95000, 100000, 105000, 110000],
    "Structural Engineer": [95000, 100000, 105000, 110000, 115000],
  },
  "FinanceFrontiers Corporation": {
    "Financial Analyst": [95000, 100000, 105000, 110000, 115000],
    "Investment Manager": [100000, 105000, 110000, 115000, 120000],
    Actuary: [105000, 110000, 115000, 120000, 125000],
  },
  "SoftwareMingle Ltd": {
    "IT Specialist": [85000, 90000, 95000, 100000, 105000],
    "Network Administrator": [90000, 95000, 100000, 105000, 110000],
    "Cybersecurity Analyst": [95000, 100000, 105000, 110000, 115000],
  },
  "BankingGenius Group": {
    "Marketing Manager": [100000, 105000, 110000, 115000, 120000],
    "Brand Manager": [95000, 100000, 105000, 110000, 115000],
    "Digital Marketing Specialist": [90000, 95000, 100000, 105000, 110000],
  },
  "Global DataTech Solutions": {
    "Construction Manager": [95000, 100000, 105000, 110000, 115000],
    Architect: [100000, 105000, 110000, 115000, 120000],
    "Civil Engineer": [90000, 95000, 100000, 105000, 110000],
  },
  "MarketingCrafters Corporation": {
    "Market Research Analyst": [90000, 95000, 100000, 105000, 110000],
    "Marketing Coordinator": [95000, 100000, 105000, 110000, 115000],
    "Public Relations Specialist": [100000, 105000, 110000, 115000, 120000],
  },
  "FinanceSpark Inc.": {
    "Financial Analyst": [95000, 100000, 105000, 110000, 115000],
    "Investment Advisor": [100000, 105000, 110000, 115000, 120000],
    "Risk Analyst": [105000, 110000, 115000, 120000, 125000],
  },
};
const experienceMapping = {
    "70000-75000": 1,
    "75001-80000": 2,
    "80001-85000": 3,
    "85001-90000": 4,
    "90001-95000": 5,
    "95001-100000": 6,
    "100001-105000": 7,
    "105001-110000": 8,
    "110001-115000": 9,
  };
  
  // Function to get years of experience based on salary range
  const getYearsOfExperience = (salary) => {
    for (const range in experienceMapping) {
      const [minSalary, maxSalary] = range.split('-').map(Number);
      if (salary >= minSalary && salary <= maxSalary) {
        return experienceMapping[range];
      }
    }
    return 0;
  };
  
  const defaultSalaryRanges = [70000, 75001, 80001, 85001, 90001, 95001, 100001, 105001, 110001]; // Default salary ranges
  
  const getSalary = (companyName, designation) => {
    if (userSalary.hasOwnProperty(companyName)) {
      if (userSalary[companyName].hasOwnProperty(designation)) {
        const salaries = userSalary[companyName][designation];
        const randomIndex = Math.floor(Math.random() * salaries.length);
        const salary = salaries[randomIndex];
        const experience = getYearsOfExperience(salary);
        return { salary, experience };
      } else {
        // Pick a random salary from the default range if designation not found
        const randomIndex = Math.floor(Math.random() * defaultSalaryRanges.length);
        const salary = defaultSalaryRanges[randomIndex];
        const experience = getYearsOfExperience(salary);
        return { salary, experience }; 
      }
    } else {
      return "Company not found";
    }
  };

  const getRandomSalary = () => {
    const companyNames = Object.keys(userSalary);
    const randomCompanyIndex = Math.floor(Math.random() * companyNames.length);
    const selectedCompany = companyNames[randomCompanyIndex];
    const designations = Object.keys(userSalary[selectedCompany]);
    
    if (designations.length > 0) {
        const randomDesignationIndex = Math.floor(Math.random() * designations.length);
        const selectedDesignation = designations[randomDesignationIndex];
        const salaries = userSalary[selectedCompany][selectedDesignation];
        const randomSalaryIndex = Math.floor(Math.random() * salaries.length);
        const salary = salaries[randomSalaryIndex];
        return salary 
    } else {
        // If no designations are found for the randomly selected company, use default salary ranges
        const randomIndex = Math.floor(Math.random() * defaultSalaryRanges.length);
        const salary = defaultSalaryRanges[randomIndex];
        return salary
    }
};
const getRandomExperience = () => {
  const companyNames = Object.keys(userSalary);
  const randomCompanyIndex = Math.floor(Math.random() * companyNames.length);
  const selectedCompany = companyNames[randomCompanyIndex];
  const designations = Object.keys(userSalary[selectedCompany]);
  
  if (designations.length > 0) {
      const randomDesignationIndex = Math.floor(Math.random() * designations.length);
      const selectedDesignation = designations[randomDesignationIndex];
      const salaries = userSalary[selectedCompany][selectedDesignation];
      const randomSalaryIndex = Math.floor(Math.random() * salaries.length);
      const salary = salaries[randomSalaryIndex];
      const experience = getYearsOfExperience(salary);
      return  experience ;
  } else {
      // If no designations are found for the randomly selected company, use default salary ranges
      const randomIndex = Math.floor(Math.random() * defaultSalaryRanges.length);
      const salary = defaultSalaryRanges[randomIndex];
      const experience = getYearsOfExperience(salary);
      return experience ;
  }
}

  
  module.exports = {getSalary,getRandomSalary,getRandomExperience}