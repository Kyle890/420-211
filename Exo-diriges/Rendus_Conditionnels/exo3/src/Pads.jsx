
export default function Pad(props) {
    
    return (
        <button style={{backgroundColor : props.color}} className={props.use ? "on" : ""}></button>
    )
}