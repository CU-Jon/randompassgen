function PhoneticHelper({ phonetic }) {
  if (!phonetic) {
    return (
      <div className="row p-1">
        <div className="col-md-4">
          <div className="Phoneticl">
            <label>Remember your password:</label>
          </div>
        </div>
        <div className="col-md-8">
          <div className="Phoneticr" style={{ height: '150px' }}>
            <label>Remember your password with the first character of each word in this sentence.</label>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="row p-1">
      <div className="col-md-4">
        <div className="Phoneticl">
          <label>Remember your password:</label>
        </div>
      </div>
      <div className="col-md-8">
        <div className="Phoneticr" style={{ height: '150px' }}>
          <label>{phonetic}</label>
        </div>
      </div>
    </div>
  )
}

export default PhoneticHelper
