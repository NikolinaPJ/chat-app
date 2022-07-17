import "./ChatPage.styles.scss";

import { Message } from "../../components/Message"
import { MessageForm } from "../../components/MessageForm"


export function ChatPage (props) {
    return (
        <div className="chat-page">
            <div className="chat-page__title">Chat with friends</div>
            <div className="chat-page__message-list">
                <div className="chat-page__message-lis-item">
                    <Message
                    avatarBackgroundColor="yellow" 
                    avatarText="HP" 
                    displayName="HeraTheYorkie Pavić" 
                    time="20:36"
                    >
                        Who let the dog out?  
                    </Message>
                </div>
                <div className="chat-page__message-list-item">
                    <Message
                    avatarBackgroundColor="blue" 
                    avatarText="EJ" 
                    displayName="Ella Jozić" 
                    time="20:42"
                    >
                        wuf, wuf, wuf, wuf, wuf ! 
                    </Message> 
                </div>
            </div>
            <div className="chat-page__form">
                <MessageForm />
            </div>
        </div> 

    );
}

