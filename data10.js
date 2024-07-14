const fs=require("fs")

const addperson=(id,fname,lname,city)=>{
const allData=loadInfo()
const duplicatedData=allData.filter((obj)=>{

    return obj.id===id
}


)
if ( duplicatedData.length==0){
    allData.push({
        id:id,
        fname : fname,
        lname : lname,
        city:city
       
      }
    )
    saveAllData(allData)
    
    
}
else{
    console.log("Error Duplicated Data")
}




}









// /////////////////////////////////////////////////////
const loadInfo=() =>{
    try{
const datajson=fs.readFileSync("data10.json").toString()
return JSON.parse(datajson)
    }
    catch{
        return[]
    }
}
// ////////////////////////////////////
const saveAllData=(allData)=>{
const saveDatajson=JSON.stringify(allData)
fs.writeFileSync("data10.json", saveDatajson)
}

//////////////////////////////////////////////////////////////

 ////To Delete Data

 const deleteData=(id)=>{
const allData =loadInfo()
const DataToKeep=allData.filter((obj)=>{
return  obj.id!==id
})
// console.log(DataToKeep)
saveAllData(DataToKeep)
 }
///////////////////////////////
//To Read Data
const ReadData=(id)=>{
    const allData=loadInfo()
    const itemNeeded= allData.find((obj)=>{
        return obj.id==id
        
    })
    // console.log(itemNeeded)
    if(itemNeeded){
        console.log(itemNeeded)
    }
    else{
        console.log("ID Needed Not Found")
    }
    

    
}
/////////////////////////
//To list Data
const ListData=(id)=>{
    const allData=loadInfo()
    allData.forEach((obj) => {
        console.log(obj.fname,obj.lname)
    });
}



module.exports = {
    addperson,
    deleteData,
    ReadData,
    ListData
    
}
