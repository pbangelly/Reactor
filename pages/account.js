import Layout from '../comps/Layout'
import Form from '../comps/accounts/Form'

export default () => (
  <Layout>
    <section>
      <Form/>
    </section>
    <style jsx>{`
  div {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }
      section{
        display: flex;
        height:100vh;
        background: #ffffff url(../static/img/signup-img.png) no-repeat;
        background-size:cover;
        background-attachment:fixed;
        justify-content: center;
        align-items: center;
      }
    `}</style>
  </Layout>
)
