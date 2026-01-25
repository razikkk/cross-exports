import cocoPeatImg from "@/assets/product-coco-peat.jpg";
import coirFibreImg from "@/assets/coir-fibre.webp";
import growBagsImg from "@/assets/coir-grow-bag.webp";
import spicesImg from "@/assets/product-spices.jpg";
import uradDalImg from "@/assets/urad-dal.jpg";

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  availableFormats?: string;
  keySpecs: ProductSpec[];
  useCases: string[];
  packagingInfo: string;
  image: string;
}

export const products: Product[] = [
  {
    id: "coco-peat",
    name: "Coir Pith / Coco Peat",
    shortDescription: "Premium quality coco peat for superior plant growth and soil conditioning.",
    fullDescription: "Coco peat (coir pith) is a natural growing medium known for strong water retention, aeration, and root support. It is suitable for commercial horticulture and home gardening applications.",
    availableFormats: "5kg blocks and 650gm briquettes",
    keySpecs: [
      { label: "pH", value: "Available on request" },
      { label: "EC", value: "Available on request" },
      { label: "Moisture level", value: "Available on request" },
      { label: "Expansion ratio & compression", value: "Available on request" },
      { label: "Packaging options", value: "Available on request" }
    ],
    useCases: [
      "Horticulture and nurseries",
      "Hydroponics and greenhouse growing",
      "Potting mix blending",
      "Home gardening and landscaping"
    ],
    packagingInfo: "Export packaging and private label options available depending on volume and buyer requirements.",
    image: cocoPeatImg
  },
  {
    id: "coir-grow-bags",
    name: "Grow Bags",
    shortDescription: "Ready-to-use grow bags for professional and home gardening solutions.",
    fullDescription: "Coir grow bags provide a clean and efficient growing solution for greenhouse farming and commercial crop production. They support strong root development and consistent moisture management.",
    keySpecs: [
      { label: "Bag size and fill weight", value: "Available on request" },
      { label: "Packaging formats", value: "Available on request" }
    ],
    useCases: [
      "Greenhouse cultivation",
      "Hydroponic growing systems",
      "Commercial farms and nurseries"
    ],
    packagingInfo: "Label options available for B2B and distributor supply.",
    image: growBagsImg
  },
  {
    id: "coir-fibre",
    name: "Coir Fibre",
    shortDescription: "Natural coir fibre for diverse industrial and agricultural applications.",
    fullDescription: "Coir fibre is a natural fibre used in horticulture, erosion control, and industrial applications. It is valued for durability, moisture handling, and eco-friendly performance.",
    keySpecs: [
      { label: "Grade and fibre length", value: "Available on request" },
      { label: "Packaging options", value: "Available on request" }
    ],
    useCases: [
      "Horticulture and soil improvement",
      "Erosion control solutions",
      "Industrial and manufacturing applications (on enquiry)"
    ],
    packagingInfo: "Bulk export packing available.",
    image: coirFibreImg
  },
  {
    id: "spices",
    name: "Spices",
    shortDescription: "Authentic Indian spices sourced directly from the finest farms.",
    fullDescription: "We export a curated selection of premium Indian spices, sourced directly from traditional farming regions. Our spices undergo strict quality control to ensure maximum freshness, aroma, and flavor.",
    keySpecs: [
      { label: "Origin", value: "India" },
      { label: "Quality control", value: "Strict standards applied" },
      { label: "Packaging options", value: "Available on request" }
    ],
    useCases: [
      "Food & Beverage industry",
      "Restaurant chains",
      "Retail distribution",
      "Food processing units"
    ],
    packagingInfo: "Bulk and retail packaging available. Private label options on enquiry.",
    image: spicesImg
  },
  {
    id: "urad-dal",
    name: "Urad Dal",
    shortDescription: "Premium quality black gram lentils for culinary excellence.",
    fullDescription: "Our Urad Dal is carefully selected and processed to deliver the finest quality black gram lentils. Rich in protein and essential nutrients, perfect for traditional Indian cuisine.",
    keySpecs: [
      { label: "Protein content", value: "High" },
      { label: "Variants", value: "Split and whole available" },
      { label: "Packaging options", value: "Available on request" }
    ],
    useCases: [
      "Dal preparations",
      "Idli and dosa batter",
      "Papad manufacturing",
      "Traditional sweets"
    ],
    packagingInfo: "Export packaging available. Custom quantities on request.",
    image: uradDalImg
  }
];
