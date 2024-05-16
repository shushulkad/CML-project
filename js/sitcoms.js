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
  const ages = xmlDoc.getElementsByTagName("age");

  let paths_arr = [],
    captions_arr = [];
  ages_arr = [];
  paths_arr = table(paths, paths_arr);
  captions_arr = table(captions, captions_arr);
  ages_arr = table(ages, ages_arr);

  for (let i = 0; i < paths_arr.length; i++) {
    document.querySelector(".sitcoms").insertAdjacentHTML(
      "beforeend",

      `
        <div class="sitcom">
          <div class="hover-effect-cover">
            <li>
              <img class="cover" src="${paths_arr[i]}"></img>
              <div class="effect-to-top"> 
                <h3><caption >${captions_arr[i]}</caption></h3>
                <p><age>${ages_arr[i]}</age></p>
                <a href="${
                  captions_arr[i] === "Фишер" ? "fisher.html" : "#"
                }">Смотреть</a>
            </li>
        </div> 
              <div class="caption"><caption >${captions_arr[i]}</caption></div>
            </div>
            </div>
        `
    );
  }
};

async function parseXML() {
  let a = await fetch("xml/sitcoms.xml");
  let xmlString = await a.text();
  // console.log(xmlString)
  parse(xmlString);
}

parseXML();
