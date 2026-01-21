import sustainabilityImg from "@/assets/blog-sustainability.jpg";
import gardeningImg from "@/assets/blog-gardening.jpg";
import marketImg from "@/assets/blog-market.jpg";
import spicesImg from "@/assets/blog-spices.jpg";

export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

export const blogs: Blog[] = [
  {
    id: "sustainable-coir-future",
    title: "The Sustainable Future of Coir Products",
    excerpt: "Discover how coir products are revolutionizing sustainable agriculture and contributing to a greener planet.",
    content: `
      <p>In an era where sustainability is no longer optional but essential, coir products have emerged as a beacon of hope for environmentally conscious industries worldwide. Derived from the humble coconut husk, coir represents a perfect example of circular economy principles in action.</p>
      
      <h2>What Makes Coir Sustainable?</h2>
      <p>Coir is a byproduct of coconut processing, which means its production doesn't require additional land, water, or resources. Instead of being discarded as waste, coconut husks are transformed into valuable products that serve multiple industries.</p>
      
      <h2>Environmental Benefits</h2>
      <p>The environmental advantages of coir products are numerous. They are 100% biodegradable, returning nutrients to the soil at the end of their lifecycle. Unlike synthetic alternatives, coir doesn't contribute to microplastic pollution or leave behind harmful residues.</p>
      
      <h2>Applications in Modern Agriculture</h2>
      <p>Modern agriculture has embraced coir products wholeheartedly. From coco peat as a growing medium to coir grow bags for commercial cultivation, these products offer superior performance while maintaining ecological responsibility.</p>
      
      <h2>Looking Ahead</h2>
      <p>As global awareness of environmental issues continues to grow, the demand for sustainable alternatives will only increase. Coir products are well-positioned to meet this demand, offering a renewable, biodegradable solution for a wide range of applications.</p>
    `,
    author: "Cross Exports Team",
    date: "January 15, 2026",
    readTime: "5 min read",
    category: "Sustainability",
    image: sustainabilityImg
  },
  {
    id: "coco-peat-gardening-guide",
    title: "Complete Guide to Using Coco Peat in Gardening",
    excerpt: "Learn the best practices for using coco peat to enhance your garden's soil health and plant growth.",
    content: `
      <p>Coco peat, also known as coir pith, has become increasingly popular among gardeners and commercial growers alike. This comprehensive guide will help you understand how to make the most of this versatile growing medium.</p>
      
      <h2>Understanding Coco Peat</h2>
      <p>Coco peat is the spongy material found between the hard shell and outer coat of a coconut. When processed, it creates an excellent growing medium with remarkable water retention and aeration properties.</p>
      
      <h2>Preparing Coco Peat for Use</h2>
      <p>Before using coco peat, it's essential to hydrate it properly. Compressed coco peat blocks expand significantly when water is added. For best results, use warm water and allow the coco peat to absorb moisture gradually.</p>
      
      <h2>Mixing Ratios</h2>
      <p>The ideal mixing ratio depends on your specific application. For general potting, a 50:50 mix of coco peat and regular soil works well. For seed starting, you can use pure coco peat or mix it with perlite for improved drainage.</p>
      
      <h2>Nutrient Considerations</h2>
      <p>While coco peat is an excellent growing medium, it contains minimal nutrients. Regular fertilization is essential for optimal plant growth. Consider using a balanced liquid fertilizer or slow-release granules.</p>
      
      <h2>Common Mistakes to Avoid</h2>
      <p>Over-watering is the most common mistake when using coco peat. Despite its high water retention, plants still need proper drainage to prevent root rot. Ensure your containers have adequate drainage holes.</p>
    `,
    author: "Agricultural Expert",
    date: "January 10, 2026",
    readTime: "7 min read",
    category: "Gardening",
    image: gardeningImg
  },
  {
    id: "global-coir-market-trends",
    title: "Global Coir Market Trends in 2026",
    excerpt: "An analysis of the growing international demand for coir products and emerging market opportunities.",
    content: `
      <p>The global coir market has witnessed unprecedented growth over the past few years, driven by increasing environmental awareness and the push for sustainable alternatives across multiple industries.</p>
      
      <h2>Market Overview</h2>
      <p>The coir products market is projected to reach significant valuations by 2030, with a compound annual growth rate that outpaces many traditional agricultural commodities. This growth is fueled by demand from horticulture, agriculture, and industrial sectors.</p>
      
      <h2>Key Growth Drivers</h2>
      <p>Several factors are contributing to this market expansion. The ban on peat extraction in many European countries has created a surge in demand for sustainable alternatives like coco peat. Additionally, the organic farming movement continues to embrace coir products for their natural properties.</p>
      
      <h2>Regional Dynamics</h2>
      <p>Europe and North America remain the largest importers of coir products, while India and Sri Lanka dominate production. However, new markets in Asia-Pacific and Latin America are showing promising growth potential.</p>
      
      <h2>Quality Standards</h2>
      <p>As the market matures, quality standards have become increasingly important. Buyers now demand consistent EC levels, proper pH balance, and verified sourcing. Exporters who maintain these standards enjoy premium pricing and long-term partnerships.</p>
      
      <h2>Future Outlook</h2>
      <p>The future looks bright for the coir industry. Innovations in processing technology, new product development, and growing environmental consciousness suggest continued strong demand for years to come.</p>
    `,
    author: "Market Research Team",
    date: "January 5, 2026",
    readTime: "6 min read",
    category: "Industry",
    image: marketImg
  },
  {
    id: "indian-spices-heritage",
    title: "The Rich Heritage of Indian Spices",
    excerpt: "Explore the centuries-old tradition of Indian spice cultivation and its significance in global trade.",
    content: `
      <p>India has been the world's spice capital for millennia, with a rich heritage that spans thousands of years. The subcontinent's diverse climate and geography create ideal conditions for cultivating an incredible variety of spices.</p>
      
      <h2>Historical Significance</h2>
      <p>The spice trade shaped world history, driving exploration and establishing trade routes that connected civilizations. Indian spices were so valuable that they were often used as currency, and the pursuit of these aromatic treasures led to the discovery of new continents.</p>
      
      <h2>Traditional Cultivation Methods</h2>
      <p>Many Indian farmers continue to use traditional cultivation methods passed down through generations. These practices, combined with favorable growing conditions, produce spices with unmatched flavor profiles and aromatic qualities.</p>
      
      <h2>Quality and Authenticity</h2>
      <p>The authenticity of Indian spices is recognized worldwide. From the cardamom hills of Kerala to the turmeric fields of Tamil Nadu, each region produces distinctive varieties that are prized for their unique characteristics.</p>
      
      <h2>Modern Export Industry</h2>
      <p>Today, India exports spices to over 150 countries, maintaining its position as the world's largest producer and exporter. The industry has modernized while preserving traditional quality, meeting international food safety standards without compromising on authenticity.</p>
    `,
    author: "Heritage Desk",
    date: "December 28, 2025",
    readTime: "5 min read",
    category: "Heritage",
    image: spicesImg
  }
];
