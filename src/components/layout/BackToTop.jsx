import useBackToTop from '../../hooks/useBackToTop'

export default function BackToTop() {
  const isActive = useBackToTop()

  const handleClick = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <a
      href="#"
      className={`back-to-top d-flex align-items-center justify-content-center${isActive ? ' active' : ''}`}
      onClick={handleClick}
    >
      <i className="fa-solid fa-chevron-up fa-beat"></i>
    </a>
  )
}
