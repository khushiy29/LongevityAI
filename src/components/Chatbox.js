import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const Chatbox = ({ userid, index, status }) => {
  const [chats, setChats] = useState([]);
  const [query, setQuery] = useState('');
  const [queries, setQueries] = useState([]);
  const [file, setFile] = useState(null);
  const chatHistoryRef = useRef(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [hoveredCard, setHoveredCard] = useState(null); // Track the hovered card
  const [hoveredButton, setHoveredButton] = useState(false); // Track hover state for buttons
  const [hoveredFileInput, setHoveredFileInput] = useState(false); // Track hover state for file input label

  const predefinedQueries = [
    'What are the daily responsibilities of an elderly care assistant?',
    'How can I help manage medication for the elderly?',
    'What are the best practices for promoting elderly safety at home?',
    'How to handle emergency situations in elderly care?'
  ];

  useEffect(() => {
    fetchChats();
    fetchQueries();
  }, [index]);

  useEffect(() => {
    if (chatHistoryRef.current) {
      chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
    }
  }, [chats]);

  const fetchChats = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/chats');
      const filteredChats = response.data.filter(chat => chat.userid === userid && chat.index === index);
      console.log(filteredChats);
      
      setChats(filteredChats);
    } catch (error) {
      console.error('Error fetching chats:', error);
      setErrorMessage('Failed to fetch chats. Please try again later.');
    }
  };

  const fetchQueries = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/queries');
      setQueries(response.data);
    } catch (error) {
      console.error('Error fetching queries:', error);
      setErrorMessage('Failed to fetch queries. Please try again later.');
    }
  };

  const handleQuerySubmit = async (e) => {
    e.preventDefault();
    if (!query.trim() && !file) return;

    try {
      if (query.trim()) {
        const newChat = {
          message: query,
          sentbyuser: true,
          created_at: new Date(),
          index: index,
          userid: userid
        };
        await axios.post('http://localhost:5000/api/chats', newChat);
        setChats([...chats, newChat]);

        const newQuery = {
          currQuery: query
        };
        await axios.post('http://localhost:5000/api/queries', newQuery);

        setQuery('');
        await waitForResponse();
        fetchChats();
        setQueries([]);
      }

      if (file) {
        const formData = new FormData();
        formData.append('file', file);

        const response = await axios.post('http://localhost:5000/api/queries/chat-with-document', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        const newChat = {
          message: response.data.response,
          sentbyuser: false,
          created_at: new Date(),
          index: index,
          userid: userid
        };
        await axios.post('http://localhost:5000/api/chats', newChat);
        setChats([...chats, newChat]);
        setFile(null);
        fetchChats();
      }

    } catch (error) {
      console.error('Error submitting query:', error);
      setErrorMessage('Failed to submit your query. Please try again.');
    }
  };

  const waitForResponse = async () => {
    while (true) {
      try {
        const response = await axios.get('http://localhost:5000/api/queries');
        const latestQuery = response.data[response.data.length - 1];
        if (latestQuery) {
          const newChat = {
            message: latestQuery.response,
            sentbyuser: false,
            created_at: new Date(),
            index: index,
            userid: userid
          };
          await axios.post('http://localhost:5000/api/chats', newChat);
          setChats(prevChats => [...prevChats, newChat]);
          await axios.delete('http://localhost:5000/api/queries');
          break;
        }
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (error) {
        console.error('Error waiting for response:', error);
      }
    }
  };

  const handleCardClick = (predefinedQuery) => {
    setQuery(predefinedQuery);
    handleQuerySubmit({ preventDefault: () => {} });
  };

  const handleMouseEnterCard = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeaveCard = () => {
    setHoveredCard(null);
  };

  const handleMouseEnterButton = () => setHoveredButton(true);
  const handleMouseLeaveButton = () => setHoveredButton(false);
  const handleMouseEnterFileInput = () => setHoveredFileInput(true);
  const handleMouseLeaveFileInput = () => setHoveredFileInput(false);

  if (!status) {
    return (
      <div style={styles.container}>
        <div style={styles.messageWrapper}>
          <h2 style={styles.heading}>Please login to chat</h2>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.chatContainer}>
        {errorMessage && <div style={styles.errorMessage}>{errorMessage}</div>}
        {chats.length === 0 ? (
          <div style={styles.emptyStateContainer}>
            <h2>Chat with our AI agent</h2>
            <div style={styles.cardsContainer}>
              {predefinedQueries.map((query, idx) => (
                <div
                  key={idx}
                  style={{
                    ...styles.card,
                    ...(hoveredCard === idx && styles.cardHover),
                  }}
                  onClick={() => handleCardClick(query)}
                  onMouseEnter={() => handleMouseEnterCard(idx)}
                  onMouseLeave={handleMouseLeaveCard}
                >
                  {query}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div style={styles.chatHistory} ref={chatHistoryRef}>
            {chats.map((chat, index) => (
              <div key={index} style={chat.sentbyuser ? styles.userMessage : styles.aiMessage}>
                <div style={chat.sentbyuser ? styles.userMessageContent : styles.aiMessageContent}>
                  <span>{chat.message}</span>
                  {/* Timestamp Display */}
                  <div style={styles.timestamp}>
                    {new Date(chat.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <form onSubmit={handleQuerySubmit} style={styles.form}>
          <input
            style={styles.input}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type your message here..."
          />
          <input
            id="fileInput"
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            style={styles.fileInput}
          />
          <label
            htmlFor="fileInput"
            style={{
              ...styles.fileInputLabel,
              ...(hoveredFileInput && styles.fileInputLabelHover),
            }}
            onMouseEnter={handleMouseEnterFileInput}
            onMouseLeave={handleMouseLeaveFileInput}
          >
            Choose File
          </label>
          <button
            style={{
              ...styles.button,
              ...(hoveredButton && styles.buttonHover),
            }}
            type="submit"
            onMouseEnter={handleMouseEnterButton}
            onMouseLeave={handleMouseLeaveButton}
          >
            <i className="fa fa-arrow-circle-up" aria-hidden="true"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    backgroundColor: 'white',
    padding: '110px 0px 30px 50px',
    color: '#ECECF1',
    fontFamily: 'sans-serif',
  },
  chatContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    maxWidth: '1200px',
    backgroundColor: 'white',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  chatHistory: {
    flex: 1,
    overflowY: 'auto',
    padding: '20px',
  },
  userMessage: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '20px',
  },
  aiMessage: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginBottom: '20px',
  },
  userMessageContent: {
    maxWidth: '70%',
    padding: '10px 15px',
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(180, 180, 180, 0.5)',
    backgroundColor: 'white',
    color: 'black',
    fontWeight: '100',
    fontSize: '20px',
    wordBreak: 'break-word',
  },
  aiMessageContent: {
    maxWidth: '70%',
    padding: '10px 15px',
    borderRadius: '15px',
    boxShadow: '0 2px 4px rgba(2, 151, 255, 0.5)',
    backgroundColor: '#0297FF',
    color: 'white',
    fontWeight: '100',
    fontSize: '20px',
    wordBreak: 'break-word',
  },
  timestamp: {
    marginTop: '5px',
    fontSize: '12px',
    color: '#ccc',
  },
  emptyStateContainer: {
    display: 'flex',
    color: '#ccc',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  cardsContainer: {
    display: 'flex',
    color: 'white',
    flexDirection: 'column',
    marginTop: '20px',
  },
  card: {
    padding: '15px',
    marginBottom: '10px',
    borderRadius: '15px',
    backgroundColor: '#0297FF',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  cardHover: {
    backgroundColor: '#007bff',
  },
  heading: {
    fontSize: '24px',
    color: '#333',
  },
  form: {
    display: 'flex',
    marginTop: '10px',
    padding: '10px',
  },
  input: {
    flex: 1,
    padding: '10px',
    marginRight: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    transition: 'border-color 0.3s',
  },
  fileInput: {
    display: 'none',
  },
  fileInputLabel: {
    padding: '10px 15px',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
    marginRight: '10px',
    display: 'inline-block',
    textAlign: 'center',
    transition: 'background-color 0.3s',
  },
  fileInputLabelHover: {
    backgroundColor: '#0056b3',
  },
  button: {
    padding: '10px 15px',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
  errorMessage: {
    color: 'red',
    marginBottom: '10px',
  },
};

export default Chatbox;
