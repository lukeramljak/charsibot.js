# charsibot.js

## Overview

charsibot.js is a Discord bot used in [Charsibel](https://twitch.tv/charsibel)'s server. This is not a general purpose bot, and is intended to be used in a specific server.

## Installation

1. Clone the repository: `git clone https://github.com/lukeramljak/charsibot.js.git`
2. Install dependencies: `npm install`
3. Create an `.env` file using the provided `.env.example`
4. During development, use `npm run dev` to trigger a reload on save
5. Run the bot: `npm run start`

## Managing with PM2 on a server

1. Install PM2 globally (if not already installed): `npm install -g pm2`
2. Start the bot with PM2: `pm2 start index.js --name charsibot`
3. To view logs: `pm2 logs charsibot`
4. To stop the bot: `pm2 stop charsibot`
5. To restart the bot: `pm2 restart charsibot`
6. To view all running processes: `pm2 list`
