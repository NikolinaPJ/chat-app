import "./ChatPage.styles.scss";

import Error from "../../assets/Error.svg";

import { Message } from "../../components/Message";
import { MessageForm } from "../../components/MessageForm";

export function ChatPage(props) {
  if (props.error !== null) {
    return (
      <div className="chat-page__error"><span>error: </span>Failed to connect to chat room. <br/>
      <img src={Error} className="chat-page__img" alt="Error"/>
      </div>
    );
  }

  if (!props.joinedRoom) {
    return (
       <div className="chat-page__loader">
        <span className="chat-page__loader__element"></span>
        <span className="chat-page__loader__element"></span>
        <span className="chat-page__loader__element"></span>
        </div>
    );
  }

  const messageItems = props.messages.map((message) => (
    <div key={message.id} className="chat-page__message-list-item">
      <Message
        avatarBackgroundColor={message.user.avatarBackgroundColor}
        avatarText={message.user.avatarText}
        displayName={message.user.displayName}
        time={message.displayCreatedAt()}
      >
        {message.messageText}
      </Message>
    </div>
  ));

  return (
    <div className="chat-page">
      <div className="chat-page__title"> 
      talk 
      <br/> &hearts; Disney &hearts; 
      <br/> to me</div>
      <div className="chat-page__message-list">
        {messageItems}
      </div>
      <div className="chat-page__form">
        <MessageForm onSend={props.onSendMessage} />
      </div>
    </div>
  );
}