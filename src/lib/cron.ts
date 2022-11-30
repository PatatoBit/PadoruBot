import { TextChannel } from "discord.js";
import { bot } from "../main.js";
import getPadoru from "./padoru.js";

export default async function cron() {
  const channel = bot.channels.cache.get(
    process.env.CHANNEL_ID!
  ) as TextChannel;

  const { data, status } = await getPadoru();
  console.log(
    "Hashire sori yo kaze no you ni tsukimihara wo Padoru Padoru",
    status
  );
  channel?.send(data.results[Math.floor(Math.random() * 50)].media[0].gif.url);
}
