const axios = require("axios");
const cheerio = require("cheerio");

const urls = [
  "https://www.reddit.com/r/cscareerquestions/",
  "https://www.reddit.com/r/webdev/",
];

async function run() {
  const data = await Promise.all(
    urls.map(async (url) => {
      try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        const activity = $(
          'div[data-testid="subreddit-sidebar"] div:first-child div:last-child div:nth-child(2) div:nth-child(2)'
        ).get()[0];
        const num = $(activity)
          .text()
          .replaceAll("Online", "")
          .replaceAll(",", "");
        console.log(num);
        return { [url]: num };
      } catch (err) {
        return { [url]: null };
        console.log(err.message);
      }
    })
  );
  console.log(data);
}

run();
