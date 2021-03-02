{
  type PageInfo = {
    title: string;
  };
  type Page = "home" | "about" | "contact";

  // set page as key, set PageInfo as value
  // looks similar with Map<K,V>
  const nav: Record<Page, PageInfo> = {
    home: { title: "Home" },
    about: { title: "About" },
    contact: { title: "Contact" },
  };

  type Product = "cat" | "dog";
  type NewProduct = Capitalize<Product>; // 'Cat' | 'Dog'
}
