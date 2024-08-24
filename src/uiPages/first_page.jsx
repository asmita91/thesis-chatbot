
// // // // import axios from "axios";
// // // // import "babylonjs-loaders";
// // // // import "pepjs";
// // // // import React, { useEffect, useRef, useState } from "react";
// // // // import { AiOutlineUser } from "react-icons/ai";
// // // // import {
// // // //   FiHeadphones,
// // // //   FiMessageCircle,
// // // //   FiMic,
// // // //   FiSend,
// // // //   FiToggleLeft,
// // // //   FiToggleRight,
// // // //   FiTrash2,
// // // //   FiVolume2,
// // // // } from "react-icons/fi";
// // // // import { Puff } from "react-loader-spinner";
// // // // import Modal from "react-modal";
// // // // import "../App.css";
// // // // Modal.setAppElement("#root"); // Appropriate for accessibility

// // // // // ProfileComponent
// // // // // const ProfileComponent = ({ userData }) => {
// // // // //   if (!userData) {
// // // // //     return <div>Loading...</div>; // Handle loading state
// // // // //   }

// // // // //   const { firstname, lastname, coventryID, courseSlug } = userData;

// // // // //   return (
// // // // //     <aside className="profile-container">
// // // // //       <AiOutlineUser className="profile-icon" />
// // // // //       <h3>{`${firstname} ${lastname}`}</h3>
// // // // //       <p>Course: {courseSlug}</p>
// // // // //       <p>ID: {coventryID}</p>
// // // // //       <div className="avatar-animation-container"></div>
// // // // //     </aside>
// // // // //   );
// // // // // };
// // // // const ProfileComponent = ({ userData }) => {
// // // //   if (!userData) {
// // // //     return <div>Loading...</div>; // Handle loading state
// // // //   }

// // // //   const { firstname, lastname, coventryID, courseSlug, username } = userData;

// // // //   return (
// // // //     <aside className="profile-container">
// // // //       <AiOutlineUser className="profile-icon" />
// // // //       <h3>{`${firstname} ${lastname}`}</h3>
// // // //       <p>Username: {username}</p>
// // // //       <p>Course: {courseSlug}</p>
// // // //       <p>ID: {coventryID}</p>
// // // //       <div className="avatar-animation-container"></div>
// // // //     </aside>
// // // //   );
// // // // };

// // // // // ChatHeaderComponent
// // // // const ChatHeaderComponent = ({
// // // //   isVoiceEnabled,
// // // //   handleOpenModal,
// // // //   handleDeleteChat,
// // // //   handleLogout,
// // // // }) => (
// // // //   <header className="chat-header">
// // // //     <h1>Ask Me - AI Assistant</h1>
// // // //     <div>
// // // //       <span onClick={handleOpenModal}>
// // // //         {isVoiceEnabled ? (
// // // //           <FiToggleRight className="toggle-icon" />
// // // //         ) : (
// // // //           <FiToggleLeft className="toggle-icon" />
// // // //         )}
// // // //         {isVoiceEnabled ? (
// // // //           <FiHeadphones className="delete-chat" />
// // // //         ) : (
// // // //           <FiMessageCircle className="delete-chat" />
// // // //         )}
// // // //       </span>
// // // //       <FiTrash2 className="delete-chat" onClick={handleDeleteChat} />
// // // //       <button onClick={handleLogout} className="logout-button">
// // // //         Logout
// // // //       </button>
// // // //     </div>
// // // //   </header>
// // // // );

// // // // // ChatWindowComponent
// // // // const ChatWindowComponent = ({ messages, handleAudioClick, isLoading }) => {
// // // //   const chatWindowRef = useRef(null);

// // // //   useEffect(() => {
// // // //     if (chatWindowRef.current) {
// // // //       chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
// // // //     }
// // // //   }, [messages]);
// // // //   const renderMessageText = (text) => {
// // // //     const regex = /!\[Generated Image\]\((.*?)\)/g;
// // // //     const match = regex.exec(text);

// // // //     if (match) {
// // // //       const imageUrl = match[1];
// // // //       const textBeforeImage = text.slice(0, match.index);
// // // //       const textAfterImage = text.slice(match.index + match[0].length);

// // // //       return (
// // // //         <div>
// // // //           {textBeforeImage && <span>{textBeforeImage}</span>}
// // // //           <img
// // // //             src={imageUrl}
// // // //             alt="Generated Image"
// // // //             className="rendered-image"
// // // //             width="200px"
// // // //             height="200px"
// // // //           />
// // // //           {textAfterImage && <span>{textAfterImage}</span>}
// // // //         </div>
// // // //       );
// // // //     } else {
// // // //       return <span>{text}</span>;
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="chat-window" ref={chatWindowRef}>
// // // //       {messages.map((message, index) => (
// // // //         <div key={index} className={`message-container ${message.sender}`}>
// // // //           <label className="message-label">
// // // //             {message.sender === "bot" ? "Bot" : "You"}
// // // //           </label>
// // // //           <div className={`message ${message.sender}`}>
// // // //             {renderMessageText(message.text)}
// // // //           </div>
// // // //           {message.sender === "bot" && message.audio && (
// // // //             <div
// // // //               className="audio-icon"
// // // //               onClick={() => handleAudioClick(message.audio)}
// // // //             >
// // // //               <FiVolume2 />
// // // //             </div>
// // // //           )}
// // // //         </div>
// // // //       ))}
// // // //       {isLoading && (
// // // //         <div className="message-container bot">
// // // //           <div className="message bot">
// // // //             <div style={{ display: "flex", alignItems: "center" }}>
// // // //               <Puff
// // // //                 height="20"
// // // //                 width="20"
// // // //                 radius="9"
// // // //                 color="#5d5479"
// // // //                 ariaLabel="loading"
// // // //               />
// // // //               <span style={{ marginLeft: "10px" }}>Generating response...</span>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // // ControlsComponent
// // // // const ControlsComponent = ({
// // // //   isRecording,
// // // //   handleSend,
// // // //   startRecording,
// // // //   stopRecording,
// // // //   setInput,
// // // //   input,
// // // // }) => {
// // // //   const handleKeyPress = (e) => {
// // // //     if (e.key === "Enter") {
// // // //       handleSend();
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="controls">
// // // //       <input
// // // //         type="text"
// // // //         value={input}
// // // //         onChange={(e) => setInput(e.target.value)}
// // // //         onKeyPress={handleKeyPress}
// // // //       />
// // // //       <button style={{ marginRight: "10px" }} onClick={handleSend}>
// // // //         <FiSend />
// // // //       </button>
// // // //       <button
// // // //         onClick={isRecording ? stopRecording : startRecording}
// // // //         className={isRecording ? "recording" : ""}
// // // //       >
// // // //         {isRecording && (
// // // //           <div className="recording-indicator">
// // // //             <div className="bar"></div>
// // // //             <div className="bar"></div>
// // // //             <div className="bar"></div>
// // // //             <div className="bar"></div>
// // // //             <div className="bar"></div>
// // // //           </div>
// // // //         )}
// // // //         <FiMic />
// // // //       </button>
// // // //     </div>
// // // //   );
// // // // };

// // // // // VoiceModalComponent
// // // // const VoiceModalComponent = ({
// // // //   isVoiceEnabled,
// // // //   modalIsOpen,
// // // //   setModalIsOpen,
// // // //   handleToggleVoice,
// // // // }) => (
// // // //   <Modal
// // // //     isOpen={modalIsOpen}
// // // //     onRequestClose={() => setModalIsOpen(false)}
// // // //     contentLabel={isVoiceEnabled ? "Disable Voice Mode" : "Enable Voice Mode"}
// // // //     className="modal"
// // // //     overlayClassName="overlay"
// // // //   >
// // // //     <div className="modal-content">
// // // //       <h2 className="modal-title">
// // // //         {isVoiceEnabled ? "Disable Voice Mode" : "Enable Voice Mode"}
// // // //       </h2>
// // // //       <p className="modal-description">
// // // //         {isVoiceEnabled
// // // //           ? "You are currently in Voice Mode. Would you like to switch to Message Mode?"
// // // //           : "You are currently in Message Mode. Would you like to switch to Voice Mode?"}
// // // //       </p>
// // // //       <div className="modal-actions">
// // // //         <button onClick={handleToggleVoice} className="modal-button">
// // // //           {isVoiceEnabled ? "Switch to Message" : "Switch to Voice"}
// // // //         </button>
// // // //         <button
// // // //           onClick={() => setModalIsOpen(false)}
// // // //           className="modal-button cancel"
// // // //         >
// // // //           Cancel
// // // //         </button>
// // // //       </div>
// // // //     </div>
// // // //   </Modal>
// // // // );

// // // // function Chat() {
// // // //   const [messages, setMessages] = useState([]);
// // // //   const [input, setInput] = useState("");
// // // //   const [isVoiceEnabled, setIsVoiceEnabled] = useState(false);
// // // //   const [modalIsOpen, setModalIsOpen] = useState(false);
// // // //   const [isRecording, setIsRecording] = useState(false);
// // // //   const [isLoading, setIsLoading] = useState(false);
// // // //   const [isAudioLoading, setIsAudioLoading] = useState(false); // New state for audio loading
// // // //   const [userData, setUserData] = useState(null); // State to store user data
// // // //   const mediaRecorderRef = useRef(null);
// // // //   const audioChunksRef = useRef([]);
// // // //   const [audioUrl, setAudioUrl] = useState(null);
// // // //   const token = localStorage.getItem("access_token");
// // // //   console.log("token getitem is", token);

