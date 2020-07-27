import { IModal } from '../../interfaces/language.interface';

const ua: IModal = {
    modalTitle: `Заповніть форму і ми зв'яжемось з Вами`,
    modalMessage: {
        requiredMessage: 'Поле обов\'язкове для заповнення',
        patternMessage: 'Поле заповнене неправильно',
        textareaMessage: 'Коментарі щодо часу дзвінка, бажаної професії, та ін.'
    },
    modalLabel: {
        nameLabel: 'Прізвище, ім\'я',
        emailLabel: 'Email-адреса',
        phoneLabel: 'Телефон',
        textareaLabel: 'Коментарі'
    },
    buttons: ['ЗАПОВНИТИ', 'ПІДТВЕРДИТИ', 'ВІДМІНИТИ'],
}

const ru: IModal = {
    modalTitle: 'Заполните форму и мы свяжемся с Вами.',
    modalMessage: {
        requiredMessage: 'Поле обязательное для заполнения',
        patternMessage: 'Поле заполнено неправильно',
        textareaMessage: 'Коментарии касательно времени дзвонка, професии и др.'
    },
    modalLabel: {
        nameLabel: 'Имя, фамилия',
        emailLabel: 'Email-адрес',
        phoneLabel: 'Телефон',
        textareaLabel: 'Коментарии'
    },
    buttons: ['ЗАПОЛНИТЬ', 'ПОДТВЕРДИТЬ', 'ОТМЕНА'],
}

export default { ua, ru };
