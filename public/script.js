//Import 
import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from "./classes/Payment.js";
const anchor = document.querySelector('a'); //add exclamation mark without mark error show Object is possibly 'null' 
console.log(anchor.href);
// form
const form = document.querySelector('.new-item-form');
console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(...values);
        // doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
    console.log(doc);
});
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice('sk', 'fronted-developer', 200);
// docTwo = new Payment('raja', 'fronted-developer', 200);
// let docs: HasFormatter[] = []; //it will follow Hasformatter type
// docs.push(docOne);
// docs.push(docTwo)
// const invOne = new Invoice('mario', 'work on the mario website', 250);
// const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
// let invoices: Invoice[] = [] //Invoice[] means it's only accept Invoice class format
// invoices.push(invOne);
// invoices.push(invTwo);
// // We can't change th type but we can change value
// // invOne.client = "yoshi"; //readonly can't change
// //inv.details // private we can't accesses
// invTwo.amount = 400;
// console.log(invoices);
// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format());
// })
