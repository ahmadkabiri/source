

// MUTABILITY = قابلیت تغییر دارد  primitive data types

// IMMUTABILITY  = قابلیت تغییر ندارد =>تا حد امکان از این استفاده کنیم و دیتاهای ما تغییر داده نشن و دست نخورده بمونن



let numberOne = 20 ;


let loginFlag = false ;

let user1 = {
    id:1 ,
    userName : 'amin' ,
    age : 22 
}

let user2 = user1 ;

user2.username = 'qadir'

console.log(user1) ;
console.log(user2) ;

let names = ['ali','amin','amir','sasan']


let filteresNames = names.filter(name=>name.length>3)


console.log(names)