// // // //   useEffect(() => {
// // // //     // Fetch user data after login
// // // //     axios
// // // //       .get("http://127.0.0.1:8000/api/user_data/", {
// // // //         headers: {
// // // //           Authorization: `Bearer ${token}`,
// // // //         },
// // // //       })
// // // //       .then((response) => {
// // // //         console.log("User Data:", response.data);
// // // //         setUserData(response.data); // Store user data in state
// // // //       })
// // // //       .catch((error) => {
// // // //         console.error("Error fetching user data:", error);
// // // //       });
// // // //   }, []);

// // // //   const handleLogout = () => {
// // // //     const refreshToken = localStorage.getItem("refreshToken");

// // // //     if (!refreshToken) {
// // // //       console.error("Refresh token is missing.");
// // // //       return;
// // // //     }

// // // //     axios
// // // //       .post(
// // // //         "http://127.0.0.1:8000/api/logout/",
// // // //         {
// // // //           refresh_token: refreshToken,
// // // //         },
// // // //         {
// // // //           headers: {
// // // //             "Content-Type": "application/json",
// // // //           },
// // // //         }
// // // //       )
// // // //       .then((response) => {
// // // //         console.log("Logged out successfully:", response.data);
// // // //         // Clear tokens and user data
// // // //         localStorage.removeItem("accessToken");
// // // //         localStorage.removeItem("refreshToken");
// // // //         setUserData(null);
// // // //         window.location.href = "/login";
// // // //       })
// // // //       .catch((error) => {
// // // //         console.error("Error during logout:", error);
// // // //       });
// // // //   };

// // // //   const handleAudioClick = (audioUrl) => {
// // // //     console.log("Audio URL: ", audioUrl);
// // // //     const audioElement = document.getElementById("audio-element");
// // // //     if (audioElement) {
// // // //       audioElement.src = audioUrl;
// // // //       audioElement
// // // //         .play()
// // // //         .catch((error) => console.log("Error playing audio:", error));
// // // //     }
// // // //   };

// // // //   const handleToggleVoice = () => {
// // // //     setIsVoiceEnabled((prev) => !prev);
// // // //     setModalIsOpen(false);
// // // //   };

// // // //   const handleOpenModal = () => {
// // // //     setModalIsOpen(true);
// // // //   };
// // // //   const sendInput = (input) => {
// // // //     const newMessage = { text: input, sender: "user" };
// // // //     setMessages([...messages, newMessage]);
// // // //     setInput("");
// // // //     setIsLoading(true); // Set loading state to true

// // // //     const params = new URLSearchParams({
// // // //       username: userData?.username, // Use the username from userData
// // // //       question: input, // You don't need to send the username in the params
// // // //     });

// // // //     axios
// // // //       .get("http://127.0.0.1:8000/api/get_response/", {
// // // //         params,
// // // //         headers: {
// // // //           Authorization: `Bearer ${token}`, // Retrieve the token from local storage
// // // //         },
// // // //         timeout: 100000,
// // // //       })
// // // //       .then((response) => {
// // // //         console.log(
// // // //           `Current access token: ${localStorage.getItem("accessToken")}`
// // // //         );

// // // //         console.log("server response:", response);
// // // //         const botReply = response.data.response;
// // // //         const audioUrl = response.data.audio;

// // // //         const botMessage = { text: botReply, sender: "bot", audio: audioUrl };

// // // //         if (isVoiceEnabled) {
// // // //           const speech = new SpeechSynthesisUtterance(botReply);
// // // //           window.speechSynthesis.speak(speech);
// // // //         }

// // // //         setMessages((prev) => [...prev, botMessage]);
// // // //         setIsLoading(false); // Set loading state to false
// // // //         setIsAudioLoading(false); // Set audio loading state to false
// // // //       })
// // // //       .catch((error) => {
// // // //         console.error("Error fetching data: ", error);
// // // //         setMessages((prev) => [
// // // //           ...prev,
// // // //           { text: "Failed to fetch response.", sender: "bot" },
// // // //         ]);
// // // //         setIsLoading(false); // Set loading state to false
// // // //         setIsAudioLoading(false); // Set audio loading state to false
// // // //       });
// // // //   };

// // // //   // const sendInput = (input) => {
// // // //   //   const newMessage = { text: input, sender: "user" };
// // // //   //   setMessages([...messages, newMessage]);
// // // //   //   setInput("");
// // // //   //   setIsLoading(true); // Set loading state to true

// // // //   //   const params = new URLSearchParams({
// // // //   //     username: userData?.username, // Use the username from userData
// // // //   //     question: input,
// // // //   //   });

// // // //   //   axios
// // // //   //     .get("http://127.0.0.1:8000/api/get_response/", {
// // // //   //       params,
// // // //   //       headers: {
// // // //   //         Authorization: `Bearer ${localStorage.getItem("accessToken")}`, // Retrieve the token from local storage
// // // //   //       },
// // // //   //       timeout: 10000,
// // // //   //     })
// // // //   //     .then((response) => {
// // // //   //       console.log("server response:", response);
// // // //   //       const botReply = response.data.response;
// // // //   //       const audioUrl = response.data.audio;
// // // //   //       console.log("Audio URL: ", audioUrl);

// // // //   //       const botMessage = { text: botReply, sender: "bot", audio: audioUrl };

// // // //   //       if (isVoiceEnabled) {
// // // //   //         const speech = new SpeechSynthesisUtterance(botReply);
// // // //   //         window.speechSynthesis.speak(speech);
// // // //   //       }

// // // //   //       setMessages((prev) => [...prev, botMessage]);
// // // //   //       setIsLoading(false); // Set loading state to false
// // // //   //       setIsAudioLoading(false); // Set audio loading state to false
// // // //   //     })
// // // //   //     .catch((error) => {
// // // //   //       console.error("Error fetching data: ", error);
// // // //   //       setMessages((prev) => [
// // // //   //         ...prev,
// // // //   //         { text: "Failed to fetch response.", sender: "bot" },
// // // //   //       ]);
// // // //   //       setIsLoading(false); // Set loading state to false
// // // //   //       setIsAudioLoading(false); // Set audio loading state to false
// // // //   //     });
// // // //   // };

// // // //   const handleSend = () => {
// // // //     console.log("Input:", input);
// // // //     if (input.trim() !== "") {
// // // //       sendInput(input);
// // // //     }
// // // //   };

// // // //   const handleDeleteChat = () => {
// // // //     setMessages([]);
// // // //   };

// // // //   const startRecording = async () => {
// // // //     const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
// // // //     mediaRecorderRef.current = new MediaRecorder(stream);
// // // //     mediaRecorderRef.current.ondataavailable = (event) => {
// // // //       audioChunksRef.current.push(event.data);
// // // //     };
// // // //     mediaRecorderRef.current.onstop = async () => {
// // // //       const audioBlob = new Blob(audioChunksRef.current, {
// // // //         type: "audio/mpeg",
// // // //       });
// // // //       const audioUrl = URL.createObjectURL(audioBlob);
// // // //       setAudioUrl(audioUrl);
// // // //       audioChunksRef.current = [];

// // // //       console.log("audioBlob:", audioBlob);

// // // //       const formData = new FormData();
// // // //       formData.append("file", audioBlob, "audio.mp3");

// // // //       for (const pair of formData.entries()) {
// // // //         console.log(`${pair[0]}, ${pair[1]}`);
// // // //       }

// // // //       try {
// // // //         setIsAudioLoading(true); // Set audio loading state to true
// // // //         const response = await axios.post(
// // // //           "http://127.0.0.1:8000/api/upload/",
// // // //           formData,
// // // //           {
// // // //             headers: {
// // // //               "Content-Type": "multipart/form-data",
// // // //             },
// // // //           }
// // // //         );

// // // //         if (response.status === 200) {
// // // //           sendInput(response.data.transcription);
// // // //         } else {
// // // //           alert("Error uploading file:", response);
// // // //         }
// // // //         setIsAudioLoading(false); // Set audio loading state to false
// // // //       } catch (error) {
// // // //         console.error("Error uploading file:", error);
// // // //         setIsAudioLoading(false); // Set audio loading state to false
// // // //       }
// // // //     };
// // // //     mediaRecorderRef.current.start();
// // // //     setIsRecording(true);
// // // //   };

// // // //   const stopRecording = () => {
// // // //     mediaRecorderRef.current.stop();
// // // //     setIsRecording(false);
// // // //   };

// // // //   return (
// // // //     <div className="App">
// // // //       <ProfileComponent userData={userData} />{" "}
// // // //       {/* Pass userData to ProfileComponent */}
// // // //       <main className="chat-main">
// // // //         <ChatHeaderComponent
// // // //           isVoiceEnabled={isVoiceEnabled}
// // // //           handleOpenModal={handleOpenModal}
// // // //           handleDeleteChat={handleDeleteChat}
// // // //           handleLogout={handleLogout} // Pass the logout function
// // // //         />
// // // //         <section className="chat-container">
// // // //           <ChatWindowComponent
// // // //             messages={messages}
// // // //             handleAudioClick={handleAudioClick}
// // // //             isLoading={isLoading}
// // // //           />
// // // //           <ControlsComponent
// // // //             isRecording={isRecording}
// // // //             handleSend={handleSend}
// // // //             startRecording={startRecording}
// // // //             stopRecording={stopRecording}
// // // //             setInput={setInput}
// // // //             input={input}
// // // //           />
// // // //         </section>
// // // //         <audio id="audio-element" controls style={{ display: "none" }}></audio>
// // // //       </main>
// // // //       <VoiceModalComponent
// // // //         isVoiceEnabled={isVoiceEnabled}
// // // //         modalIsOpen={modalIsOpen}
// // // //         setModalIsOpen={setModalIsOpen}
// // // //         handleToggleVoice={handleToggleVoice}
// // // //       />
// // // //       {isAudioLoading && (
// // // //         <div
// // // //           style={{
// // // //             display: "flex",
// // // //             alignItems: "center",
// // // //             justifyContent: "center",
// // // //             marginTop: "10px",
// // // //           }}
// // // //         >
// // // //           <Puff
// // // //             height="30"
// // // //             width="30"
// // // //             radius="9"
// // // //             color="#5d5479"
// // // //             ariaLabel="loading"
// // // //           />
// // // //           <span style={{ marginLeft: "10px" }}>Generating audio...</span>
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }

