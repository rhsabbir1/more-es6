const student = [{ id: 5, name: 'Sabbir', roll: 214 }]

// console.log(student[0].name);
// console.log(student[0].roll);

const data = {
    count: 5000,
    data: [
        { id: 15, name: 'Abul', job: 'Leader' },
        { id: 12, name: 'bbul', job: 'Leader' }
    ],
}

// console.log(data.data[0].name)

const user = {
    id: 102,
    name: 'Thomas',
    address: {
        street: {
            first :'35/5 a kochukhat',
            second : 'Thired Floer',
            thired : 'On Saide'
        },
        postOffice: 'Jamalpur',
        city: 'Dhaka'
    },
    
}

const userFlore = user?.address?.street?.second;
console.log(userFlore)