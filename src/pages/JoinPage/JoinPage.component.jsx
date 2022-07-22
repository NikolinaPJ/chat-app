import "./JoinPage.styles.scss";

import Disneyheartbeat from "../../assets/Disneyheartbeat.svg";
import { Footer } from "../../components/Footer";
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
      talk <br/> 
      &hearts; Disney &hearts; 
      <br/> to me 
      </div>
      <img src={Disneyheartbeat} className="join-page__img" alt="Disneyheartbeat"/>
      <div className="join-page__form">
        <JoinForm onJoin={joinWithUser} />
      </div>
      <div className="join-page__footer">
      <Footer />
      </div>
    </div>

  );
}