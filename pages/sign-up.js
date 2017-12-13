import Layout from './comps/Layout'

export default () =>(
<Layout>
    <div className='row' id='signup-form'>
        <div className='col'>
            <h1>Sign Up</h1>
        </div>
    </div>
    <style jsx>{`
    #signup-form{
        background: url(../static/img/signup-img.png) center fixed; 
        background-size: cover;
    }
    h1{
        text-decoration:underLine;
        text-align:center;
    }
    `}</style>
</Layout>
)