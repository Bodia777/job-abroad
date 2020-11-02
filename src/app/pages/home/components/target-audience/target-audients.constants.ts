import { IAudience } from './target-audience.interface';
import VACANCY from '../../../vacancy/vacancy.constants';

const ua: IAudience = {
    title: `Для кого вакансії`,
    vacancyList: ['Для людей віком від 18 до 55', 'Для сімейних пар', 'Для чоловіків та жінок'],
    vacancyInfo: 'Щоб дізнатись більше про вакансії зателефонуйте або напишіть нашому фахівцю з рекрутингу, який надасть вам детальну інформацію про:',
    vacancyInfoList: ['Роботодавця', 'Локацію роботи', 'Оплату за роботу', 'Умови праці'],
    list: VACANCY.ua,
    vacancyBtnText: 'Дивитись всі вакансії',
}

const ru: IAudience = {
    title: `Для кого вакансии`,
    vacancyList: ["Для людей возрастом от 18 до 55", "Для семейных пар", "Для мужчин и женщин"],
    vacancyInfo: 'Чтобы узнать больше о вакансиях позвоните или напишите нашему специалисту по подбору персонала, который предоставит вам подробную информацию о:',
    vacancyInfoList: ["Работодателе", "Локации работы", "Оплате за работу", "Условиях труда"],
    list: VACANCY.ru,
    vacancyBtnText: ' Смотреть все вакансии',
}

export default { ua, ru };