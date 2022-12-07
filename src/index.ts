import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'Abi';
  greetUser(name);
});
function test() {
  const vab = 43;
  return vab;
}
test();
