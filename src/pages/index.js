import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Tonewood Data" keywords={[`tonewood`, `data`, `database`, `luthiery`]} />
    <h3>About the Tonewood Data Project</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a urna lacinia, eleifend nulla ac, accumsan dui. Nunc sodales semper augue faucibus auctor. Phasellus rutrum lorem pretium felis ultrices, a mattis est lacinia. Praesent ac elit et odio faucibus commodo eget et nibh. Cras a ullamcorper velit. In magna sapien, ultrices vel suscipit non, lacinia id nunc. Phasellus erat odio, vulputate eu dignissim sit amet, pretium at mi. Maecenas porttitor ultrices ipsum sed accumsan. Donec eu nisi sem. Praesent iaculis quis augue placerat mollis. Integer sit amet massa ut orci sodales tristique. Cras a arcu vel lectus egestas commodo. Integer non odio rhoncus, semper leo ac, faucibus velit.</p>
  </Layout>
)

export default IndexPage
