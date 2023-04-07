import {Cameras } from "../models/cameras.js";
import { CameraNetworks } from "../models/cameranetworks.js";

export const camCreate = async (req, res) => {
  try{
    const  { name, description, url }= req.body
    const payload ={name,description,url }
    console.log('sssfss',payload)
    const create = await Cameras.create(payload);
    res.status(200).json({ data: create })
}
catch(error){
    console.log(error)

}
  };


  export const camUpdate= async (req, res) => {
    try{
        const { id, name, description, url }= req.body
        console.log(id)
        const payload ={ name:name,description:description,url:url }
        const create = await Cameras.update(payload,{where:{id:id}});
        res.status(200).json({ data: create })
  }
  catch(error){
      console.log(error)
  
  }
    };


    export const camGetOne= async (req, res) => {
        try{
          
          const id=req.body.id;
          const create = await Cameras.findOne({where:{id:id}});
          res.status(200).json({ data: create })
      }
      catch(error){
          console.log(error)
      
      }
        };
  

        export const camgetall = async (req, res) => {
            try{ 
              
              const create = await Cameras.findAll();
              res.status(200).json({ data: create })
          }
          catch(error){
              console.log(error)
          
          }
            };

            export const camDelete = async (req, res) => {
                try{ 
                  
                  const id=req.body.id;
                  const create = await Cameras.update({deletedAt: new Date()},{where:{id:id}});
                  const network = await CameraNetworks.update({deletedAt: new Date()},{where:{cameras:id}});
                  res.status(200).json({ data: "deleted" })
              }
              catch(error){
                  console.log(error)
              
              }
                }; 