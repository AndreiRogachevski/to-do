export default function fetchList() {
  return (async () => {
    const response = await fetch('https://dummyjson.com/todos?limit=4');
    const data = await response.json();
    console.log('🚀 ~ file: fetchList.js:4 ~ fetchList ~ data:', data);
    return data;
  })();
}
