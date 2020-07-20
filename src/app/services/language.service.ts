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
                    href: 'purposes',
                    text: 'Цілі'
                }, {
                    href: 'about_us',
                    text: 'Про Нас'
                }],
                languageOptions: ['UA', 'RU']
            },
            bannerText: {
                mission: `<h2>Професійно. <br> Вчасно. <br> Надійно. </h2> <span>Ми знаємо - таке працевлаштування  <br>закордоном можливе разом з нами.</span>`
            },
            goalsText: {
                goalsTitle: 'НАШІ ЦІЛІ:',
                blocks: [
                    '<span>Надати професійні послуги</span> з працевлаштування, щоб змінити вашу роботу та життя на краще',
                    '<span>Забезпечити гідною вакансією</span> кожного кандидата',
                    '<span>Відповідати критеріям</span> роботодавців на міжнародному рівні',
                    'Максимально <span>виправдовувати очікування</span> потреб кандидатів щодо вакантного місця праці'
                ]
            },
            aboutUsText: {
                blocks: [
                    'Надаємо послуги офіційного працевлаштування на роботу в Польщі',
                    'Індивідуальний підхід до кожного',
                    'Консультуємо при підборі вакансії та допомагаємо грамотно оформити усі необхідні документи',
                    'Надаємо виключно достовірні дані про наших роботодавців та умови, які вони пропонують охочим працювати в їхніх компаніях',
                    'Гарантуємо швидке та якісне виконання наших послуг',
                    'Працюємо згідно ліцензії Міністерства розвитку економіки, торгівлі та сільського господарства України.(Наказ №1244-20 від 30.06.2020)'
                ]
            },
            connectionFormText: `<h2>ЗАПОВНІТЬ ФОРМУ</h2><h3> І МИ ЗВ'ЯЖЕМОСЬ З ВАМИ</h3>`,
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
            buttons: ['ЗАПОВНИТИ', 'ПІДТВЕРДИТИ', 'ВІДМІНИТИ']
        },
        ru: {
            headerText: {
                languageOptions: ['UA', 'RU']
            },
            bannerText: {
                mission: `<h2 style="font-weight: 600">Профессионально. <br> В срок. <br> Надежно. </h2> <span style="font-size: 24px">Мы знаем - такое трудоустройство <br> за рубежом возможно вместе с нами.</span>`
            },
            goalsText: {
                goalsTitle: 'НАШИ ЦЕЛИ:',
                blocks: []
            },
            aboutUsText: {
                blocks: []
            },
            connectionFormText: `<div><h2>ЗАПОЛНИТЕ ФОРМУ</h2><h3> И МЫ СВЯЖЕМСЯ С ВАМИ</h3></div>`,
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
            buttons: ['ЗАПОЛНИТЬ', 'ПОДТВЕРДИТЬ', 'ОТМЕНА']
        }
    };
    public content$ = new BehaviorSubject<Text>(this.contentContainer.ua);

    public changeLanguage(language = 'ua'): void {
        this.content$.next(this.contentContainer[language]);
    }
}