// // // // export default Chat;




// // // import axios from "axios";
// // // import "babylonjs-loaders";
// // // import "pepjs";
// // // import React, { useEffect, useRef, useState } from "react";
// // // import { AiOutlineUser } from "react-icons/ai";
// // // import {
// // //   FiHeadphones,
// // //   FiMessageCircle,
// // //   FiMic,
// // //   FiSend,
// // //   FiToggleLeft,
// // //   FiToggleRight,
// // //   FiTrash2,
// // //   FiVolume2,
// // // } from "react-icons/fi";
// // // import { Puff } from "react-loader-spinner";
// // // import Modal from "react-modal";
// // // import "../App.css";
// // // Modal.setAppElement("#root"); // Appropriate for accessibility

// // // // ProfileComponent
// // // const ProfileComponent = ({ userData }) => {
// // //   if (!userData) {
// // //     return <div>Loading...</div>; // Handle loading state
// // //   }

// // //   const { firstname, lastname, coventryID, courseSlug, username } = userData;

// // //   return (
// // //     <aside className="profile-container">
// // //       <AiOutlineUser className="profile-icon" />
// // //       <h3>{`${firstname} ${lastname}`}</h3>
// // //       <p>Username: {username}</p>
// // //       <p>Course: {courseSlug}</p>
// // //       <p>ID: {coventryID}</p>
// // //       <div className="avatar-animation-container"></div>
// // //     </aside>
// // //   );
// // // };

// // // // ChatHeaderComponent
// // // const ChatHeaderComponent = ({
// // //   isVoiceEnabled,
// // //   handleOpenModal,
// // //   handleDeleteChat,
// // //   handleLogout,
// // // }) => (
// // //   <header className="chat-header">
// // //     <h1>Ask Me - AI Assistant</h1>
// // //     <div>
// // //       <span onClick={handleOpenModal}>
// // //         {isVoiceEnabled ? (
// // //           <FiToggleRight className="toggle-icon" />
// // //         ) : (
// // //           <FiToggleLeft className="toggle-icon" />
// // //         )}
// // //         {isVoiceEnabled ? (
// // //           <FiHeadphones className="delete-chat" />
// // //         ) : (
// // //           <FiMessageCircle className="delete-chat" />
// // //         )}
// // //       </span>
// // //       <FiTrash2 className="delete-chat" onClick={handleDeleteChat} />
// // //       <button onClick={handleLogout} className="logout-button">
// // //         Logout
// // //       </button>
// // //     </div>
// // //   </header>
// // // );

// // // // ChatWindowComponent
// // // const ChatWindowComponent = ({ messages, handleAudioClick, isLoading }) => {
// // //   const chatWindowRef = useRef(null);

// // //   useEffect(() => {
// // //     if (chatWindowRef.current) {
// // //       chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
// // //     }
// // //   }, [messages]);

// // //   const renderMessageText = (text) => {
// // //     const regex = /!\[Generated Image\]\((.*?)\)/g;
// // //     const match = regex.exec(text);

// // //     if (match) {
// // //       const imageUrl = match[1];
// // //       const textBeforeImage = text.slice(0, match.index);
// // //       const textAfterImage = text.slice(match.index + match[0].length);

// // //       return (
// // //         <div>
// // //           {textBeforeImage && <span>{textBeforeImage}</span>}
// // //           <img
// // //             src={imageUrl}
// // //             alt="Generated Image"
// // //             className="rendered-image"
// // //             width="200px"
// // //             height="200px"
// // //           />
// // //           {textAfterImage && <span>{textAfterImage}</span>}
// // //         </div>
// // //       );
// // //     } else {
// // //       return <span>{text}</span>;
// // //     }
// // //   };

// // //   return (
// // //     <div className="chat-window" ref={chatWindowRef}>
// // //       {messages.map((message, index) => (
// // //         <div key={index} className={`message-container ${message.sender}`}>
// // //           <label className="message-label">
// // //             {message.sender === "bot" ? "Bot" : "You"}
// // //           </label>
// // //           <div className={`message ${message.sender}`}>
// // //             {renderMessageText(message.text)}
// // //           </div>
// // //           {message.sender === "bot" && message.audio && (
// // //             <div
// // //               className="audio-icon"
// // //               onClick={() => handleAudioClick(message.audio)}
// // //             >
// // //               <FiVolume2 />
// // //             </div>
// // //           )}
// // //         </div>
// // //       ))}
// // //       {isLoading && (
// // //         <div className="message-container bot">
// // //           <div className="message bot">
// // //             <div style={{ display: "flex", alignItems: "center" }}>
// // //               <Puff
// // //                 height="20"
// // //                 width="20"
// // //                 radius="9"
// // //                 color="#5d5479"
// // //                 ariaLabel="loading"
// // //               />
// // //               <span style={{ marginLeft: "10px" }}>Generating response...</span>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // // ControlsComponent
// // // const ControlsComponent = ({
// // //   isRecording,
// // //   handleSend,
// // //   startRecording,
// // //   stopRecording,
// // //   setInput,
// // //   input,
// // //   isAudioLoading, // Pass the isAudioLoading prop
// // // }) => {
// // //   const handleKeyPress = (e) => {
// // //     if (e.key === "Enter") {
// // //       handleSend();
// // //     }
// // //   };

// // //   return (
// // //     <div className="controls">
// // //       {isAudioLoading ? ( // Conditional rendering for the loader
// // //         <div style={{ display: "flex", alignItems: "center" }}>
// // //           <Puff
// // //             height="20"
// // //             width="20"
// // //             radius="9"
// // //             color="#5d5479"
// // //             ariaLabel="loading"
// // //           />
// // //           <span style={{ marginLeft: "10px" }}>Generating audio...</span>
// // //         </div>
// // //       ) : (
// // //         <>
// // //           <input
// // //             type="text"
// // //             value={input}
// // //             onChange={(e) => setInput(e.target.value)}
// // //             onKeyPress={handleKeyPress}
// // //           />
// // //           <button style={{ marginRight: "10px" }} onClick={handleSend}>
// // //             <FiSend />
// // //           </button>
// // //           <button
// // //             onClick={isRecording ? stopRecording : startRecording}
// // //             className={isRecording ? "recording" : ""}
// // //           >
// // //             {isRecording && (
// // //               <div className="recording-indicator">
// // //                 <div className="bar"></div>
// // //                 <div className="bar"></div>
// // //                 <div className="bar"></div>
// // //                 <div className="bar"></div>
// // //                 <div className="bar"></div>
// // //               </div>
// // //             )}
// // //             <FiMic />
// // //           </button>
// // //         </>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // // VoiceModalComponent
// // // const VoiceModalComponent = ({
// // //   isVoiceEnabled,
// // //   modalIsOpen,
// // //   setModalIsOpen,
// // //   handleToggleVoice,
// // // }) => (
// // //   <Modal
// // //     isOpen={modalIsOpen}
// // //     onRequestClose={() => setModalIsOpen(false)}
// // //     contentLabel={isVoiceEnabled ? "Disable Voice Mode" : "Enable Voice Mode"}
// // //     className="modal"
// // //     overlayClassName="overlay"
// // //   >
// // //     <div className="modal-content">
// // //       <h2 className="modal-title">
// // //         {isVoiceEnabled ? "Disable Voice Mode" : "Enable Voice Mode"}
// // //       </h2>
// // //       <p className="modal-description">
// // //         {isVoiceEnabled
// // //           ? "You are currently in Voice Mode. Would you like to switch to Message Mode?"
// // //           : "You are currently in Message Mode. Would you like to switch to Voice Mode?"}
// // //       </p>
// // //       <div className="modal-actions">
// // //         <button onClick={handleToggleVoice} className="modal-button">
// // //           {isVoiceEnabled ? "Switch to Message" : "Switch to Voice"}
// // //         </button>
// // //         <button
// // //           onClick={() => setModalIsOpen(false)}
// // //           className="modal-button cancel"
// // //         >
// // //           Cancel
// // //         </button>
// // //       </div>
// // //     </div>
// // //   </Modal>
// // // );

// // // function Chat() {
// // //   const [messages, setMessages] = useState([]);
// // //   const [input, setInput] = useState("");
// // //   const [isVoiceEnabled, setIsVoiceEnabled] = useState(false);
// // //   const [modalIsOpen, setModalIsOpen] = useState(false);
// // //   const [isRecording, setIsRecording] = useState(false);
// // //   const [isLoading, setIsLoading] = useState(false);
// // //   const [isAudioLoading, setIsAudioLoading] = useState(false); // New state for audio loading
// // //   const [userData, setUserData] = useState(null); // State to store user data
// // //   const mediaRecorderRef = useRef(null);
// // //   const audioChunksRef = useRef([]);
// // //   const [audioUrl, setAudioUrl] = useState(null);
// // //   const token = localStorage.getItem("access_token");
// // //   console.log("token getitem is", token);

