import React from 'react'
import { Link } from 'react-router-dom'
import SearchOrder from '../features/order/searchOrder.jsx'
import UserName from '../features/users/UserName.jsx'

export default function Header() {
  return (
    <header
      className={'border-b border-stone-200 bg-yellow-500 px-4 py-3 uppercase'}
    >
      <Link to={'/'}>FastPizza</Link>
      <SearchOrder />
      <UserName />
    </header>
  )
}
