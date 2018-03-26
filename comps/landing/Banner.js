export default () => (
  <div className='row'>
    <h1 className='col'>
    Extreme Travelers Unite!
    </h1>
    <style jsx>{`
        .row{
            display: grid;
            height: 100vh;
            background-image:url(../../static/img/travel/passion.jpg);
            background-repeat:no-repeat;
            background-size: cover;
            object-fit: cover;
            justify-content: center;
            align-items: center;
        }
        h1{
          font-size:3em;
          border-radius: 5px;
          color:#ffffff;
          background-color:grey;
          opacity:0.5;
          padding:5px;
          text-shadow: 2px 2px red;
          box-shadow: 4px 4px black;
          }

    `}</style>
  </div>
)
