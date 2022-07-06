//IIFE

(async () => {
  const corsProxy = "https://corsanywhere.herokuapp.com/";
  const apiURL = "https://openwhyd.org/adrien?format=json";
  const response = await fetch(`${corsProxy}${apiURL}`);
  const posts = await response.json;
  console.log(posts);
})();
