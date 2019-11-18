import { registerIcon } from "@ui5/webcomponents-base/dist/SVGIconRegistry.js";

const name = "switch-classes";
const pathData = "M192 320q27 0 50 10t40.5 27.5T310 398t10 50v64H0v-64q0-27 10-50t27.5-40.5 41-27.5 49.5-10h64zm96 128q0-40-28-68t-68-28h-64q-20 0-37 7.5T60.5 380t-21 30.5T32 448v32h256v-32zm-32-224q0 40-28 68t-68 28-68-28-28-68 28-68 68-28 68 28 28 68zm-96 64q27 0 45.5-19t18.5-45q0-27-18.5-45.5T160 160q-26 0-45 18.5T96 224q0 26 19 45t45 19zM416 64q14 0 23 9t9 23v320q0 13-9 22.5t-23 9.5h-64v-32h64V96H192V64h224zm64-64q14 0 23 9t9 23v352h-32V32H256V0h224z";


registerIcon(name, { pathData });