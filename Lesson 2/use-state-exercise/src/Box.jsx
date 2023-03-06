export default function Box(props) {

    const styles = { 
        backgroundColor: props.on ? 'red' : 'transparent'
    }


    return (
        <div style={styles} on={props.on} onClick={props.toggle} className="box"></div>
    )
}