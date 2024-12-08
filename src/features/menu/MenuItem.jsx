import { formatCurrency } from "../../utils/helpers.js"
import Button from "../../ui/Button.jsx"
import { useDispatch } from "react-redux"
import { addItem } from "../cart/cartSilce.js"

function MenuItem({ pizza }) {
  const dispatch = useDispatch()
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name: name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    }

    dispatch(addItem(newItem))
  }

  return (
    <li className={"flex gap-4 py-2"}>
      <img
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
        src={imageUrl}
        alt={name}
      />
      <div className={"mt-0.5 flex grow flex-col"}>
        <p className={"font-medium"}>{name}</p>
        <p className={"text-sm capitalize italic text-stone-500"}>
          {ingredients.join(", ")}
        </p>
        <div className={"mt-auto flex items-center justify-between"}>
          {!soldOut ? (
            <p className={"text-sm"}>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className={"text-sm font-medium uppercase text-stone-500"}>
              Sold out
            </p>
          )}
          {!soldOut && (
            <Button type={"small"} onClick={handleAddToCart}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  )
}

export default MenuItem
