export interface IPartners {
    title: string;
    partnersList: string[];
    vacancy: {
        title: string;
        list: Array<{
            text: string,
            icon: string
        }>;
    }
}
