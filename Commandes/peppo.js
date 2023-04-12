const Discord = require("discord.js")

module.exports = {
    name:"peppo",
    description:"Affiche le numéro et le Facebook de la magnifique pizz Peppo's",
    permission: "Aucune",
    dm: true,
    

    async run(bot, message) {

        await message.reply(`
        05 61 01 89 93
https://www.facebook.com/Peppospizzza/?locale=fr_FR`)
    }
}
