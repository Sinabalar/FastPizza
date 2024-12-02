import CreateUser from "../features/users/CreateUser.jsx"

function Home() {
  return (
    <div className={"my-10 text-center sm:my-16 px-4"}>
      <h1 className={"md:text-3xl mb-8 text-center text-xl font-semibold text-stone-700"}>
        The best pizza.
        <br />
        <span className={"text-yellow-500"}>
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  )
}

export default Home
