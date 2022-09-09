import axios from "axios";

export interface GetLogInBody {
        emailId:string,
        password:string

}

export const  getLogIn = async (body:any)=>{

        const url =' http://localhost:5000/users/signin';
        const response =await  axios.post(url,body)
              .then( (response)=> {
                const formatResponse = JSON.parse(JSON.stringify(response));
                 return formatResponse;
              })
              .catch((error)=> {
                console.log(error);
              })
       
  
           
       return response;
        
}

