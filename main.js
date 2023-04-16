const Discord = require("discord.js")
const intents = new Discord.IntentsBitField(3276799)
const bot = new Discord.Client({ intents })
const loadCommands = require("./Loader/loadCommands")
const loadEvents = require("./Loader/loadEvents")
const config = require("./config")
const {Events} = require('discord.js');
const mysql = require("mysql");

bot.commands = new Discord.Collection()

bot.login(config.token)
loadCommands(bot)
loadEvents(bot)


bot.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isModalSubmit()) return;

	if (interaction.customId === 'Mémo') {

		await interaction.reply({content: "Le rappel a bien été enregistré :thumbsup:", ephemeral: true })
	}

	const nom = interaction.fields.getTextInputValue('memo');
	const sujetRappel = interaction.fields.getTextInputValue('sujetMemo');
	const userId = interaction.user.id;

	console.log(nom, sujetRappel, userId);

     //Connexion à la BD
    const mysqlconnexion = mysql.createConnection({
        host: 'localhost',
        database: 'db_bot',
        user:'root',
        password:''
    })
    //requete insertion données 
    var post  = {Nom: nom, Sujet: sujetRappel, idU: userId};
    var query = mysqlconnexion.query('INSERT INTO memo SET ?', post, function (error, results, fields) {
    if (error) throw error;
    });
    console.log(query.sql);
});	

