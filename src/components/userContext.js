import React from "react";

const userContext = React.createContext('Code Evolution') // Defult value is set

const UserProvider = userContext.Provider
const UserConsumer = userContext.Consumer

export { UserConsumer, UserProvider }

export default userContext // Context Type

// Context Type has Limitation but it looks simpler to do