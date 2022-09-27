interface ExternalLinkProps {
    href: string;
    img: any
}

const ExternalLink = (props: ExternalLinkProps) => {
    const Image = props.img;
    return (
        <div className="flex--column external--link">
            <Image />
        </div>
    );
};

export { ExternalLink };