import "./JoinPage.styles.scss";

import Disneyheartbeat from "../../assets/Disneyheartbeat.svg";

import { JoinForm } from "../../components/JoinForm";
import { useUser } from "../../contexts/UserContext";

export function JoinPage(props) {
  const { setUser } = useUser();

  const joinWithUser = (formState) => {
    setUser({ displayName: formState.displayName });
  }

  return (
    <div className="join-page">
      <div className="join-page__title"> 
      Chat with 
      <br/>
      &hearts; friends &hearts;
      </div>
      <img src={Disneyheartbeat} className="join-page__img" alt="Disneyheartbeat"/>
      <div className="join-page__form">
        <JoinForm onJoin={joinWithUser} />
      </div>
    </div>
  );
}