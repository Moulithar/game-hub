const getCroppedImages = (url: string) => {
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  const cropped =
    url.slice(0, index) + 'crop/600/400/' + url.slice(index);
  return cropped;
};

export default getCroppedImages;
