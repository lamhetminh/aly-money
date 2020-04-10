export interface Wallet {
    name: string,
    type: string,
    money: number
}

export interface Bill {
    type: string;
    money: number;
    date: Date;
    wallet: string;
    tag: string;
    note: string
}
