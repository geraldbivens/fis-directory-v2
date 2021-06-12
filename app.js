"use strict";

import { users } from "./users.js";

const main = document.querySelector("main");

users.forEach((user) => {
  const name = document.createElement("h2");
  name.textContent = user.name;

  main.append(name);
});
