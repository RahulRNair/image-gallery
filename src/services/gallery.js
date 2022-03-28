import axios from "axios";
const api_host = "https://pixabay.com/api"; // API HOST NAME
const api_key = "6473511-0417f2cad683f1bee54cafe15"; // API KEY
/**
 *
 * @param {*} page : page number
 * @returns The api result for all images
 */
export function get_images(page) {
  return axios
    .get(`${api_host}?key=${api_key}&image_type=photo&page=${page}`)
    .then((res) => {
      return res;
    });
}
/**
 *
 * @param {*} id : id for specific image data
 * @returns The api result for individual image
 */
export function get_image_details(id) {
  return axios
    .get(`${api_host}?key=${api_key}&image_type=photo&id=${id}`)
    .then((res) => {
      return res;
    });
}
