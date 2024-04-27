export interface HeaderElement {
    label: string;
    url: string
}

export const headerList: HeaderElement[] = [
    { label: $localize`Home`, url: "home" },
    { label: $localize`About me`, url: "about-me" },
    { label: $localize`Quick Links`, url: "quick-links" },
    { label: $localize`Certifications`, url: "certifications" },
    { label: $localize`Projects`, url: "projects" }
];