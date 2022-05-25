const axios = require("axios");
const cheerio = require("cheerio");

const url = "https://www.reddit.com/r/cscareerquestions/";

async function run() {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const activity = $(
      'div[data-testid="subreddit-sidebar"] div:first-child div:last-child div:nth-child(2) div:nth-child(2)'
    ).get()[0];
    const num = $(activity).text().replaceAll("Online", "").replaceAll(",", "");
    console.log(num);
  } catch (err) {
    console.log(err.message);
  }
}

run();
