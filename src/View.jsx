import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import UserProfile from "./components/UserProfile";
import userpic from './assets/img/png/Ellipse 3.png';
import defaultimg from './assets/img/png/default.png';

import { Contacts, array2, array3 } from "./DataMap";

const View = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [selectedId, setSelectedId] = useState(null);
  const [filter, setFilter] = useState('');




  // on enter message 
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleFormSubmit(event);
    }
  };

  // set data in array
  const handleInputChange = (event) => {
    setNewTodo(event.target.value);

  };
  // submitting the form
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (newTodo.trim() !== '') {

      // setTodos([...todos, newTodo]);
      setTodos([...todos, { text: newTodo, completed: false, timeStored: new Date().toLocaleString() }]);
      setNewTodo('');
    }
  };

  const handleButtonClick = (id) => {
    const matchedData1 = Contacts.find(item => item.id === id);
    const matchedData2 = array2.find(item => item.id === id);

    if (matchedData1 && matchedData2) {
      setSelectedId(id);
    }
  };

  return (
    <div className="app">
      <div className="d-flex min-vh-100">
        <div className="sidebar">
          <div className="user-profile">
            {/* <!-- User profile image and status --> */}
            <UserProfile />
          </div>
          <div className="search-bar d-flex justify-content-between align-items-center">
            {/* <!-- Search functionality --> */}
            <div className="search_input d-flex flex-grow-1 me-4">
              <label htmlFor="search">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1_46)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 2C9.1446 2.00012 7.80887 2.32436 6.60427 2.94569C5.39966 3.56702 4.3611 4.46742 3.57525 5.57175C2.78939 6.67609 2.27902 7.95235 2.08672 9.29404C1.89442 10.6357 2.02576 12.004 2.46979 13.2846C2.91382 14.5652 3.65766 15.7211 4.63925 16.6557C5.62084 17.5904 6.81171 18.2768 8.11252 18.6576C9.41333 19.0384 10.7864 19.1026 12.117 18.8449C13.4477 18.5872 14.6975 18.015 15.762 17.176L19.414 20.828C19.6026 21.0102 19.8552 21.111 20.1174 21.1087C20.3796 21.1064 20.6304 21.0012 20.8158 20.8158C21.0012 20.6304 21.1064 20.3796 21.1087 20.1174C21.111 19.8552 21.0102 19.6026 20.828 19.414L17.176 15.762C18.164 14.5086 18.7792 13.0024 18.9511 11.4157C19.123 9.82905 18.8448 8.22602 18.1482 6.79009C17.4517 5.35417 16.3649 4.14336 15.0123 3.29623C13.6597 2.44911 12.096 1.99989 10.5 2ZM4.00001 10.5C4.00001 8.77609 4.68483 7.12279 5.90382 5.90381C7.1228 4.68482 8.7761 4 10.5 4C12.2239 4 13.8772 4.68482 15.0962 5.90381C16.3152 7.12279 17 8.77609 17 10.5C17 12.2239 16.3152 13.8772 15.0962 15.0962C13.8772 16.3152 12.2239 17 10.5 17C8.7761 17 7.1228 16.3152 5.90382 15.0962C4.68483 13.8772 4.00001 12.2239 4.00001 10.5Z" fill="#6B7C85" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_46">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </label>
              <input onChange={(e) => setFilter(e.target.value)} id="search" type="search" placeholder="Search or start new chat" className="w-100" />
            </div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 18C10.7167 18 10.4793 17.904 10.288 17.712C10.096 17.5207 10 17.2833 10 17C10 16.7167 10.096 16.4793 10.288 16.288C10.4793 16.096 10.7167 16 11 16H13C13.2833 16 13.521 16.096 13.713 16.288C13.9043 16.4793 14 16.7167 14 17C14 17.2833 13.9043 17.5207 13.713 17.712C13.521 17.904 13.2833 18 13 18H11ZM4 8C3.71667 8 3.47933 7.90433 3.288 7.713C3.096 7.521 3 7.28333 3 7C3 6.71667 3.096 6.479 3.288 6.287C3.47933 6.09567 3.71667 6 4 6H20C20.2833 6 20.5207 6.09567 20.712 6.287C20.904 6.479 21 6.71667 21 7C21 7.28333 20.904 7.521 20.712 7.713C20.5207 7.90433 20.2833 8 20 8H4ZM7 13C6.71667 13 6.479 12.904 6.287 12.712C6.09567 12.5207 6 12.2833 6 12C6 11.7167 6.09567 11.479 6.287 11.287C6.479 11.0957 6.71667 11 7 11H17C17.2833 11 17.5207 11.0957 17.712 11.287C17.904 11.479 18 11.7167 18 12C18 12.2833 17.904 12.5207 17.712 12.712C17.5207 12.904 17.2833 13 17 13H7Z" fill="#6B7C85" />
            </svg>
          </div>
          <div className="chat-list">
            {/* <!-- List of chats (contacts, groups, etc.) --> */}
            {Contacts
              .filter((todos) => todos.text.toLowerCase().includes(filter.toLowerCase()))
              .map((data, value) => {
                return (
                  <div key={data.id} onClick={() => handleButtonClick(data.id)} className="px-3 me-2 d-flex align-items-start pt-3 mt-2 cursor-pointer">
                    <img width={50} height={50} src={data.img || defaultimg} alt="userdp" className="me-2" />
                    <div className="d-flex border-bottom justify-content-between w-100">
                      <div>
                        <p className="text_grey m-0 fe_medium fs_20">{data.username}</p>
                        <p className="text_grey text-nowrap message_text">{data.text}</p>
                      </div>
                      <div>
                        <p className="text_grey fs_14 text-nowrap m-0">3:11 pm</p>
                        <p className="unread_msg m-0 d-flex align-items-center justify-content-center">{data.unreadmsg}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div className="main-content">
        <div className="chat-header">
          <div className="position-relative">
            {/* <!-- Contact information (name, status, etc.) --> */}
            {/* <img src={userpic} alt="" />
            <p >Daniel Kalio</p> */}

            {selectedId !== null ? (
              <div className="contact-info d-flex align-items-center ">
                {/* <p>ID: {selectedId}</p> */}
                <img src={Contacts.find(item => item.id === selectedId)?.img || userpic} alt="" />
                <p className="text_grey m-0 ps-2 fe_medium fs_20">{Contacts.find(item => item.id === selectedId)?.username}</p>
                {/* <p>More Data: {array2.find(item => item.id === selectedId)?.moreData}</p> */}
              </div>
            ) : (
              <div className="w-100 bg-black h-100 position-absolute start-0 top-0"></div>
            )}
          </div>
          <div className="actions">
            {/* <!-- Additional actions (video call, voice call, etc.) --> */}
            {/* call icon */}
            <span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.23 15.26L16.69 14.97C16.3913 14.9349 16.0886 14.968 15.8046 15.0667C15.5205 15.1654 15.2625 15.3273 15.05 15.54L13.21 17.38C10.3712 15.9362 8.06379 13.6288 6.62001 10.79L8.47001 8.94001C8.90001 8.51001 9.11001 7.91001 9.04001 7.30001L8.75001 4.78001C8.69332 4.29219 8.4592 3.84225 8.09225 3.51586C7.72529 3.18947 7.25112 3.00943 6.76001 3.01001H5.03001C3.90001 3.01001 2.96001 3.95001 3.03001 5.08001C3.56001 13.62 10.39 20.44 18.92 20.97C20.05 21.04 20.99 20.1 20.99 18.97V17.24C21 16.23 20.24 15.38 19.23 15.26Z" fill="#6B7C85" />
              </svg>
            </span>
            {/* video call icon */}
            <span className="px-4">
              <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.75 15.5H2C1.60218 15.5 1.22064 15.342 0.93934 15.0607C0.658035 14.7794 0.5 14.3978 0.5 14V2C0.5 1.60218 0.658035 1.22064 0.93934 0.93934C1.22064 0.658035 1.60218 0.5 2 0.5H14.75C15.1478 0.5 15.5294 0.658035 15.8107 0.93934C16.092 1.22064 16.25 1.60218 16.25 2V5.045L20.315 2.1425C20.4269 2.0628 20.5586 2.01538 20.6957 2.00543C20.8327 1.99547 20.9699 2.02336 21.0922 2.08605C21.2144 2.14874 21.3171 2.24382 21.3891 2.3609C21.461 2.47799 21.4994 2.61259 21.5 2.75V13.25C21.4994 13.3874 21.461 13.522 21.3891 13.6391C21.3171 13.7562 21.2144 13.8513 21.0922 13.9139C20.9699 13.9766 20.8327 14.0045 20.6957 13.9946C20.5586 13.9846 20.4269 13.9372 20.315 13.8575L16.25 10.955V14C16.25 14.3978 16.092 14.7794 15.8107 15.0607C15.5294 15.342 15.1478 15.5 14.75 15.5Z" fill="#6B7C85" />
              </svg>
            </span>

            {/* search icon */}
            <span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_267)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 2C9.1446 2.00012 7.80887 2.32436 6.60427 2.94569C5.39966 3.56702 4.3611 4.46742 3.57525 5.57175C2.78939 6.67609 2.27902 7.95235 2.08672 9.29404C1.89442 10.6357 2.02576 12.004 2.46979 13.2846C2.91382 14.5652 3.65766 15.7211 4.63925 16.6557C5.62084 17.5904 6.81171 18.2768 8.11252 18.6576C9.41333 19.0384 10.7864 19.1026 12.117 18.8449C13.4477 18.5872 14.6975 18.015 15.762 17.176L19.414 20.828C19.6026 21.0102 19.8552 21.111 20.1174 21.1087C20.3796 21.1064 20.6304 21.0012 20.8158 20.8158C21.0012 20.6304 21.1064 20.3796 21.1087 20.1174C21.111 19.8552 21.0102 19.6026 20.828 19.414L17.176 15.762C18.164 14.5086 18.7792 13.0024 18.9511 11.4157C19.123 9.82905 18.8448 8.22602 18.1482 6.79009C17.4517 5.35417 16.3649 4.14336 15.0123 3.29623C13.6597 2.44911 12.096 1.99989 10.5 2ZM4.00001 10.5C4.00001 8.77609 4.68483 7.12279 5.90382 5.90381C7.1228 4.68482 8.7761 4 10.5 4C12.2239 4 13.8772 4.68482 15.0962 5.90381C16.3152 7.12279 17 8.77609 17 10.5C17 12.2239 16.3152 13.8772 15.0962 15.0962C13.8772 16.3152 12.2239 17 10.5 17C8.7761 17 7.1228 16.3152 5.90382 15.0962C4.68483 13.8772 4.00001 12.2239 4.00001 10.5Z" fill="#6B7C85" />
                </g>
                <defs>
                  <clipPath id="clip0_1_267">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>

            </span>

            {/* three dots */}
            <span className="px-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 7.5C12.8284 7.5 13.5 6.82843 13.5 6C13.5 5.17157 12.8284 4.5 12 4.5C11.1716 4.5 10.5 5.17157 10.5 6C10.5 6.82843 11.1716 7.5 12 7.5Z" fill="#54656F" />
                <path d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z" fill="#54656F" />
                <path d="M12 19.5C12.8284 19.5 13.5 18.8284 13.5 18C13.5 17.1716 12.8284 16.5 12 16.5C11.1716 16.5 10.5 17.1716 10.5 18C10.5 18.8284 11.1716 19.5 12 19.5Z" fill="#54656F" />
              </svg>

            </span>


          </div>
        </div>
        <div className="chat-messages position-relative">
          {/* <!-- Messages will be displayed here --> */}

          {selectedId !== null ? (
            <ul className="list-unstyled incoming_messages">
              <li className=""><span>{array3.find(item => item.id === selectedId)?.text1}</span></li>
              <li className=""><span>{array3.find(item => item.id === selectedId)?.text2}</span></li>
            </ul>
          ) : (
            <div className=" bg-black w-100 h-100 top-0 start-0"></div>
          )}

          <div className="d-flex justify-content-center align-items-center mb-3">
            <div className="d-inline bg-white py-3 px-4 rounded-3 fs_14 veticaly">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.15 6.44995L12 9.59995L7.85001 5.44995L6.45001 6.84995L12 12.4L16.55 7.84995L15.15 6.44995Z" fill="#EA0038" />
                <path d="M18 9.5L13.5 5H18V9.5Z" fill="#EA0038" />
                <path d="M22.25 15.4L21.05 14.2C16.8 10.05 6.59999 10.65 2.94999 14.2L1.74999 15.4C1.39999 15.75 1.39999 16.25 1.74999 16.6L4.14999 18.95C4.49999 19.3 4.99999 19.3 5.34999 18.95L7.99999 16.4L7.79999 13.6C8.64999 12.75 15.35 12.75 16.2 13.6L16.05 16.5L18.6 18.95C18.95 19.3 19.45 19.3 19.8 18.95L22.2 16.6C22.6 16.25 22.6 15.7 22.25 15.4Z" fill="#EA0038" />
              </svg>
              <span>Missed voice call at 5:20 pm</span>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center mb-3">
            <div className="d-inline bg-white py-3 px-4 rounded-3 fs_14 veticaly">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.15 6.44995L12 9.59995L7.85001 5.44995L6.45001 6.84995L12 12.4L16.55 7.84995L15.15 6.44995Z" fill="#EA0038" />
                <path d="M18 9.5L13.5 5H18V9.5Z" fill="#EA0038" />
                <path d="M22.25 15.4L21.05 14.2C16.8 10.05 6.59999 10.65 2.94999 14.2L1.74999 15.4C1.39999 15.75 1.39999 16.25 1.74999 16.6L4.14999 18.95C4.49999 19.3 4.99999 19.3 5.34999 18.95L7.99999 16.4L7.79999 13.6C8.64999 12.75 15.35 12.75 16.2 13.6L16.05 16.5L18.6 18.95C18.95 19.3 19.45 19.3 19.8 18.95L22.2 16.6C22.6 16.25 22.6 15.7 22.25 15.4Z" fill="#EA0038" />
              </svg>
              <span>Missed voice call at 5:20 pm</span>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center mb-3">
            <div className="d-inline bg-white py-3 px-4 rounded-3 fs_14 veticaly">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.15 6.44995L12 9.59995L7.85001 5.44995L6.45001 6.84995L12 12.4L16.55 7.84995L15.15 6.44995Z" fill="#EA0038" />
                <path d="M18 9.5L13.5 5H18V9.5Z" fill="#EA0038" />
                <path d="M22.25 15.4L21.05 14.2C16.8 10.05 6.59999 10.65 2.94999 14.2L1.74999 15.4C1.39999 15.75 1.39999 16.25 1.74999 16.6L4.14999 18.95C4.49999 19.3 4.99999 19.3 5.34999 18.95L7.99999 16.4L7.79999 13.6C8.64999 12.75 15.35 12.75 16.2 13.6L16.05 16.5L18.6 18.95C18.95 19.3 19.45 19.3 19.8 18.95L22.2 16.6C22.6 16.25 22.6 15.7 22.25 15.4Z" fill="#EA0038" />
              </svg>
              <span>Missed voice call at 5:20 pm</span>
            </div>
          </div>

          {/* <ul className="list-unstyled outgoing_messages">
            <li><span>
              Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ducimus, enim autem quis numquam pariatur necessitatibus? Dolores reprehenderit eligendi inventore porro, ea laboriosam rem architecto illo facere, fugiat cum aliquam harum? Perspiciatis et ullam vel animi nostrum, laboriosam vitae? Eaque consequuntur voluptates blanditiis autem doloremque vero, hic quia esse, maxime vitae expedita a error eveniet quae aut alias omnis ipsa optio? Tenetur ex voluptas officia enim vel? Id corporis ea facere et placeat sit in cupiditate. Atque ex at, temporibus iure aliquam veniam similique porro cupiditate eum, quis nemo hic ipsam perferendis sequi, nulla eveniet rem deleniti consequatur voluptatum ad harum incidunt aperiam? Aliquid, error ad. Consectetur in facilis voluptate iste dolor possimus alias sapiente ratione libero nobis consequatur a, odit consequuntur aperiam aliquid mollitia, quibusdam minus iusto qui? Porro, placeat dolorem. Odio facere numquam at, quas dolorem distinctio. Sit nisi voluptatibus, nam eaque aperiam nihil porro doloremque reiciendis adipisci quisquam error modi quod voluptatum sint illo id ex. Recusandae cum officia eaque ad assumenda doloribus maiores tenetur earum qui necessitatibus, harum est dolorem eius animi, voluptas quam! Aliquam nobis dolorem est placeat ullam quaerat, officia blanditiis deserunt aliquid, dignissimos cum accusantium atque dolorum autem suscipit maiores quia obcaecati ea veritatis sunt ducimus nam! At molestiae obcaecati eos placeat quisquam a eligendi sit laborum quas quod minima consequatur amet et cupiditate vero beatae velit veritatis deleniti, totam quo omnis veniam dolorum! Doloribus velit voluptatum cumque, dolores dicta, voluptatibus nobis reprehenderit sint similique mollitia delectus explicabo officiis aperiam sit consectetur modi alias cupiditate quod ratione adipisci repellat impedit nisi nemo accusantium! Vel reprehenderit sit nostrum, minus, explicabo cumque harum similique maxime voluptates, quasi culpa quod. Ducimus laudantium ratione eum, voluptatem illo porro? Dolorum sit nam necessitatibus ipsam. Nisi nemo in atque consequuntur ex, placeat ab expedita adipisci perspiciatis commodi porro officia?</span></li>
            <li>
              <span>
                Lorem ipsum dolor sit amet.</span></li>
            <li>
              <span>
                Lorem, ipsum dolor.</span></li>
            <li><span>
              Lorem, ipsum dolor.</span></li>
          </ul> */}

          <ul className="list-unstyled outgoing_messages">
            {todos
              .map((todo, index) => (
                <li key={index}

                >
                  <span>{todo.text}</span>


                </li>
              ))}

 
          </ul>
        </div>



        <div className="message-input d-flex align-items-center gap-4">
          {/* <!-- Message input field and send button --> */}
          {/* emoji */}

          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_174)">
              <path d="M12 22.5C9.21523 22.5 6.54451 21.3938 4.57538 19.4246C2.60625 17.4555 1.5 14.7848 1.5 12C1.5 9.21523 2.60625 6.54451 4.57538 4.57538C6.54451 2.60625 9.21523 1.5 12 1.5C14.7848 1.5 17.4555 2.60625 19.4246 4.57538C21.3938 6.54451 22.5 9.21523 22.5 12C22.5 14.7848 21.3938 17.4555 19.4246 19.4246C17.4555 21.3938 14.7848 22.5 12 22.5ZM12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24Z" fill="#6B7C85" />
              <path d="M6.42747 14.3505C6.59973 14.251 6.80444 14.2241 6.99657 14.2756C7.1887 14.3271 7.35251 14.4527 7.45197 14.625C7.91264 15.4235 8.57555 16.0866 9.37396 16.5474C10.1724 17.0082 11.0781 17.2505 12 17.25C12.9218 17.2505 13.8276 17.0082 14.626 16.5474C15.4244 16.0866 16.0873 15.4235 16.548 14.625C16.5969 14.539 16.6623 14.4636 16.7404 14.4029C16.8186 14.3423 16.908 14.2978 17.0035 14.2719C17.0989 14.246 17.1985 14.2392 17.2966 14.2519C17.3947 14.2647 17.4893 14.2967 17.575 14.3462C17.6606 14.3956 17.7357 14.4615 17.7957 14.5401C17.8558 14.6187 17.8998 14.7084 17.925 14.804C17.9503 14.8996 17.9564 14.9993 17.943 15.0973C17.9296 15.1953 17.897 15.2897 17.847 15.375C17.2547 16.4015 16.4024 17.2539 15.376 17.8464C14.3495 18.4389 13.1851 18.7505 12 18.75C10.8148 18.7505 9.65042 18.4389 8.62398 17.8464C7.59755 17.2539 6.74529 16.4015 6.15297 15.375C6.05352 15.2027 6.02657 14.998 6.07805 14.8059C6.12952 14.6138 6.25521 14.45 6.42747 14.3505ZM10.5 9.75C10.5 10.992 9.82797 12 8.99997 12C8.17197 12 7.49997 10.992 7.49997 9.75C7.49997 8.508 8.17197 7.5 8.99997 7.5C9.82797 7.5 10.5 8.508 10.5 9.75ZM16.5 9.75C16.5 10.992 15.828 12 15 12C14.172 12 13.5 10.992 13.5 9.75C13.5 8.508 14.172 7.5 15 7.5C15.828 7.5 16.5 8.508 16.5 9.75Z" fill="#6B7C85" />
            </g>
            <defs>
              <clipPath id="clip0_1_174">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>


          {/* attachment */}

          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.4629 5.57598C18.7749 4.82598 17.5339 4.77998 16.7069 5.60698L8.60694 13.707C8.39694 13.917 8.39694 14.183 8.60694 14.393C8.81694 14.603 9.08294 14.603 9.29294 14.393L15.9929 7.69298C16.1815 7.51082 16.4341 7.41003 16.6963 7.41231C16.9585 7.41459 17.2094 7.51976 17.3948 7.70516C17.5802 7.89057 17.6853 8.14139 17.6876 8.40358C17.6899 8.66578 17.5891 8.91838 17.4069 9.10698L10.7069 15.807C10.4786 16.0419 10.2055 16.2287 9.90367 16.3563C9.60188 16.4838 9.27757 16.5495 8.94994 16.5495C8.62231 16.5495 8.298 16.4838 7.99621 16.3563C7.69442 16.2287 7.42128 16.0419 7.19294 15.807C6.95798 15.5786 6.7712 15.3055 6.64366 15.0037C6.51612 14.7019 6.45041 14.3776 6.45041 14.05C6.45041 13.7223 6.51612 13.398 6.64366 13.0963C6.7712 12.7945 6.95798 12.5213 7.19294 12.293L15.2929 4.19298C16.8599 2.62498 19.4079 2.57398 20.9229 4.20798C22.4749 5.77698 22.5199 8.31198 20.8929 9.82098L11.4069 19.307C9.21694 21.497 5.78294 21.497 3.59294 19.307C1.40294 17.117 1.40294 13.683 3.59294 11.493L11.6929 3.39298C11.8815 3.21082 12.1341 3.11003 12.3963 3.11231C12.6585 3.11459 12.9093 3.21976 13.0948 3.40516C13.2802 3.59057 13.3853 3.84138 13.3876 4.10358C13.3899 4.36578 13.2891 4.61838 13.1069 4.80698L5.00694 12.907C3.59694 14.317 3.59694 16.483 5.00694 17.893C6.41694 19.303 8.58294 19.303 9.99294 17.893L19.4929 8.39298L19.5239 8.36298C20.2739 7.67598 20.3199 6.43398 19.4929 5.60698C19.4827 5.59685 19.4727 5.58652 19.4629 5.57598Z" fill="#6B7C85" />
          </svg>



          <div htmlFor="message" className="message_input d-flex flex-grow-1 me-4">
            <label htmlFor="message">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="#6B7C85" />
                <path d="M20 4H16.83L15.59 2.65C15.4036 2.44539 15.1767 2.28191 14.9235 2.16999C14.6704 2.05807 14.3968 2.00017 14.12 2H9.88C9.32 2 8.78 2.24 8.4 2.65L7.17 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17Z" fill="#6B7C85" />
              </svg>


            </label>
            <form className="w-100" onSubmit={handleFormSubmit}>
              <input id="message" type="type" value={newTodo} onKeyDown={handleKeyDown} onChange={handleInputChange} placeholder="Type a message" className="w-100" />
            </form>
          </div>

          {/* mic */}

          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 14C11.1667 14 10.4583 13.7083 9.875 13.125C9.29167 12.5417 9 11.8333 9 11V5C9 4.16667 9.29167 3.45833 9.875 2.875C10.4583 2.29167 11.1667 2 12 2C12.8333 2 13.5417 2.29167 14.125 2.875C14.7083 3.45833 15 4.16667 15 5V11C15 11.8333 14.7083 12.5417 14.125 13.125C13.5417 13.7083 12.8333 14 12 14ZM11 21V17.925C9.26667 17.6917 7.83333 16.9167 6.7 15.6C5.56667 14.2833 5 12.75 5 11H7C7 12.3833 7.48767 13.5623 8.463 14.537C9.43767 15.5123 10.6167 16 12 16C13.3833 16 14.5627 15.5123 15.538 14.537C16.5127 13.5623 17 12.3833 17 11H19C19 12.75 18.4333 14.2833 17.3 15.6C16.1667 16.9167 14.7333 17.6917 13 17.925V21H11Z" fill="#6B7C85" />
          </svg>


        </div>

        {/* <div class="right-sidebar">
        </div> */}
      </div>
    </div>
  );
};

export default View;
