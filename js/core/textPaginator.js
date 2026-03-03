export function paginateText(container, fullText) {
  const words = fullText.split(" ");
  const pages = [];

  container.innerHTML = "";
  let currentPage = "";

  for (let i = 0; i < words.length; i++) {
    const testPage = currentPage + words[i] + " ";
    container.innerText = testPage;

    if (container.scrollHeight > container.clientHeight) {
      pages.push(currentPage.trim());
      currentPage = words[i] + " ";
      container.innerText = currentPage;
    } else {
      currentPage = testPage;
    }
  }

  if (currentPage.trim() !== "") {
    pages.push(currentPage.trim());
  }

  container.innerHTML = "";

  return pages;
}