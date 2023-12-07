import axios from "axios";

export const save = async(data: { firstName:String; lastName:String; gender:String; phoneNumber:String; email:String; password:String; })=>{ 

       return axios({
        method: 'post',
        url: 'http://192.168.1.48:8081/onlinelearning/signup',
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': "*"
        },
        data:data,
        timeout: 5000, // Set a timeout of 5 seconds (adjust as needed)
      })
        .then((response) => {
          console.log(response.data);
          return response.data
      
        })
        .catch((error) => {

          console.log(data);
          console.error('Error:', error);    
          if (error.response) {
            alert(error.response.data);
            console.log('Response data:', error.response.data);
            console.log('Response status:', error.response.status);
          }     
      });  

}

export const loginAction = async(data: {userEmail: String; userPassword: String; })=>{ 

    return axios({
     method: 'post',
     url: 'http://192.168.1.48:8081/onlinelearning/Login',
     headers: { 
       'Content-Type': 'application/json',
       'Access-Control-Allow-Origin': "*"
     },
     data:data,
     timeout: 5000, 
   })
     .then((response) => {

       return response.data;

     })
}

export const logoutAction = async(data:String)=>{ 

  return axios({
   method: 'delete',
   url: `http://192.168.1.48:8081/onlinelearning/logout/${data}`,
   headers: { 
     'Content-Type': 'application/json',
     'Access-Control-Allow-Origin': "*"
   },
   data:data,
   timeout: 5000, 
 })
   .then((response) => {

     return response.data;

   })
}

export const forgotAction = async(data: {email: String; })=>{ 

    axios({
     method: 'post',
     url: 'http://192.168.1.48:8081/onlinelearning/forgot-password',
     headers: { 
       'Content-Type': 'application/json',
       'Access-Control-Allow-Origin': "*"
     },
     data:data,
     timeout: 5000, 
   })
     .then((response) => {

       console.log(response.data);
       alert(response.data);
     })
     .catch((error) => {
       console.error('Error:', error);    
       if (error.response) {
         alert(error.response.data);
         console.log('Response data:', error.response.data);
         console.log('Response status:', error.response.status);
       }     
   });  
}

export const resetAction = async(data:{token:String;password:String;})=>{ 

    axios({
     method: 'post',
     url: 'http://192.168.1.48:8081/onlinelearning/reset-password',
     headers: { 
       'Content-Type': 'application/json',
       'Access-Control-Allow-Origin': "*"
     },
     data:data,
     timeout: 5000, 
   })
     .then((response) => {

       console.log(response.data);
       alert(response.data);
     })
     .catch((error) => {
       console.error('Error:', error);    
       if (error.response) {
         alert(error.response.data);
         console.log('Response data:', error.response.data);
         console.log('Response status:', error.response.status);
       }     
   });  
}

