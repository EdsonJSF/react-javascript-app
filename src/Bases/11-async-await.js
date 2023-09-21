const getImg = async () => {
  try {
    const apiKey = "";
    const baseURL = "https://api.giphy.com/v1/gifs";

    const resp = await fetch(`${baseURL}/random?api_key=${apiKey}`);
    const { data } = await resp.json();

    const { url } = data.images.original;

    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    console.log(error);
  }
};

getImg();
