export default function getLocalStorage() {
  if(localStorage.getItem("list")) {
    return JSON.parse(localStorage.getItem("list"));
  }

  return null;
}