// // //   useEffect(() => {
// // //     // Fetch user data after login
// // //     axios
// // //       .get("http://127.0.0.1:8000/api/user_data/", {
// // //         headers: {
// // //           Authorization: `Bearer ${token}`,
// // //         },
// // //       })
// // //       .then((response) => {
// // //         console.log("User Data:", response.data);
// // //         setUserData(response.data); // Store user data in state
// // //       })
// // //       .catch((error) => {
// // //         console.error("Error fetching user data:", error);
// // //       });
// // //   }, [token]);

// // //   const handleLogout = () => {
// // //     const refreshToken = localStorage.getItem("refreshToken");

// // //     if (!refreshToken) {
// // //       console.error("Refresh token is missing.");
// // //       return;
// // //     }

// // //     axios
// // //       .post(
// // //         "http://127.0.0.1:8000/api/logout/",
// // //         {
// // //           refresh_token: refreshToken,
// // //         },
// // //         {
// // //           headers: {
// // //             "Content-Type": "application/json",
// // //           },
// // //         }
// // //       )
// // //       .then((response) => {
// // //         console.log("Logged out successfully:", response.data);
// // //         // Clear tokens and user data
// // //         localStorage.removeItem("accessToken");
// // //         localStorage.removeItem("refreshToken");
// // //         setUserData(null);
// // //         window.location.href = "/login";
// // //       })
// // //       .catch((error) => {
// // //         console.error("Error during logout:", error);
// // //       });
// // //   };

// // //   const handleAudioClick = (audioUrl) => {
// // //     console.log("Audio URL: ", audioUrl);
// // //     const audioElement = document.getElementById("audio-element");
// // //     if (audioElement) {
// // //       audioElement.src = audioUrl;
// // //       audioElement
// // //         .play()
// // //         .catch((error) => console.log("Error playing audio:", error));
// // //     }
// // //   };

// // //   const handleToggleVoice = () => {
// // //     setIsVoiceEnabled((prev) => !prev);
// // //     setModalIsOpen(false);
// // //   };

// // //   const handleOpenModal = () => {
// // //     setModalIsOpen(true);
// // //   };

// // //   const sendInput = (input) => {
// // //     const newMessage = { text: input, sender: "user" };
// // //     setMessages([...messages, newMessage]);
// // //     setInput("");
// // //     setIsLoading(true); // Set loading state to true

// // //     const params = new URLSearchParams({
// // //       username: userData?.username, // Use the username from userData
// // //       question: input, // You don't need to send the username in the params
// // //     });

// // //     axios
// // //       .get("http://127.0.0.1:8000/api/get_response/", {
// // //         params,
// // //         headers: {
// // //           Authorization: `Bearer ${token}`, // Retrieve the token from local storage
// // //         },
// // //         timeout: 100000,
// // //       })
// // //       .then((response) => {
// // //         console.log(
// // //           `Current access token: ${localStorage.getItem("accessToken")}`
// // //         );

// // //         console.log("server response:", response);
// // //         const botReply = response.data.response;
// // //         const audioUrl = response.data.audio;

// // //         const botMessage = { text: botReply, sender: "bot", audio: audioUrl };

// // //         if (isVoiceEnabled) {
// // //           const speech = new SpeechSynthesisUtterance(botReply);
// // //           window.speechSynthesis.speak(speech);
// // //         }

// // //         setMessages((prev) => [...prev, botMessage]);
// // //         setIsLoading(false); // Set loading state to false
// // //         setIsAudioLoading(false); // Set audio loading state to false
// // //       })
// // //       .catch((error) => {
// // //         console.error("Error fetching data: ", error);
// // //         setMessages((prev) => [
// // //           ...prev,
// // //           { text: "Failed to fetch response.", sender: "bot" },
// // //         ]);
// // //         setIsLoading(false); // Set loading state to false
// // //         setIsAudioLoading(false); // Set audio loading state to false
// // //       });
// // //   };

// // //   const handleSend = () => {
// // //     console.log("Input:", input);
// // //     if (input.trim() !== "") {
// // //       sendInput(input);
// // //     }
// // //   };

// // //   const handleDeleteChat = () => {
// // //     setMessages([]);
// // //   };

// // //   const startRecording = async () => {
// // //     const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
// // //     mediaRecorderRef.current = new MediaRecorder(stream);
// // //     mediaRecorderRef.current.ondataavailable = (event) => {
// // //       audioChunksRef.current.push(event.data);
// // //     };
// // //     mediaRecorderRef.current.onstop = async () => {
// // //       const audioBlob = new Blob(audioChunksRef.current, {
// // //         type: "audio/mpeg",
// // //       });
// // //       const audioUrl = URL.createObjectURL(audioBlob);
// // //       setAudioUrl(audioUrl);
// // //       audioChunksRef.current = [];

// // //       console.log("audioBlob:", audioBlob);

// // //       const formData = new FormData();
// // //       formData.append("file", audioBlob, "audio.mp3");

// // //       for (const pair of formData.entries()) {
// // //         console.log(`${pair[0]}, ${pair[1]}`);
// // //       }

// // //       try {
// // //         setIsAudioLoading(true); // Set audio loading state to true
// // //         const response = await axios.post(
// // //           "http://127.0.0.1:8000/api/upload/",
// // //           formData,
// // //           {
// // //             headers: {
// // //               "Content-Type": "multipart/form-data",
// // //             },
// // //           }
// // //         );

// // //         if (response.status === 200) {
// // //           sendInput(response.data.transcription);
// // //         } else {
// // //           alert("Error uploading file:", response);
// // //         }
// // //         setIsAudioLoading(false); // Set audio loading state to false
// // //       } catch (error) {
// // //         console.error("Error uploading file:", error);
// // //         setIsAudioLoading(false); // Set audio loading state to false
// // //       }
// // //     };
// // //     mediaRecorderRef.current.start();
// // //     setIsRecording(true);
// // //   };

// // //   const stopRecording = () => {
// // //     mediaRecorderRef.current.stop();
// // //     setIsRecording(false);
// // //   };

// // //   return (
// // //     <div className="App">
// // //       <ProfileComponent userData={userData} />
// // //       {/* Pass userData to ProfileComponent */}
// // //       <main className="chat-main">
// // //         <ChatHeaderComponent
// // //           isVoiceEnabled={isVoiceEnabled}
// // //           handleOpenModal={handleOpenModal}
// // //           handleDeleteChat={handleDeleteChat}
// // //           handleLogout={handleLogout} // Pass the logout function
// // //         />
// // //         <section className="chat-container">
// // //           <ChatWindowComponent
// // //             messages={messages}
// // //             handleAudioClick={handleAudioClick}
// // //             isLoading={isLoading}
// // //           />
// // //           <ControlsComponent
// // //             isRecording={isRecording}
// // //             handleSend={handleSend}
// // //             startRecording={startRecording}
// // //             stopRecording={stopRecording}
// // //             setInput={setInput}
// // //             input={input}
// // //             isAudioLoading={isAudioLoading} // Pass the prop here
// // //           />
// // //         </section>
// // //         <audio id="audio-element" controls style={{ display: "none" }}></audio>
// // //       </main>
// // //       <VoiceModalComponent
// // //         isVoiceEnabled={isVoiceEnabled}
// // //         modalIsOpen={modalIsOpen}
// // //         setModalIsOpen={setModalIsOpen}
// // //         handleToggleVoice={handleToggleVoice}
// // //       />
// // //       {isAudioLoading && (
// // //         <div
// // //           style={{
// // //             display: "flex",
// // //             alignItems: "center",
// // //             justifyContent: "center",
// // //             marginTop: "10px",
// // //           }}
// // //         >
// // //           <Puff
// // //             height="30"
// // //             width="30"
// // //             radius="9"
// // //             color="#5d5479"
// // //             ariaLabel="loading"
// // //           />
// // //           <span style={{ marginLeft: "10px" }}>Generating audio...</span>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }

// // // export default Chat;




// // import axios from "axios";
// // import "babylonjs-loaders";
// // import "pepjs";
// // import React, { useEffect, useRef, useState } from "react";
// // import { AiOutlineUser } from "react-icons/ai";
// // import {
// //   FiHeadphones,
// //   FiMessageCircle,
// //   FiMic,
// //   FiSend,
// //   FiToggleLeft,
// //   FiToggleRight,
// //   FiTrash2,
// //   FiVolume2,
// // } from "react-icons/fi";
// // import { Puff } from "react-loader-spinner";
// // import Modal from "react-modal";
// // import "../App.css";
// // Modal.setAppElement("#root"); // Appropriate for accessibility

// // // ProfileComponent
// // const ProfileComponent = ({ userData }) => {
// //   if (!userData) {
// //     return <div>Loading...</div>; // Handle loading state
// //   }

// //   const { firstname, lastname, coventryID, courseSlug, username } = userData;

// //   return (
// //     <aside className="profile-container">
// //       <AiOutlineUser className="profile-icon" />
// //       <h3>{`${firstname} ${lastname}`}</h3>
// //       <p>Username: {username}</p>
// //       <p>Course: {courseSlug}</p>
// //       <p>ID: {coventryID}</p>
// //       <div className="avatar-animation-container"></div>
// //     </aside>
// //   );
// // };

