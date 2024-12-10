import { useState } from "react"
import { Form, redirect, useActionData, useNavigation } from "react-router-dom"
import { createOrder } from "../../services/apiRestaurant.js"
import Button from "../../ui/Button.jsx"
import { useDispatch, useSelector } from "react-redux"
import { clearCart, getCart, getTotalCartPrice } from "../cart/cartSilce.js"
import EmptyCart from "../cart/EmptyCart.jsx"
import store from "../../store.js"
import { formatCurrency } from "../../utils/helpers.js"
import { fetchAddress } from "../users/userSlice.js"

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  )

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false)

  const {
    username,
    status: addressStatus,
    position,
    address,
    error: errorAddress,
  } = useSelector((state) => state.user)
  const isLoadingAddress = addressStatus === "loading"

  const navigation = useNavigation()
  const isSubmitting = navigation.state === "submitting"
  const formErrors = useActionData()
  const cart = useSelector(getCart)

  const totalCartPrice = useSelector(getTotalCartPrice)
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0
  const totalPrice = totalCartPrice + priorityPrice

  const dispatch = useDispatch()

  if (!cart.length) return <EmptyCart />

  return (
    <div className={"px-4 py-6"}>
      <h2 className={"mb-8 text-xl font-semibold"}>
        Ready to order? Let's go!
      </h2>

      <Form method={"POST"}>
        <div
          className={
            "mb-5 flex flex-col items-center gap-2 sm:flex-row sm:items-center"
          }
        >
          <label className={"sm:basis-40"}>First Name</label>

          <input
            type="text"
            name="customer"
            required
            className={"input grow"}
            defaultValue={username}
          />
        </div>

        <div className={"mb-5 flex flex-col items-center gap-2 sm:flex-row"}>
          <label className={"sm:basis-40"}>Phone number</label>
          <div className={"grow"}>
            <input
              type="tel"
              name="phone"
              required
              className={"input w-full"}
            />
            {formErrors?.phone && (
              <p
                className={
                  "mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700"
                }
              >
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div
          className={
            "relative mb-5 flex flex-col items-center gap-2 sm:flex-row"
          }
        >
          <label className={"sm:basis-40"}>Address</label>
          <div className={"grow"}>
            <input
              type="text"
              name="address"
              required
              className={"input w-full"}
              disabled={isLoadingAddress}
              defaultValue={address}
            />

            {addressStatus === "error" && (
              <p
                className={
                  "mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700"
                }
              >
                {errorAddress}
              </p>
            )}
          </div>
          {!position.latitude && !position.latitude && (
            <span
              className={
                "absolute right-[1px] top-[35px] z-10 sm:right-[5px] sm:top-[5px]"
              }
            >
              <Button
                disabled={isLoadingAddress || isLoadingAddress}
                type={"small"}
                onClick={(e) => {
                  e.preventDefault()
                  dispatch(fetchAddress())
                }}
              >
                {isLoadingAddress ? "Loading..." : "Get location"}
              </Button>
            </span>
          )}
        </div>

        <div className={"mb-12 flex items-center gap-5"}>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className={
              "h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-offset-2"
            }
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label className={"font-medium"} htmlFor="priority">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <Button type={"primary"} disabled={isSubmitting}>
            {isSubmitting
              ? "Placing order..."
              : `Order now ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
        <input type={"hidden"} name={"cart"} value={JSON.stringify(cart)} />
        <input
          type={"hidden"}
          name={"position"}
          value={
            position.longitude && position.latitude
              ? `${position.latitude} ${position.longitude}`
              : ""
          }
        />
      </Form>
    </div>
  )
}

export async function action({ request }) {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  }

  const errors = {}
  if (!isValidPhone(order.phone)) {
    errors.phone = "please give us a valid phone number!"
  }
  if (Object.keys(errors).length > 0) return errors

  const newOrder = await createOrder(order)
  store.dispatch(clearCart())
  return redirect(`/order/${newOrder.id}`)
}

export default CreateOrder
