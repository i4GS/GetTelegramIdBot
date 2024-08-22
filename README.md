# Get Telegram ID Bot

A simple Telegram bot that retrieves and displays a user's Telegram ID, Username, and Name when they send the `/id` command. It also provides group details when used in a group chat. This bot is built using the `node-telegram-bot-api` library and supports MarkdownV2 formatting.

## Description

This bot is designed to help users quickly get their Telegram User ID, Username, and Name. In group chats, it additionally displays the Group ID and Group Name. The bot handles messages with the `/id` command and provides neatly formatted responses using MarkdownV2.

## Features

- **Retrieve User ID:** Get your Telegram User ID by sending the `/id` command.
- **Display Username and Name:** Shows your Telegram Username and Full Name.
- **Group Information:** When used in group chats, it displays Group ID and Group Name.
- **MarkdownV2 Formatting:** Outputs are formatted using MarkdownV2 for clarity.

## Usage

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/i4GS/GetTelegramIdBot.git
    ```

2. **Navigate to the Project Directory:**
    ```bash
    cd GetTelegramIdBot
    ```

3. **Install Dependencies:**
    ```bash
    npm install
    ```

4. **Configure the Bot:**
    - Replace `BOT_TOKEN_HERE` with your actual Telegram bot token.
    - Replace `BOT_USERNAME_HERE` with your bot's username.

5. **Start the Bot:**
    ```bash
    node index.js
    ```

6. **Interact with the Bot:**
    - Send `/id` in a private chat to retrieve your User ID, Username, and Name.
    - Send `/id` in a group chat to retrieve your User ID, Username, Name, Group ID, and Group Name.

## Deployment

To deploy this bot:

1. **Prepare Your Server:**
   Ensure you have Node.js and npm installed on your server.

2. **Upload the Files:**
   Transfer the project files to your server.

3. **Install Dependencies:**
    ```bash
    npm install
    ```

4. **Configure the Bot:**
   - Edit the `bot.js` file to include your bot's token and username.

5. **Start the Bot:**
    ```bash
    node bot.js
    ```

## Dependencies

- [node-telegram-bot-api](https://github.com/yagop/node-telegram-bot-api) - A Node.js module to interact with the official Telegram Bot API


## Contact

For any questions or suggestions, please reach out to admin@i4.gs or open an issue on this [GitHub repository](https://github.com/i4GS/GetTelegramIdBot).
