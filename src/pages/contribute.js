import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LinkButton from "../components/link-button"

const IndexPage = () => (
  <Layout>
    <SEO title="Contribute" keywords={[`tonewood`, `data`, `database`, `luthiery`]} />
    <h3>Contributing to the Database</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam malesuada hendrerit risus, ut suscipit ipsum tempor vitae. Nam a sem dictum, commodo risus quis, sagittis mi. Morbi hendrerit, tortor sed commodo dignissim, odio lorem euismod lorem, suscipit egestas elit mauris eget nibh. In quis nibh at ligula blandit varius ut vitae libero. Fusce tincidunt risus nec ligula lacinia efficitur. Phasellus mattis sapien sed sapien varius, ac ultricies eros lobortis. Vestibulum massa purus, pharetra vitae nisl at, dapibus accumsan odio. Ut a fringilla lorem. Donec et lobortis est. Nam porttitor metus tincidunt quam vehicula malesuada. Aliquam efficitur turpis sit amet suscipit sagittis. Aliquam vitae blandit nisl, vitae dictum risus.</p>
    <LinkButton href="#">Submit Data</LinkButton>
  </Layout>
)

export default IndexPage
