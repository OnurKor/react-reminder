import React from 'react'

const Tab = ({children}) => {
    console.log(children)
  return (
    <div>
        {children}
    </div>
  )
}

Tab.Panel = ({children, title}) => {
    
    return(
        <div>
            {children} {title}
        </div>
    )
}

export default Tab