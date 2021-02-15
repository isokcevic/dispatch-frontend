const DescriptionField = ({ record }) => {
    if (!record) return null;

    const len = 100;
    const str = record.description.length > len+5 ? record.description.slice(0, len) + '(...)' : record.description;
    return (
        <div
            dangerouslySetInnerHTML={{
            __html: str
        }}></div>
    )
};

export default DescriptionField;