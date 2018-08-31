# GPSComponentLib
A Component Library for GPS
# Installing solution
you cannot run npm install, because it will try and install the app-components whichisn’t built yet — and you can’t build the components until you’ve installed the npm packages. The solution is to edit package.json to remove the reference to the dist/gps-components, delete package-lock.json, then run
1. `npm install`
1. `ng build ars-components`
1. `npm install dist/ars-components`
# Create Components
1. generate your reusable component `ng g c componentName — project=gps-components`
1. add your generated component to gps-component.module.ts  in the `exports` array.
1. in the root of gpsprojects directory run `ng build gps-components` 
1. to test go to gpsapp and add your componets elements tag to any html file. `<componentName></componentNmae>`
1. serve app to view `ng serve gpsapp` and view at localhost:4200
