import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class LanguageService {
    public content = new Subject<any>();

    constructor() {
    }


    private contentContainer = {
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
                mission: `<h1 class="h_class">Професійно, вчасно, надійно:</h1> <span>ми знаємо - таке</span> <h3>працевлаштування закордоном</h3> <span>можливе разом з нами.</span>`
            },
            goalsText: {
                blocks: [
                    'Надати професійні послуги з працевлаштування, щоб змінити вашу роботу та життя на краще',
                    'Забезпечити гідною вакансією кожного кандидата',
                    'Відповідати критеріям роботодавців на міжнародному рівні',
                    'Максимально виправдовувати очікування потреб кандидатів щодо вакантного місця праці'
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
            }
        },
        ru: {
            headerText: {
                languageOptions: ['UA', 'RU']
            },
            bannerText: {
                mission: `<h1>Профессионально, в срок, надежно:</h1> <span>мы знаем - такое</span> <h3>трудоустройство за рубежом</h3> <span>возможно вместе с нами.</span>`
            },
            goalsText: {
                blocks: []
            },
            aboutUsText: {
                blocks: []
            }
        }
    };

    public changeLanguage(language = 'ua'): void {
        this.content.next(this.contentContainer[language.toLowerCase()]);
    }
}
