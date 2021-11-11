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
    tit: string;
    sum: string;
    ico: string;
    dat: Date;
    txt: string;
}