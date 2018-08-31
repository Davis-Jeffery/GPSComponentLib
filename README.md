# GPSComponentLib
A Component Library for GPS
# Installing solution
you cannot run npm install, because it will try and install the app-components whichisn’t built yet — and you can’t build the components until you’ve installed the npm packages. The solution is to edit package.json to remove the reference to the dist/gps-components, delete package-lock.json, then run
1. `npm install`
1. `ng build ars-components`
1. `npm install dist/ars-components`
