import {IHeadOption} from "./head.interface";
import {IHeaderText} from "../components/header/header.interface";
import {IGoalsText} from "../pages/home/components/purposes/purposes.interface";
import {IModal} from "../components/application-modal/modal.interface";
import {IBannerText} from "../pages/home/components/banner/banner.interface";
import {IAboutUsText} from "../pages/home/components/about/about.interface";
import {IPartners} from "../pages/home/components/partners/partners.interface";
import { IAudience } from "../pages/home/components/target-audience/target-audience.interface";
import { IServiceModal } from "../pages/home/components/service-modal/services-modal.interface";
import { IVacancy } from "../pages/vacancy/vacancy.interface";
import { IContacts } from "../pages/contacts/contacts.interface";
import {IPrivacyPolicy} from "../pages/home/components/privacy-policy/polict.interface";
import {IFooter} from "../components/footer/footer.interface";

export interface Text {
    headOption: IHeadOption;
    headerText: IHeaderText;
    bannerText: IBannerText;
    goalsText: IGoalsText;
    aboutUsText: IAboutUsText;
    partnersText: IPartners;
    audienceText: IAudience;
    modalText: IModal;
    footerText: IFooter;
    privacyPolicy: IPrivacyPolicy;
    vacancyText: IVacancy[];
    contactText: IContacts;
    freeServiceModal: IServiceModal;
    additionServiceModal: IServiceModal;
}
