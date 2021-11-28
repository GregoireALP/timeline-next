import type { NextPage } from "next"

interface IProps {
    error: string;
}

const Error: NextPage<IProps> = (props) => {
    
    return (
        <div className="error">
            <p className="error-text">
                {props.error}
            </p>
        </div>
    )
}

export default Error