import{R as i}from"./chunk-QKK5DA25.js";var c=(()=>{class a{constructor(){this.products=[{name:"Regular Chilli Cutter",images:["assets/products/Chilly-cutter/Regular-chilli-cutter/regular-chilli-cutter-1.jpg","assets/products/Chilly-cutter/Regular-chilli-cutter/regular-chilli-cutter-2.jpg","assets/products/Chilly-cutter/Regular-chilli-cutter/regular-chilli-cutter-3.jpg","assets/products/Chilly-cutter/Regular-chilli-cutter/regular-chilli-cutter-4.jpg","assets/products/Chilly-cutter/Regular-chilli-cutter/regular-chilli-cutter-5.jpg","assets/products/Chilly-cutter/Regular-chilli-cutter/regular-chilli-cutter-6.jpg"],description:"High-quality plastic/PET chilli cutter designed for efficient and precise cutting of green chilies. Perfect for everyday kitchen use.",details:`Material: Premium Plastic/PET
Dimensions: Standard Size
Features: Sharp Cutting Blades, Ergonomic Design, Easy to Clean
Durability: Long-lasting, Lightweight
Usage: Ideal for cutting green chilies for cooking
Maintenance: Hand wash recommended
Manufactured by: Shivholic Kitchenware`,category:"Chilli Cutter"},{name:"Kitchen Ware Masala Box",images:["assets/products/masala-box/masala-box-1.jpg","assets/products/masala-box/masala-box-2.jpg","assets/products/masala-box/masala-box-3.jpg","assets/products/masala-box/masala-box-4.jpg"],description:"Premium quality masala box for your kitchen. Keeps your spices fresh and organized.",details:`Material: Stainless Steel
Capacity: 7 containers
Finish: Mirror Polish
Dishwasher Safe: Yes`,category:"Masala Box"},{name:"Kitchen Ware Masala Box 2",images:["assets/products/masala-box/masala-box-1.jpg","assets/products/masala-box/masala-box-2.jpg","assets/products/masala-box/masala-box-3.jpg","assets/products/masala-box/masala-box-4.jpg"],description:"Premium quality masala box for your kitchen. Keeps your spices fresh and organized.",details:`Material: Stainless Steel
Capacity: 7 containers
Finish: Mirror Polish
Dishwasher Safe: Yes`,category:"Masala Box"},{name:"Kitchenware Jug",images:["assets/products/jug/jug-1.jpg","assets/products/jug/jug-2.jpg","assets/products/jug/jug-3.jpg","assets/products/jug/jug-4.jpg"],description:"Elegant jug for serving water and beverages. Perfect for home and parties.",details:`Material: Stainless Steel
Capacity: 1.5L
Finish: Glossy
Dishwasher Safe: Yes`,category:"Jug"},{name:"Kitchenware Jug 2",images:["assets/products/jug/jug-1.jpg","assets/products/jug/jug-2.jpg","assets/products/jug/jug-3.jpg","assets/products/jug/jug-4.jpg"],description:"Elegant jug for serving water and beverages. Perfect for home and parties.",details:`Material: Stainless Steel
Capacity: 1.5L
Finish: Glossy
Dishwasher Safe: Yes`,category:"Jug"}]}getCategories(){return Array.from(new Set(this.products.map(e=>e.category)))}getProducts(e){return e?this.products.filter(t=>t.category===e):this.products}getProductById(e){return this.products.find(t=>this.convertToId(t.name)===e)}getRelatedProducts(e,t=3){let s=this.getProductById(e);return s?this.products.filter(r=>r.category===s.category&&this.convertToId(r.name)!==e).slice(0,t):[]}convertToId(e){return e.toLowerCase().replace(/\s+/g,"-")}static{this.\u0275fac=function(t){return new(t||a)}}static{this.\u0275prov=i({token:a,factory:a.\u0275fac,providedIn:"root"})}}return a})();export{c as a};
