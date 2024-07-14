const firstName ="eman"
const LastName="elsayed"
const city="Damietta"
function mul(x,y){
console.log(x*y)
}
// module.exports = firstName
// module.exports=city
// module.exports=LastName
module.exports={
    fname:firstName,
    lname:LastName,
    city:city,
    fun1:mul
}