// // // ChatHeaderComponent
// // const ChatHeaderComponent = ({
// //   isVoiceEnabled,
// //   handleOpenModal,
// //   handleDeleteChat,
// //   handleLogout,
// // }) => (
// //   <header className="chat-header">
// //     <h1>Ask Me - AI Assistant</h1>
// //     <div>
// //       <span onClick={handleOpenModal}>
// //         {isVoiceEnabled ? (
// //           <FiToggleRight className="toggle-icon" />
// //         ) : (
// //           <FiToggleLeft className="toggle-icon" />
// //         )}
// //         {isVoiceEnabled ? (
// //           <FiHeadphones className="delete-chat" />
// //         ) : (
// //           <FiMessageCircle className="delete-chat" />
// //         )}
// //       </span>
// //       <FiTrash2 className="delete-chat" onClick={handleDeleteChat} />
// //       <button onClick={handleLogout} className="logout-button">
// //         Logout
// //       </button>
// //     </div>
// //   </header>
// // );

// // // ChatWindowComponent
// // const ChatWindowComponent = ({ messages, handleAudioClick, isLoading }) => {
// //   const chatWindowRef = useRef(null);

// //   useEffect(() => {
// //     if (chatWindowRef.current) {
// //       chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
// //     }
// //   }, [messages]);

// //   const renderMessageText = (text) => {
// //     const regex = /!\[Generated Image\]\((.*?)\)/g;
// //     const match = regex.exec(text);

// //     if (match) {
// //       const imageUrl = match[1];
// //       const textBeforeImage = text.slice(0, match.index);
// //       const textAfterImage = text.slice(match.index + match[0].length);

// //       return (
// //         <div>
// //           {textBeforeImage && <span>{textBeforeImage}</span>}
// //           <img
// //             src={imageUrl}
// //             alt="Generated Image"
// //             className="rendered-image"
// //             width="200px"
// //             height="200px"
// //           />
// //           {textAfterImage && <span>{textAfterImage}</span>}
// //         </div>
// //       );
// //     } else {
// //       return <span>{text}</span>;
// //     }
// //   };

// //   return (
// //     <div className="chat-window" ref={chatWindowRef}>
// //       {messages.map((message, index) => (
// //         <div key={index} className={`message-container ${message.sender}`}>
// //           <label className="message-label">
// //             {message.sender === "bot" ? "Bot" : "You"}
// //           </label>
// //           <div className={`message ${message.sender}`}>
// //             {renderMessageText(message.text)}
// //           </div>
// //           {message.sender === "bot" && message.audio && (
// //             <div
// //               className="audio-icon"
// //               onClick={() => handleAudioClick(message.audio)}
// //             >
// //               <FiVolume2 />
// //             </div>
// //           )}
// //         </div>
// //       ))}
// //       {isLoading && (
// //         <div className="message-container bot">
// //           <div className="message bot">
// //             <div style={{ display: "flex", alignItems: "center" }}>
// //               <Puff
// //                 height="20"
// //                 width="20"
// //                 radius="9"
// //                 color="#5d5479"
// //                 ariaLabel="loading"
// //               />
// //               <span style={{ marginLeft: "10px" }}>Generating response...</span>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // // ControlsComponent
// // const ControlsComponent = ({
// //   isRecording,
// //   handleSend,
// //   startRecording,
// //   stopRecording,
// //   setInput,
// //   input,
// //   isAudioLoading, // Pass the isAudioLoading prop
// // }) => {
// //   const handleKeyPress = (e) => {
// //     if (e.key === "Enter") {
// //       handleSend();
// //     }
// //   };

// //   return (
// //     <div className="controls">
// //       {isAudioLoading ? ( // Conditional rendering for the loader
// //         <div style={{ display: "flex", alignItems: "center" }}>
// //           <Puff
// //             height="20"
// //             width="20"
// //             radius="9"
// //             color="#5d5479"
// //             ariaLabel="loading"
// //           />
// //           <span style={{ marginLeft: "10px" }}>Generating audio...</span>
// //         </div>
// //       ) : (
// //         <>
// //           <input
// //             type="text"
// //             value={input}
// //             onChange={(e) => setInput(e.target.value)}
// //             onKeyPress={handleKeyPress}
// //           />
// //           <button style={{ marginRight: "10px" }} onClick={handleSend}>
// //             <FiSend />
// //           </button>
// //           <button
// //             onClick={isRecording ? stopRecording : startRecording}
// //             className={isRecording ? "recording" : ""}
// //           >
// //             {isRecording && (
// //               <div className="recording-indicator">
// //                 <div className="bar"></div>
// //                 <div className="bar"></div>
// //                 <div className="bar"></div>
// //                 <div className="bar"></div>
// //                 <div className="bar"></div>
// //               </div>
// //             )}
// //             <FiMic />
// //           </button>
// //         </>
// //       )}
// //     </div>
// //   );
// // };

// // // VoiceModalComponent
// // const VoiceModalComponent = ({
// //   isVoiceEnabled,
// //   modalIsOpen,
// //   setModalIsOpen,
// //   handleToggleVoice,
// // }) => (
// //   <Modal
// //     isOpen={modalIsOpen}
// //     onRequestClose={() => setModalIsOpen(false)}
// //     contentLabel={isVoiceEnabled ? "Disable Voice Mode" : "Enable Voice Mode"}
// //     className="modal"
// //     overlayClassName="overlay"
// //   >
// //     <div className="modal-content">
// //       <h2 className="modal-title">
// //         {isVoiceEnabled ? "Disable Voice Mode" : "Enable Voice Mode"}
// //       </h2>
// //       <p className="modal-description">
// //         {isVoiceEnabled
// //           ? "You are currently in Voice Mode. Would you like to switch to Message Mode?"
// //           : "You are currently in Message Mode. Would you like to switch to Voice Mode?"}
// //       </p>
// //       <div className="modal-actions">
// //         <button onClick={handleToggleVoice} className="modal-button">
// //           {isVoiceEnabled ? "Switch to Message" : "Switch to Voice"}
// //         </button>
// //         <button
// //           onClick={() => setModalIsOpen(false)}
// //           className="modal-button cancel"
// //         >
// //           Cancel
// //         </button>
// //       </div>
// //     </div>
// //   </Modal>
// // );

// // function Chat() {
// //   const [messages, setMessages] = useState([]);
// //   const [input, setInput] = useState("");
// //   const [isVoiceEnabled, setIsVoiceEnabled] = useState(false);
// //   const [modalIsOpen, setModalIsOpen] = useState(false);
// //   const [isRecording, setIsRecording] = useState(false);
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [isAudioLoading, setIsAudioLoading] = useState(false); // New state for audio loading
// //   const [userData, setUserData] = useState(null); // State to store user data
// //   const mediaRecorderRef = useRef(null);
// //   const audioChunksRef = useRef([]);
// //   const [audioUrl, setAudioUrl] = useState(null);
// //   const token = localStorage.getItem("access_token");
// //   console.log("token getitem is", token);

// //   useEffect(() => {
// //     // Fetch user data after login
// //     axios
// //       .get("http://127.0.0.1:8000/api/user_data/", {
// //         headers: {
// //           Authorization: `Bearer ${token}`,
// //         },
// //       })
// //       .then((response) => {
// //         console.log("User Data:", response.data);
// //         setUserData(response.data); // Store user data in state
// //       })
// //       .catch((error) => {
// //         console.error("Error fetching user data:", error);
// //       });
// //   }, [token]);

// //   const handleLogout = () => {
// //     const refreshToken = localStorage.getItem("refreshToken");

// //     if (!refreshToken) {
// //       console.error("Refresh token is missing.");
// //       return;
// //     }

// //     axios
// //       .post(
// //         "http://127.0.0.1:8000/api/logout/",
// //         {
// //           refresh_token: refreshToken,
// //         },
// //         {
// //           headers: {
// //             "Content-Type": "application/json",
// //           },
// //         }
// //       )
// //       .then((response) => {
// //         console.log("Logged out successfully:", response.data);
// //         // Clear tokens and user data
// //         localStorage.removeItem("accessToken");
// //         localStorage.removeItem("refreshToken");
// //         setUserData(null);
// //         window.location.href = "/login";
// //       })
// //       .catch((error) => {
// //         console.error("Error during logout:", error);
// //       });
// //   };

// //   const handleAudioClick = (audioUrl) => {
// //     console.log("Audio URL: ", audioUrl);
// //     const audioElement = document.getElementById("audio-element");
// //     if (audioElement) {
// //       audioElement.src = audioUrl;
// //       audioElement
// //         .play()
// //         .catch((error) => console.log("Error playing audio:", error));
// //     }
// //   };

// //   const handleToggleVoice = () => {
// //     setIsVoiceEnabled((prev) => !prev);
// //     setModalIsOpen(false);
// //   };

// //   const handleOpenModal = () => {
// //     setModalIsOpen(true);
// //   };

// //   const sendInput = (input) => {
// //     const newMessage = { text: input, sender: "user" };
// //     setMessages([...messages, newMessage]);
// //     setInput("");
// //     setIsLoading(true); // Set loading state to true

// //     const params = new URLSearchParams({
// //       username: userData?.username, // Use the username from userData
// //       question: input, // You don't need to send the username in the params
// //     });

// //     axios
// //       .get("http://127.0.0.1:8000/api/get_response/", {
// //         params,
// //         headers: {
// //           Authorization: `Bearer ${token}`, // Retrieve the token from local storage
// //         },
// //         timeout: 100000,
// //       })
// //       .then((response) => {
// //         console.log(
// //           `Current access token: ${localStorage.getItem("accessToken")}`
// //         );

