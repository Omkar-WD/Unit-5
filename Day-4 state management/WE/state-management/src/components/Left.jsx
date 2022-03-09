export function Left({ fn }) {
  const data = 40;
  fn(data);
  return <h1>Left data {data}</h1>;
}
