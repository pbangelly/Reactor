export default ({ subscribe }) => {
  function handleSubmit(e) {
    e.preventDefault()
    let email = e.target.elements.email.value
    if (email === '') {
      window.alert('Please input a email.')
      return false
    }
    subscribe(email)
  }
  return (
    <form>
      <div className="container">
        <input type="text" placeholder="Enter Email" required name="email"/>
        <button className="button" onClick={handleSubmit} value="Send">Subscribe</button>
      </div>
      <style jsx>{`
        form{
          display: flex;
          height: 50px;
          justify-content: center;
          align-items: center;
          padding:20px;
        }
        input{
          border: 1px solid grey;
          border-radius: 5px;
          padding:10px;
          font-size:20px;
          width:200px;
        }
        .button {
          border: none;
          border-radius: 30px; /** use px instead of % for rounder edges */
          color: white;
          background-color:red;
          height:50px;
          text-align: center;
          text-decoration: none;
          font-size: 20px;
          width:150px;
        }
      `}
      </style>
    </form>
  )
}
