import React, { useState, useEffect } from "react";

const App = () => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    FBInstant.initializeAsync().then(() => {
      FBInstant.api(
        `/Facebook/picture?type=large`,
        'GET',
        { access_token: FBInstant.getAccessToken() },
        (response) => {
          setImage(response.data.url);
        }
      );
    });
  }, []);

  return (
    <div>
      {image && <img src={image} alt="Facebook Image" />}
    </div>
  );
};

export default App;
