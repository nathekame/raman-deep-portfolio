const config = {
    // backendUrl: 'http://localhost:5000',
   // backendUrl: 'https://3.222.54.162:5000',
  
   
   // backendUrl: 'https://143.110.230.201',
   // MAIL_URL: process.env.EMAIL_SERVICE_URL,
   // MAIL_URL: 'https://3.216.111.17/api/email/',
   MAIL_URL: 'https://18.235.92.120/api/email/',
  //  SERVICE_URL: 'https://18.235.92.120',
  //  API_KEY: process.env.EMAIL_API_KEY,
 
   API_KEY: process.env.EMAIL_API_KEY || 'NS.Yx*hKHE9yM++FSiJgynArja&aU%w0b#XfCb-EGfJOJ=',
  //  API_KEY: 'NS.Yx*hKHE9yM++FSiJgynArja&aU%w0b#XfCb-EGfJOJ=',
   frontendUrl: process.env.BASE_URL || 'http://localhost:3000',
   jwtKey: process.env.JWT_KEY || 'fdivjijvmperd',
   EMAIL_SENDER: 'n.athekame@gmail.com', 
   EMAIL_RECEIVER: 'n.athekame@gmail.com', 
 
 };
 
 export default config;
 