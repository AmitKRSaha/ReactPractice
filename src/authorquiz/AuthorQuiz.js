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

function Turn({author, books}){
    return(<div className="row turn" style={{backgroundColor: 'white'}}>
    <div className="col-4">
    {author}
    {/* <img  src={author.imageUrl} className="author" alt="Author" /> */}
    </div>
    <div className="col-6">
    {/* {books.map((title) => <p>{title}</p>)} */}
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
    console.log('From Author :' + props);
        return (
            <div className = "container-fluid">
                <Hero />
               <Turn  {...props}/>
               <Continue />
               <Footer />
            </div>
        );
}

// export default AuthorQuiz;