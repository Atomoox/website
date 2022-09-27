interface ExternalLinkProps {
    href: string;
    color: string;
    img: any
}

const ExternalLink = (props: ExternalLinkProps) => {
    const Image = props.img;
    return (
        <div className="flex--column external--link" style={{backgroundColor: props.color}}>
            <Image />
        </div>
    );
};

export { ExternalLink };