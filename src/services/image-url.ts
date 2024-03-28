// import noImage from "../assets/no-image-placeholder.png"

const getCroppedImages = (url: string) => {
  if(!url) return ("https://fakeimg.pl/600x400?text=No+images");
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  const cropped =
    url.slice(0, index) + 'crop/600/400/' + url.slice(index);
  return cropped;
};

export default getCroppedImages;
