
// const fs =require("fs")
// fs.writeFileSync("eman.txt","eman elsayed")
// // console.log(fs.readFileSync("eman.txt").toString())
// fs.appendFileSync("eman.txt"," , mariam elsayed")
//  console.log(fs.readFileSync("eman.txt").toString())

/////////////////////////////////////////////////////
// const x=require("./allData")
// console.log(x.fname)
// console.log(x.lname)
// console.log(x.city)
// console.log(x.fun1(4,3))

/////////////////////////
// const validator=require("validator")
// // console.log(validator.isEmail("eman"))
// console.log(validator.isEmail("eman@gmail.com"))
//////////////////////////////////////////////////////////////
//   console.log(process.argv[2])
// const x= process.argv[2]
// if( x==="add"){
//     console.log("you added an item")
// }
// else if(x==="delete"){
//     console.log("you deleted an item")
// }
// else {
//     console.log("error")
// }

// console.log(process.argv)
/////////////////////////////////////////
const yargs= require ("yargs")
// console.log(yargs.argv)
// yargs.command({
//     command:"add",
//     describe:"to add an item",
//     builder:{
//         fname:{
//             describe:"this is the first name in add command",
//             demandOption : true,
//             ttpe:"string"
//         },
//         lname:{
//             describe:"this is the last command in add command",
//             demandOption:true,
//             type:"string"

//         }

//     },
//     handler:()=>{
//         console.log("you have already added an item")
//     }
    

    
// })
// console.log(yargs.argv)

const data10=require("./data10")
yargs.command({
    command : "add" ,
    describe : " to add an item",
    builder : {
      fname : {
         describe :"this is the first name desc in add command",
         demandOption : true ,
         type : "string"
      },
      lname : {
         describe :"this is the last name desc in add command",
         demandOption : true ,
         type : "string"
      }

    },
    handler : (x)=> {
    //    console.log("you have already added an item")
    data10.addperson(x.id,x.fname,x.lname,x.city)
    }
})
// console.log(yargs.argv)
//////////////////
yargs.command({
   command:"delete",
   describe:"to delete an item",
   handler:(x)=>{
data10.deleteData(x.id)
   }
})
yargs.parse()
///////////////////////////
yargs.command({
   command:"read",
   describe:"to add an item",
   builder:{
      id:{
         describe:"This is id in read command",
         demandOption:true,
         type:"string"
      }
   },
   handler:(x)=>{
data10.ReadData(x.id)
   }
})
// yargs.parse()
//////////////////////////
//list data
yargs.command({
   command:"list",
   describe:"to list specific data",
   handler:()=>{
      data10.ListData()
   }
})

yargs.parse()













// const person1 = {
//     fname:"eman",
//     lname:"elsayed",
//     city:"damietta"

// }
// console.log(person1.city)
// console.log(person1.fname)
// console.log(person1.lname)

// const person1Json=JSON.stringify(person1)
// console.log(person1Json)
// const person1Obj=JSON.parse(person1Json)
// console.log(person1Obj)

// const fs=require("fs")
// fs.writeFileSync("data10.json",person1Json)

//////////////////////////////////////////////////////////////////////////////////////


