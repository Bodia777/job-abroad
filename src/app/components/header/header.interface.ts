interface INavigation {
  href: string;
  text: string;
}

export interface IHeaderText {
  navigation: INavigation[];
  languageOptions: string[];
}