// //         console.log("server response:", response);
// //         const botReply = response.data.response;
// //         const audioUrl = response.data.audio;

// //         const botMessage = { text: botReply, sender: "bot", audio: audioUrl };

// //         if (isVoiceEnabled) {
// //           const speech = new SpeechSynthesisUtterance(botReply);
// //           window.speechSynthesis.speak(speech);
// //         }

// //         setMessages((prev) => [...prev, botMessage]);
// //         setIsLoading(false); // Set loading state to false
// //         setIsAudioLoading(false); // Set audio loading state to false
// //       })
// //       .catch((error) => {
// //         console.error("Error fetching data: ", error);
// //         setMessages((prev) => [
// //           ...prev,
// //           { text: "Failed to fetch response.", sender: "bot" },
// //         ]);
// //         setIsLoading(false); // Set loading state to false
// //         setIsAudioLoading(false); // Set audio loading state to false
// //       });
// //   };

// //   const handleSend = () => {
// //     console.log("Input:", input);
// //     if (input.trim() !== "") {
// //       sendInput(input);
// //     }
// //   };

// //   const handleDeleteChat = () => {
// //     setMessages([]);
// //   };

// //   const startRecording = async () => {
// //     const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
// //     mediaRecorderRef.current = new MediaRecorder(stream);
// //     mediaRecorderRef.current.ondataavailable = (event) => {
// //       audioChunksRef.current.push(event.data);
// //     };
// //     mediaRecorderRef.current.onstop = async () => {
// //       const audioBlob = new Blob(audioChunksRef.current, {
// //         type: "audio/mpeg",
// //       });
// //       const audioUrl = URL.createObjectURL(audioBlob);
// //       setAudioUrl(audioUrl);
// //       audioChunksRef.current = [];

// //       console.log("audioBlob:", audioBlob);

// //       const formData = new FormData();
// //       formData.append("file", audioBlob, "audio.mp3");

// //       for (const pair of formData.entries()) {
// //         console.log(`${pair[0]}, ${pair[1]}`);
// //       }

// //       try {
// //         setIsAudioLoading(true); // Set audio loading state to true
// //         const response = await axios.post(
// //           "http://127.0.0.1:8000/api/upload/",
// //           formData,
// //           {
// //             headers: {
// //               "Content-Type": "multipart/form-data",
// //             },
// //           }
// //         );

// //         if (response.status === 200) {
// //           sendInput(response.data.transcription);
// //         } else {
// //           alert("Error uploading file:", response);
// //         }
// //         setIsAudioLoading(false); // Set audio loading state to false
// //       } catch (error) {
// //         console.error("Error uploading file:", error);
// //         setIsAudioLoading(false); // Set audio loading state to false
// //       }
// //     };
// //     mediaRecorderRef.current.start();
// //     setIsRecording(true);
// //   };

// //   const stopRecording = () => {
// //     mediaRecorderRef.current.stop();
// //     setIsRecording(false);
// //   };

// //   return (
// //     <div className="App">
// //       <ProfileComponent userData={userData} />{" "}
// //       {/* Pass userData to ProfileComponent */}
// //       <main className="chat-main">
// //         <ChatHeaderComponent
// //           isVoiceEnabled={isVoiceEnabled}
// //           handleOpenModal={handleOpenModal}
// //           handleDeleteChat={handleDeleteChat}
// //           handleLogout={handleLogout} // Pass the logout function
// //         />
// //         <section className="chat-container">
// //           <ChatWindowComponent
// //             messages={messages}
// //             handleAudioClick={handleAudioClick}
// //             isLoading={isLoading}
// //           />
// //           <ControlsComponent
// //             isRecording={isRecording}
// //             handleSend={handleSend}
// //             startRecording={startRecording}
// //             stopRecording={stopRecording}
// //             setInput={setInput}
// //             input={input}
// //             isAudioLoading={isAudioLoading} // Pass the prop here
// //           />
// //         </section>
// //         <audio id="audio-element" controls style={{ display: "none" }}></audio>
// //       </main>
// //       <VoiceModalComponent
// //         isVoiceEnabled={isVoiceEnabled}
// //         modalIsOpen={modalIsOpen}
// //         setModalIsOpen={setModalIsOpen}
// //         handleToggleVoice={handleToggleVoice}
// //       />
// //       {isAudioLoading && (
// //         <div
// //           style={{
// //             display: "flex",
// //             alignItems: "center",
// //             justifyContent: "center",
// //             marginTop: "10px",
// //           }}
// //         >
// //           <Puff
// //             height="30"
// //             width="30"
// //             radius="9"
// //             color="#5d5479"
// //             ariaLabel="loading"
// //           />
// //           <span style={{ marginLeft: "10px" }}>Generating audio...</span>
// //         </div>
// //       )}
// //       <div className="chat-info">
// //         <p>
// //           <strong>About This Chatbot:</strong><br />
// //           Meet your sophisticated AI Assistant, designed to enhance your learning experience. This chatbot leverages advanced AI technologies, including NLP, machine learning, and voice recognition, to provide personalized responses and seamless interaction. Whether you're looking for help with assignments or just a casual chat, your AI Assistant is here to support you.
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Chat;



// import axios from "axios";
// import "babylonjs-loaders";
// import "pepjs";
// import React, { useEffect, useRef, useState } from "react";
// import { AiOutlineUser } from "react-icons/ai";
// import {
//   FiHeadphones,
//   FiMessageCircle,
//   FiMic,
//   FiSend,
//   FiToggleLeft,
//   FiToggleRight,
//   FiTrash2,
//   FiVolume2,
// } from "react-icons/fi";
// import { Puff } from "react-loader-spinner";
// import Modal from "react-modal";
// import "../App.css";
// Modal.setAppElement("#root"); // Appropriate for accessibility

// // ProfileComponent
// const ProfileComponent = ({ userData }) => {
//   if (!userData) {
//     return <div>Loading...</div>; // Handle loading state
//   }

//   const { firstname, lastname, coventryID, courseSlug, username } = userData;

//   return (
//     <aside className="profile-container">
//       <AiOutlineUser className="profile-icon" />
//       <h3>{`${firstname} ${lastname}`}</h3>
//       <p>Username: {username}</p>
//       <p>Course: {courseSlug}</p>
//       <p>ID: {coventryID}</p>
//       <div className="avatar-animation-container"></div>
//     </aside>
//   );
// };

// // ChatHeaderComponent
// const ChatHeaderComponent = ({
//   isVoiceEnabled,
//   handleOpenModal,
//   handleDeleteChat,
//   handleLogout,
// }) => (
//   <header className="chat-header">
//     <h1>Ask Me - AI Assistant</h1>
//     <div>
//       <span onClick={handleOpenModal}>
//         {isVoiceEnabled ? (
//           <FiToggleRight className="toggle-icon" />
//         ) : (
//           <FiToggleLeft className="toggle-icon" />
//         )}
//         {isVoiceEnabled ? (
//           <FiHeadphones className="delete-chat" />
//         ) : (
//           <FiMessageCircle className="delete-chat" />
//         )}
//       </span>
//       <FiTrash2 className="delete-chat" onClick={handleDeleteChat} />
//       <button onClick={handleLogout} className="logout-button">
//         Logout
//       </button>
//     </div>
//   </header>
// );

// // ChatWindowComponent
// const ChatWindowComponent = ({ messages, handleAudioClick, isLoading, isAudioLoading }) => {
//   const chatWindowRef = useRef(null);

//   useEffect(() => {
//     if (chatWindowRef.current) {
//       chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
//     }
//   }, [messages]);

//   const renderMessageText = (text) => {
//     const regex = /!\[Generated Image\]\((.*?)\)/g;
//     const match = regex.exec(text);

//     if (match) {
//       const imageUrl = match[1];
//       const textBeforeImage = text.slice(0, match.index);
//       const textAfterImage = text.slice(match.index + match[0].length);

//       return (
//         <div>
//           {textBeforeImage && <span>{textBeforeImage}</span>}
//           <img
//             src={imageUrl}
//             alt="Generated Image"
//             className="rendered-image"
//             width="200px"
//             height="200px"
//           />
//           {textAfterImage && <span>{textAfterImage}</span>}
//         </div>
//       );
//     } else {
//       return <span>{text}</span>;
//     }
//   };

//   return (
//     <div className="chat-window" ref={chatWindowRef}>
//       {messages.map((message, index) => (
//         <div key={index} className={`message-container ${message.sender}`}>
//           <label className="message-label">
//             {message.sender === "bot" ? "Bot" : "You"}
//           </label>
//           <div className={`message ${message.sender}`}>
//             {renderMessageText(message.text)}
//           </div>
//           {message.sender === "bot" && message.audio && (
//             <div
//               className="audio-icon"
//               onClick={() => handleAudioClick(message.audio)}
//             >
//               <FiVolume2 />
//             </div>
//           )}
//         </div>
//       ))}
//       {isLoading && (
//         <div className="message-container bot">
//           <div className="message bot">
//             <div style={{ display: "flex", alignItems: "center" }}>
//               <Puff
//                 height="20"
//                 width="20"
//                 radius="9"
//                 color="#5d5479"
//                 ariaLabel="loading"
//               />
//               <span style={{ marginLeft: "10px" }}>Generating response...</span>
//             </div>
//           </div>
//         </div>
//       )}
//       {isAudioLoading && (
//         <div className="message-container bot">
//           <div className="message bot">
//             <div style={{ display: "flex", alignItems: "center" }}>
//               <Puff
//                 height="20"
//                 width="20"
//                 radius="9"
//                 color="#5d5479"
//                 ariaLabel="loading"
//               />
//               <span style={{ marginLeft: "10px" }}>Generating audio...</span>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// // ControlsComponent
// const ControlsComponent = ({
//   isRecording,
//   handleSend,
//   startRecording,
//   stopRecording,
//   setInput,
//   input,
// }) => {
//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       handleSend();
//     }
//   };

