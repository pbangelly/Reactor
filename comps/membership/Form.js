export default ({activePanel = 'signup'}) => (
  <div>
    <ul>
      <li>Sign Up</li>
      <li style={{paddingLeft: '25px'}}>Login</li>
    </ul>
    <form>
      { activePanel === 'signup' ? <div className="input">
        <input placeholder="email" type="email" />
      </div> : null}

      <div className="input">
        <input placeholder="Password" type="password" />
      </div>
      <button className="button">Submit</button>
    </form>
    <style jsx>{`
        ul {
          margin-bottom: 1.5em;
          list-style:none;
        }
        li{
          display:inline;
          text-decoration:underline; /** only on hover, onClick and when active */
          padding:5px;
          color:white;
        }
        button{
          background-color:red;
          border: none;
          border-radius: 40px; /**use px instead of % for rounder edges*/
          color: white;
          margin: 4px 2px;
          height:50px;
          width:325px;
          padding:10px;
          text-align: center;
          text-decoration: none;
          font-size: 16px;
        }
        input {
          background: rgba(0,0,0,.2);
          border: none;
          color: white;
          width:300px;
          line-height: 1.5em;
          vertical-align: middle;
          margin-bottom: 1em;
          border-radius: 25px;
          padding:10px;
          font-size:20px;
        }
      `}</style>
  </div>
)
