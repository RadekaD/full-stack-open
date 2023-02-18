import App from '../App';

const Notification = ({ message }) => {
    
    const messageStyle = {
        fontSize: 20,
        color: "green",
        fontWeight: "bold",
        backgroundColor: "lightgreen",
        padding: 10,
        border: "3px solid green",
        borderRadius: 5
    }
    
    if (message === null) {
        return null
    }

    return (
        <div style={messageStyle}>
            {message}
        </div>
    )
}

export default Notification;