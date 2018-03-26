// import { bindActionCreators } from 'redux'
import Layout from '../comps/Layout'
import Banner from '../comps/landing/Banner'
import Sec1 from '../comps/landing/Sec1'
import Sec2 from '../comps/landing/Sec2'
import withData from '../lib/withData'

export default withData((props) => (
  <Layout>
    <Banner/>
    <Sec1/>
    <Sec2/>
    <footer>Footer</footer>
    <style jsx>{`
            footer {
                color:white;
                background-color:darkSlateBlue;
                text-align:center;
                padding:15px;
            }
        `}</style>
  </Layout>
))
