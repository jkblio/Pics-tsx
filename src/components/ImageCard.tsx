import * as React from "react";
import { IImage } from "../types/ImageType";

interface IState {
	spans: number
}

interface IProps {
	image: IImage
}

class ImageCard extends React.Component<IProps, IState>{
	imageRef = React.createRef<HTMLImageElement>();
	state = {spans: 0};
	

	componentDidMount() {
		this.imageRef.current.addEventListener("load", this.setSpans);
	}

	componentWillUnmount() {
		this.imageRef.current.addEventListener("load", this.setSpans);
	}

	setSpans = ()  => {
		const height = this.imageRef.current.clientHeight;

		const spans = Math.ceil(height / 10);

		this.setState({spans})
	}

	render() {
		const {description, urls} = this.props.image;

		return (
			<div style={{gridRowEnd: `span ${this.state.spans}` }}>
				<img ref={this.imageRef} alt={description} src={urls.regular} />
			</div>
		);
	}
}

export default ImageCard;