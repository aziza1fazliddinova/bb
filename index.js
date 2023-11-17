// let people =[
//   {
//     name:'bobur',
//     age:43,
//     isMarried:false,
//     wifes:['kamila','safir','allayor']
//   },
//   {
//     name:'ismoil',
//     age:12,
//     isMarried:true,
//     wifes:['nikita','malika']
//   },
//   {
//     name:'allayor',
//     age:14,
//     isMarried:true,
//     wifes:['denis','dima','dimon','xorazmbegi']
//   },
//   {
//     name:'sardor ml',
//     age:18,
//     isMarried:false,
//     wifes:['sofiya']
//   },
//   {
//     name:'artem',
//     age:14,
//     isMarried:false,
//     wifes:['luisa']
//   },
//   {
//     name:'abduxafiz',
//     age:17,
//     isMarried:true,
//     wifes:['rayxona','marjona','ekaterina']
//   },
//   {
//     name:'safir',
//     age:13,
//     isMarried:true,
//     wifes:['alex']
//   }
// ]
// let guitles =[]
// let ne_vinoven=[]

// for(let item of people){
//   if (item.age >17) {
//     people.filter=item.wifes.length<1
//     guitles.push(item)
//   }else{
//     ne_vinoven.push(item)
//   }
// }
// console.table(guitles)

// console.table(ne_vinoven)



// let products = [
//   {
//    name: "moloko",
//    type: "milk",
//    price: 12000
//   },
//   {
//    name: "apple",
//    type: "fruit",
//    price: 20000
//   },
//   {
//    name: "sakura",
//    type: "alcohol",
//    price: 20000
//   },
//   {
//    name: "yogurt",
//    type: "milk",
//    price: 8000
//   },
//   {
//    name: "banan",
//    type: "fruit",
//    price: 25000
//   },
//   {
//    name: "pivo",
//    type: "alcohol",
//    price: 14000
//   },
//   {
//    name: "tvorog",
//    type: "milk",
//    price: 11000
//   },
//   {
//    name: "alphapvp",
//    type: "alcohol",
//    price: 80000
//   },
//   {
//    name: "konyak AMIR",
//    type: "alcohol",
//    price: 1000
//   },
//   {
//    name: "smetana",
//    type: "milk",
//    price: 12500
//   }
// ]


// let categories = [
//    {
//        type: "milk",
//        amount: 0
//    },
//    {
//        type: "alcohol",
//        amount: 0
//    },
//    {
//        type: "fruit",
//        amount: 0
//    },
// ]


// let arr = [
//     {
//         id: Math.random(),
//         name: 'Timur',
//         info: {
//             school: '235',
//             faculity: 'SMM'
//         }
//     },
//     {
//         id: Math.random(),
//         name: 'Imran',
//         info: {
//             school: 'ne izvestno',
//             faculity: 'programming'
//         }
//     },
//     {
//         id: Math.random(),
//         name: 'Aminjon',
//         info: {
//             school: '444',
//             faculity: 'Dizayn'
//         }
//     },
//     {
//         id: Math.random(),
//         name: 'Maxmud',
//         info: {
//             school: '777',
//             faculity: '3dsmax'
//         }
//     },
//     {
//         id: Math.random(),
//         name: 'Muxammad',
//         info: {
//             school: '5555',
//             faculity: 'Backend'
//         }
//     },
//     {
//         id: Math.random(),
//         name: 'Timur',
//         info: {
//             school: '235',
//             faculity: 'SMM'
//         }
//     },
//     {
//         id: Math.random(),
//         name: 'Imran',
//         info: {
//             school: 'ne izvestno',
//             faculity: 'programming'
//         }
//     },
//     {
//         id: Math.random(),
//         name: 'Aminjon',
//         info: {
//             school: '444',
//             faculity: 'Dizayn'
//         }
//     },
//     {
//         id: Math.random(),
//         name: 'Maxmud',
//         info: {
//             school: '777',
//             faculity: '3dsmax'
//         }
//     },

