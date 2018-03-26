import Subscribe from './Subscribe'

export default () => (
  <div className='row'>
    <div className='col'>
      <p>
        <h3>The Mission</h3>
          Are you a Nomad? An Entrepreneur? Startup Junky? Adrenaline Junky?
        <br />
          Come Join One of the Most Thrilling, Cultural, Active Communities.
        <br />
          Learn some the best-kept secrets from all over the world!
        <br />
        <em>Subscribe to Join the Community and Find Out First!</em>
        <Subscribe/>
      </p>
    </div>
    <style jsx>{`
    em{
      color:red;
      font-size: 18px;
    }
    p{
      text-align:center;
      letter-spacing: 0.2px;
      line-height: 1.5;
      font-size:20px;
      padding:25px;
      margin:25px;
      opacity:0.5;
  }
    `}</style>
  </div>

)
