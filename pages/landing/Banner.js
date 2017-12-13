export default () =>(
<div className="banner">
<img src="../static/img/banner.png" alt="banner" width="1000" height="300"/>
<div className='header'>Hello, Welcome to Reactor</div>
<style jsx>{`
.banner {
    display:grid;
    position: relative;
}
.header {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
    color:#ffffff;
    letter-spacing:0.6px;
    text-align:center;
}
img { 
    width: 100%;
    height: auto;
}
    `}
    </style>
    </div>
)


// export default () =>(
// <div className="banner">
// <div id='header'>Hello, Welcome to Reactor</div>
//     <style jsx>{`
//     #header{
//         color:red;
//         padding:200px;
//         font-size:50px;
//         color:#ffffff;
//         letter-spacing:0.6px;
//         text-align:center;
//     }
//     .banner{
//         background-image:url(../static/img/banner.png);
//         background-repeat:no-repeat;
//         background-size:100%;
//         height:500px;
//     }
//     `}
//     </style>
//     </div>
// )

