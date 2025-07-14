function Header() {
  return (
    <div className="row">
      <div id="header" className="p-4">
        <div id="Logo">
          <img 
            className="Logoimg" 
            src="/logo.png" 
            alt="Secure Random Password Generator"
          />
        </div>
        <h1 id="LogoText">
          Random Password Generator
        </h1>
      </div>
    </div>
  )
}

export default Header
