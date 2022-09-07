import { array } from "./components.mjs"
import { Person, findBoroughs } from "./mixed-messages-class.mjs"
import promptSync from 'prompt-sync';
const prompt = promptSync();

const name = prompt("What is your name?")
const salary = prompt("What is your salary?")
const green = prompt("Do you want green area? (yes or no)")
const pubs = prompt("Do you want a lot of pubs in the area? (yes or no)")
const transport = prompt("Do you need good public transport? (yes or no)")

const adam = new Person(name, salary, green, pubs, transport)

console.log(findBoroughs(adam, array))