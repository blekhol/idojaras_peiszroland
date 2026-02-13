import NapiIdojaras from "./NapiIdojaras.js";
import * as idojaraskezeles from "./idojaraskezeles.js";

const teszt = new NapiIdojaras(1, 20, 10, "napos");

//console.log(teszt.toString());

const idojaras = await idojaraskezeles.beolvas();

idojaras.push(await idojaraskezeles.maiidojaras());

console.log("\n");
console.log(idojaras.join("\n"));

let max = idojaras[0];

for (const i of idojaras) {
    if (i.max > max.max) {
        max = i;
    }
}

console.log("\nMax hőmérsékletű nap: " + max.toString());