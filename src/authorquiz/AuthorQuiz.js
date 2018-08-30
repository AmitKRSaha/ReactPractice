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

function Book({title}) {
    return (<div className="answer">
      <h4>{title}</h4>
    </div>
    );
  }

function Turn({author, books, highlight}){
    console.log(author, books , highlight);
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
      {books.map((title) => <Book title={title} key={title} />)}
    </div>
  </div>);
}


function Continue(){
    return(<div>Continue</div>);
}

function Footer(){
    return(<div>This is Footer Section</div>);
}

export function AuthorQuiz(props) {   
    // console.log('From Author :' + props);
        return (
            <div className = "container-fluid">
                <Hero />
               <Turn  {...props.turnData}  highlight={props.highlight}/>
               <Continue />
               <Footer />
            </div>
        );
}
