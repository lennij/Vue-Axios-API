<template>
  <div class="container">
    <input type="text" v-model="playerName" @keyup.enter="getPlayerInfo(playerName)"
    placeholder="enter player name" />
    <button @click="getPlayerInfo(playerName)">Show player info</button>
    <div class="extra-container">

      <section v-if="errored">
        Error: Can't retrieve info at the moment...
      </section>

      <section v-else="">
        <div v-if="loading">Waiting for input...</div>
        <div v-else>
          <div v-if="playerInfoResponseLogo != ''">
            <h3>Player Logo:</h3>
            <img v-bind:src= "playerInfoResponseLogo">
            <h3>EntityName: {{playerInfoResponse.EntityName}}</h3>
            <h3>DisplayName: {{playerInfoResponse.DisplayName}}</h3>
          </div>
        </div>
        <div v-if="playerInfoResponse !=''">
          <br/><br/>
          {{playerInfoResponse}}
        </div>
      </section>

    </div>
  </div>
</template>

<script>
import axios from 'axios';
import {MOGUL_ARENA_API_ENDPOINT_URI} from '../ConfigurationVariables';
import {getPlayerInfo} from '../services/PlayerService';

  export default{
    name: 'player-info',
    playerName: 'konayuki',
    data(){
      return{
        playerName: 'konayuki',
        playerInfoResponseLogo : '',
        playerInfoResponse: '',
        loading: true,
        errored: false,
      }
    },
   //  mounted (){
   //    getPlayerInfo(playerName)
   //    .then(response => {
   //        this.playerInfoResponse = response.data.Response;
   //        this.playerInfoResponseLogo = response.data.Response.LogoUrl;
   //      })
   //    .catch(err =>{
   //       this.errored = true;
   //  })
   //   .finally(() => this.loading = false);
   // },
    methods:{
      getPlayerInfo(playerName){
        if(playerName != ''){

          return new Promise((resolve, reject) => {
            axios.get(MOGUL_ARENA_API_ENDPOINT_URI + 'api/Player/' + playerName)

             .then((response) => {
               if(!response.data.Success){
                 reject(response);
               }else{
                 resolve(this.playerInfoResponseLogo = response.data.Response.LogoUrl);
                 resolve(this.playerInfoResponse = response.data.Response);
               }
            })
            .catch(err => {
                console.error('An error occured while fetching the player info');
                console.error(err);
                reject(err);
                this.errored = true;
            })
            .finally(() => this.loading = false);
          });

          } else{
              this.playerInfoResponse = '...enter playername like "lennij" or "konayuki"';
              this.loading = true;
          }
        },
      },
    }
</script>


<style>
.container{
  width:100%;
  background-color:#efefef;
  border:1px solid #cdcdcd;
  border-radius: 5px;
  padding:10px;
}

.container input, button{
  padding:5px;
}


.extra-container{
  width:90%;
  padding:10px;
  margin:10px;
  background-color: #ffffff;
  border-radius: 5px;
}



</style>
