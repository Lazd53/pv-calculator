const devKey = 'lVQnKtlbdYOd649ytQH1UZlge5aPR8ywZhhH6LLc'


export const buildRequest = (buildObject) =>{
  const base = `https://developer.nrel.gov/api/pvwatts/v6.json?`;
  const apiKey = `api_key=${devKey}`;
  const keys = Object.keys(buildObject);
  const parameters = keys.reduce( ((acc, key) => acc + `&${key}=${buildObject[key]}`), "")
  return base + apiKey + parameters;
}

export const latitude = ( rawLat ) =>{
  if ( rawLat === 0 ){
    return "0°"
  } else if ( rawLat > 0){
    return `${rawLat}°N`;
  } else {
    return `${rawLat}°S`
  }
}

export const longitude = (rawLong) => {
  if ( rawLong === 0 ){
    return "0°"
  } else if ( rawLong > 0){
    return `${rawLong}°E`;
  } else {
    return `${Math.abs(rawLong)}°W`
  }
}
