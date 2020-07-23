interface INavigation {
    href: string,
    text: string
}

interface IAboutUsBlock {
    icon: string,
    text: string
}

export interface IAboutUsText {
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

export interface Text {
    headerText: IHeaderText;
    bannerText: IBannerText;
    goalsText: IGoalsText;
    aboutUsText: IAboutUsText;
    partners: IPartners;
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
