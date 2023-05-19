import "./Display.css"

export default function Display ({value}) {
    return (
      <div className="component-display">
      <div>{value.toString().slice(0, 9)}</div>
      </div>
    )
}
