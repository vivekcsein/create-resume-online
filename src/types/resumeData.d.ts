type ResumeData = {
    Heading: {
        name: string;
        title: string;
        desc: string;
        info: Array<infoArr>;
        socialMedia: Array<infoArr>;
    },
    skills: {
        title: string;
        skillset: Array<skillset>;
    },
    projects: {

        title: string;
        projectsList: Array<projectsList>;

    },
    Experience: {
        title?: string;
        companies?: Array<companies>;
    }
}

type infoArr = {
    id: string;
    icon: string;
    value?: string;
    href?: string;
};
interface skillset {
    id: string;
    title: string;
    value: Array<title>;
}

interface title {
    id: string;
    title: string;
    href: string;
}

interface projectsList {
    name: string;
    href: string;
    desc: string;
    client: string;
}
interface companies {
    id: string;
    companyName: string;
    address: string;
    designations: Array<designations>;
}

interface designations extends title {
    duration: string;
    desc: Array<title>;
}

interface title {
    id: string;
    title: string;
}