let people =[
  {
    name:'bobur',
    age:43,
    isMarried:false,
    wifes:['kamila','safir','allayor']
  },
  {
    name:'ismoil',
    age:12,
    isMarried:true,
    wifes:['nikita','malika']
  },
  {
    name:'allayor',
    age:14,
    isMarried:true,
    wifes:['denis','dima','dimon','xorazmbegi']
  },
  {
    name:'sardor ml',
    age:18,
    isMarried:false,
    wifes:['sofiya']
  },
  {
    name:'artem',
    age:14,
    isMarried:false,
    wifes:['luisa']
  },
  {
    name:'abduxafiz',
    age:17,
    isMarried:true,
    wifes:['rayxona','marjona','ekaterina']
  },
  {
    name:'safir',
    age:13,
    isMarried:true,
    wifes:['alex']
  }
]
let guitles =[]
let ne_vinoven=[]

for(let item of people){
  if (item.age >17) {
    people.filter=item.wifes.length<1
    guitles.push(item)
  }else{
    ne_vinoven.push(item)
  }
}
console.table(guitles)

console.table(ne_vinoven)