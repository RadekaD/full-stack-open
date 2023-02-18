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

    const errorMessageStyle={
        fontSize: 20,
        color: "red",
        fontWeight: "bold",
        backgroundColor: "pink",
        padding: 10,
        border: "3px solid red",
        borderRadius: 5
    }
    
    if (message === null) {
        return null
    }

    if (message.includes("failed")) {
        return (
            <div style={errorMessageStyle}>
                {message}
            </div>
        )
    } else {
        return (
            <div style={messageStyle}>
                {message}
            </div>
        )
    }

    
}

export default Notification;