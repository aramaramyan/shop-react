export default function setLocalStorage(state) {
  if(localStorage.getItem("list")) {
    localStorage.clear()
    localStorage.setItem("list", JSON.stringify(state));
  }
  localStorage.setItem("list", JSON.stringify(state));
}