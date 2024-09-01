import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

type ImageProps = React.ComponentProps<typeof LazyLoadImage>

export const Image = ({ ...props }: ImageProps) => {
    return (
        <LazyLoadImage
            {...props}
            effect="blur"
        />
    )
}