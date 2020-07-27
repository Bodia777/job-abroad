import { IHeaderText } from '../../interfaces/language.interface';

const ua: IHeaderText = {
    navigation: [{
        href: 'banner',
        text: 'Місія'
    }, {
        href: 'purposes',
        text: 'Цілі'
    }, {
        href: 'about_us',
        text: 'Про Нас'
    }, {
        href: 'partners',
        text: 'Партнери'
    }, {
        href: 'vacancies',
        text: 'Вакансії'
    }],
    languageOptions: ['UA', 'RU']
}

const ru: IHeaderText = {
    navigation: [{
        href: 'banner',
        text: 'Миссия'
    }, {
        href: 'purposes',
        text: 'Цели'
    }, {
        href: 'about_us',
        text: 'О Нас'
    }, {
        href: 'partners',
        text: 'Партнеры'
    }, {
        href: 'vacancies',
        text: 'Вакансии'
    }],
    languageOptions: ['UA', 'RU']
}

export default { ua, ru }
