var studentModel = require("../model/student");
var locationModel = require("../model/location");
module.exports = {
    saveStudent : async (req , res )=>{
      try {
        const {StudentId ,Name ,Roll ,Birthday ,Address,hometown} = req.body;
        if (StudentId && Name && Roll && Birthday && Address && hometown){
       
        var student = new studentModel(req.body).save();
        if (!student){
            return res.status(404).send({message : "Something went wrong"})
        }
        return res.status(200).send({message : "Data save successfully"})   
    }else{
        return res.status(400).send({message : "Bad Request"})    
    }
} catch (error) {
       if (error)  return res.status(500).send({message : "Something went wrong" , error})

      }
    },

    getAllStudent : async (req , res )=>{
          try {
            const search = req.query.search ? req.query.search : ""
            // const { sortType , sortBy , search } = req.query ;
            // const sorting = {};
            // if (sortType && sortBy){
            //     if (sortBy == "currentAddress"){
            //         sorting["Address.currentAddress.name"] = sortType ; 
            //     }else{
            //         sorting[sortBy] = sortType ; 

            //     }
            // }
            // const data =  await studentModel.find().sort(sorting);
            const data = await studentModel.aggregate([
                {
                    $match: {
                        $or: [
                            {"hometown": {$regex: search}},
                        ]
                    }
                },
                {"$lookup":{
                  "from":"Students",
                  "localField":"hometown",
                  "foreignField":"name",
                  "as":"result"
                }},
            ])
            if (!data){
                return res.status(404).send({message : "Data not found"})
            }else{
                return res.status(200).send({message : "Data found successfully" , data})
            }
          } catch (error) {
            if (error)  return res.status(500).send({message : "Something went wrong" , error})

          }
    },
    getAllLocations :  async (req , res )=>{
        try {

            const data =  await locationModel.find()
            if (!data){
                return res.status(404).send({message : "Data not found"})
            }else{
                return res.status(200).send({message : "Data found successfully" , data})
            }
          } catch (error) {
            if (error)  return res.status(500).send({message : "Something went wrong" , error})

          }
    }
}