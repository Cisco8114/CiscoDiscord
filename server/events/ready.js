/**
 * This file is part of CiscoDsicord.
 * Copyright (C) 2021 Cisco Modifications / Cisco8114
 * source: <https://github.com/cisco8114/ciscodiscord>
 *
 * This work is licensed under the Creative Commons
 * Attribution-NonCommercial-ShareAlike 4.0 International License.
 * To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/
 * or send a letter to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.
 */

module.exports = {
    name: "ready",
    once: true,
    run: async (client) => {
        if (client.config.EnableDiscordSlashCommands) {
            const guild = client.guilds.cache.get(client.config.DiscordGuildId);
            if (!guild) return client.utils.log.error("DISCORD SERVER NOT FOUND - Is your config for 'DiscordGuildId' set correctly?");
            await guild.commands.set(client.arrayOfCommands).catch((error) => client.utils.log.handler("error", error));
        }
        if (client.config.EnableBotStatusMessages && client.config.BotStatusMessages) statusUpdater(client);
        client.utils.log.info(`Logged in as ${client.user.tag}`);
        client.utils.log.info("Enjoying CiscoDiscord? Consider supporting it at https://cash.app/$Cisco8114 or paypal.me/ PAYPAL Coming Soon <3");
        emit("CiscoDiscord:ready");
    },
};

async function statusUpdater(client) {
    setInterval(function() {
        try {
            const msg = client.utils.replaceGlobals(client, client.config.BotStatusMessages[Math.floor(Math.random() * client.config.BotStatusMessages.length)]);
            client.user.setActivity({ name: msg, type: "PLAYING" });
        } catch (e) {
            // Just gonna void these errors..
        }
    }, 20000);
}
