const Discord = require("discord.js")
const loadSlashCommands = require("../Loader/loadSlashCommands")
const mysql = require("mysql");

module.exports = async bot => {

    await loadSlashCommands(bot)

    console.log(`${bot.user.tag} est en ligne`)

    //Connexion à la BD
    const mysqlconnexion = mysql.createConnection({
        host: 'localhost',
        database: 'db_bot',
        user:'root',
        password:''
    })
    //test connexion
    mysqlconnexion.connect(function(err) {
        if (err) {
          console.error('error connecting: ' + err.stack);
          return;
        }
       
        console.log('La connexion à la DB a bien été effectuée');
      });

}
