import React from 'react';
import { Helmet } from 'react-helmet';

function Map(props) {
  return (
    <div>
      <Helmet>
        <script src="https://unpkg.com/leaflet@1.9.2/dist/leaflet.js" integrity="sha256-o9N1jGDZrf5tS+Ft4gbIK7mYMipq9lqpVJ91xHSyKhg=" crossOrigin="" />
      </Helmet>
      <div id="map" />
      <Helmet>
        <script>
          {`
          `}
        </script>
      </Helmet>
    </div>
  );
}

export default Map;
