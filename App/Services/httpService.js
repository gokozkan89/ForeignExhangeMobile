
export const  httpService = async function (commodies,currency,time){
  return  fetch('https://www.doviz.com/api/v1/'+commodies+'/'+currency+'/'+time)
  .then((response) => response.json())
  .then((responseJson) => {
    return responseJson;
  })
  .catch((error) => {
    console.error(error);
  });
}

