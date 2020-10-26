import { IPartners } from './partners.interface';

const ua: IPartners = {
    title: 'Наші партнери, яким ми довіряємо',
    partnersList: [
        'samsung.svg', 'sews.png', 'lg.png', 'philips.png'
    ],
    vacancy: {
        title: 'ЧОМУ варто обрати вакансії від наших роботодавців?',
        list: [{
            text: 'Безкоштовні вакансії',
            icon: 'curriculum-vitae.svg',
        }, {
            text: 'Офіційне працевлаштування',
            icon: 'waranty.svg',
        }, {
            text: 'Безкоштовне проживання',
            icon: 'safety.svg',
        }, {
            text: 'Забезпечення спецодягом та взуттям',
            icon: 'boots.svg',
        }, {
            text: 'Можливість навчання',
            icon: 'online-learning.svg',
        }, {
            text: 'Підтримка та супровід 24/7',
            icon: '24-hours.svg',
        }, {
            text: 'Організація трансфера до робочого місця',
            icon: 'van.svg',
        }, {
            text: 'Супровід координатора за кордоном',
            icon: 'qa.svg',
        }],
    }
}

const ru: IPartners = {
    title: 'Наши партнеры, которым мы доверяем',
    partnersList: [
        'samsung.svg', 'sews.png', 'lg.png', 'philips.png'
    ],
    vacancy: {
        title: 'ПОЧЕМУ стоит выбрать вакансии от наших работодателей?',
        list: [{
            text: 'Бесплатные вакансии',
            icon: 'curriculum-vitae.svg',
        }, {
            text: 'Официальное трудоустройство',
            icon: 'waranty.svg',
        }, {
            text: 'Бесплатное проживание',
            icon: 'safety.svg',
        }, {
            text: 'Обеспечение спецодеждой и обувью',
            icon: 'boots.svg',
        }, {
            text: 'Возможность обучения',
            icon: 'online-learning.svg',
        }, {
            text: 'Поддержка и сопровождение 24/7',
            icon: '24-hours.svg',
        }, {
            text: 'Организация трансфера к рабочему месту',
            icon: 'van.svg',
        }, {
            text: 'Сопровождение координатора за рубежом',
            icon: 'qa.svg',
        }],
    }
}

export default {ua, ru};
