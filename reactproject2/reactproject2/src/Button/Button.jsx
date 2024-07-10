import styles from "./Button.module.css"
function Button() {
    const styleButton = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        marginTop:"10px"
    }
   /* return (<button className={ styles.button }>Click me</button>);*/
    return (<button style={styleButton}>Click me</button>);
}
export default Button