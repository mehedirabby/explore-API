const user ={
    id:1,
    name:'aamir khan',
    job:'Actor'
}
//JAVA Script object notation(JSON)
const stringifyed =JSON.stringify(user)
// console.log(user);
// console.log(stringifyed);


const shop =
{
    owner:'alia',
    address:{
        street: 'kochukhet vooter goli',
        city: 'Dhaka',
        country:'Bangladesh'
    },
    products:['laptop','mic','monitor','keyboard'],
    revenue:45000,
    isOpen:true,
    isNew:false
}

console.log(shop);

const shopJson = JSON.stringify(shop);
console.log(shopJson);

const shopObj = JSON.parse(shopJson);
console.log(shopObj);