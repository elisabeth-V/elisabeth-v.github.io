export interface LabelsProps {
    subTitle?:string,
    loadingMessage?:string,
    errorMessage?:string,
    overallMessage?:string,
}

export interface ImagesProps {
    id:string;
    download_url:string,
    author:string
}

export interface ImageProps {
    url: string,
    imgId: string | number,
    imgDesc: string,
}

export interface dataApiProps {
    isOnLoad?: boolean,
    isPrevButton?: boolean,
}

export interface ApiProps {
    subTitle?:string,
    loadingMessage?:string,
    errorMessage?:string
}

export interface UserProps{
    name: string,
    last_name: string,
    country: string,
    city: string,
    books: string,
}

export interface selectedCountryProps {
    target?:any,
    id?:string,
    currentTarget?:any,
}