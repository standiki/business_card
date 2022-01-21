
const About = ({ aboutText }) => {
    return (
        <section className="about">
            <h3 className="title">About</h3>
            <p className="text">
                {aboutText}
            </p>
        </section>
    )
}

export default About;