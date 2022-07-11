const url = "https://jsonplaceholder.typicode.com/users";

let getApi=async(url)=> {
  let response = await fetch(url);
  let data = await response.json();
  apiData(data)
}
getApi(url);

let apiData=(data)=> {  
    let btn = document.getElementById("btn");
    btn.addEventListener("click", () => {
    let content = document.getElementById("content");
    content.innerHTML = `<p id="name">${data[0].name}</p>
                            <p id="email">${data[0].email}</p>
                            <p id="city">${data[0].address.city}</p>
                            <p id="website">${data[0].website}</p>
                        
                            <div id="btnDiv">
                                <button id="btn">FETCH DATA</button>  
                            </div>`;
    });
}