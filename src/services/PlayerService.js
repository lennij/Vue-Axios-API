import axios from 'axios';
import {MOGUL_ARENA_API_ENDPOINT_URI} from '../ConfigurationVariables';


export function getPlayerInfo(playerName){

  return new Promise((resolve, reject) => {
    axios.get(MOGUL_ARENA_API_ENDPOINT_URI + 'api/Player/' + playerName)

     .then((response) => {
       if(!response.data.Success){
         reject(response);
       }else{
         resolve(response);
       }
    })
    .catch(err => {
        console.error('An error occured while fetching the player info');
        console.error(err);
        reject(err);
    })
  });


    // if(entityName != ''){
    //   // axios.get(MOGUL_ARENA_API_ENDPOINT_URI + 'api/Player/' + entityName)
    //   axios.get(this.api + 'api/Player/' + entityName)
    //
    //    .then((response) => {
    //     console.log(response);
    //     this.playerInfoResponseLogo = response.data.Response.LogoUrl;
    //     this.playerInfoResponse = response.data.Response;
    //
    //   })
    //   .catch(err => {
    //     console.error('An error occured while fetching the player info');
    //     console.error(err);
    //     reject(err);
    //     this.errored = true;
    //   })
    //   .finally(() => this.loading = false);
    // } else{
    //   this.playerInfoResponse = '...enter playername like "lennij" or "konayuki"';
    //   this.loading = true;
    // }

}
