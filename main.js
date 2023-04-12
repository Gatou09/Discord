const Discord = require("discord.js")
const intents = new Discord.IntentsBitField(3276799)
const bot = new Discord.Client({ intents })
const loadCommands = require("./Loader/loadCommands")
const loadEvents = require("./Loader/loadEvents")
const config = require("./config")
const { ActionRowBuilder, Events, ModalBuilder, TextInputBuilder, TextInputStyle, StringSelectMenuBuilder, } = require('discord.js');

bot.commands = new Discord.Collection()

bot.login(config.token)
loadCommands(bot)
loadEvents(bot)


bot.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isModalSubmit()) return;

	if (interaction.customId === 'Mémo') {

		await interaction.reply({content: "Le rappel a bien été enregistré :thumbsup:", ephemeral: true })
	}

	const dateRappel = interaction.fields.getTextInputValue('memo');
	const sujetRappel = interaction.fields.getTextInputValue('sujetMemo');
	const userId = interaction.user.id;

	console.log(dateRappel, sujetRappel, userId);
	
	const user = await bot.users.fetch(userId);
	user.send(sujetRappel);
});	

