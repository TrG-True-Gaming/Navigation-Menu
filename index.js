import { world, system } from "@minecraft/server"
import { ActionFormData, ModelFormData } from "@minecraft/server-ui"

world.beforeEvents.itemUse.subscribe(data => {
    let player = data.source
    let title = "§l§tTrG Navigation Menu"
    if (data.itemStack.typeId == "minecraft:compass") system.run(() => main(player))

        function main() {
            const form = new ActionFormData()
            .title(title)
            .body(`${player.nameTag}, this is the TrG navigation menu where you will find everything you'll need.`)
            .button(`§l§bWarps\n§7[ click to open warps menu ]`)
            .button(`§l§aShop\n§7[ click to open shop menu ]`)
            .button(`§l§2Bank\n§7[ click to open your bank ]`)
            .button(`§l§eCasino\n§7[ click to teleport ]`)
            .button(`§l§cDaily Rewards\n§7[ click to view daily rewards ]`)
            .button(`§l§5Seasonal Event\n§7[ click to teleport ]`)
            .button(`§l§9Miscellaneous\n§7[ click to open ]`)
        form.show(player).then(r => {
            if (r.selection == 0) Warps(player)
            if (r.selection == 1) Shop(player)
            if (r.selection == 2) Bank(player)
            if (r.selection == 3) Casino(player)
            if (r.selection == 4) DailyRewards(player)
            if (r.selection == 5) SeasonalEvent(player)
            if (r.selection == 6) Miscellaneous(player)
        })
        }

        function Warps() {
            new ActionFormData()
            .title("Warps")
            .button(`§l§6Game Menu\n§7[ click to open menu ]`)
            .button(`§l§3Quests\n§7[ click to teleport to quests ]`)
            .button(`§l§dCrates\n§7[ click to teleport to crates ]`)
            .button(`§l§5Parkor\n§7[ click to teleport to parkor ]`)
            .button(`§l§4Wa§crz§4on§ce\n§7[ Click to teleport to the warzone ]`)
            .button(`§l§9Back To Spawn\n§7[ Click to go to spawn ]`)
            .button(`§l§cBack`)
            .show(player).then(r => {
            if (r.selection == 1) {
                player.runCommamdAsync("tp @s -405 -28 159")
            }
            if (r.selection == 2) {
                player.runCommamdAsync("tp @s 84 -53 -14")
            }
            if (r.selection == 3) {
                player.runCommamdAsync("tp @s -347 -26 -119")
            }
            if (r.selection == 4) {
                player.runCommamdAsync("tp @s -2 -56 41")
            }
            if (r.selection == 5) {
                player.runCommamdAsync("tp @s -2 -56 41")
            }
            if (r.selection == 6) main(player)
        })
    }
})