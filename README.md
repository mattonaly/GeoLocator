# IP Geolocation Web Application

## Overview

This web application displays the location of a provided IP address or URL on a map. It is designed as a Single Page Application (SPA) using Angular, with geolocation data provided by the ipstack API and map rendering by Leaflet with OpenStreetMap.

## Features

- **User IP Location Display**: On landing, the application displays the user's IP address and its location on the map.
- **Search Functionality**: Users can enter an IP address or URL in the search box to locate it on the map.
- **Error Handling**: If an invalid IP address or URL is entered, an appropriate error message is displayed.
- **Search History**: The application stores the history of searched locations during the session, allowing users to revisit previous searches.

## Technology Stack

- **Frontend**: Angular
- **API**: ipstack for geolocation data
- **Map**: Leaflet with OpenStreetMap

## Installation

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Running the Application

1. Install packages
   ```sh
   npm install
   ```
2. Start the development server:

   ```sh
   npm start
   ```

3. Open your browser and navigate to `http://localhost:4200`

## Usage

1. **Display User IP**: The application automatically displays the user's IP location on the map upon loading.
2. **Search Location**: Use the search box to enter an IP address or URL to view its location on the map.
3. **Handle Errors**: Invalid IP addresses or URLs will trigger an error message.
4. **Search History**: The application maintains a history of searched locations for the current session.

## Example

[![Netlify Status](https://api.netlify.com/api/v1/badges/be64c191-374d-4ea7-8a97-e10ba506d540/deploy-status)](https://app.netlify.com/sites/dancing-entremet-0eaefe/deploys)
[Demo](https://main--dancing-entremet-0eaefe.netlify.app/)
