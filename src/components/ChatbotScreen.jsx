import React, { useState, useCallback } from 'react';
import { View, SafeAreaView } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { v4 as uuidv4 } from 'uuid';

const ChatbotScreen = ({ navigation }) => {
  const [messages, setMessages] = useState([
    {
      _id: uuidv4(),
      text: 'Hello! How can I help you today?',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'Bot',
      },
    },
  ]);

  const onSend = useCallback((newMessages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, newMessages)
    );

    // Simulating a bot response
    setTimeout(() => {
      const botReply = {
        _id: uuidv4(),
        text: `You said: "${newMessages[0].text}"`,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Bot',
        },
      };
      setMessages((prevMessages) => GiftedChat.append(prevMessages, [botReply]));
    }, 1000);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{ _id: 1 }}
      />
    </SafeAreaView>
  );
};

export default ChatbotScreen;
