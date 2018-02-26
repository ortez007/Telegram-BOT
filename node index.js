const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '517895758:AAHo_YwJVayge-P6GiYYw2ybe8xtwRCGbZQ';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"

class BOT {
  init(TOKEN){
 return new Promise((resolve, reject) => {
   let url = `https://api.telegram.org/bot${517895758:AAHo_YwJVayge-P6GiYYw2ybe8xtwRCGbZQ}/getMe`
   request(url, (error, r, body) => {
     const response = JSON.parse(body).result
     if(error) return
     if(!response) return
     this.id = response.id || ''
     this.first_name = response.first_name || ''
     this.last_name = response.last_name || ''
     this.username = response.username || ''
     this.language_code = response.language_code || ''
     resolve()
   })
 })
}
getName(){
if(this.last_name){
 return `${this.first_name} ${this.last_name}`
}
else{
 return `${this.first_name}`
}
}
introduceYourself(){
console.log(`Hello, my name is ${this.getName()}. You can talk to me through my username: @${this.username}`);
}
}
}

TOKEN = '517895758:AAHo_YwJVayge-P6GiYYw2ybe8xtwRCGbZQ'
const b = new Bot()
b.init(TOKEN).then(() => {
 b.introduceYourself()
})
