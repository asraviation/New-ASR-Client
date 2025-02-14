// Import all images
import header from "./images/header.png"; // Replace with your header image path
//Fleet A: Falcon
import falcon from "./images/planes/falcon.jpeg";
import falconInterior from "./images/planes/falcon-interior.jpg";
import falconInterior1 from "./images/planes/falcon-interior-1.jpg";
import falconInside from "./images/planes/falcon-inside.jpg";
//FleetB: King Air B200
import king from "./images/planes/king-air-200.jpg";
import kingInterior from "./images/planes/king-interior.jpeg";
//FleetC: Hawker 850XP
import hawker from "./images/planes/hawker.jpeg";
import hawkerInterior from "./images/planes/hawkerinterior.jpg";
import hawkerInside from "./images/planes/hawkerinside.jpeg";
//FleetD: Legacy 600
import legacy from "./images/planes/legacy.jpg";
import legacyInside from "./images/planes/legacyinside.jpg";
//FleetE: Premier 1A
import premier from "./images/planes/premier.jpeg";
//FleetF: Global 6000
import global from "./images/planes/global.jpg";
import globalInterior from "./images/planes/globalinterior.jpg";
import globalInside from "./images/planes/globalinside.jpg";
//FleetG: Gulfstream G550
import gulfstream from "./images/planes/gulfstream.jpeg";
import gulfstreamInterior from "./images/planes/gulfstreaminterior.jpeg";
//FleetH: Pilatus
import pilatus from "./images/planes/pilatus.jpg";
import pilatusInterior from "./images/planes/pilatusinterior.jpg";
//FleetI: Citation
import citation from "./images/planes/citation.jpg";
import citationInterior from "./images/planes/citationinterior.jpg";
import citationInside from "./images/planes/citationinside.jpg";
//FleetJ: Bombadier
import bombadier from "./images/planes/bombardier.jpg";
import bombadierInterior from "./images/planes/bombardierinterior.jpg";
import bombadierInside from "./images/planes/bombardierinside.jpeg";
//FleetK: Bell 407
import bell from "./images/planes/bell.jpeg";
//FleetL: Airbus H125
import airbus from "./images/planes/airbus.jpeg";
import airbusInterior from "./images/planes/airbusinterior.jpeg";
//FleetM: Bell 429
import bell429 from "./images/planes/Bell429.jpeg";
import bell429Interior from "./images/planes/Bell429interior.jpeg";
import bell429Inside from "./images/planes/bellinside.jpeg";

// Export the images as an object
export const images = {
  header,
  fleetA: [falcon, falconInterior, falconInterior1, falconInside],
  fleetB: [king, kingInterior],
  fleetC: [hawker,hawkerInterior,hawkerInside],
  fleetD: [legacy,legacyInside],
  fleetE: [premier],
  fleetF: [global,globalInterior,globalInside],
  fleetG: [gulfstream,gulfstreamInterior],
  fleetH: [pilatus,pilatusInterior],
  fleetI: [citation,citationInterior,citationInside],  
  fleetJ: [bombadier,bombadierInterior,bombadierInside],
  fleetK: [bell],
  fleetL: [airbus,airbusInterior],
  fleetM: [bell429,bell429Interior,bell429Inside],
  // Uncomment and add paths for fleetB and fleetC when needed
  // fleetB: [fleetB1, fleetB2, fleetB3],
  // fleetC: [fleetC1, fleetC2, fleetC3],
};