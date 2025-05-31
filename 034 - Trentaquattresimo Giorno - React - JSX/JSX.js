const h1 = <h1>Hello world</h1>;
const myArticle = <article></article>;

const p1 = <p id="large">foo</p>;
const p2 = <p id="small">bar</p>;

// ATTENZIONE: gli elementi JSX devono essere racchiusi tra parentesi se su più righe
const myDiv = (
  <div>
    <h1>
      Hello world
    </h1>
  </div>
);

//ATTENZIONE: gli elementi JSX devono essere wrappati dentro un singolo elemento parent
const blog = (
  <div>
    <img src="pics/192940u73.jpg" />
    <h1>
      Welcome to Dan's Blog!
    </h1>
    <article>
      Wow I had the tastiest sandwich today. I <strong>literally</strong> almost freaked out.
    </article>
  </div>
);
   
/*
JavaScript XML (JSX) is a syntax extension of JavaScript that provides highly functional 
and reusable markup code. It is used to create DOM elements which are then rendered in the React DOM. 
JSX DEVE essere comilato prima di essere eseguito
*/