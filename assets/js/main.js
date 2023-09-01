//opgave 1:
let person = {navn:'', alder:"", job:""};
console.table(person);

//opgave2:
function info(person){
    console.table(person);
}

//opgave3:
const person1 = {navn:"Jonas", alder:20, job:"programmer"};
const person2 = {navn:"Jonna", alder:21, job:"pro"};
const person3 = {navn:"Jon", alder:23, job:"hunter"};
let mennesker = [person1, person2, person3]; //array med 3 personer


mennesker.forEach((person) => {
    console.log(person.navn);
});
console.clear();

//opgave4:
const car = {type:"Fiat", model:"500", year:"2011"};
const person4 = {navn:"Jon", alder:23, bil:car};

console.table(person4.bil);

//opgave5:
const persona = {navn:"Jonas", alder:20, job:"programmer"};
const personaCopy = {navn:"Jonas", alder:40, job:"programmer"};
console.log(persona);
const returnedTarget = Object.assign(persona, personaCopy);
console.log(personaCopy);


