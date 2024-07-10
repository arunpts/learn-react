import PropTypes from 'prop-types'
function UserGreeting(props) {  
    //if (props.isLogged) {
    //    return (<h2>Welcome {props.userName}</h2>);  //conditonal rendering
    //}
    //else {
    //    return (<h2>Please log in to continue</h2>);
    //}
    //return (props.isLogged ? <h2 className="welcome-message">Welcome {props.userName}</h2> : <h2 class="login">Please log in to continue</h2>)

    const welcomeMessage = <h2 className="welcome-message">Welcome {props.userName}</h2>;
    const loginMessage = <h2 class="login">Please log in to continue</h2>;

    return (props.isLogged ? welcomeMessage : loginMessage)
}
UserGreeting.propTypes = {
    userName: PropTypes.string,
    isLogged: PropTypes.bool
}
UserGreeting.defaultProps = {
    userName: "Guest",
    isLogged: false
}
export default UserGreeting