export type RegataType = {
    name: string;
    file: string;
}

export type ResultFramePropsType = {
    boat: string;
    description: string;
    img: string;
    imgDescription: string;
    regatas: RegataType[];
    year: string;
}

export type NewsType = {
    id: string;
    tit: string;
    sum: string;
    ico: string;
    dat: string;
    txt: string;
    is_une: string;
}

export type NewsDataType = {
    tit: string;
    ico: string;
    dat: string;
    id: string;
}

export type LoginBodyType = {
    ema: string;
    pwd: string;
}