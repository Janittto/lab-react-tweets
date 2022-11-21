//import React from "react"

const User = ({userData}) => {
	return (
		<div className="user">
			<span>{userData.name}</span>
			<span>{userData.handle}</span>
		</div>
	)
}

export default User