//   return (
//     <div className="controls">
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         onKeyPress={handleKeyPress}
//       />
//       <button style={{ marginRight: "10px" }} onClick={handleSend}>
//         <FiSend />
//       </button>
//       <button
//         onClick={isRecording ? stopRecording : startRecording}
//         className={isRecording ? "recording" : ""}
//       >
//         {isRecording && (
//           <div className="recording-indicator">
//             <div className="bar"></div>
//             <div className="bar"></div>
//             <div className="bar"></div>
//             <div className="bar"></div>
//             <div className="bar"></div>
//           </div>
//         )}
//         <FiMic />
//       </button>
//     </div>
//   );
// };

// // VoiceModalComponent
// const VoiceModalComponent = ({
//   isVoiceEnabled,
//   modalIsOpen,
//   setModalIsOpen,
//   handleToggleVoice,
// }) => (
//   <Modal
//     isOpen={modalIsOpen}
//     onRequestClose={() => setModalIsOpen(false)}
//     contentLabel={isVoiceEnabled ? "Disable Voice Mode" : "Enable Voice Mode"}
//     className="modal"
//     overlayClassName="overlay"
//   >
//     <div className="modal-content">
//       <h2 className="modal-title">
//         {isVoiceEnabled ? "Disable Voice Mode" : "Enable Voice Mode"}
//       </h2>
//       <p className="modal-description">
//         {isVoiceEnabled
//           ? "You are currently in Voice Mode. Would you like to switch to Message Mode?"
//           : "You are currently in Message Mode. Would you like to switch to Voice Mode?"}
//       </p>
//       <div className="modal-actions">
//         <button onClick={handleToggleVoice} className="modal-button">
//           {isVoiceEnabled ? "Switch to Message" : "Switch to Voice"}
//         </button>
//         <button
//           onClick={() => setModalIsOpen(false)}
//           className="modal-button cancel"
//         >
//           Cancel
//         </button>
//       </div>
//     </div>
//   </Modal>
// );

// function Chat() {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [isVoiceEnabled, setIsVoiceEnabled] = useState(false);
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [isRecording, setIsRecording] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isAudioLoading, setIsAudioLoading] = useState(false); // New state for audio loading
//   const [userData, setUserData] = useState(null); // State to store user data
//   const mediaRecorderRef = useRef(null);
//   const audioChunksRef = useRef([]);
//   const token = localStorage.getItem("access_token");

//   useEffect(() => {
//     // Fetch user data after login
//     axios
//       .get("http://127.0.0.1:8000/api/user_data/", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((response) => {
//         setUserData(response.data); // Store user data in state
//       })
//       .catch((error) => {
//         console.error("Error fetching user data:", error);
//       });
//   }, [token]);

//   const handleLogout = () => {
//     const refreshToken = localStorage.getItem("refreshToken");

//     if (!refreshToken) {
//       console.error("Refresh token is missing.");
//       return;
//     }

//     axios
//       .post(
//         "http://127.0.0.1:8000/api/logout/",
//         {
//           refresh_token: refreshToken,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       )
//       .then((response) => {
//         // Clear tokens and user data
//         localStorage.removeItem("accessToken");
//         localStorage.removeItem("refreshToken");
//         setUserData(null);
//         window.location.href = "/login";
//       })
//       .catch((error) => {
//         console.error("Error during logout:", error);
//       });
//   };

//   const handleAudioClick = (audioUrl) => {
//     const audioElement = document.getElementById("audio-element");
//     if (audioElement) {
//       audioElement.src = audioUrl;
//       audioElement.play().catch((error) => console.log("Error playing audio:", error));
//     }
//   };

//   const handleToggleVoice = () => {
//     setIsVoiceEnabled((prev) => !prev);
//     setModalIsOpen(false);
//   };

//   const handleOpenModal = () => {
//     setModalIsOpen(true);
//   };

//   const sendInput = (input) => {
//     const newMessage = { text: input, sender: "user" };
//     setMessages([...messages, newMessage]);
//     setInput("");
//     setIsLoading(true);

//     const params = new URLSearchParams({
//       username: userData?.username,
//       question: input,
//     });

//     axios
//       .get("http://127.0.0.1:8000/api/get_response/", {
//         params,
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         timeout: 100000,
//       })
//       .then((response) => {
//         const botReply = response.data.response;
//         const audioUrl = response.data.audio;

//         const botMessage = { text: botReply, sender: "bot", audio: audioUrl };

//         if (isVoiceEnabled) {
//           const speech = new SpeechSynthesisUtterance(botReply);
//           window.speechSynthesis.speak(speech);
//         }

//         setMessages((prev) => [...prev, botMessage]);
//         setIsLoading(false);
//         setIsAudioLoading(false);
//       })
//       .catch((error) => {
//         setMessages((prev) => [
//           ...prev,
//           { text: "Failed to fetch response.", sender: "bot" },
//         ]);
//         setIsLoading(false);
//         setIsAudioLoading(false);
//       });
//   };

//   const handleSend = () => {
//     if (input.trim() !== "") {
//       sendInput(input);
//     }
//   };

//   const handleDeleteChat = () => {
//     setMessages([]);
//   };

//   const startRecording = async () => {
//     const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//     mediaRecorderRef.current = new MediaRecorder(stream);
//     mediaRecorderRef.current.ondataavailable = (event) => {
//       audioChunksRef.current.push(event.data);
//     };
//     mediaRecorderRef.current.onstop = async () => {
//       const audioBlob = new Blob(audioChunksRef.current, {
//         type: "audio/mpeg",
//       });
//       const audioUrl = URL.createObjectURL(audioBlob);
//       audioChunksRef.current = [];

//       const formData = new FormData();
//       formData.append("file", audioBlob, "audio.mp3");

//       try {
//         setIsAudioLoading(true);
//         const response = await axios.post(
//           "http://127.0.0.1:8000/api/upload/",
//           formData,
//           {
//             headers: {
//               "Content-Type": "multipart/form-data",
//             },
//           }
//         );

//         if (response.status === 200) {
//           sendInput(response.data.transcription);
//         } else {
//           alert("Error uploading file:", response);
//         }
//         setIsAudioLoading(false);
//       } catch (error) {
//         setIsAudioLoading(false);
//       }
//     };
//     mediaRecorderRef.current.start();
//     setIsRecording(true);
//   };

//   const stopRecording = () => {
//     mediaRecorderRef.current.stop();
//     setIsRecording(false);
//   };

//   return (
//     <div className="App">
//       <ProfileComponent userData={userData} />
//       <main className="chat-main">
//         <ChatHeaderComponent
//           isVoiceEnabled={isVoiceEnabled}
//           handleOpenModal={handleOpenModal}
//           handleDeleteChat={handleDeleteChat}
//           handleLogout={handleLogout}
//         />
//         <section className="chat-container">
//           <ChatWindowComponent
//             messages={messages}
//             handleAudioClick={handleAudioClick}
//             isLoading={isLoading}
//             isAudioLoading={isAudioLoading} // Pass the prop here
//           />
//           <ControlsComponent
//             isRecording={isRecording}
//             handleSend={handleSend}
//             startRecording={startRecording}
//             stopRecording={stopRecording}
//             setInput={setInput}
//             input={input}
//           />
//         </section>
//         <audio id="audio-element" controls style={{ display: "none" }}></audio>
//       </main>
//       <VoiceModalComponent
//         isVoiceEnabled={isVoiceEnabled}
//         modalIsOpen={modalIsOpen}
//         setModalIsOpen={setModalIsOpen}
//         handleToggleVoice={handleToggleVoice}
//       />
//       <div className="chat-info">
//         <p>
//           <strong>About This Chatbot:</strong><br />
//           Meet your sophisticated AI Assistant, designed to enhance your learning experience. This chatbot leverages advanced AI technologies, including NLP, machine learning, and voice recognition, to provide personalized responses and seamless interaction. Whether you're looking for help with assignments or just a casual chat, your AI Assistant is here to support you.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Chat;



import axios from "axios";
import "babylonjs-loaders";
import "pepjs";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import {
  FiHeadphones,
  FiMessageCircle,
  FiMic,
  FiSend,
  FiToggleLeft,
  FiToggleRight,
  FiTrash2,
  FiVolume2,
} from "react-icons/fi";
import { Puff } from "react-loader-spinner";
import Modal from "react-modal";
import "../App.css";
Modal.setAppElement("#root"); // Appropriate for accessibility

// ProfileComponent
const ProfileComponent = ({ userData }) => {
  if (!userData) {
    return <div>Loading...</div>; // Handle loading state
  }

  const { firstname, lastname, coventryID, courseSlug, username } = userData;

  return (
    <aside className="profile-container">
      <AiOutlineUser className="profile-icon" />
      <h3>{`${firstname} ${lastname}`}</h3>
      <p>Username: {username}</p>
      <p>Course: {courseSlug}</p>
      <p>ID: {coventryID}</p>
      <div className="avatar-animation-container"></div>
    </aside>
  );
};

