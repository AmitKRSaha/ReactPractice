import React from 'react';

function Hero(props) {
    return (
    <div className="row">
        <div className="jumbotron col-10 offset-1">
            <h1> Author</h1>
        </div>
    </div>
    );
}

function Book({title, click}) {
    return (<div className="answer" onClick={() => {click(title);}}>
      <h4>{title}</h4>
    </div>
    );
  }

function Turn({author, books, highlight, onAnswerSelected}){
    // console.log(onAnswerSelected);
    function hgBgcolor(highlight) {
        const mapp= {
            'none': 'white',
            'correct': 'green',
            'wrong':'red'
        };
        // console.log(mapp[highlight]);
        return mapp[highlight];
    }

    return(<div className="row turn" style={{backgroundColor: hgBgcolor(highlight)}}>
    <div className="col-4 offset-1">
      <img src={author.imageUrl} className="authorimage" alt="Author"/>
    </div>
    <div className="col-6">
      {books.map((title) => <Book title={title} key={title} click={onAnswerSelected}/>)}
    </div>
  </div>);
}


function Continue({ show, onContinue }){
    return (
        <div className="row continue">
        { show 
          ? <div className="col-11">
              <button className="btn btn-primary btn-lg float-right" onClick={onContinue}>Continue</button>
            </div>
          : null }
        </div>
      );
}

function Footer(){
    return(<div>This is Footer Section</div>);
}

export function AuthorQuiz(props) {   
    // console.log('From Author :' + onAnswerSelected);
    const {turnData,highlight} = {...props.state};
    const onAnswerSelected = props.onAnswerSelected;
    const onContinue = props.onContinue;
        return (
            <div className = "container-fluid">
                <Hero />
               <Turn  {...turnData}  highlight={highlight} onAnswerSelected ={onAnswerSelected}/>
               <Continue  show={highlight === 'correct'} onContinue={onContinue}/>
               <Footer />
            </div>
        );
}
