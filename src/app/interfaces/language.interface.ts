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
    goalsText: {
        blocks: string[];
    };
}
