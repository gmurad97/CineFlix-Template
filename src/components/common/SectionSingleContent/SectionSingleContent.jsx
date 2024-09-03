import "./SectionSingleContent.css";

const SectionSingleContent = ({ children }) => {
    return (
        <section className="section__single-content">
            {children}
        </section>
    );
}

export default SectionSingleContent;