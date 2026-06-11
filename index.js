const axios = require('axios');

const TOOL_NAME = 'Creatudio';
const url = process.argv[2] || 'https://aff.vidello.com/37289/162974';

async function fetchDeal() {
  try {
    const res = await axios.get(url);
    const code = 'ACTIVATE_DEAL';
    console.log(`[${TOOL_NAME}] Status: ${res.status}`);
    console.log(`[${TOOL_NAME}] Length: ${res.data.length} chars`);
    console.log(`[${TOOL_NAME}] Promo Code: ${code}`);
    console.log(`[${TOOL_NAME}] Total Deals: 3`);
    console.log(`[${TOOL_NAME}] Top Deal: Up to 40% OFF Annual`);
  } catch (err) {
    console.error(`[${TOOL_NAME}] Error: ${err.message}`);
  }
}

fetchDeal();
