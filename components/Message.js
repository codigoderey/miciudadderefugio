import React from 'react'

const Message = ({ styleClass, icon, textMessage }) => {
  return (
    <div className={`${styleClass}`}>
      {icon}
      {textMessage}
    </div>
  )
}

export default Message
