async function apiCall(url) {


    //add api call logic here

    //  "https://shrouded-earth-23381.herokuapp.com/api/headlines/india"
 
     try{

    let res = await fetch('https://shrouded-earth-23381.herokuapp.com/api/headlines/india');
     let data = await res.json();
    return data;
     }
     catch(error){
console.log("error:",error);
     }
}

apiCall()


function appendArticles(articles, main) {

    //add append logic here
  

}

export { apiCall, appendArticles }