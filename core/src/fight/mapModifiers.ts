export type MapModifier = {
    name: string,
    odds: number,
};

export const mapModifiers: MapModifier[] = [
    { name: "minorBuff1", odds:1},
    { name: "minorBuff2", odds:1},
    { name: "minorBuff3", odds:1},
    { name: "majorBuff1", odds:1},
    { name: "majorBuff2", odds:1},
    { name: "minorDebuff1", odds:1},
    { name: "minorDebuff2", odds:1},
    { name: "minorDebuff3", odds:1},
    { name: "majorDebuff1", odds:1},
    { name: "majorDebuff2", odds:1},
    { name: "mapEffect", odds:2},
    { name: "noEffect", odds:10},
];