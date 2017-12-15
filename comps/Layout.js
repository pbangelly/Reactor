import Head from 'next/head'

export default (props) =>(
<div>
    <Head>
      <title>Reactor</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
    </Head>
    <div className="header">
        <div className="container">
            <span>Reactor</span>
        </div>
    </div>
    {props.children}
    <footer>Footer</footer>
    <style jsx global>{`
    *{
        padding:0px;
        margin:0px;
        box-sizing: border-box;
    }
    .container {
        max-width: 90%;
        margin: 0 auto;
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
        color:grey;
    }
    `}</style>
    <style jsx>{`
        div.header {
            position: absolute;
            color: white;
            width: 100%;
            display: block;
        }
        span {
            display: inline-block;
            margin-top:1em;
            font-size: 1.5rem;
        }
        footer {
            color:white;
            background-color:darkBlue;
            text-align:center;
        }
    `}</style>
    </div> 
)