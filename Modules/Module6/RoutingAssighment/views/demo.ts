
//arrow funtion difference
// let People = {
//     person : "asdf",
//     age : 12,
//     info : function() {

//      // logs People
//     console.log(this)

//     setTimeout(()=> {
//         // here this!=People
//         console.log(this.age)
//       }, 3000);
//     }
// } 
// // let person1 = new People('John', 21);

// // logs : undefined is undefined years old after 3 seconds
// People.info()

//call
// let obj = {
//     name:"apple",
//     myFun:function(){
//         console.log('obj fun')
//     }
// }

// let obj2 = {
//     vilg:"asd",

// }
// obj.myFun()
// obj.myFun.call(obj2)


// let obj = {
//     name:"asdf",

// }
// let myFun = function(vilg,name){
//     console.log("outside funciton"+vilg+name)
// }
// myFun.apply(obj,[" banali"," bapuso"])

// let mybindobj = myFun.bind(obj,"asdf","asdf")
// console.log(mybindobj);
// mybindobj();


async function myFun(){
    console.log("A");
    console.log("B");
    setTimeout(function(){
        console.log("Callback return")
    },2000);
    console.log("C");
    console.log("D");
    
}
myFun().then(function(){
    console.log("Yes")
}).catch(function(){
    console.log("No")
})




// let myPromise = new Promise(function(resolve,reject){
//     let i = 101;
//     if(i===10){
//         resolve("Promise resolved successfulyy..");
//     }
//     else{
//         reject();
//     }

// })
// myPromise
// .then((res)=>console.log(res))
// .catch(()=>console.log("rejcet"))