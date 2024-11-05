export enum Class {
    Worrier, Paladin, Death_Knight,
    Druid, Rogue, Monk, Demon_Hunter,
    Mage, Priest, Warlock,
    Hunter, Shaman, Evoker
}

export interface Character {
    userID: number;
    name: string;
    class: Class;
    spec: number;
    ilevel: number;
    main: boolean;
}