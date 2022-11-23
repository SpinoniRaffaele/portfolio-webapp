export interface ContentInfo {
    imagePath: string,
    text: string
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