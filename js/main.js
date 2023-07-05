import { service } from '../care/service.js';
import { privatePolicy } from '../care/privatePolicy.js';
import { onwardTransfer } from '../care/onwardTransfer.js';
import { sensitiveInfo } from '../care/sensitiveInfo.js';
import { marketing } from '../care/marketing.js';

const body = document.querySelector('body');
const savedBody = body.innerHTML;

const pages = {
  init: () => body.innerHTML = savedBody,
  careService: () => body.innerHTML = service,
  carePrivatePolicy: () => body.innerHTML = privatePolicy,
  onwardTransfer: () => body.innerHTML = onwardTransfer,
  sensitiveInfo: () => body.innerHTML = sensitiveInfo,
  marketing: () => body.innerHTML = marketing,
}

const renderingPage = () => {
  const currentPage = window.location.hash.replace('#/', '');

  console.log(currentPage);
  switch (currentPage) {
    case 'care-service':
      pages.careService();
      break;
    case 'care-private-policy':
      pages.carePrivatePolicy();
      break;
    case 'care-onward-transfer':
      pages.onwardTransfer();
      break;
    case 'sensitive-info':
      pages.sensitiveInfo();
      break;
    case 'marketing':
      pages.marketing();
      break;
    default:
      pages.init();
  }
}

window.addEventListener('hashchange', renderingPage);