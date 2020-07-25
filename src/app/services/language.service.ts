import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Text } from 'src/app/interfaces/language.interface';

@Injectable({
    providedIn: 'root'
})

export class LanguageService {

    constructor() {
    }


    public contentContainer = {
        ua: {
            headerText: {
                navigation: [{
                    href: 'mission',
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
                    href: 'block_5',
                    text: 'Блок 5'
                }, {
                    href: 'block_6',
                    text: 'Блок 6'
                }],
                languageOptions: ['UA', 'RU']
            },
            bannerText: {
                bannerButton: 'Зв\'язатись з нами',
                mission: `<h2>Професійно. <br> Вчасно. <br> Надійно. </h2> <span>Ми знаємо - таке працевлаштування  <br>закордоном можливе разом з нами.</span>`
            },
            goalsText: {
                goalsTitle: 'НАШІ ЦІЛІ:',
                blocks: [
                    'Надати <span>професійні послуги</span> з працевлаштування, щоб змінити вашу роботу та життя на краще',
                    '<span>Забезпечити</span> гідною <span>вакансією</span> кожного кандидата',
                    '<span>Відповідати критеріям</span> роботодавців на міжнародному рівні',
                    'Максимально <span>виправдовувати очікування</span> потреб кандидатів щодо вакантного місця праці'
                ]
            },
            aboutUsText: {
                blocks: [{
                    icon: '/assets/icon/002-portfolio.svg',
                    text: 'Надаємо послуги офіційного працевлаштування на роботу в Польщі',
                }, {
                    icon: '/assets/icon/001-network.svg',
                    text: 'Індивідуальний підхід до кожного клієнта',
                }, {
                    icon: '/assets/icon/003-trust.svg',
                    text: 'Надаємо виключно достовірні дані про наших роботодавців та умови, які вони пропонують охочим працювати в їхніх компаніях',
                },  {
                    icon: '/assets/icon/006-support.svg',
                    text: 'Консультуємо при підборі вакансії та допомагаємо грамотно оформити усі необхідні документи',
                }, {
                    icon: '/assets/icon/004-star.svg',
                    text: 'Гарантуємо швидке та якісне виконання наших послуг',
                }, {
                    icon: '/assets/icon/005-file.svg',
                    text: 'Працюємо згідно ліцензії Міністерства розвитку економіки, торгівлі та сільського господарства України.(Наказ №1244-20 від 30.06.2020)'
                }]
            },
            partners: {
                title: 'Наші партнери, яким ми довіряємо',
                partnersList: [
                    'samsung.svg', 'sews.png', 'lg.png', 'philips.png'
                ]
            },
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
            footer: {
                contacts: ['097 23 00 202', '099 23 00 202', 'ukrprowork@gmail.com', 'м. Львів, вул. Зелена, 81'],
                companyName: 'ТОВ "ПРОФЕСІЙНА АГЕНЦІЯ ПРАЦІ"',
                footerButton: 'Зв\'язатись з нами'
            }
        },
        ru: {
            headerText: {
                    navigation: [{
                        href: 'mission',
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
                        href: 'block_5',
                        text: 'Блок 5'
                    }, {
                        href: 'block_6',
                        text: 'Блок 6'
                    }],
                    languageOptions: ['UA', 'RU']
                },
                bannerText: {
                    bannerButton: 'Свяжитесь с нами',
                    mission: `<h2 style="font-weight: 600">Профессионально. <br> В срок. <br> Надежно. </h2> <span style="font-size: 24px">Мы знаем - такое трудоустройство <br> за рубежом возможно вместе с нами.</span>`
                },
                goalsText: {
                    goalsTitle: 'НАШИ ЦЕЛИ:',
                    blocks: []
                },
                aboutUsText: {
                    blocks: [{
                        icon: '/assets/icon/002-portfolio.svg',
                        text: 'Надаємо послуги офіційного працевлаштування на роботу в Польщі',
                    }, {
                        icon: '/assets/icon/001-network.svg',
                        text: 'Індивідуальний підхід до кожного клієнта',
                    }, {
                        icon: '/assets/icon/003-trust.svg',
                        text: 'Надаємо виключно достовірні дані про наших роботодавців та умови, які вони пропонують охочим працювати в їхніх компаніях',
                    },  {
                        icon: '/assets/icon/006-support.svg',
                        text: 'Консультуємо при підборі вакансії та допомагаємо грамотно оформити усі необхідні документи',
                    }, {
                        icon: '/assets/icon/004-star.svg',
                        text: 'Гарантуємо швидке та якісне виконання наших послуг',
                    }, {
                        icon: '/assets/icon/005-file.svg',
                        text: 'Працюємо згідно ліцензії Міністерства розвитку економіки, торгівлі та сільського господарства України.(Наказ №1244-20 від 30.06.2020)'
                    }]
                },
                partners: {
                    title: 'Наші партнери, яким ми довіряємо',
                    partnersList: [
                        'samsung.svg', 'sews.png', 'lg.png', 'philips.png'
                    ]
                },
                connectionFormText: `<div><h2>ЗАПОЛНИТЕ ФОРМУ</h2><h3> И МЫ СВЯЖЕМСЯ С ВАМИ</h3></div>`,
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
                footer: {
                    footerButton: 'Свяжитесь с нами',
                    contacts: ['097 23 00 202', '099 23 00 202', 'ukrprowork@gmail.com', 'г. Львов, ул. Зеленая, 81'],
                    companyName: 'ООО "ПРОФЕССИОНАЛЬНОЕ АГЕНСТВО ТРУДА"'
                }
            }
    };
    public content$ = new BehaviorSubject<Text>(this.contentContainer.ua);

    public changeLanguage(language): void {
        this.content$.next(this.contentContainer[language.toLowerCase()]);
    }
}
