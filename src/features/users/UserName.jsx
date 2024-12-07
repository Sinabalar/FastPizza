import React from "react"
import { useSelector } from "react-redux"

export default function UserName() {
  const userName = useSelector((state) => state.user.username)
  return <div className={"hidden text-sm font-semibold md:block"}>{userName}</div>
}
