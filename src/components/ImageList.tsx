import "./ImageList.css";
import * as React from "react";
import ImageCard from "./ImageCard";
import { IImage } from "../types/ImageType";

interface IProps {
	images: IImage[]
}

const ImageList: React.FunctionComponent<IProps> = (props) => {
	const imageElements = props.images.map((image) => {
		return <ImageCard  key={image.id} image={image} />
	});
	return <div className="image-list">{imageElements}</div>;
};

export default ImageList;