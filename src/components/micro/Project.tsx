interface ProjectProps {
    title: string;
    catchphrase: string;
    img: string;
}

const Project = (props: ProjectProps) => {
    return (
        <div className="flex--column project" style={{backgroundImage: `url(${props.img})`}}>
            <div className="title">
                {props.title}
            </div>

            <div className="catchphrase">
                {props.catchphrase}
            </div>
        </div>
    )
};

export { Project };