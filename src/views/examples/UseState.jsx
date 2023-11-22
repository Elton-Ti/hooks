import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseState = (props) => {
    const [count, setCount] = useState(0)
    const [name, setname] = useState("")

    return (
        <div className="Projeto 1">
            <PageTitle
                title="Projeto 1"
                subtitle="Estado em componentes funcionais!" />

            <SectionTitle title="Exercício #01"></SectionTitle>
            <div className='center'>
                <span className="text">{count}</span>
                <div>
                    <button className="btn"
                        onClick={() => setCount(count -1)}>-1</button>
                    <button className="btn"
                        onClick={() => setCount(count +1)}>+1</button>
                    <button className="btn"
                        onClick={() => setCount(current => current + 1000)}>+1000</button>
                </div>
            </div>

            <SectionTitle title="Exercício #02"></SectionTitle>
            <input type="text" className="input"  
                value={name} onChange={e => setname(e.target.value)} />
            <span className="text">{name}</span>
            
            <SectionTitle title="Exercício #03"></SectionTitle>
            
        </div>
    )
}

export default UseState
