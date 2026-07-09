export type Experience = {
    id: string;
    role: string;
    company: string;
    duration: string;
    frame: "walnut" | "brass" | "oak" | "maple";
    description: string;
    responsibilities: string[];
    technologies: string[];
};

export const experiences: Experience[] = [
    {
        id: "deepedge-ai",
        role: "Machine Learning Engineer",
        company: "DeepEdge AI",
        duration: "May 2024 – Present",
        frame: "walnut",
        description:
            "Building an end-to-end quality intelligence platform that helps manufacturers detect defects, understand root causes and drive continuous improvement using computer vision and generative AI.",
        responsibilities: [
            "Developed and deployed computer vision models for defect detection",
            "Built an RCA agent using LLMs to analyze failure patterns and suggest actions",
            "Designed and implemented scalable backend services and APIs",
            "Collaborated with product and design teams to ship impactful features",
            "Worked with multi-camera systems and 3D perception pipelines",
        ],
        technologies: ["Python", "PyTorch", "FastAPI", "LLMs", "Computer Vision"],
    },
    {
        id: "evanke",
        role: "GenAI Engineer",
        company: "Evanke",
        duration: "",
        frame: "brass",
        description: "",
        responsibilities: [],
        technologies: [],
    },
    {
        id: "groundtruth",
        role: "Data Engineer Intern",
        company: "GroundTruth",
        duration: "",
        frame: "oak",
        description: "",
        responsibilities: [],
        technologies: [],
    },
    {
        id: "trell",
        role: "Data Analyst Intern",
        company: "Trell",
        duration: "",
        frame: "maple",
        description: "",
        responsibilities: [],
        technologies: [],
    },
];
