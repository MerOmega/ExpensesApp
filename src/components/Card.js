import "../componentesStyle/Card.css"

function Card(props){
    const classes = "card-box " + props.className
    return (
    <div className={classes}>
        {props.children}
    </div>
    )
}


export default Card;