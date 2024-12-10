import React from "react"
import Button from "../../ui/Button.jsx"
import { useFetcher } from "react-router-dom"
import { updateOrder } from '../../services/apiRestaurant.js'

export default function UpdateOrder({ order }) {
  const fetcher = useFetcher()
  console.log(order);

  return (
    <fetcher.Form method={"patch"} className={"text-right"}>
      <Button type={"primary"}>Make priority</Button>
    </fetcher.Form>
  )
}

export async function action({ params }) {
  const data={priority:true}
  await updateOrder(params.orderId,data)
  return null
}
