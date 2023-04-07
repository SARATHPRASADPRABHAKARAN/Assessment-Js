import { CameraNetworks } from "../models/cameranetworks.js";



export const createNetwork = async (req, res) => {
  try{
    const { name, descriptions, cameras }= req.body
    const payload ={ name,descriptions,cameras }
    const create = await CameraNetworks.create(payload);
    res.status(200).json({ data: create })
}
catch(error){
    console.log(error)

}
  };


  export const netWorkUpdate= async (req, res) => {
    try{
        const { id, name, descriptions, cameras }= req.body
        const payload ={ name,descriptions,cameras }
        const create = await CameraNetworks.update(payload,{where:{id:id}});
        res.status(200).json({ data: create })
  }
  catch(error){
      console.log(error)
  
  }
    };


    export const getOneNetwork = async (req, res) => {
        try{
          
          const id=req.body.id;
          const create = await CameraNetworks.findOne({where:{id:id}});
          res.status(200).json({ data: create })
      }
      catch(error){
          console.log(error)
      
      }
        };
  

        export const allNetwork = async (req, res) => {
            try{ 
              
              const create = await CameraNetworks.findAll();
              res.status(200).json({ data: create })
          }
          catch(error){
              console.log(error)
          
          }
            };

            export const Delete = async (req, res) => {
                try{ 
                  
                  const id=req.body.id;
                  const create = await CameraNetworks.update({deletedAt: new Date()},{where:{id:id}});
                  res.status(200).json({ data: "network deleted"})
              }
              catch(error){
                  console.log(error)
              
              }
                };