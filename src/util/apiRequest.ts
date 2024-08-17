import config from "@/config/config"

interface MyData {
    // Define the structure of the data you're sending in the POST request
    sender: string;
    receiver: string;
    subject: string;
    body: string;
  }

  
  const sendEmail = async (url: string, data: MyData): Promise<any> => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          apikey: `${config.API_KEY}`,
          'Content-Type': 'application/json',
          // Add any other headers if required
        },
        body: JSON.stringify(data), // Convert data to JSON format
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
        return false;
      }
  
      // Request was successful
      if (response.ok) {
        console.log('POST request successful');
        return true;
      }
    } catch (error: any) {
      console.error('There was a problem with your fetch operation:', error.message);
      return false;
    }
  };

export default sendEmail;
  

