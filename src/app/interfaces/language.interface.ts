interface INavigation {
    href: string;
    text: string;
}

interface IAboutUsBlock {
    icon: string;
    text: string;
}

export interface IAboutUsText {
    title: string;
    blocks: IAboutUsBlock[];
}

export interface IHeaderText {
    navigation: INavigation[];
    languageOptions: string[];
}

export interface IBannerText {
    bannerButton: string;
    mission: string;
}

export interface IGoalsText {
    goalsTitle: string;
    blocks: string[];
}

export interface IPartners {
    title: string;
    partnersList: string[];
}

export interface IAudience {
    title: string;
    vacancyList: string[];
    vacancyInfo: string;
    vacancyInfoList: string[]
}

export interface IFooter {
    contacts: string[];
    companyName: string;
    footerButton: string;
}

export interface IModal {
    modalTitle: string;
    modalMessage: {
        requiredMessage: string;
        patternMessage: string;
        textareaMessage: string
    };
    modalLabel: {
        nameLabel: string;
        emailLabel: string;
        phoneLabel: string;
        textareaLabel: string;
    };
    buttons: string[];
}

export interface Text {
    headerText: IHeaderText;
    bannerText: IBannerText;
    goalsText: IGoalsText;
    aboutUsText: IAboutUsText;
    partnersText: IPartners;
    audienceText: IAudience;
    modalText: IModal;
    footerText: IFooter;
}
