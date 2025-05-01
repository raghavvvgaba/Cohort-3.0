import { atom, selector } from "recoil";

export const counterAtom = atom({
    key: "counterAtom",
    default: 1
});


export const evenSelector = selector({
    key: "isEvenSelector",
    get: function({ get }) {
        const currentCount = get(counterAtom);
        const isEven = (currentCount % 2 == 0); //0,2,4,6,8
        return isEven;
    }
})