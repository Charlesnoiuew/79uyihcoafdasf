import './Logos.css'

const IMG = '/images/image copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy.png'

export default function Logos() {
  return (
    <div className="logos-strip">
      <div className="logos-strip__label">Worked With</div>
      <div className="logos-strip__crop">
        <img src={IMG} alt="Companies worked with" className="logos-strip__img" />
      </div>
    </div>
  )
}
