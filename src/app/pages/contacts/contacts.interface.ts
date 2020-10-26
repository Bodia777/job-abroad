interface IPhoneList {
    label: string,
    number: string,
}

export interface IContacts {
    title: string;
    phones: {
        title: string,
        list: IPhoneList[]
    },
    email: string,
    address: string,
    socialMedia: string,
}
