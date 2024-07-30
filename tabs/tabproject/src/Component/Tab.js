import React, { useState } from 'react'
import "./tab.css"

function Tab({ tab }) {
    const[currentIndex, setCurrentIndex]= useState(0)
    return (
        <><div>
            <div >{tab.map((tab,index) => {
                return (
                    <button
                    className={`${currentIndex=== index?"active":""}`}
                    onClick={()=>setCurrentIndex(index)}
                    >{tab.label}</button>
                )
            })} </div>
            <div className='content_tab'>{tab[currentIndex].content}</div>
</div>
        </>
    )
}

export default Tab