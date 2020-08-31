import { IBannerText } from '../../interfaces/language.interface';

const ua: IBannerText = {
        bannerButton: 'Зв\'язатись з нами',
        mission: `<h2>Професійно. <br> Вчасно. <br> Надійно. </h2> <span>Ми знаємо - таке працевлаштування  <br>за кордоном можливе разом з нами.</span>`
    }

const ru: IBannerText = {
    bannerButton: 'Свяжитесь с нами',
    mission: `<h2 style="font-weight: 600">Профессионально. <br> В срок. <br> Надежно. </h2> <span style="font-size: 24px">Мы знаем - такое трудоустройство <br> за рубежом возможно вместе с нами.</span>`
}

export default { ua, ru };
