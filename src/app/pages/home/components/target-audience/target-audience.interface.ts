import { IVacancy } from "../../../vacancy/vacancy.interface";

export interface IAudience {
    title: string;
    vacancyList: string[];
    vacancyInfo: string;
    vacancyInfoList: string[];
    list: IVacancy[];
    vacancyBtnText: string;
}
