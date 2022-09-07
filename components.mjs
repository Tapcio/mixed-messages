import { Borough } from "./mixed-messages-class.mjs"

const barkingandDagenham = new Borough("Barking and Dagenham", 25000, "no", "no", "no")
const camden = new Borough("Camden", 80000, "no", "yes", "yes")
const richmond = new Borough("Richmond", 65000, "yes", "yes", "no")
const chelseaAndKensington = new Borough("Chelsea And Kensington", 125000, "no", "yes", "yes")
const hackney = new Borough("Hackney", 65000, "yes", "yes", "yes")
const islington = new Borough("Islington", 70000, "yes", "yes", "yes")
const greenwich = new Borough("Greenwich", 55000, "yes", "yes", "no")
const newham = new Borough("Newham", 25000, "no", "no", "yes")
const towerHamlets = new Borough("Tower Hamlets", 35000, "no", "no", "yes")
const harrow = new Borough("Harrow", 25000, "no", "no", "no")
const hillingdon = new Borough("Hillingdon", 40000, "yes", "no", "no")
const ealing = new Borough("Ealing", 45000, "yes", "yes", "yes")

let newArray = [];
newArray.push(barkingandDagenham, camden, richmond, chelseaAndKensington, hackney, islington, greenwich, newham, towerHamlets, harrow, hillingdon, ealing)

export const array = newArray;
