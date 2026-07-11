export type ArchiveItem = {
    id: string;
    title: string;
    description: string;
    actionText: string;
    href: string;
};

export const archiveItems: ArchiveItem[] = [
    {
        id: "resume",
        title: "Resume",
        description:
            "A record of the work I've done, the problems I've solved and the teams I've learned from.",
        actionText: "Open Resume ↗",
        href: "https://drive.google.com/file/d/1Poe2XfpM5R6eg_7APkwlT0mXb674-itk/view?usp=sharing",
    },
    {
        id: "photography",
        title: "Photography",
        description:
            "A collection of quiet observations, small contradictions and moments worth remembering.",
        actionText: "Visit VSCO ↗",
        href: "https://vsco.co/nandhini-thv/spaces",
    },
];
