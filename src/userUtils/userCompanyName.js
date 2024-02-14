const userCompanyNames = [
    "BankTech Solutions", "Global Finance Innovations", "SoftwareGenius Inc.", "TechBridge Systems",
    "FinancialFrontiers Ltd.", "MarketingMasters Group", "DigitalPros Corporation", "DataPulse Innovations",
    "InfoTech Solutions", "CodeCrafters Ltd.", "FinServe Technologies", "Innovative Marketing Solutions",
    "ConstructionCompass Ltd.", "BuildRight Corporation", "BrickWorks Innovations", "Skyline Solutions Inc.",
    "FinanceFusion Group", "BrightMind Solutions", "MarketSpark Technologies", "CreativeConcepts Inc.",
    "ConstructionCrest Ltd.", "FinanceForge Corporation", "TechSavvy Solutions", "MarketingMarvels Group",
    "InnovativeBuilders Ltd.", "MarketMingle Corporation", "FinancialEdge Technologies", "SoftwareSphere Inc.",
    "MarketingMomentum Ltd.", "ConstructionCrafters Group", "BankSoft Innovations", "Global Banking Technologies",
    "FinanceWorks Inc.", "TechSolutions Bank", "DigitalFinance Innovations", "MarketGenius Group",
    "DataDriven Finance", "TechPulse Corporation", "InnovativeFinance Solutions", "FinancialFusion Ltd.",
    "SoftwareFrontiers Inc.", "BankingBridge Systems", "MarketingTech Innovations", "FinancePros Group",
    "Global DataFinance Solutions", "TechMasters Corporation", "BankingMinds Ltd.", "DigitalMarketing Solutions",
    "FinanceSphere Group", "SoftwareSavvy Inc.", "DataFinance Innovations", "TechEdge Technologies",
    "MarketingWorks Corporation", "FinanceGenius Ltd.", "BankingPros Group", "DigitalFrontiers Solutions",
    "TechMarket Innovations", "FinanceCrafters Corporation", "DataBank Solutions", "SoftwareSpark Inc.",
    "MarketingPulse Technologies", "FinanceMingle Group", "TechBuilders Ltd.", "DigitalEdge Corporation",
    "BankingConcepts Inc.", "Global FinanceTech Solutions", "SoftwareMomentum Group", "DataMarketing Innovations",
    "TechForge Ltd.", "FinanceSphere Corporation", "BankingSpark Solutions", "DigitalGenius Inc.",
    "MarketingFrontiers Group", "TechPros Technologies", "DataFinanceMasters Ltd.", "SoftwareCrafters Group",
    "BankingMingle Corporation", "Global TechFinance Innovations", "MarketingWorks Solutions", "FinancePulse Inc.",
    "SoftwareBridge Systems", "BankingInnovations Group", "TechMarketing Corporation", "DigitalFinanceWorks Ltd.",
    "MarketingSphere Solutions", "FinanceTechMasters Inc.", "SoftwarePros Group", "BankingEdge Technologies",
    "TechSavvy Finance", "DigitalMarketing Innovations", "FinanceFrontiers Corporation", "SoftwareMingle Ltd.",
    "BankingGenius Group", "Global DataTech Solutions", "MarketingCrafters Corporation", "FinanceSpark Inc."
];

const getRandomCompanyName = () => {
    const randomIndex = Math.floor(Math.random() * userCompanyNames.length);
    return userCompanyNames[randomIndex];
};

module.exports = getRandomCompanyName;
