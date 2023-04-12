const Discord = require("discord.js")
const { ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle} = require('discord.js');

module.exports = {
    name:"rappel-perso",
    description:"Stock un rappel et le renvoie en MP",
    permission: "Aucune",
    dm: true,


    async run(bot, interaction) {

        // Create the modal
		const modal = new ModalBuilder()
			.setCustomId('Mémo')
			.setTitle('Mémo');

		// Add components to modal
		// Create the text input components

		const memo = new TextInputBuilder()
					.setCustomId('memo')
					.setRequired(true)
					.setLabel("Nom")
					.setStyle(TextInputStyle.Short);

		const sujetMemo = new TextInputBuilder()
			.setCustomId('sujetMemo')
            .setRequired(true)
			.setLabel("Sujet du mémo")
			.setStyle(TextInputStyle.Paragraph);

       

		// An action row only holds one text input,
		// so you need one action row per text input.
		const secondActionRow = new ActionRowBuilder().addComponents(sujetMemo);
        const thirdActionRow = new ActionRowBuilder().addComponents(memo);


        modal.addComponents(thirdActionRow, secondActionRow)
        interaction.showModal(modal)
    }
}
