function Skills() {
    const skills = [
        { name: "React.js", rating: 85 },
        { name: "Vue.js", rating: 70 },
        { name: "PHP", rating: 65 },
        { name: "Tiếng Anh", rating: 50 },
    ];

    return (
        <div className="container">
            <h5 className="title">KỸ NĂNG</h5>
            <div >
                {skills.map((skill) => (
                    <div className="col-md-6-auto col-auto" key={skill.name}>
                        <p>{skill.name}</p>
                        <div className="progress">
                            <div
                                className="progress-bar bg-success"
                                role="progressbar"
                                style={{ width: `${skill.rating}%` }}
                                aria-valuenow={skill.rating}
                                aria-valuemin="0"
                                aria-valuemax="100"
                            >
                                {skill.rating}%
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Skills;