//     {
//         id: Math.random(),
//         name: 'Maxmud',
//         info: {
//             school: '777',
//             faculity: '3dsmax'
//         }
//     },
//     {
//         id: Math.random(),
//         name: 'Muxammad',
//         info: {
//             school: '5555',
//             faculity: 'Backend'
//         }
//     }
// ]

// let categories = [
//     {
//         course: ' SMM',
//         count: 0
//     },
//     {
//         course: 'PROGRAMMING',
//         count: 0
//     },
//     {
//         course: '     3DSMAX',
//         count: 0
//     },
//     {
//         course: ' DIZAYN',
//         count: 0
//     },
//     {
//         course: '   BACKEND',
//         count: 0
//     },
// ]

// for (let i = 0; i < arr.length;
//     i++) {
//     let student = arr[i];
//     let faculty = student.info.faculity.trim().toUpperCase();
//     let category = categories.find(categ => categ.course.trim() === faculty);
//     if (category) {
//         category.count++;
//     }
// }

// console.table(categories);

// //Метод find() возвращает значение первого найденного в массиве элемента, 
// //которое удовлетворяет условию переданному в callback функции. В противном случае возвращается undefiend


let companies = [
    {
        id: Math.random(),
        name: "wepro",
        tax: 12,
        budget: 10000,
        expensesPerYear: [4000, 2000, 3000] 
    },
    {
        id: Math.random(),
        name: 'Allayor',
        tax: 12,
        budget: 200,
        expensesPerYear: [150, 300, 700]
    },
    {
        id: Math.random(),
        name: "Daler-Xrust",
        tax: 10,
        budget: 50000,
        expensesPerYear: [12000, 20000, 5000]
    },
    {
        id: Math.random(),
        name: 'Luchshiy Productoviy',
        tax: 20,
        budget: 23000,
        expensesPerYear: [2000, 1000, 5000]
    },
    {
        id: Math.random(),
        name: "dilrukh salon",
        tax: 4,
        budget: 32000,
        expensesPerYear: [12000, 10000, 10000]
    },
    {
        id: Math.random(),
        name: "Necromantiya",
        tax: 10,
        budget: 30000,
        expensesPerYear: [1200,3444,4666]
    },
    {
        id:Math.random(),
        name:'Artyomida.uz',
        tax:15,
        budget:100000,
        expensesPerYear:[10000,3000,90000]
    },
    {
        id: Math.random(),
        name: "bmw",
        tax: 13, 
        budget: 13000, 
        expensesPerYear: [3000, 4000, 1000]
    },
    {
        id: Math.random(),
        name: "dizayner",
        tax: 12,
        budget: 20000,
        expensesPerYear: [1000, 100, 200]
    },
    {
        id:Math.random(),
        name: 'Amerika_cherez_mexika',
        tax: 0,
        budget: 15000,
        expensesPerYear: [100,4000]
    },
    {
        id: Math.random(),
        name: 'Gradus MMM',
        tax: 12,
        budget: 250000,
        expensesPerYear: [20000, 50000, 15000]
    },
    {
        id:Math.random(),
        name:"Tangir Company",
        tax: 100,
        budget: 1000000,
        expensesPerYear: [10000,12000,20000]
    },
    {
        id: Math.random(),
        name: "film_for_adults",
        tax: 75,
        budget: 50000,
        expensesPerYear: [15000, 10000, 5000]
    }
]

for(let item of companies) {
    item.expensesPerMonth = 0
    for(let num of item.expensesPerYear) {
        item.expensesPerMonth +=  num /12 
        let tax_sum = item. tax * (item. budget / 12) / 100
        item.total = Math.round((item.budget/12) - (item.expensesPerMonth+ tax_sum))
     
    }
}

let profitableCompanies = []
let unprofitableCompanies = []

for (let item of companies) {
    if (item.total > 0) {
        profitableCompanies.push(item)
    } else {
        unprofitableCompanies.push(item)
    }
}

console.log("Прибыльные компании:", profitableCompanies)
console.log("Убыточные компании:", unprofitableCompanies)
