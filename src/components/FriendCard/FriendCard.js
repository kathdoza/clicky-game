import React from "react";
import "./FriendCard.css"

const FriendCard = props => (
    <div
        class="card"
        value={props.id}
        onClick={() => props.handleClick(props.id)}>
        <div class="img-container">
            <img class="spider" alt={props.name} src={props.image} />
        </div>
    </div>
)

export default FriendCard;