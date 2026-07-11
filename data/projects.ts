export type CaseFileType = "personal" | "company" | "research" | "open-source";

export type CaseFileLink = {
    label: string;
    url: string;
};

export type CaseFile = {
    id: string;
    caseNumber: string;
    type: CaseFileType;
    badge: string;
    title: string;
    summary: string;
    whyThisExists: string;
    problem: string;
    solution: string;
    architecture: string;
    technologies: string[];
    challenges: string;
    results: string;
    links: CaseFileLink[];
};

export const caseFiles: CaseFile[] = [
    {
        id: "signal-rank-ai",
        caseNumber: "001",
        type: "personal",
        badge: "Personal Project",
        title: "Signal Rank AI",
        summary: "Placeholder for now.",
        whyThisExists: "",
        problem: "",
        solution: "",
        architecture: "",
        technologies: [],
        challenges: "",
        results: "",
        links: [
            { label: "GitHub", url: "#" },
            { label: "Case Study", url: "#" },
            { label: "Try It", url: "#" },
        ],
    },
    {
        id: "compass-metafloor-ai",
        caseNumber: "002",
        type: "company",
        badge: "Company Project",
        title: "Compass Metafloor AI",
        summary: "Placeholder for now.",
        whyThisExists: "",
        problem: "",
        solution: "",
        architecture: "",
        technologies: [],
        challenges: "",
        results: "",
        links: [
            { label: "Overview", url: "#" },
            { label: "Architecture", url: "#" },
            { label: "My Contributions", url: "#" },
        ],
    },
];
