import type { CommandInteraction } from "discord.js";
import { Discord, Slash } from "discordx";

import getPadoru from "../lib/padoru.js";

@Discord()
export class General {
  @Slash({
    description: "Hashire sori yo kaze no you ni tsukimihara wo Padoru Padoru",
    name: "padoru",
  })
  async padoru(interaction: CommandInteraction): Promise<void> {
    const { data, status } = await getPadoru();

    await interaction.reply(
      data.results[Math.floor(Math.random() * 10)].media[0].gif.url
    );
  }
}
