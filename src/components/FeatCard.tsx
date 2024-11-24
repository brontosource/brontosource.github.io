import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type FeatCardProps = {
  image: {
    data: string | StaticImageData;
    alt: string;
    width?: number;
    height?: number;
  };
  title: string;
  content: string;
  redirectURL: string;
  showButton?: boolean;
};

const FeatCard = ({
  image,
  title,
  content,
  redirectURL,
  showButton,
}: FeatCardProps) => {
  return (
    <article className="bg-base-100 h-fit shadow-xl min-h-[455px] flex flex-col">
      <figure className="bg-base-200 pl-2 pt-2 relative">
        <Image
          src={image.data}
          alt={image.alt}
          width={image.width}
          height={image.height}
          style={{
            width: "auto",
          }}
          className="bottom-0 left-0 pl-2"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-primary">{title}</h2>
        <p className="text-primary-content/80 h-fit">{content}</p>
        {showButton && (
          <Link href={redirectURL} className="btn btn-primary ">
            Read More
          </Link>
        )}
      </div>
    </article>
  );
};

export default FeatCard;
