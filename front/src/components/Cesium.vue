<template>
  <div id="cesiumContainer"></div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import {
  Viewer,
  OpenStreetMapImageryProvider,
  ArcGisMapServerImageryProvider,
} from "cesium";
import "cesium/Source/Widgets/widgets.css";

@Options({
  props: {},
})
export default class CesiumViewer extends Vue {
  viewer!: Viewer;

  mounted() {
    this.viewer = new Viewer("cesiumContainer", {
      animation: false,
      baseLayerPicker: true,
      fullscreenButton: false,
      geocoder: false,
      homeButton: false,
      infoBox: false,
      sceneModePicker: false,
      selectionIndicator: false,
      timeline: false,
      scene3DOnly: true,
      navigationHelpButton: false,
    });

    const stamenToner = new OpenStreetMapImageryProvider({
      url: "https://stamen-tiles.a.ssl.fastly.net/toner/",
      fileExtension: "png",
    });
    const layers = this.viewer.imageryLayers;
    const baseLayer = layers.get(0);
    layers.remove(baseLayer);
    layers.addImageryProvider(stamenToner);
  }
}
</script>

<style>
#cesiumContainer {
  width: 100%;
  height: 100vh;
}
.cesium-widget-credits {
  display: none !important;
}
</style>
