import React from "react"
import Tone from 'tone';

import Layout from "../components/layout"
import SEO from "../components/seo"

var osc = new Tone.Oscillator(440, "sine").toMaster();

class ToneButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false
    };

    this.toggleTone = this.toggleTone.bind(this);
  }
  toggleTone() {
    if (!this.state.playing) {
      osc.start();
    } else {
      osc.stop()
    }
    this.setState({ playing: !this.state.playing })
  }
  render(){
    return <button onClick={this.toggleTone}>{this.state.playing ? 'stop' : 'play 440hz' }</button> ;
  }
}

const IndexPage = () => (
  <Layout>
    <SEO title="Tonewood Testing" keywords={[`tonewood`, `data`, `database`, `luthiery`]} />
    <h3>Testing Your Tonewood</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam malesuada hendrerit risus, ut suscipit ipsum tempor vitae. Nam a sem dictum, commodo risus quis, sagittis mi. Morbi hendrerit, tortor sed commodo dignissim, odio lorem euismod lorem, suscipit egestas elit mauris eget nibh. In quis nibh at ligula blandit varius ut vitae libero. Fusce tincidunt risus nec ligula lacinia efficitur. Phasellus mattis sapien sed sapien varius, ac ultricies eros lobortis. Vestibulum massa purus, pharetra vitae nisl at, dapibus accumsan odio. Ut a fringilla lorem. Donec et lobortis est. Nam porttitor metus tincidunt quam vehicula malesuada. Aliquam efficitur turpis sit amet suscipit sagittis. Aliquam vitae blandit nisl, vitae dictum risus.</p>
    <ToneButton />
    <p></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam malesuada hendrerit risus, ut suscipit ipsum tempor vitae. Nam a sem dictum, commodo risus quis, sagittis mi. Morbi hendrerit, tortor sed commodo dignissim, odio lorem euismod lorem, suscipit egestas elit mauris eget nibh. In quis nibh at ligula blandit varius ut vitae libero. Fusce tincidunt risus nec ligula lacinia efficitur. Phasellus mattis sapien sed sapien varius, ac ultricies eros lobortis. Vestibulum massa purus, pharetra vitae nisl at, dapibus accumsan odio. Ut a fringilla lorem. Donec et lobortis est. Nam porttitor metus tincidunt quam vehicula malesuada. Aliquam efficitur turpis sit amet suscipit sagittis. Aliquam vitae blandit nisl, vitae dictum risus.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam malesuada hendrerit risus, ut suscipit ipsum tempor vitae. Nam a sem dictum, commodo risus quis, sagittis mi. Morbi hendrerit, tortor sed commodo dignissim, odio lorem euismod lorem, suscipit egestas elit mauris eget nibh. In quis nibh at ligula blandit varius ut vitae libero. Fusce tincidunt risus nec ligula lacinia efficitur. Phasellus mattis sapien sed sapien varius, ac ultricies eros lobortis. Vestibulum massa purus, pharetra vitae nisl at, dapibus accumsan odio. Ut a fringilla lorem. Donec et lobortis est. Nam porttitor metus tincidunt quam vehicula malesuada. Aliquam efficitur turpis sit amet suscipit sagittis. Aliquam vitae blandit nisl, vitae dictum risus.</p>
  </Layout>
)

export default IndexPage
