import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'Serkan';
  greetUser(name);
});
function test() {
  const vab = 43;
  return vab;
}
test();
