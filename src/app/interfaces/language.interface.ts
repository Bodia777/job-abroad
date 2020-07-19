export interface Text {
    headerText: {
        language: string;
        languageOptions: string[];
    };
    bannerText: {
        mission: string;
    };
    goalsText: {
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
