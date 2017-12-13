export default () =>(
<div className='row'>
        <div className='row cooking'>
            <div className='col img'>
            <img src="../static/img/desk.png" alt="Desk and chair"/>
            </div>
            <div className="cooking-info">
            <h5>Regional Cuisine Down Home Southern Cooking</h5>
            <p>
            The quick brown fox jumps over the lazy dog.
            Djs flok by when MTV quiz prog.
            Junk MTV quiz graced by fox whelps.
            Bawd jog, flick quartz, vex nymphs.</p>
            </div>
        </div>
        
        <div className='row hardware'>
            <div className='col img'>
            <img src="../static/img/bowl.png" alt="Bowl and Coffee"/>
            </div>
                <div className= "hardware-info">
                    <h5>Pos Hardware More Options In Less Space</h5>
                    <p>
                    The quick brown fox jumps over the lazy dog.
                    Djs flok by when MTV quiz prog.
                    Junk MTV quiz graced by fox whelps.
                    Bawd jog, flick quartz, vex nymphs.</p>
                </div>
        </div>
<style jsx>{`
.row{
    display:grid;
    grid-template-columns: 1fr 1fr;
    background-color:#f1faef;
    padding:20px;
}
.col img{
    width:150px;
    height:auto;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
`}</style>
</div>

)
