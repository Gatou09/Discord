const Discord = require("discord.js")
const intents = new Discord.IntentsBitField(3276799)
const bot = new Discord.Client({ intents })
const loadCommands = require("./Loader/loadCommands")
const loadEvents = require("./Loader/loadEvents")
const config = require("./config")
const { ActionRowBuilder, Events, ModalBuilder, TextInputBuilder, TextInputStyle, StringSelectMenuBuilder, } = require('discord.js');
// const axios = require('axios').default;

bot.commands = new Discord.Collection()

bot.login(config.token)
loadCommands(bot)
loadEvents(bot)


bot.on("messageCreate", async message => {


})



// bot.on(Events.InteractionCreate, async interaction => {
// 	if (!interaction.isModalSubmit()) return;

// 	if (interaction.customId === 'Rappel') {

// 		await interaction.reply({content: "Le rappel a bien été enregistré :thumbsup:", ephemeral: true })
// 	}

// 	const dateRappel = interaction.fields.getTextInputValue('dateRappel');
// 	const sujetRappel = interaction.fields.getTextInputValue('sujetRappel');
// 	const recurrence = interaction.fields.getTextInputValue('recurrence');
// 	const userId = interaction.user.id;

// 	console.log(dateRappel, sujetRappel, userId, recurrence);

// 	const api = axios.post('http://127.0.0.1:8000/api/reminders',
// 		{
// 			type: "rappel",
// 			message: sujetRappel,
// 			date: "2023-02-17 11:07:00",
// 			recurrence: "hebdomadaire",
// 			userId: "tata"
// 		},
// 		{ 
// 			headers: 
// 			{
// 			'Authorization': 'Basic Ym90OmJvdA=='
// 			}
// 		}
// 	)
	
// 	const user = await bot.users.fetch(userId);
// 	user.send(sujetRappel);
// });	

