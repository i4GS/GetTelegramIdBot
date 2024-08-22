const TelegramBot = require('node-telegram-bot-api');

// Replace with your actual bot token and username
const token = 'BOT_TOKEN_HERE';
const botUsername = 'BOT_USERNAME_HERE';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

function escapeMarkdownV2(text) {
    return text.replace(/([_*[\]()~`>#+\-=|{}.!\\])/g, '\\$1');
}

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;
    const username = msg.from.username ? `@${escapeMarkdownV2(msg.from.username)}` : 'N/A';
    const firstName = escapeMarkdownV2(msg.from.first_name || '');
    const lastName = escapeMarkdownV2(msg.from.last_name || '');
    const fullName = `${firstName} ${lastName}`.trim();

    let text = msg.text ? msg.text.trim().toLowerCase() : '';

    if (text.startsWith(`/id@${botUsername.toLowerCase()}`)) {
        text = '/id';
    }

    // Check if the message is either /id, /id@botUsername, or id
    if (text === '/id' || text === 'id') {
        let response = '';

        if (msg.chat.type === 'private') {
            // Private chat: Display user details
            response = `*User ID*: \`${userId}\`\n` +
                `*Username*: ${username}\n` +
                `*Name*: ${fullName}\n\n` +
                `📍 code by i4.GS`;
        } else if (msg.chat.type === 'group' || msg.chat.type === 'supergroup') {
            // Group chat: Display user and group details
            const chatTitle = escapeMarkdownV2(msg.chat.title);
            response = `*User ID*: \`${userId}\`\n` +
                `*Username*: ${username}\n` +
                `*Name*: ${fullName}\n\n` +
                `*Chat ID*: \`${chatId}\`\n` +
                `*Group Name*: ${chatTitle}\n\n` +
                `📍 code by i4.GS`;
        }

        // Send the response with MarkdownV2 formatting (click to auto copy)
        bot.sendMessage(chatId, response, { parse_mode: 'MarkdownV2' });
    }
});

console.log('Get Telegram ID Bot is start running now !');
