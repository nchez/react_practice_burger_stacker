export default function Ingredients({ ingredients, handleClick }) {
  const ingredientsList = ingredients.map((element, index) => {
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
      <h2>this is the ingredients list</h2>
      {ingredientsList}
    </div>
  )
}
