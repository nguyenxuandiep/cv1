
function Button() {


    function handleThemeChange() {
        document.body.classList.toggle('dark-mode');
    }

    return (
        <div className="text-left">
            <button type="button" className="btn btn-secondary btn-circle " onClick={handleThemeChange}>Chế độ tối</button>
        </div>
    );
}

export default Button;