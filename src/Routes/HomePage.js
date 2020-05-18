import React, {useState} from 'react'
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import HomeTab from '../containers/HomeTab'
import ChatRooms from '../containers/ChatRooms'
import BattleRoom from '../containers/BattleRoom'

function HomePage(props) {

    const [showBattleRoom, setShowBattleRoom] = useState(false)

    const handleClick = () => {
        props.history.push('/dex')
    }

    return (
        <div>
           {showBattleRoom ? <BattleRoom /> : <HomeTab />}
           <ChatRooms></ChatRooms>
           <button onClick={handleClick}>dex</button>
           <button onClick={() => {setShowBattleRoom(true)}}>show battleRoom</button>
        </div>
    )
}

const mapStateToProps = function(state) {
    const {Auth, Messages} = state
    return {
      email: Auth.email,
      signedIn: Auth.signedIn,
      location: Auth.location,
      messages: Messages.messages,
      history: Auth.history,
    }
  }


export default connect(mapStateToProps)(withRouter(HomePage))