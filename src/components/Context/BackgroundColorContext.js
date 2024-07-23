// Importing React to use createContext
import React from 'react'

// Correctly creating a context with default values
const BackgroundColorContext = React.createContext({
  bgColor: false,
  onChangeBgColor: () => {},
})

// Exporting the context to be used in other components
export default BackgroundColorContext
