const Discord = require("discord.js")
const mysql = require("mysql");
const { ActionRowBuilder, EmbedBuilder, Events, StringSelectMenuBuilder } = require('discord.js');

module.exports = {
    name:"voir-rappel",
    description:"Permet de voir les mémo",
    permission: "Aucune",
    dm: true,
    

    async run(bot, message) {

        //Connexion à la BD
        const mysqlconnexion = mysql.createConnection({
        host: 'localhost',
        database: 'db_bot',
        user:'root',
        password:''
    })

        

    const userId = message.user.id;
    const user = await bot.users.fetch(userId);

    mysqlconnexion.query('SELECT Nom, Sujet FROM memo WHERE idU = ?', [userId], function (error, results, fields) {
        
        if (error) throw error;

            var i = 0;

            while (i < results.length) {
                    
                const embed = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle(results[i]['Nom'])
                .setDescription(results[i]['Sujet']);

                user.send({embeds: [embed]});
                i++;         
                }
    });

        

        await message.reply("Vos mémo ont bien été envoyé :thumbsup:")
        
        
    }
}