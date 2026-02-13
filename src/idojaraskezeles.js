import  NapiIdojaras from "./NapiIdojaras.js";
import * as readline from 'node:readline/promises';
import * as csv from "csv/sync";
import fs from "node:fs";

export async function maiidojaras() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    const nap = new Date().getDay();
    const max = await rl.question("Adja meg a maximum hőmérsékletet: ");
    const min = await rl.question("Adja meg a minimum hőmérsékletet: ");
    const idojaras = await rl.question("Adja meg az időjárást: ");

    rl.close();

    return new NapiIdojaras(nap, max, min, idojaras);
}

export async function beolvas() {
    const idojarasok = [];

    const tartalom = fs.readFileSync("./src/idojaras.csv", "utf-8");
    const data = csv.parse(tartalom, {
        columns: true,
        delimiter: ";"
    });

    for (const sor of data) {
        const idojaras = new NapiIdojaras(parseInt(sor.nap), parseInt(sor.max), parseInt(sor.min), sor.időjárás);
        idojarasok.push(idojaras);
    }
    return idojarasok;
}