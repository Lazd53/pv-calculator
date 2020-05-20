const devKey = 'lVQnKtlbdYOd649ytQH1UZlge5aPR8ywZhhH6LLc'


export const buildRequest = (buildObject) =>{
  const base = `https://developer.nrel.gov/api/pvwatts/v6.json?`;
  const apiKey = `api_key=${devKey}`;
  const keys = Object.keys(buildObject);
  const parameters = keys.reduce( ((acc, key) => acc + `&${key}=${buildObject[key]}`), "")
  return base + apiKey + parameters;
}
