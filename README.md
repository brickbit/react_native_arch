# FCM Mobile Technical Challenge

## What
FCM Digital team want to launch a new shiny travel guide app. We found that we have the chance to deliver a great product to our travelers. All best information about main world cities in their hands.

## Why
Our current app is the best business itinerary app for FCM customers and we want to offer them a good curated travel guide, without risking the usability of main app in terms of disk usage and complexity. KISS principle.

## How
As we are tech enthusiasts we want to improve our infrastructure, so we decided to implement a GraphQL API to be consumed by our frontend team. Many developers love this technology and after some research we think it fits perfectly for mobile and web apps using React. 

We need your help to build a first prototype in react native, so we can test the potential of using this technology.

## Brief
First version of the app needs to have following things:
- Home screen with cities list
- Detail city screen or embedded component in the list with some useful information as city name, currency, some monuments to visit and some restaurants

## Delivery
Final solution is up to you, there are as many solutions as developers exists. You decide how to present the MVP taking design, usability, architecture and completeness decisions.

## How to use challenge API
To run GraphQL API execute following command

````
yarn run graphql
````

It will launch a local graphql in ```http://localhost:3000/``` to use as graphql endpoint in your app.

This local server gives you all data from ```db.js``` file and you can test your graphql queries with integrated GraphiQL IDE in ```http://localhost:3000/graphql```

````
Example queries

query {
  City(id: 2) {
    name
  }
}

query {
  allCities {
    name
  }
}
````

## How to use Graphql in react native

React native community recommends Apollo Client as the best library to use GraphQL in mobile (Visit https://www.apollographql.com/docs/react/)

## Solution

The application is composed of a main view with direct access to the ID document reading screen and a list of cities obtained through a graphql endpoint. By clicking on each of the cities we will go to the city detail screen.

In the city detail, the city data and the monuments and restaurants of said city are shown through another graphql endpoint.

The passport reading screen shows a button to scan the document and some input fields that make it possible to scan the document. Once the document is scanned, the information about said document is displayed.

## About the native bridge

The native bridge of the android application runs the NFC reader and performs the necessary operations for reading the document by displaying the entire process in a view in React Native.

The native bridge of the iOS app runs the NFC reader and performs the operations necessary for reading the document in a native view in SwiftUI.

This process could have been done the other way around and implemented the NFC reader in a native view on android and in a React Native view on iOS.

## About the NFC Document Reader
To read the NFC document on Android, you will have to enter the CAN number of your document and click on the "Scan document" button. The NFC reader will be activated and you will be able to bring the document closer to your device. When the device makes a sound, it will begin reading the document and you should not move the document until the reading has finished (note that it is necessary for the document to be very close to the chip. Some failures may occur before finding the optimal reading area).


To read the NFC document on iPhone, you must enter the date of birth, the expiration date of the document and the document support number and click on the "Scan document" button. The NFC reader will be activated and you will be able to bring the document closer to your device. When the device makes a sound, it will begin reading the document and you should not move the document until the reading has finished.

On iPhones, the NFC reader is usually found in the upper right front corner. On Android devices it depends on the brand and model.

The differences in the input data for document scanning on the two platforms are due to the algorithm used to extract the data, on Android we are using the PACE algorithm and on iOS the BAC algorithm.

Below is an image that identifies the different fields of a DNI

![Alt text]( https://image.ondacero.es/clipping/cmsimages01/2022/05/10/D665F0E5-306C-4B3E-911D-B06BB0EB093E/activar-dni-electronico-online-guia-facil_60.jpg?crop=1250,703,x0,y17&width=640&height=360&optimize=high&format=webply "DNI 3.0")


## Sources

* React and React Native. Build cross-platform JavaScript and TypeScript apps for the web, desktop, and mobile. Fith Edition. Mikhail Sakhniuk. Adam Boduch. PAckt
* Eloquent JavaScript. Fourth Edition. Marijn Haverbeke
* https://medium.com/@cankurtur/how-to-expose-swiftui-views-in-react-native-32d59dbc3492
* https://medium.com/@jtaverasv/native-modules-swift-based-the-basics-react-native-4ac2d0a712ca
* https://www.admios.com/blog/react-native-ui-native-components-in-swift-and-java
* https://reactnative.dev/docs
* Stackoverflow






