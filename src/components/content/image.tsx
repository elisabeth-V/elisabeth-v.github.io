import { ImageProps } from "../data/interfaces";

export default function Image(props: ImageProps) {
    return (
        <div className="imageBlock">
            <img src={props.url} alt={'image-' + props.imgId} />
            <p className="imageDetail"><span>{props.imgId}</span> {props.imgDesc}</p>
        </div>
    )   
  }