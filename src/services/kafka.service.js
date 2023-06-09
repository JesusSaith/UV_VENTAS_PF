
class KafkaService {
   //url = 'https://kafka-express-deployment-service-jesussaith.cloud.okteto.net/';
   url = 'https://kafka-express-deployment-service-jesussaith.cloud.okteto.net/';
  
   reaction = async (userid, objectid, reactionid) => {
      await fetch(this.url + 'reaction?userid=' + userid+'&objectid='+objectid +'&reactionid='+reactionid, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
  
    comment = async (userid, objectid, message) => {
      await fetch(this.url + 'comments?userid=' + userid+'&objectid='+objectid +'&message='+message, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
  }
  
  const kafkaService = new KafkaService();
  export default kafkaService; 
   
   
 