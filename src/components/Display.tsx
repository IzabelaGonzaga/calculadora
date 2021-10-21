import './Display.css'

type DisplayProps = {value: string}

function Display({value}: DisplayProps){
    return (
        <div className="Display"> {value} </div>
    );
}

export default Display;