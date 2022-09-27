interface TechnologyProps {
    img: any;
    name: string;
}

const Technology = (props: TechnologyProps) => {
    const Image = props.img;
    return (
        <div className="flex--row technology">
            <Image />
            <div>
                {props.name}
            </div>
        </div>
    )
};

export { Technology };