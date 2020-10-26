import { IModal } from './modal.interface';

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
        textareaLabel: 'Коментарі',
        personalDataAgement: 'Я даю згоду на обробку моїх персональних даних',
        docAgement: {
            text: 'Я погоджуюсь з умовами',
            link: 'договору'
        },
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
        textareaLabel: 'Коментарии',
        personalDataAgement: 'Я даю согласие на обработку моих персональных данных',
        docAgement: {
            text: 'Я согласен с условиями',
            link: 'договора'
        },
    },
    buttons: ['ЗАПОЛНИТЬ', 'ПОДТВЕРДИТЬ', 'ОТМЕНА'],
}

export default { ua, ru };
