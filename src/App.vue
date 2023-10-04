<script>
import { ref } from "vue";
import SketchfabConfigurator from "@/components/SketchfabConfigurator.vue"; // Adjust the path to your component

export default {
  components: {
    SketchfabConfigurator, // Register the SketchfabConfigurator component
  },
  setup() {
    // Define a ref to hold the urlid value
    const modelId = ref("74d83d112cdd4597bbcd5ca898d1ab44");

    // Update the urlid value based on some condition or user input, for example
    // urlidFromParent.value = 'new-urlid-value';

    const switchablePrefixes = ["ROCKET", "LABLE"];
    const materialsList = [
      {
        id: "fabric",
        name: "Fabric",
        colors: [
          {
            id: "blue",
            name: "Blue",
            value: [0.204, 0.365, 0.647],
          },
          {
            id: "green",
            name: "Green",
            value: [0.227, 0.459, 0.294],
          },
        ],
        fromMaterial: "INSIDE",
        textures: {
          RoughnessPBR: {
            url: "https://osharper.github.io/wulfshoes-configurator/textures/Fabric041_4K_Roughness.jpg",
          },
          NormalMap: {
            url: "https://osharper.github.io/wulfshoes-configurator/textures/Fabric041_4K_Normal.jpg",
          },
        },
      },
      {
        id: "rope",
        name: "Rope",
        colors: [
          {
            id: "black",
            name: "Black",
            value: [0.0, 0.0, 0.0],
          },
          {
            id: "white",
            name: "White",
            value: [0.95, 0.95, 0.95],
          },
        ],
        fromMaterial: "LACES",
        textures: {
          NormalMap: {
            url: "https://osharper.github.io/wulfshoes-configurator/textures/FabricRope001_NRM_3K.jpg",
          },
          AOPBR: {
            url: "https://osharper.github.io/wulfshoes-configurator/textures/FabricRope001_AO_3K.jpg",
          },
          GlossinessPBR: {
            url: "https://osharper.github.io/wulfshoes-configurator/textures/FabricRope001_GLOSS_3K.jpg",
          },
        },
      },
      {
        id: "leather",
        name: "Leather",
        colors: [
          {
            id: "pink",
            name: "Pink",
            value: [0.651, 0.137, 0.139],
          },
          {
            id: "brown",
            name: "Brown",
            value: [0.183, 0.054, 0.0057],
          },
        ],
        fromMaterial: "TOUNG",
        textures: {
          RoughnessPBR: {
            url: "https://osharper.github.io/wulfshoes-configurator/textures/leather_red_02_rough_4k.jpg",
          },
          NormalMap: {
            url: "https://osharper.github.io/wulfshoes-configurator/textures/leather_red_02_nor_4k.jpg",
          },
          AOPBR: {
            url: "https://osharper.github.io/wulfshoes-configurator/textures/leather_red_02_ao_4k.jpg",
          },
        },
      },
    ];

    const parts = [
      {
        id: "FRONT",
        name: "Front",
        nodes: ["FRONT_LEATHER_0"],
        materials: [{ id: "fabric" }, { id: "leather" }],
      },
      {
        id: "TOUNG",
        name: "Tongue",
        nodes: ["TOUNG_TOUNG_0"],
        materials: [{ id: "fabric" }, { id: "leather" }],
      },
      {
        id: "BODY",
        name: "Body",
        nodes: ["BODY_LEATHER_0"],
        materials: [{ id: "fabric" }, { id: "leather" }],
      },
      {
        id: "COUNTER_PATCH",
        name: "Top counter patch",
        nodes: ["DETAIL_2_bach top_0"],
        materials: [{ id: "fabric" }, { id: "leather" }],
      },
      {
        id: "ROCKET",
        name: "Rocket patch",
        nodes: ["ROCKET_BACK_ROCKET_0", "ROCKET_BACK.001_ROCKET_0"],
        materials: [{ id: "fabric" }, { id: "leather" }],
        removable: true,
      },
      {
        id: "ROCKET_SMOKE",
        name: "Rocket smoke patch",
        nodes: ["ROCKET_TOP_SOMKE_0", "ROCKET_TOP.001_SOMKE_0"],
        materials: [{ id: "fabric" }, { id: "leather" }],
        removable: true,
      },
      {
        id: "LACES",
        name: "Laces",
        nodes: ["LACES_LACES_0"],
        materials: [
          {
            id: "rope",
            colors: ["black", "white"],
          },
        ],
      },
    ];

    return {
      modelId,
      config: { switchablePrefixes, materialsList, parts },
    };
  },
};
</script>

<template>
  <main>
    <div class="wrapper panel">
      <h2><a href="#intro" title="OLEANDER studio - What we do?">What we do?</a></h2>
      <p>
        We are a small team of developers and designers who are passionate about
        creating stunning 3d models and helping them to sneak into websites and
        apps.
      </p>
    </div>
    <div class="wrapper panel">
      <h2><a href="#cases" title="OLEANDER studio - Cases">Cases</a></h2>
      <h3><a href="#cases-sketchfab-shoe" title="OLEANDER studio - Sketchfab">Sketchfab Configurator</a></h3>
      <SketchfabConfigurator :modelid="modelId" :config="config" />
    </div>
    <div class="wrapper panel">
        <h2><a href="#prices" title="OLEANDER studio - Prices">Prices</a></h2>
    </div>
  </main>
</template>
