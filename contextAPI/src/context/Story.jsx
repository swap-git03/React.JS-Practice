/* eslint-disable react-refresh/only-export-components */
import React, { createContext } from 'react'

export let Kahani = createContext()

function Story({ children }) {
  let story = {
    name: "gosht",
    description: "once upon a time there lived a ghostt ....baki nantr sangel"
  }

  return (
    <Kahani.Provider value={story}>
      {children}
    </Kahani.Provider>
  )
}

export default Story