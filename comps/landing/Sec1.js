export default ()=> (
<div className='row' id='about'>
<div className='col title'>
<h2>What We Do</h2>
</div>
<div className='col info'>
<h3 style={{paddingBottom:'5px'}}>We do</h3>
<p>
    The quick brown fox jumps over the lazy dog.
    Djs flok by when MTV quiz prog.
    Junk MTV quiz graced by fox whelps.
    Bawd jog, flick quartz, vex nymphs.
    </p>
    </div>
    <style jsx>{`
    .row{
        position: relative;
        padding:150px;
        grid-template-columns: 3fr 1fr;     
    }
    .title{
        position:absolute;
        top:35%;
        left: 25%;
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 3;
    }
    .info{
        width:500px;
        line-spacing:0.2px;
        grid-column-start: 3;
        grid-column-end: 4;
        grid-row-start: 1;
        grid-row-end: 3;
    }
    h3{
        color:grey;        
    }
    p{
        letter-spacing: 0.2px;
        line-height: 2;
    }
    `}</style>
</div>
)