import { createServer } from "node:http";
import Chance from "chance";

let chance = new Chance()

export const server = createServer((req, res) => {
    let name = chance.name()
    let age = chance.age()
    let profession = chance.profession()
    res.end(`Hello, my name is ${name} and I am ${age} years old. I am a ${profession}.`)
})
