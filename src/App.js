import './App.css';
import GetHighlightedText from "./light/light";


function App() {


    let text = `In this text you should highlight word text`
    let text1 = 'Hi Iam your favorit brother and father and sister'
    let text2 = ['saaaas', 'sabbbbs', 'satexts', 'sawords', 'saaa bbbs', 'saaa cccs', 'maximus', 'arahnid']
    let searchText = 'an'

    const parts = text1.split(new RegExp(`(${searchText})`, 'gi'));
    console.log (parts)


    return (
        <div className="App">
            <div className="text" id='text' key='text'>

                {parts.map((part, index) =>
                    part.toLowerCase() === searchText.toLowerCase() ?
                        <b key={index}>{part}</b> : part)}




                    {/*{*/}
                    {/*    text2.map(function(match, idx){*/}
                    {/*        let re = new RegExp(searchText, 'g');*/}
                    {/*        let str = match.replace(re, {replaceValue});*/}
                    {/*        return (<li key={idx}>{str}</li>)*/}
                    {/*    })*/}
                    {/*}*/}


                    {/*//============= старый код, не работает с двумя вхождениями в слове в разных местах*/}
                    {/*{text2.map((result, i) => {*/}
                    {/*    let searchKeywordIdx = result.indexOf(searchText);*/}
                    {/*    let lightLength = result.match(regularSearchText).length*/}
                    {/*    if (searchKeywordIdx > -1) {*/}
                    {/*        textHighlighter = [*/}
                    {/*            result.substring(0, searchKeywordIdx),*/}
                    {/*            <strong key={i}>*/}
                    {/*                {result.match(regularSearchText)}*/}
                    {/*            </strong>,*/}
                    {/*            result.slice(searchKeywordIdx + lightLength)*/}
                    {/*        ];*/}
                    {/*    }*/}
                    {/*    return <li key={i}>{textHighlighter}</li>;*/}
                    {/*})      */}
                    {/*}*/}


            </div>
        </div>
)}


export default App;
