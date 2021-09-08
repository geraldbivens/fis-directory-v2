'use strict';

import { AB } from './a-b.js';
import { CD } from './c-d.js';
import { EF } from './e-f.js';
import { GH } from './g-h.js';
import { IJ } from './i-j.js';
import { KL } from './k-l.js';
import { MN } from './m-n.js';
import { OP } from './o-p.js';
import { QR } from './q-r.js';
import { ST } from './s-t.js';
import { UV } from './u-v.js';
import { WX } from './w-x.js';
import { YZ } from './y-z.js';

const users = [
  ...AB,
  ...CD,
  ...EF,
  ...GH,
  ...IJ,
  ...KL,
  ...MN,
  ...OP,
  ...QR,
  ...ST,
  ...UV,
  ...WX,
  ...YZ,
];

const main = document.querySelector('main');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.close-modal');

users.forEach(user => createHeading(user));

function createHeading(user) {
  const name = document.createElement('h2');

  name.classList.add('open-modal');

  name.textContent = user.name;

  main.append(name);
}

const headings = document.querySelectorAll('.open-modal');

const openModal = function () {
  modal.classList.remove('hide');
  overlay.classList.remove('hide');
};

const closeModal = function () {
  modal.classList.add('hide');
  overlay.classList.add('hide');
};

// for (let i = 0; i < heading.length; i++)
//   heading[i].addEventListener('click', event => {
//     console.log('Successfully clicked!');
//   });

for (let i = 0; i < headings.length; i++)
  headings[i].addEventListener('click', openModal);

closeButton.addEventListener('click', closeModal);
