import Head from 'next/head'

export default (props) =>(
<div className="grid-container">
    <Head>
        <title>Reactor</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
    </Head>
        {props.children}
    <div className='footer'>Footer</div>
    <style jsx global>{`
    *{
        padding:0px;
        margin:0px;
        box-sizing: border-box;
        box-shadow: 200px;
    }
    .grid-container{
        display:grid;
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
    .footer{
        color:white;
        background-color:darkBlue;
        text-align:center;
    }
    @media only screen and (min-width: 500px) {
        .grid-container {
               /* styles */
           }
    `}
    </style>
    </div> 
)