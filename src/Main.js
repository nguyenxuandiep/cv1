import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";

// Main component
function Main() {
    return (
        <div className="container mt-5">
            
            <div className="row">
                <div className="col-md-6">
                    <LeftColumn />
                </div>
                <div className="col-md-6">
                    <RightColumn />
                </div>
            </div>
        </div>
    );
}

export default Main;