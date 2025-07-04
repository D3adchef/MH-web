import React from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';

import config from './chatbot/config';
import MessageParser from './chatbot/MessageParser';
import ActionProvider from './chatbot/ActionProvider';

const ChatBot = () => (
  <div className="chatbot-container fixed-bottom end-0 p-3" style={{ maxWidth: '370px' }}>
    <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
  </div>
);

export default ChatBot;
