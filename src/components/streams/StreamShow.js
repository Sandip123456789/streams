import React from 'react';
import flv from 'flv.js';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends React.Component {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.fetchStream(id);

    this.buildFlvPlayer();

    // this.flvPlayer = flv.createPlayer({
    //   type: 'flv',
    //   url: `http://localhost:8000/live/${id}.flv`,
    // });
    // this.flvPlayer.attachMediaElement(this.videoRef.current);
    // this.flvPlayer.load();
  }

  componentDidUpdate() {
    this.buildFlvPlayer();
  }

  componentWillUnmount() {
    this.flvPlayer.destroy();
    // console.log('Unmounted');
  }

  //** Helper function to show flv player */

  buildFlvPlayer() {
    if (this.flvPlayer || !this.props.stream) {
      return;
    }
    const { id } = this.props.match.params;
    this.flvPlayer = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${id}.flv`,
    });
    this.flvPlayer.attachMediaElement(this.videoRef.current);
    this.flvPlayer.load();
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    const { title, description } = this.props.stream;

    return (
      <div>
        <video ref={this.videoRef} style={{ width: '100%' }} controls={true} />
        <h1>{title}</h1>
        <h3>{description}</h3>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
