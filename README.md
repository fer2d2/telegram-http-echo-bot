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
cp config.json.tmpl config.json
```

3. Add your [BotFather](https://core.telegram.org/bots#6-botfather) token to `config.json`.
4. Run the application:

```sh
npm run-script serve
```

This will run an HTTP server on port 3030.

5. Register some topics on the server

```sh
curl -X POST \
  http://localhost:3030/topic \
  -H 'accept: application/json' \
  -H 'content-type: application/json' \
  -d '{
	"topic": "sports"
}'
```

```sh
curl -X POST \
  http://localhost:3030/topic \
  -H 'accept: application/json' \
  -H 'content-type: application/json' \
  -d '{
	"topic": "technology"
}'
```

5. Add the bot to your Telegram chat
6. Subscribe to some topics with `/subscribe :topic`, e.g. `/subscribe sports`
7. Start sending messages to subscribed chats:

```sh
curl -X POST \
  http://localhost:3030/broadcast \
  -H 'accept: application/json' \
  -H 'content-type: application/json' \
  -d '{
	"topic": "sports",
	"message": {
		"Title": "Gareth Southgate has paid tribute to former team-mate Ugo Ehiogu",
		"Summary": "England manager Gareth Southgate has paid tribute to Ugo Ehiogu and spoken of the 'true partnership' he shared with his former Aston Villa and Middlesbrough team-mate.",
		"Read more": "http://www.skysports.com/football/news/11095/10845530/gareth-southgate-has-paid-tribute-to-former-team-mate-ugo-ehiogu"
	}
}'
```
