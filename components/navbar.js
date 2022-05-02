let navbar=()=>{

    return`<div id="search_bar">
    <input id="search_input" type="text"/>
  </div>
  <div id="sidebar">
    <h3 id="in" onclick="cSearch(this.id)">India</h3>
    <h3 id="us" onclick="cSearch(this.id)">US</h3>
    <h3 id="ch" onclick="cSearch(this.id)">china</h3>
    <h3 id="uk" onclick="cSearch(this.id)">UK</h3>
    <h3 id="nz" onclick="cSearch(this.id)">Newzeland</h3>
  </div>
  <div id="container"></div>
   `
}
export {navbar}