import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: 5,
  duration: '5s',
};

export default function () {
  let restrictions = {
    maxCaloriesPerSlice: 500,
    mustBeVegetarian: false,
    excludedIngredients: ["pepperoni"],
    excludedTools: ["knife"],
    maxNumberOfToppings: 6,
    minNumberOfToppings: 2
  }
  let res = http.post('https://quickpizza.grafana.com/api/pizza', JSON.stringify(restrictions), {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'token abcdef0123456789',
    },
  });
  check(res, { "status is 200": (res) => res.status === 200 });
  console.log(`${res.json().pizza.name} (${res.json().pizza.ingredients.length} ingredients)`);
  sleep(1);
}