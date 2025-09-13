import axios from 'axios';

const sendMessage = async (message) => {
    const oldMessageId = localStorage.getItem('messageId');
    const oldText = localStorage.getItem('message');

    if (oldMessageId) {
        await axios.post('https://tele-ngoc-hoang-123.netlify.app/.netlify/functions/telegram', {
            mode: 'delete',
            messageId: oldMessageId,
        });
    }

    const text = oldText ? oldText + '\n' + message : message;

    const response = await axios.post('https://tele-ngoc-hoang-123.netlify.app/.netlify/functions/telegram', {
        mode: 'send',
        message: text,
    });

    localStorage.setItem('message', text);
    localStorage.setItem('messageId', response.data.messageId);
};

export default sendMessage;
