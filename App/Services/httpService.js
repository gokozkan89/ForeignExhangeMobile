
export const  httpService = async function (commodies,currency,time){
  return  fetch('https://foreignexchangeapi20181024011418.azurewebsites.net/api/v1/'+commodies+'/'+currency+'/'+time)
  .then((response) => response.json())
  .then((responseJson) => {
    return responseJson;
  })
  .catch((error) => {
    console.error(error);
  });
}

