const axios = require("axios");
const cheerio = require("cheerio");

const url =
  "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries";

async function run() {
  try {
    const { data } = await axios.get(url);
    console.log(data);
    const $ = cheerio.load(data);
    console.log($("h3").get());
  } catch (err) {
    console.log(err.message);
  }
}

run();
