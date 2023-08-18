export interface ContentInfo {
    imagePath: string,
    text: string
    certificationInfo?: CertificationInfo
}

export interface CertificationInfo {
    dateFrom: string,
    dateTo: string,
    id?: string
}

export interface ContentGroup {
    info: ContentInfo[],
    title: string
}

export const emptyGroup: ContentGroup = {
    info: [
        {
            imagePath: '', 
            text: ''
        }
    ], 
    title: ''
};