import { IHeaderText } from './header.interface';

const ua: IHeaderText = {
    navigation: [{
        href: 'banner',
        text: 'Головна'
    }, {
        href: 'about_us',
        text: 'Про Нас'
    }, {
        href: 'partners',
        text: 'Партнери'
    }, {
        href: 'vacancies',
        text: 'Вакансії'
    }, {
        href: 'contacts',
        text: 'Контакти'
    }],
    languageOptions: ['UA', 'RU']
}

const ru: IHeaderText = {
    navigation: [{
        href: 'banner',
        text: 'Главная'
    }, {
        href: 'about_us',
        text: 'О Нас'
    }, {
        href: 'partners',
        text: 'Партнеры'
    }, {
        href: 'vacancies',
        text: 'Вакансии'
    }, {
        href: 'contacts',
        text: 'Контакты'
    }],
    languageOptions: ['UA', 'RU']
}

export default { ua, ru }
