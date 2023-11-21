export default function getDate(data) {
  const date = new Date(data);
  const yyyy = date.getFullYear();
  const mm = date.getMonth();
  const dd = date.getDate();
  return `${yyyy}.${mm}.${dd}`;
}
