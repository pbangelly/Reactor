export default () => (
  <div className="row">
    <div className="col">
      <img src="../static/img/travel/city.jpg" alt="City Pool"/>
      <h5>Mexico</h5>
      <p>085 Daron Via</p>
    </div>

    <div className="col">
      <img src="../static/img/travel/sky.jpg" alt="sky Lant"/>
      <h5>South Africa</h5>
      <p>162 Chandler Villie</p>
    </div>

    <div className="col">
      <img src="../static/img/travel/river.jpg" alt="River - Bridge"/>
      <h5>Miami</h5>
      <p>7643 Kylie Burg</p>
    </div>

    <div className="col">
      <img src="../static/img/travel/travelsky.jpg" alt="Street and Building"/>
      <h5>New York</h5>
      <p>5590 Gabe Views Apt. 044</p>
    </div>
    <style jsx>{`
    .row{
      grid-template-columns: auto auto auto auto;
      text-align: center;
    }
    .col{
      margin-bottom:50px;
      boreder:black 10px;
      box-shadow: 4px 4px red;
    }
    h5{
      text-shadow: 1px 1px grey;
      font-size: 25px;
      color:red;
    }
    p{
      color:grey;
      padding:10px;
    }
    img{
      height:200px;
      width:auto;
    }
`}</style>
  </div>
)
