import React from 'react';
import { useEffect, useRef } from 'react';
import autoAnimate from '@formkit/auto-animate'
import { useAutoAnimate } from '@formkit/auto-animate/react'

export default function Profiles({ Leaderboard }) {
    const [listRef] = useAutoAnimate();
    return (
          <div class="profile" ref={listRef}>
              {Item(Leaderboard)}
          </div>
    )
}

function Item(data){
    
    return (
        <>
            {
                data.map((value, index) => (
                    <div className="flex" key={index}>
                        <div className="item">
                            <div className="itemFlexWrapper infoWrapper">
                                <img src={value.img} alt="" />
                                <div className="info">
                                    <p className='name'>{value.name}</p>    
                                    <p>{value.location}</p>
                                </div>
                            </div>            
                        </div>
                        <div className="item score">
                            <div className='itemFlexWrapper'>
                                <p>{value.score}</p>
                            </div>
                        </div>
                    </div>
                    )
                )
            }
        </>

        
    )
}