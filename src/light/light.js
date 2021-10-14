
export default  function GetHighlightedText(text, highlight) {
    // Split text on highlight term, include term itself into parts, ignore case
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return <span>{parts.map(part =>
        part.toLowerCase() === highlight.toLowerCase() ?
            <b>{part}</b> : part)}</span>;
}