const itemsCategoriesEl = document.querySelectorAll('.item');

const getQuantityCategories = () => {
  console.log(`Number of categories: ${itemsCategoriesEl.length}`);
};
getQuantityCategories();

const getCategory = categories => {
  [...categories].map(category => {
    const titlesEl = category.querySelectorAll('h2');
    const itemsOfCategory = category.querySelectorAll('li');
    [...titlesEl].map(title => {
      console.log(`Category: ${title.textContent}`);
    });
    console.log(`Elements: ${[...itemsOfCategory].length}`);
  });
};
getCategory(itemsCategoriesEl);
