const itemsCategoriesEl = document.querySelectorAll('.item');

const getQuantityCategories = () => {
  console.log(`Number of categories: ${itemsCategoriesEl.length}`);
};
getQuantityCategories();

const getCategory = categories => {
  for (const category of categories) {
    const titleEl = category.querySelector('h2');
    const itemsOfCategory = category.querySelectorAll('li');
    console.log(`Category: ${titleEl.textContent}`);
    console.log(`Elements: ${itemsOfCategory.length}`);
  }
};
getCategory(itemsCategoriesEl);
