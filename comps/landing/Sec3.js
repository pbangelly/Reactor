export default () =>(
    <div className='container'>
    <h5 className='gallery-title'>Maui By Air The Best Way Around The Island.</h5>
        <div className="row">
            <div className="col">
                <img src="../static/img/people.png" alt="Crowd of people"/>
                <h5>East Josianfurt</h5>
                <p>085 Daron Via</p>
            </div>
            
            <div className="col">
                <img src="../static/img/building.png" alt="Buildings"/>
                <h5>South Cristopherport</h5>
                <p>162 Chandler Villie</p>
            </div>

            <div className="col">
                <img src="../static/img/fireworks.png" alt="Bridge and fireworks"/>
                <h5>Concepcionbury</h5>
                <p>7643 Kylie Burg</p>
            </div>
            
            <div className="col">
                <img src="../static/img/street.png" alt="Street and Building"/>
                <h5>Reychester</h5>
                <p>5590 Gabe Views Apt. 044</p>
            </div>
        </div>
        <style jsx>{`
        h5{
            padding-top:10px;
        }
        .row{
            grid-template-columns: repeat(4, 1fr);
            width:auto;
            grid-gap:0px;
        }
        .col{
            text-align:center;
            padding-bottom:25%;
        }
        .gallery-title{
            text-align:center;
            padding: 25px;
            margin: 15px;
        }
        img{
            height:200px;
            width:auto;
        }
        `}</style>
    </div>
)