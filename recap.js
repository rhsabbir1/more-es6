// use var ler const 
var number = 5;
number = 7

// const name = 'sabbir';
// name = ' Sajjad' const is not reassing

let sellary = 1000;
sellary = 5000;

// 3. Defualt paramiter
const cal = (sallary, tax = 0.5, bonus = 0) => {
    const total = sallary + tax + bonus;
    return total;
}

const totalSellary = cal(sellary)
// console.log(totalSellary)

// 3. template string 
const elements = `
<div>
<p>Home : </p>
<p>Address :</p>
<p>Sellary : ${cal(1200)}</p>
<p>Sellary : ${number}</p>
</div>
`;

// 4 . Arrow function 
const duboleIT = x => x * 2;

// 5. Spred Oparator 
const ages = [12, 25, 18, 33, 41, 20];
const newAges = [...ages, 21, 25, 29];

// .6 Destructureing

// Object destructure --name case sensitive 
const student = {
    id: 120,
    name: 'Hashim',
    phn: 014554564,
    address: 'Jamalpur Town'
}

const { id, phn, name, address } = student;

// Array destructure --serial maintaines
const number = [12, 22];
const [first, second] = number;



