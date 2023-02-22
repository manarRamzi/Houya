import axios from "axios";
import dataBuild from "../Data.json"
export const GetAPI = async () => {
    var data
 
    try {
        const resp = await axios({
            method: "get",
            url: './Data.json',
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*',
            },
          });
       
         data=resp.data || []
        
    } catch (err) {
        // to solve duild run error
        data=dataBuild
     console.log(err)
    }
    return {data};
  };