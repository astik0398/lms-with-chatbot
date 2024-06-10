import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const Chatbot = () => {

  // const [userInput, setUserInput] = useState('');
  // const [response, setResponse] = useState('');
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   if (userInput) {
  //     setIsLoading(true)
  //     axios.post('https://lms-with-chatbot.onrender.com/chat', { userInput: userInput })
  //       .then((res) => {
  //         console.log(res);
  //         setResponse(res.data.response);
  //       })
  //       .catch((error) => {
  //         console.error('Error fetching response:', error);
  //       })
  //       .finally(() => {
  //         setIsLoading(false)
  //       });
  //   }
  // }, [userInput])

  const theme = {
    background: 'rgb(201, 255, 143)',
    headerBgColor: '#197B22',
    headerFontSize: '18px',
    botBubbleColor: '#0F3789',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: '#FF5733',
    userFontColor: 'white',
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
      <ChatBot
      
  steps={[
    {
      id: '1',
      message: 'Hey there! Im Nichole, here to assist you with everything at Edu Junction. To get started, please enter your name. Thanks!',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      validator: (value) => {
        if (!value) {
          return 'Please Enter Your Name';
        }
        return true;
      },
      trigger: '3',
    },
    {
      id: '3',
      message: 'Hi {previousValue}, nice to meet you! What can I help you with ?',
      trigger: '4',
    },
    {
      id: '4',
      options: [
        { value: 1, label: 'Courses', trigger: '5' },
        { value: 2, label: 'About Edu Junction', trigger: '6' },
      ],
    },
    {
      id: '5',
        message: 'Currently we are offering upto 5 courses but many courses are comming up very soon.',
    },
    {
      id: '6',
        message: 'Edu Junction is a learning management system where user can enroll in variety of courses and level up their skills.',
        end: true,
    }
  ]}
  floating = {true}
  botAvatar = 'https://cdn-icons-png.flaticon.com/512/8649/8649595.png'
  headerTitle='Edu_Junction Support'
/>
      </ThemeProvider>
    </div>
  );
};

export default Chatbot;
