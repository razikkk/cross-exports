import cocoPeatImg from "@/assets/product-coco-peat.jpg";
import coirFibreImg from "@/assets/coir-fibre.webp";
import growBagsImg from "@/assets/coir-grow-bag.webp";
import spicesImg from "@/assets/product-spices.jpg";
import uradDalImg from "@/assets/urad-dal.jpg";

export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  availableFormats?: string;
  keyFeatures: string[]; // Changed from keySpecs to keyFeatures
  useCases: string[];
  packagingInfo: string;
  images: string[];
}

export const products: Product[] = [
  {
    id: "coco-peat",
    name: "Coir Pith / Coco Peat",
    shortDescription: "Natural and sustainable growing medium with superior water retention.",
    fullDescription: "Coco peat (coir pith) is a natural and sustainable growing medium made from coconut husk fibre. It is widely used by horticulture businesses, nurseries, hydroponic growers, and growing media distributors due to its strong water retention, aeration, and root-friendly structure.",
    availableFormats: "5kg blocks and 650gm briquettes",
    keyFeatures: [
      "Strong moisture retention and aeration balance",
      "Suitable for potting mixes, nurseries, and hydroponic systems",
      "Export-ready compression for efficient shipping",
      "Specifications available on request (pH, EC, moisture, expansion)",
      "Bulk supply and private label support"
    ],
    useCases: [
      "Horticulture • Greenhouses • Hydroponics",
      "Garden centres • Soil conditioning",
      "Potting mix blending"
    ],
    packagingInfo: "Prepared for consistent performance and scalable supply, making it ideal for repeat orders across the UK, Europe, and global markets.",
    images:["coco-1.jpeg","coco-2.jpeg"]
  },
  {
    id: "coir-grow-bags",
    name: "Coir Grow Bags",
    shortDescription: "Ready-to-use grow bags for professional and commercial cultivation.",
    fullDescription: "Coir grow bags are a practical and clean growing solution designed for commercial cultivation, greenhouse farming, and hydroponic crop production. They provide strong root support, consistent moisture control, and uniform growing performance.",
    keyFeatures: [
      "Designed for greenhouse and hydroponic cultivation",
      "Supports healthy root development and stable moisture control",
      "Consistent growing performance for commercial use",
      "Packaging formats and specifications available on request",
      "Bulk supply planning for repeat shipments"
    ],
    useCases: [
      "Greenhouse farming • Hydroponics",
      "Commercial crop cultivation",
      "Nursery production • Professional horticulture"
    ],
    packagingInfo: "Supplied with export-ready handling and packaging. Custom size and coir composition supported based on requirements.",
    images: ["coir-grow-bag.webp","pro-2-1.jpg","grow.jpeg"]
  },
  {
    id: "coir-fibre",
    name: "Coir Fibre",
    shortDescription: "Strong, natural fibre for erosion control and industrial applications.",
    fullDescription: "Coir fibre is a strong, natural fibre extracted from coconut husk, valued for its durability and moisture-handling capability. It is an eco-friendly profile suitable for global markets looking for sustainable fibre solutions.",
    keyFeatures: [
      "Natural and sustainable fibre material",
      "Suitable for horticulture and industrial applications",
      "Export-ready packing options for bulk supply",
      "Grade and specifications available on request",
      "Consistent sourcing for repeat requirements"
    ],
    useCases: [
      "Horticulture • Soil conditioning",
      "Erosion control",
      "Industrial use (on enquiry)"
    ],
    packagingInfo: "Reliable sourcing and consistent supply with export-ready packing.",
    images: ["pro-3-1.jpeg","pro-3-2.webp","fibre.jpeg"]
  },
  {
    id: "spices",
    name: "Indian Spices",
    shortDescription: "Authentic Indian spices sourced directly from the finest farms.",
    fullDescription: "We export a curated selection of premium Indian spices, sourced directly from traditional farming regions. Our spices undergo strict quality control to ensure maximum freshness, aroma, and flavor.",
    keyFeatures: [
      "Authentic heritage and flavor profiles",
      "Strict quality control standards",
      "Freshness and aroma preservation",
      "Sourced from traditional farming regions"
    ],
    useCases: [
      "Food & Beverage industry",
      "Restaurant chains",
      "Retail distribution"
    ],
    packagingInfo: "Bulk and retail packaging available. Private label options available on enquiry.",
    images: ["product-spices.jpg","pro-4-2.jpg","pro-4-3.jpg"]
  },
  {
    id: "urad-dal",
    name: "Urad Dal",
    shortDescription: "Premium black gram lentils for ethnic wholesale and food processing.",
    fullDescription: "Our Urad Dal is carefully selected and processed using Sortex technology to deliver the finest quality black gram lentils. Perfect for traditional preparations and industrial food processing.",
    keyFeatures: [
      "Sortex cleaned for 99.9% purity",
      "Consistent cooking time and sheen",
      "High nutritional profile",
      "Available in whole, split, and skinned variants"
    ],
    useCases: [
      "Ethnic food wholesale",
      "Idli and dosa batter production",
      "Papad manufacturing"
    ],
    packagingInfo: "Export packaging available in custom quantities for international trade.",
    images: ["urad-dal.jpg","pro-5-1.jpeg","urad.webp"]
  }
];