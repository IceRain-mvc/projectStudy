'use strict';

const Controller = require('egg').Controller;

let superAgent = require("superagent");
let cheerio = require("cheerio");

function getHotNews(text) {
    let hotNews = [];
    /*cheerio选择器对象  $("div#pane_news ul li a")*/
    /*text: html*/
    let $ = cheerio.load(text);
    $("div#pane-news ul li a").each((index, element) => {
        let news = {
            title: $(element).text(),
            href: $(element).attr("href")
        };
        hotNews.push(news);
    });
    return hotNews;
}

class HomeController extends Controller {
    async index() {
        const {ctx} = this;
        ctx.body = 'hi, egg';

        let result = await new Promise(((resolve, reject) => {
            superAgent.get("http://news.baidu.com/").end((err, res) => {
                let hotNews = [];
                if (err) {
                    console.log(err);
                    reject(err)
                } else {
                    // console.log(res.text);
                    hotNews = getHotNews(res.text);
                    resolve(hotNews);

                }
            });
        }));
        ctx.body = {
            result
        }
    }
}

module.exports = HomeController;
