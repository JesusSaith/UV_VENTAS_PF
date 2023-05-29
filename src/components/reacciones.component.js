import React, { useState, useEffect } from "react";
import "../styles/reaccion.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faHeart, faAngry } from '@fortawesome/free-solid-svg-icons'
import KafkaService from "../services/kafka.service";



function saveLike(e, status) {
  
  let data = {
    id: 0,
    status: status
  };

  console.log(JSON.stringify(data));

  KafkaService.reaction("i-love-adsoftsito");
  e.preventDefault();
}

function Reactions() {
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
  
    return (
      <div>
        <button
          className={reaction === "like" ? "active" : ""}
            onClick={() => handleReactionClick("like")}
        >
          <FontAwesomeIcon icon={faThumbsUp} /> Like
        </button>
        <button
            className={reaction === "love" ? "active" : ""}
            onClick={(e) => {
              handleReactionClick("love")
              e.preventDefault();
                    saveLike(e, 1)
          }
        }
              
        >
          <FontAwesomeIcon icon={faHeart} /> Me encanta
        </button>
        <button
            className={reaction === "angry" ? "active" : ""}
            onClick={() => handleReactionClick("angry")}
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


  