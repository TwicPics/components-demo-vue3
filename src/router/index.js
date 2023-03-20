import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import TwicAnchor from "../views/TwicAnchor.vue";
import TwicArtDirections from "../views/TwicArtDirections.vue";
import TwicBasicGrid from "../views/TwicBasicGrid.vue";
import TwicBulkLoading from "../views/TwicBulkLoading.vue";
import TwicBot from "../views/TwicBot.vue";
import TwicColorBlindness from "../views/TwicColorBlindness.vue";
import TwicEager from "../views/TwicEager.vue";
import TwicFlipCards from "../views/TwicFlipCards.vue";
import TwicFocus from "../views/TwicFocus.vue";
import TwicGridAndZoom from "../views/TwicGridAndZoom.vue";
import TwicHero from "../views/TwicHero.vue";
import TwicIntrinsic from "../views/TwicIntrinsic.vue";
import TwicMode from "../views/TwicMode.vue";
import TwicModal from "../views/TwicModal.vue";
import TwicPageTemplating from "../views/TwicPageTemplating.vue";
import TwicPreTransform from "../views/TwicPreTransform.vue";
import TwicPlaceholder from "../views/TwicPlaceholder.vue";
import TwicPosition from "../views/TwicPosition.vue";
import TwicRatio from "../views/TwicRatio.vue";
import TwicSlider from "../views/TwicSlider.vue";
import TwicShortVideos from "../views/TwicShortVideos.vue";
import TwicState from "../views/TwicState.vue";
import TwicSlideshow from "../views/TwicSlideshow.vue";
import TwicStyleDriven from "../views/TwicStyleDriven.vue";
import TwicTransition from "../views/TwicTransition.vue";
import TwicZoom from "../views/TwicZoom.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/anchor",
      name: "TwicAnchor",
      component: TwicAnchor,
    },
    {
      path: "/art-directions",
      name: "TwicArtDirections",
      component: TwicArtDirections,
    },
    {
      path: "/basic-grid",
      name: "TwicBasicGrid",
      component: TwicBasicGrid,
    },
    {
      path: "/bot",
      name: "TwicBot",
      component: TwicBot,
    },
    {
      path: "/bulk-loading",
      name: "TwicBulkLoading",
      component: TwicBulkLoading,
    },
    {
      path: "/color-blindness",
      name: "TwicColorBlindness",
      component: TwicColorBlindness,
    },
    {
      path: "/eager",
      name: "TwicEager",
      component: TwicEager,
    },
    {
      path: "/flip-cards",
      name: "TwicFlipCards",
      component: TwicFlipCards,
    },
    {
      path: "/focus",
      name: "TwicFocus",
      component: TwicFocus,
    },
    {
      path: "/grid-and-zoom",
      name: "TwicGridAndZoom",
      component: TwicGridAndZoom,
    },
    {
      path: "/hero",
      name: "TwicHero",
      component: TwicHero,
    },
    {
      path: "/intrinsic",
      name: "TwicIntrinsic",
      component: TwicIntrinsic,
    },
    {
      path: "/mode",
      name: "TwicMode",
      component: TwicMode,
    },
    {
      path: "/modal",
      name: "TwicModal",
      component: TwicModal,
    },
    {
      path: "/page-templating",
      name: "TwicPageTemplating",
      component: TwicPageTemplating,
    },
    {
      path: "/placeholder",
      name: "TwicPlaceholder",
      component: TwicPlaceholder,
    },
    {
      path: "/pre-transform",
      name: "TwicPreTransform",
      component: TwicPreTransform,
    },
    {
      path: "/short-videos",
      name: "TwicShortVideos",
      component: TwicShortVideos,
    },
    {
      path: "/position",
      name: "TwicPosition",
      component: TwicPosition,
    },
    {
      path: "/ratio",
      name: "TwicRatio",
      component: TwicRatio,
    },
    {
      path: "/slider",
      name: "TwicSlider",
      component: TwicSlider,
    },
    {
      path: "/slideshow",
      name: "TwicSlideshow",
      component: TwicSlideshow,
    },
    {
      path: "/state",
      name: "TwicState",
      component: TwicState,
    },
    {
      path: "/style-driven",
      name: "TwicStyleDriven",
      component: TwicStyleDriven,
    },
    {
      path: "/transition",
      name: "TwicTransition",
      component: TwicTransition,
    },
    {
      path: "/zoom",
      name: "TwicZoom",
      component: TwicZoom,
    },
  ],
});

export default router;
