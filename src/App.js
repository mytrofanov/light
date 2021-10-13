import './App.css';



function App() {


    let text = `In this text you should highlight word text`
    let text2 = ['aaaa', 'bbbb', 'cccc', 'text', 'word']
    let searchText = 'b'
    // let resultText = `<mark>${searchText}</mark>`
    // let regularExpression = new RegExp(searchText, 'gi')
    // text = text.replace(regularExpression, resultText)
    let textHighlighter;
    return (
        <div className="App">
            <div className="text" id='text' key='text'>

                {text2.map((result, i) => {
                    let searchKeywordIdx = result.indexOf(searchText);
                    if (searchKeywordIdx > -1) {
                        textHighlighter = [
                            result.substring(0, searchKeywordIdx),
                            <strong key={i}>
                                {result.substring(searchKeywordIdx, searchKeywordIdx + searchText.length)}
                            </strong>,
                            result.substring(searchKeywordIdx + searchText.length)
                        ];
                    }
                    return <li key={result}>{textHighlighter}</li>;
                })}


                </div>
                </div>
                )}


                    export default App;
