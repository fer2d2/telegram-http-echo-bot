# Telegram HTTP echo bot

This bot allows broadcasting HTTP requests sent to a little web service to Telegram conversations.
It can be used as an *echo* service for your applications to send notices to subscribed users
through Telegram.

## Quick start

1. Install dependencies

```sh
npm install
```

2. Copy `config.json.tpl` to `config.json`

```sh
cp config.json.tpl config.json
```

2. Add your [BotFather](https://core.telegram.org/bots#6-botfather) token to `config.json`.
3. Run the application:

```sh
npm run-script serve
```

This will run an HTTP server in port 3030.

4. Add the bot to your Telegram chat
5. Register your chat with the bot command `/register`
4. Test your application

```sh
curl -X POST \
  http://localhost:3030/broadcast \
  -H 'accept: application/json' \
  -H 'content-type: application/json' \
  -d '{
	"msg": "This is an example message from your telegram bot"
}'
```