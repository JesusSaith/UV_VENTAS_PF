import React, { useState, useEffect } from "react";
import "../styles/reaccion.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faHeart, faAngry } from '@fortawesome/free-solid-svg-icons'
import KafkaService from "../services/kafka.service";


function Reactions(props) {
    const [reaction, setReaction] = useState(null);
    const [reactionsCount, setReactionsCount] = useState({
      like: 0,
      love: 0,
      angry: 0
    });
  
    useEffect(() => {
      // Aquí se podría llamar a una función para guardar o enviar la reacción y su cantidad
      console.log("Reacciones:", reactionsCount);
    }, [reactionsCount]);
  
    const handleReactionClick = (type) => {
      setReaction(type);
      setReactionsCount({
        ...reactionsCount,
        [type]: reactionsCount[type] + 1
      });
    };

    const saveLike=(status, reaction)=> {
  
      let data = {
        id: 0,
        status: status
      };
    
      console.log(JSON.stringify(data));
    
      KafkaService.reaction(props.email,props.id,reaction);
    
    };
  
    return (
      <div>
        <button
          className={reaction === "like" ? "active" : ""}
            onClick={() => {handleReactionClick("like"); saveLike ( 1,"like" )}}
        >
          <FontAwesomeIcon icon={faThumbsUp} /> Like
        </button>
        <button
            className={reaction === "love" ? "active" : ""}
            onClick={(e) => {
              handleReactionClick("love")
              e.preventDefault();
                    saveLike(1, "love")
          }
        }
              
        >
          <FontAwesomeIcon icon={faHeart} /> Me encanta
        </button>
        <button
            className={reaction === "angry" ? "active" : ""}
            onClick={() => {handleReactionClick("angry");saveLike(1, "angry") }}
        >
          <FontAwesomeIcon icon={faAngry} /> Me enoja
        </button>

        <p>Likes: {reactionsCount.like}
        Me encanta: {reactionsCount.love}
        Me enoja: {reactionsCount.angry}</p>

       




      </div>
    );
  }


  export default Reactions;


  