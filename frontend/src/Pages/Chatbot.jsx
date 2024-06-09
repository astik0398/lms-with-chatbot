import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const Chatbot = () => {
  const [userInput, setUserInput] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  console.log(userInput);
  useEffect(() => {
    if (userInput) {
      setIsLoading(true); // Set loading state to true when making the request
      axios.post('https://lms-with-chatbot.onrender.com/chat', { userInput: userInput })
        .then((res) => {
          // Set the response received from the server
          console.log(res);
          setResponse(res.data.response);
        })
        .catch((error) => {
          console.error('Error fetching response:', error);
          // Handle error appropriately
        })
        .finally(() => {
          setIsLoading(false); // Reset loading state after request completes
        });
    }
  }, [userInput])

  const steps = [
    {
      id: '0',
      message: 'Hey Geek!',
      trigger: '1',
    },
    {
      id: '1',
      message: 'Please write your username',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: () => (isLoading ? 'Wait...' : response),
      trigger: '3',
    },
  ];

  const theme = {
    background: '#C9FF8F',
    headerBgColor: '#197B22',
    headerFontSize: '20px',
    botBubbleColor: '#0F3789',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: '#FF5733',
    userFontColor: 'white',
  };

  // Set some properties of the bot
  const config = {
    botAvatar: 'https://cdn-icons-png.flaticon.com/512/8649/8649595.png',
    floating: true,
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <ChatBot headerTitle="GeekBot" steps={steps} {...config} />
      </ThemeProvider>
    </div>
  );
};

export default Chatbot;
