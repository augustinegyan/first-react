import PropTypes from 'prop-types'
function UserGreeting(props){

    const loginPrompt = <h2 className="success"> Welcome {props.username}; </h2>
    const noLogin = <h2 className="fail"> Kindly Login to continue </h2>

return (
    props.isLoggedIn ? loginPrompt
    : noLogin
)
}
UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username : PropTypes.string,
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: 'Guest'
}
export default UserGreeting