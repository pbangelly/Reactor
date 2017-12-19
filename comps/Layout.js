import Head from 'next/head'

export default (props) => (
  <div>
    <Head>
      <title>Reactor</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
    </Head>
    <div className="header">
      <div className="container">
        <h6>Reactor</h6>
      </div>
    </div>
    {props.children}
    <style jsx global>{`
    *{
        padding:0px;
        margin: 0px;
    }
    .row{
        display:grid;
    }
    h1{
        font-size:50px;
        color:#ffffff;
    }
    h2{
        font-size:32px;
        color:#e43c4b;
    }
    h3{
        font-size:24px;
        color:#272727;
    }
    h4{
        font-size:20px;
        color:#272727;
    }
    h5{
        font-size:18px;
        color:#413d3d;
    }
    p{
        font-size:16px;
        color:#1e3656;
    }
    `}</style>
    <style jsx>{`
        div.header {
            position: absolute;
            color: white;
            width: 100%;
            display: block;
        }
        h6 {
            font-size:1rem;
            margin:1em;
            margin-left:3em;
        }
    `}</style>
  </div>
)
