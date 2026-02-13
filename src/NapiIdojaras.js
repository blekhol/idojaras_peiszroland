const napok = ["vasárnap", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat"];

export default class NapiIdojaras {
    constructor(nap, max, min, idojaras) {
        if (nap < 0 || nap > 6) {
            throw new Error("A nap értéke 0 és 6 között kell legyen.");
        }
        if (!idojaras) {
            throw new Error("Az időjárás megadása kötelező.");
        }
        this.nap = parseInt(nap);
        this.max = max;
        this.min = min;
        this.idojaras = idojaras;
    }

    toString() {
        return `${napok[this.nap]}: ${this.idojaras}, min: ${this.min} - max:${this.max} fok`;
    }
}