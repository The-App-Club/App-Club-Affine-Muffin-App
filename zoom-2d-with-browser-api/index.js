import {ViewingTransformer} from './components/ViewingTransformer';

const svg = document.querySelector('svg');
const g = document.querySelector('svg g');

// This controls the zoom.
const viewingTransformer = new ViewingTransformer();

// Initialize the transformation matrix, which is set on the group ("g") element.
g.transform.baseVal.appendItem(
  g.transform.baseVal.createSVGTransformFromMatrix(svg.createSVGMatrix())
);

// Listen for mouse scroll events.
svg.addEventListener('wheel', zoomOnScroll);

// When the user scrolls, zoom centered at the mouse coordinates.
function zoomOnScroll(e) {
  // The zoom direction (in or out).
  const dir = e.deltaY < 0 ? 1 : -1;

  // How much to zoom, maintaining aspect ratio.
  const xFactor = 1 + 0.1 * dir;
  const yFactor =
    (xFactor * svg.height.baseVal.value) / svg.width.baseVal.value;

  // The mouse coordinates.
  const origin = {
    x: e.offsetX,
    y: e.offsetY,
  };

  // Get the new matrix.
  const mat = viewingTransformer.scale(xFactor, yFactor, origin);

  console.log(mat);
  // Set the matrix on the group.
  g.transform.baseVal.getItem(0).setMatrix(mat);
}