// ChatHeaderComponent
const ChatHeaderComponent = ({
  isVoiceEnabled,
  handleOpenModal,
  handleDeleteChat,
  handleLogout,
}) => (
  <header className="chat-header">
    <h1>Ask Me - AI Assistant</h1>
    <div>
      <span onClick={handleOpenModal}>
        {isVoiceEnabled ? (
          <FiToggleRight className="toggle-icon" />
        ) : (
          <FiToggleLeft className="toggle-icon" />
        )}
        {isVoiceEnabled ? (
          <FiHeadphones className="delete-chat" />
        ) : (
          <FiMessageCircle className="delete-chat" />
        )}
      </span>
      <FiTrash2 className="delete-chat" onClick={handleDeleteChat} />
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
    </div>
  </header>
);

// ChatWindowComponent
const ChatWindowComponent = ({ messages, handleAudioClick, isLoading, isAudioLoading }) => {
  const chatWindowRef = useRef(null);

  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages]);

  const renderMessageText = (text) => {
    const regex = /!\[Generated Image\]\((.*?)\)/g;
    const match = regex.exec(text);

    if (match) {
      const imageUrl = match[1];
      const textBeforeImage = text.slice(0, match.index);
      const textAfterImage = text.slice(match.index + match[0].length);

      return (
        <div>
          {textBeforeImage && <span>{textBeforeImage}</span>}
          <img
            src={imageUrl}
            alt="Generated Image"
            className="rendered-image"
            width="200px"
            height="200px"
          />
          {textAfterImage && <span>{textAfterImage}</span>}
        </div>
      );
    } else {
      return <span>{text}</span>;
    }
  };

  return (
    <div className="chat-window" ref={chatWindowRef}>
      {messages.map((message, index) => (
        <div key={index} className={`message-container ${message.sender}`}>
          <label className="message-label">
            {message.sender === "bot" ? "Bot" : "You"}
          </label>
          <div className={`message ${message.sender}`}>
            {renderMessageText(message.text)}
          </div>
          {message.sender === "bot" && message.audio && (
            <div
              className="audio-icon"
              onClick={() => handleAudioClick(message.audio)}
            >
              <FiVolume2 />
            </div>
          )}
        </div>
      ))}
      {isLoading && (
        <div className="message-container bot">
          <div className="message bot">
            <div style={{ display: "flex", alignItems: "center" }}>
              <Puff
                height="20"
                width="20"
                radius="9"
                color="#5d5479"
                ariaLabel="loading"
              />
              <span style={{ marginLeft: "10px" }}>Generating response...</span>
            </div>
          </div>
        </div>
      )}
      {isAudioLoading && (
        <div className="message-container bot" style={{ justifyContent: "flex-end" }}>
          <div className="message bot" style={{ display: "flex", alignItems: "center" }}>
            <Puff
              height="20"
              width="20"
              radius="9"
              color="#5d5479"
              ariaLabel="loading"
            />
            <span style={{ marginLeft: "10px" }}>Generating audio...</span>
          </div>
        </div>
      )}
    </div>
  );
};

// ControlsComponent
const ControlsComponent = ({
  isRecording,
  handleSend,
  startRecording,
  stopRecording,
  setInput,
  input,
}) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="controls">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button style={{ marginRight: "10px" }} onClick={handleSend}>
        <FiSend />
      </button>
      <button
        onClick={isRecording ? stopRecording : startRecording}
        className={isRecording ? "recording" : ""}
      >
        {isRecording && (
          <div className="recording-indicator">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        )}
        <FiMic />
      </button>
    </div>
  );
};

// VoiceModalComponent
const VoiceModalComponent = ({
  isVoiceEnabled,
  modalIsOpen,
  setModalIsOpen,
  handleToggleVoice,
}) => (
  <Modal
    isOpen={modalIsOpen}
    onRequestClose={() => setModalIsOpen(false)}
    contentLabel={isVoiceEnabled ? "Disable Voice Mode" : "Enable Voice Mode"}
    className="modal"
    overlayClassName="overlay"
  >
    <div className="modal-content">
      <h2 className="modal-title">
        {isVoiceEnabled ? "Disable Voice Mode" : "Enable Voice Mode"}
      </h2>
      <p className="modal-description">
        {isVoiceEnabled
          ? "You are currently in Voice Mode. Would you like to switch to Message Mode?"
          : "You are currently in Message Mode. Would you like to switch to Voice Mode?"}
      </p>
      <div className="modal-actions">
        <button onClick={handleToggleVoice} className="modal-button">
          {isVoiceEnabled ? "Switch to Message" : "Switch to Voice"}
        </button>
        <button
          onClick={() => setModalIsOpen(false)}
          className="modal-button cancel"
        >
          Cancel
        </button>
      </div>
    </div>
  </Modal>
);

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isAudioLoading, setIsAudioLoading] = useState(false); // New state for audio loading
  const [userData, setUserData] = useState(null); // State to store user data
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const token = localStorage.getItem("access_token");

  useEffect(() => {
    // Fetch user data after login
    axios
      .get("http://127.0.0.1:8000/api/user_data/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUserData(response.data); // Store user data in state
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [token]);

  const handleLogout = () => {
    const refreshToken = localStorage.getItem("refreshToken");

    if (!refreshToken) {
      console.error("Refresh token is missing.");
      return;
    }

    axios
      .post(
        "http://127.0.0.1:8000/api/logout/",
        {
          refresh_token: refreshToken,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        // Clear tokens and user data
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        setUserData(null);
        window.location.href = "/login";
      })
      .catch((error) => {
        console.error("Error during logout:", error);
      });
  };

  const handleAudioClick = (audioUrl) => {
    const audioElement = document.getElementById("audio-element");
    if (audioElement) {
      audioElement.src = audioUrl;
      audioElement.play().catch((error) => console.log("Error playing audio:", error));
    }
  };

  const handleToggleVoice = () => {
    setIsVoiceEnabled((prev) => !prev);
    setModalIsOpen(false);
  };

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const sendInput = (input) => {
    const newMessage = { text: input, sender: "user" };
    setMessages([...messages, newMessage]);
    setInput("");
    setIsLoading(true);

    const params = new URLSearchParams({
      username: userData?.username,
      question: input,
    });

    axios
      .get("http://127.0.0.1:8000/api/get_response/", {
        params,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        timeout: 100000,
      })
      .then((response) => {
        const botReply = response.data.response;
        const audioUrl = response.data.audio;

        const botMessage = { text: botReply, sender: "bot", audio: audioUrl };

        if (isVoiceEnabled) {
          const speech = new SpeechSynthesisUtterance(botReply);
          window.speechSynthesis.speak(speech);
        }

        setMessages((prev) => [...prev, botMessage]);
        setIsLoading(false);
        setIsAudioLoading(false);
      })
      .catch((error) => {
        setMessages((prev) => [
          ...prev,
          { text: "Failed to fetch response.", sender: "bot" },
        ]);
        setIsLoading(false);
        setIsAudioLoading(false);
      });
  };

  const handleSend = () => {
    if (input.trim() !== "") {
      sendInput(input);
    }
  };

  const handleDeleteChat = () => {
    setMessages([]);
  };

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);
    mediaRecorderRef.current.ondataavailable = (event) => {
      audioChunksRef.current.push(event.data);
    };
    mediaRecorderRef.current.onstop = async () => {
      const audioBlob = new Blob(audioChunksRef.current, {
        type: "audio/mpeg",
      });
      const audioUrl = URL.createObjectURL(audioBlob);
      audioChunksRef.current = [];

      const formData = new FormData();
      formData.append("file", audioBlob, "audio.mp3");

      try {
        setIsAudioLoading(true);
        const response = await axios.post(
          "http://127.0.0.1:8000/api/upload/",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (response.status === 200) {
          sendInput(response.data.transcription);
        } else {
          alert("Error uploading file:", response);
        }
        setIsAudioLoading(false);
      } catch (error) {
        setIsAudioLoading(false);
      }
    };
    mediaRecorderRef.current.start();
    setIsRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setIsRecording(false);
  };

  return (
    <div className="App">
      <ProfileComponent userData={userData} />
      <main className="chat-main">
        <ChatHeaderComponent
          isVoiceEnabled={isVoiceEnabled}
          handleOpenModal={handleOpenModal}
          handleDeleteChat={handleDeleteChat}
          handleLogout={handleLogout}
        />
        <section className="chat-container">
          <ChatWindowComponent
            messages={messages}
            handleAudioClick={handleAudioClick}
            isLoading={isLoading}
            isAudioLoading={isAudioLoading} // Pass the prop here
          />
          <ControlsComponent
            isRecording={isRecording}
            handleSend={handleSend}
            startRecording={startRecording}
            stopRecording={stopRecording}
            setInput={setInput}
            input={input}
          />
        </section>
        <audio id="audio-element" controls style={{ display: "none" }}></audio>
      </main>
      <VoiceModalComponent
        isVoiceEnabled={isVoiceEnabled}
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        handleToggleVoice={handleToggleVoice}
      />
      <div className="chat-info">
        <p style={{fontSize:"0.87rem"}}>
          <strong>About This Chatbot:</strong><br />
          Meet your AI-powered learning companion at Softwarica College, designed to support your educational journey. This smart assistant is equipped with advanced AI technologies, including NLP, text-to-speech, and image generation, to provide you with clear and personalized information.        </p>
      </div>
    </div>
  );
}

export default Chat;
