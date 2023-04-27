// Write your code here.

import './index.css'

const CardItem = props => {
  const {cardsList} = props
  const {title, className, description, imgUrl} = cardsList
  const classStyle = `cards ${className}`
  return (
    <li className={classStyle}>
      <div className="cards-container">
        <h1 className="card-heading">{title}</h1>
        <p>{description}</p>
        <img src={imgUrl} alt={title} className="card-image" />
      </div>
    </li>
  )
}

export default CardItem
