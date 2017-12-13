export default ()=> (
<div className='row' id='about'>
<div className='col title'>
<h2>What We Do</h2>
</div>
<div className='col info'>
<h3>We do</h3>
<p>
    The quick brown fox jumps over the lazy dog.
    Djs flok by when MTV quiz prog.
    Junk MTV quiz graced by fox whelps.
    Bawd jog, flick quartz, vex nymphs.
    </p>
    </div>
    <style jsx>{`
    .row{
        display: grid;
    }
    .title{
        grid-column-start: 1;
        grid-column-end: 2;
        text-align:center;
        max-width:100%;
        padding:20px;
        maring:20px;
    }
    .info{
        grid-column-start: 3;
        grid-column-end: 4;
        line-spacing:0.2px;
        max-width:40%;
        padding:20px;
    }
    p{
        letter-spacing: 0.2px;
        line-height: 2;
    }
    `}</style>
</div>
)