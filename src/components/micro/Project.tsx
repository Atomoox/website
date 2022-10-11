interface ProjectProps {
    title: string;
    catchphrase: string;
    img: string;
}

const Project = (props: ProjectProps) => {
    return (
        <div className="flex--column project">
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