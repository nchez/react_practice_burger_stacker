export default function Burger({ userIngredients, handleClick, handleClear }) {
  const burger = userIngredients.map((element, index) => {
    return (
      <div
        key={`ingred-index-${index}`}
        className="ingredient"
        onClick={() => handleClick(element)}
      >
        {element}
      </div>
    )
  })
  return (
    <div className="pane">
      <h2>this is the burger</h2>
      {burger}
      <div onClick={handleClear} className="ingredient">
        Clear
      </div>
    </div>
  )
}
