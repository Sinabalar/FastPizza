import React from "react"
import Button from "../../ui/Button.jsx"
import { useDispatch } from 'react-redux'
import { deleteItem } from './cartSilce.js'

function DeleteItem({pizzaId}) {

  const dispatch = useDispatch()

  function handleDelete(){
    dispatch(deleteItem(pizzaId))
  }

  return(
    <Button onClick={handleDelete} type={"small"}>Delete</Button>
  )
}
export default DeleteItem