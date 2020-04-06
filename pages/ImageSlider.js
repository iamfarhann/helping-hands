import MuiImageSlider from "mui-image-slider";

const images = [
  "./Users/mahad/Local Disk/helping-hands/public/khawajasira-banner.jpg",
  "https://picsum.photos/200/300",
  "https://homepages.cae.wisc.edu/~ece533/images/baboon.png",
  "https://homepages.cae.wisc.edu/~ece533/images/barbara.png"
];

export default function Organization() {
  return <MuiImageSlider images='url(${"public/khawajasira-banner.jpg"})' />;
}
