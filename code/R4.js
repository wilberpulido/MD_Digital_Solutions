let object = {}
let data = []
async function requestData(){
  const response = await fetch("http://api.mediastack.com/v1/news?access_key=a3aa8b95f502325bdf3013756b6a1ce5&keywords=job")
  return await response.json()
}

document.addEventListener("DOMContentLoaded", async() => {
  try {
    object = await requestData()
    data = object.data
  } catch (error) {
    console.log("Error: " + error)
  }
  for(let i = 0; i < data.length ; i++ ){
    const elementTr = document.createElement("tr")
    const col1 = document.createElement("td") 
    const col2 = document.createElement("td") 
    const col3 = document.createElement("td") 
    const col4 = document.createElement("td") 
    const col5 = document.createElement("td") 
    const col6 = document.createElement("td") 
    const col7 = document.createElement("td") 
    const col8 = document.createElement("td") 
    const col9 = document.createElement("td") 
    const col10 = document.createElement("td") 
    const autor = document.createElement("p")
    const title = document.createElement("p")
    const description = document.createElement("p")
    const url = document.createElement("p")
    const source = document.createElement("p")
    const image = document.createElement("p")
    const category = document.createElement("p")
    const language = document.createElement("p")
    const country = document.createElement("p")
    const publishedAt = document.createElement("p")

    autor.innerHTML = data[i].author
    title.innerHTML = data[i].title
    description.innerHTML = data[i].description
    url.innerHTML = data[i].url
    source.innerHTML  = data[i].source
    category.innerHTML = data[i].category
    language.innerHTML = data[i].language
    country.innerHTML = data[i].country
    publishedAt.innerHTML = data[i].published_at
    
    if(data[i].image == null){
        image.innerHTML = "No image"
    }else{
        image.innerHTML = data[i].image
    }
    const item = document.getElementById("tableData").lastElementChild.appendChild(elementTr)

    item.appendChild(col1).appendChild(autor)
    item.appendChild(col2).appendChild(title)
    item.appendChild(col3).appendChild(description)
    item.appendChild(col4).appendChild(url)
    item.appendChild(col5).appendChild(source)
    item.appendChild(col6).appendChild(image)
    item.appendChild(col7).appendChild(category)
    item.appendChild(col8).appendChild(language)
    item.appendChild(col9).appendChild(country)
    item.appendChild(col10).appendChild(publishedAt)
}
})