const apiKey = '234e3653817f546f2cecdbc8b6e93c98';
const GalleryId = '183286107-72157710226002996';

const flickrPhotos = `https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=${apiKey}&gallery_id=${GalleryId}&format=json&nojsoncallback=1`;


module.exports = flickrPhotos;
