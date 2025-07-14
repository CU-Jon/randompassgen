function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="container footer-section">
      <div className="row p-1">
        <div className="col-sm">
          <footer>
            <p>
              Copyright &copy; {currentYear} <a 
                href="https://randompassgen.com/" 
                title="Password Generator"
                style={{ color: '#28a745', textDecoration: 'none' }}
              >
                randompassgen.com
              </a>
            </p>
            <p>This site was built using <a 
              href="https://getbootstrap.com/"
              style={{ color: '#28a745', textDecoration: 'none' }}
            >
              Bootstrap
            </a> and <a 
              href="https://react.dev/"
              style={{ color: '#28a745', textDecoration: 'none' }}
            >
              React
            </a>.</p>
            <p><strong>We do not and cannot store any passwords.</strong></p>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Footer
