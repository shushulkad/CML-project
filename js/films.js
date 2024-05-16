let table = (arr_tag, arr) => {
  let i = 0;
  for (const elem_arr of arr_tag) {
    arr[i++] = elem_arr.textContent;
  }
  return arr;
};

let parse = (xmlString) => {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlString, "text/xml");
  const paths = xmlDoc.getElementsByTagName("path");
  const captions = xmlDoc.getElementsByTagName("caption");

  let paths_arr = [],
    captions_arr = [];
  paths_arr = table(paths, paths_arr);
  captions_arr = table(captions, captions_arr);

  for (let i = 0; i < paths_arr.length; i++) {
    document.querySelector(".films").insertAdjacentHTML(
      "beforeend",

      `<a href="${captions_arr[i] === "Мстители" ? "avengers.html" : "#"}">
      <div class="sitcom">
              <img class="cover" src="${paths_arr[i]}"></img>
              <div class="caption"><caption >${captions_arr[i]}</caption></div>
          </div>
      </a>`
    );
  }
};

async function parseXML() {
  let a = await fetch("xml/films.xml");
  let xmlString = await a.text();
  parse(xmlString);
}

parseXML();
