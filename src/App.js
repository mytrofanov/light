import './App.css';



function App() {


    let text = `In this text you should highlight word text`
    let text2 = ['saaaas', 'sabbbbs', 'satexts', 'sawords', 'saaa bbbs', 'saaa cccs', 'maximus']
    let searchText = 'a'
    let regularSearchText =new RegExp(searchText, 'gi')
    // let resultText = `<mark>${searchText}</mark>`
    // let regularExpression = new RegExp(searchText, 'gi')
    // text = text.replace(regularExpression, resultText)
    let textHighlighter;
    return (
        <div className="App">
            <div className="text" id='text' key='text'>

                {text2.map((result, i) => {
                    let searchKeywordIdx = result.indexOf(searchText);
                    let lightLength = result.match(regularSearchText).length
                    if (searchKeywordIdx > -1) {
                        textHighlighter = [
                            result.substring(0, searchKeywordIdx),
                            <strong key={i}>
                                {/*{result.substring(searchKeywordIdx, searchKeywordIdx + searchText.length)}*/}
                                {result.match(regularSearchText)}
                            </strong>,
                            result.slice(searchKeywordIdx + lightLength)
                        ];
                    }
                    return <li key={i}>{textHighlighter}</li>;
                })}


                </div>
                </div>
                )}


                    export default App;
