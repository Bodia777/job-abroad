import { IGoalsText } from '../../interfaces/language.interface';

const ua: IGoalsText = {
    goalsTitle: 'НАШІ ЦІЛІ:',
    blocks: [
        'Надати <span>професійні послуги</span> з працевлаштування, щоб змінити вашу роботу та життя на краще',
        '<span>Забезпечити</span> гідною <span>вакансією</span> кожного кандидата',
        '<span>Відповідати критеріям</span> роботодавців на міжнародному рівні',
        'Максимально <span>виправдовувати очікування</span> потреб кандидатів щодо вакантного місця праці',
    ]
}

const ru: IGoalsText = {
    goalsTitle: 'НАШИ ЦЕЛИ:',
    blocks: [
        'Предоставить <span> профессиональные услуги </span> по трудоустройству, чтобы изменить вашу работу и жизнь к лучшему',
        '<Span> Обеспечить </span> достойной <span> вакансией </span> каждого кандидата',
        '<Span> Отвечать критериям </span> работодателей на международном уровне',
        'Максимально <span> оправдывать ожидания </span> потребностей кандидатов по вакантного места работы'
    ]
}

export default { ua, ru };
