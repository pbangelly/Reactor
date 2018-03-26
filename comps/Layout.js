import Head from 'next/head'

export default ({ subscribed, accountForm, children }) => (
  <div>
    <Head>
      <title>ETU - Extreme Travelers Unite</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </Head>
    <div>
      <div className="header">
        <div className="logo">E. T. U.</div>
      </div>

      {children}

    </div>
    <style jsx global>{`
    *{
      padding:0px;
      margin: 0px;
          }
      .row{
        display:grid;
      }
        `}
    </style>
    <style jsx>{`
          .header {
          position: absolute;
          display: block;
          color: white;
          width: 100%;
          height:auto; 
          }
         .logo{
           color:pink;
          font-size:1rem;
          margin:1em;
          margin-left:3em;
          }
        `}
    </style>
  </div>
)
