const axios = require('axios')

// 'event' and 'context' are automatically passed to the function
// event contains the query parameters that we will be passing with the API call
export async function handler(event, context) {

//   extract the word query parameter from the HTTP request
  const word = event.queryStringParameters.word || "automobile";

  try {

    // send request to the WordsAPI
    const response = await axios({
      "method":"GET",
      "url":`https://wordsapiv1.p.rapidapi.com/words/${word}`,
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"wordsapiv1.p.rapidapi.com",
      "x-rapidapi-key":"02df4fb51bmsh702ed367223bfccp13c6d8jsnf367d77b2d56"
      }
    })

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }
  } catch (err) {
    console.log(err)
    return { statusCode: 500, body: err.toString() }
  }
}