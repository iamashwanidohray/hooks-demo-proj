import React, { useContext } from 'react'
import { UserContext, ChannelContext } from '../App'

const ContextHooksExample = () => {

    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)

    return (
        <div>
            <h3>Consume using Render props... </h3>
            {/*  consume using Render props... */}
            <UserContext.Consumer>
                {
                    user=> {
                        return <div>User Context value : <b>{user}</b> </div>
                    }
                }
            </UserContext.Consumer>

                <hr/>
            <h3>Consume using Render props multiple context...</h3>
            {/* consume using Render props multiple context */}
            <UserContext.Consumer>
                {
                    user => {
                        return(
                            <ChannelContext.Consumer>
                                {
                                    channel => {
                                        return <div> User Context value : <b>{user}</b> and Channel Context value : <b>{ channel }</b></div>
                                    }
                                }
                            </ChannelContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
            <hr/>
            <h3>Consume using useContext() hook...</h3>
            {/* Consume using useContext() hook... */}
            <div>User: <b>{user}</b> and Channel: <b>{channel}</b></div>
            <hr/>

        </div>
    )
}

export default ContextHooksExample
