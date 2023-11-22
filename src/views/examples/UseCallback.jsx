import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { useState } from 'react'

const UseCallback = (props) => {
    const [count, setCount] = useState(0)

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />

        <div className="center">
            <span className="text">{count}</span>
            <div>
                <button className="btn">+6</button>
                <button className="btn">+12</button>
                <button className="btn">+18</button>
            </div>
        </div>
        </div>
    )
}

export default UseCallback
