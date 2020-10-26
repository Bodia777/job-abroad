export interface IPrivacyPolicy {
    title: string;
    generalInfo: string;
    paragraphs: {
        title: string,
        content: string,
    }[],
}
