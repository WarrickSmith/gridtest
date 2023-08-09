import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import './styles.css'

const cards = [
  { id: 1, component: <h1>Card 1</h1> },
  { id: 2, component: <h1>Card 2</h1> },
  { id: 3, component: <h3>Card 3</h3> },
  { id: 4, component: <h3>Card 4</h3> },
  { id: 5, component: <h3>Card 5</h3> },
]

const renderChildDiv = (card) => {
  console.log('CHILDCARD : ', card)
  switch (card) {
    case 3:
      return <h1>Child Div for Card 3</h1>
    case 4:
      return <h1>Child Div for Card 4</h1>
    case 5:
      return <h1>Child Div for Card 5</h1>
    default:
      return null
  }
}

export const LayoutCards = () => {
  const containerRefs = useRef(new Array())
  const [selectedId, setSelectedId] = useState(null)

  console.log('selectedId : ', selectedId)

  if (selectedId === 1 || selectedId === 2) setSelectedId(null)

  return (
    <div className="layout-cards">
      {cards.map((card, i) => (
        <motion.div
          className={selectedId === card.id ? 'opened-card' : 'card'}
          key={i}
          layout
          ref={(el) => (containerRefs.current[card.id] = el)}
          onClick={() => setSelectedId(selectedId === card.id ? null : card.id)}
        >
          {selectedId !== card.id && card.component}
          {selectedId === card.id && (
            <div>
              <div> X </div>
              <div>{renderChildDiv(selectedId)}</div>
            </div>
          )}
        </motion.div>
      ))}
      <motion.div
        className="dim-layer"
        animate={{ opacity: selectedId ? 0.3 : 0 }}
      />
    </div>
  )
}
