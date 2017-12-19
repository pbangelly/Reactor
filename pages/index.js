import Layout from '../comps/Layout'
import Banner from '../comps/landing/Banner'
import Sec1 from '../comps/landing/Sec1'
import Sec2 from '../comps/landing/Sec2'
import Sec3 from '../comps/landing/Sec3'
import Subscribe from '../comps/landing/Subscribe'

export default () => (
  <Layout>
    <Banner/>
    <Sec1/>
    <Sec2/>
    <Sec3/>
    <Subscribe/>
    <footer>Footer</footer>
    <style jsx>{`
            footer {
                color:white;
                background-color:darkSlateBlue;
                text-align:center;
                padding:50px;
            }
    `}</style>
  </Layout>
)
