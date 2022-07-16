import { Avatar } from "./components/Avatar";
import { MessageText } from "./components/MessageText";


function App() {
  return <div>
    <Avatar text="HP" backgroundColor="yellow" />
    <MessageText displayName="HeraTheYorkie" time="20:36">
      Who let the dog out? wuf, wuf, wuf 
    </MessageText>
  </div> 
}

export default App;