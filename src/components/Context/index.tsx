import React from 'react'
import Paragraph from './Paragraph';

interface IContextProps {
}

// Context
// CompA => CompB => CompC

// 1. Create context
// 2. Provider
// 3. Consumer


const Context = () => {
    return (
        <div>
            <Paragraph/>
        </div>
    )
}

export default Context;