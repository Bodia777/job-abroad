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
        personalDataAgement: string;
        docAgement: {
            text: string,
            link: string,
        };
    };
    buttons: string[];
}
