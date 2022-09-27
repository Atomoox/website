import { Link } from 'react-router-dom';

interface HeaderNavProps {
    route: string;
    isSelected: boolean;
}

const HeaderNav = (props: HeaderNavProps) => {
    return (
        <Link to={`.${props.route}`}>
            <div className={`flex--row nav ${props.isSelected && 'selected'}`}>
                .{props.route}
            </div>
        </Link>
    )
};

export { HeaderNav };