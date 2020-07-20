export interface IAboutUsText {
    blocks: string[];
}

interface INavigation {
    href: string,
    text: string
}

export interface IHeaderText {
    navigation: INavigation[];
    languageOptions: string[];
}

export interface IBannerText {
    bannerText: {
        mission: string;
    }
}

export interface IGoalsText {
    goalsTitle: string;
    blocks: string[];
}

export interface Text {
    headerText: {
        navigation: INavigation[];
        languageOptions: string[];
    };
    bannerText: {
        mission: string;
    };
    goalsText: {
        goalsTitle: string;
        blocks: string[];
    };
    aboutUsText: {
        blocks: string[];
    };
    connectionFormText: string;
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
