const Discord = require("discord.js")
const loadSlashCommands = require("../Loader/loadSlashCommands")
// const axios = require('axios').default;

module.exports = async bot => {

    await loadSlashCommands(bot)

    console.log(`${bot.user.tag} est en ligne`)

    // setInterval(function(){
                
    //     const channelID = "1067828598335098942"
    //     var date = new Date();
    //     // console.log('Bip')

    //     const api = axios.get('http://127.0.0.1:8000/api/reminders/current',{
    //         headers: {
    //            'Authorization': 'Basic Ym90OmJvdA=='
    //        }
    //     })
        
    //         .then(response => {

    //             if (response.data !== null){
    //                 bot.channels.cache.get(channelID).send(response.data.message);
    //             }
    //             else{
    //                 console.log("Aucun rappel");
    //             }
                

    //         })
        
    //         .catch(error => {
    //             console.error(error);
    //         });
    // }, 60000)


}
