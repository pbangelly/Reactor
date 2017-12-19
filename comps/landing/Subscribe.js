export default ({clickHandler}) => (
  <form>
    <div className="container">
      <h2>Subscribe to Newletter</h2>
      <div className='subscribe'>
        <input type="text" placeholder="Enter Email" required/>
        <button className="button" onClick={clickHandler} value="Send" accessKey="s">Subscribe</button>
      </div>
    </div>
    <style jsx>{`
form{
  display: flex;
  height: 200px;
  justify-content: center;
  align-items: center;
}
  input{
  border: 1px solid grey;
  border-radius: 5px;
  padding:10px;
  margin:10px;
  font-size:22px;
  width:300px;
}
h2{
  text-align:center;
}
.button {
  border: none;
  border-radius: 40px; /**use px instead of % for rounder edges*/
  color: white;
  background-color:darkSlateBlue;
  padding: 10px;
  margin: 4px 2px;
  height:50px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  width:150px;
}

`}</style>
  </form>
)
