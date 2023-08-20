--[[
 - This file is part of ciscodiscord.
 - Copyright (C) 2021 Cisco Modifications/Cisco8114
 - source: <https://github.com/cisco8114/ciscodiscord>
 -
 - This work is licensed under the Creative Commons
 - Attribution-NonCommercial-ShareAlike 4.0 International License.
 - To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/
 - or send a letter to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.
--]]

fx_version "cerulean"
games { "gta5" }

author "zfbx"
description "Discord bot allowlist and more"
repository "https://github.com/cisco8114/ciscodiscord"
version "7.3.0"
license "CC-BY-NC-SA-4.0"
lua54 'yes'

server_script "server/server.js"
client_script "client/client.lua"

dependencies {
    '/server:4890', -- Node16+
    'yarn',
}
