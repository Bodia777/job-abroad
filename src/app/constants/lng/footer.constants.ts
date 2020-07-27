import { IFooter } from '../../interfaces/language.interface';

const ua: IFooter = {
    contacts: ['097 23 00 202', '099 23 00 202', 'ukrprowork@gmail.com', 'м. Львів, вул. Зелена, 81'],
    companyName: 'ТОВ "ПРОФЕСІЙНА АГЕНЦІЯ ПРАЦІ"',
    footerButton: 'Зв\'язатись з нами'
}

const ru: IFooter = {
    footerButton: 'Свяжитесь с нами',
    contacts: ['097 23 00 202', '099 23 00 202', 'ukrprowork@gmail.com', 'г. Львов, ул. Зеленая, 81'],
    companyName: 'ООО "ПРОФЕССИОНАЛЬНОЕ АГЕНСТВО ТРУДА"'
}

export default { ua, ru };
