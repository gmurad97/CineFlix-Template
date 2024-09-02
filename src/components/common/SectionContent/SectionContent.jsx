import "./SectionContent.css";

const SectionContent = ({ title, children }) => {
    return (
        <section className="section__content">
            <h1 className="section__title">{title}</h1>
            {children}
        </section>
    );
}

export default SectionContent;