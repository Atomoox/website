import '../../styles/macro/footer.scss';

const Footer = () => {
    return (
        <div className="flex--row footer">
            <div className="flex--column">
                <div className="name">
                    Clément Trens
                </div>
                <div className="title">
                    Software Engineer • 2022 
                </div>
            </div>

            <div className="flex--column contact">
                <div>
                    clement.trens@etu.umontpellier.fr
                </div>
                <div>
                    (+33) 7 83 14 31 25
                </div>
            </div>
        </div>
    )
};

export { Footer };