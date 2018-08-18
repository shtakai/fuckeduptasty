const apiKey = ''; // Insert API key here.

  const Yelp = {
    search(term, location, sortBy) {
      return fetch(`http://localhost:4000/api/v1/businesses`, {
        method: 'GET',
      }).then(response => {
        return response.json();
      }).then(jsonResponse => {
        if (jsonResponse) {
          return jsonResponse.map(business => {
            console.log(business.image_url)
            return {
              id: business.id,
              imageSrc: business.image_src,
              name: business.name,
              address: business.address1,
              city: business.city,
              state: business.state,
              zipCode: business.zip_code,
              category: business.title,
              rating: business.rating,
              reviewCount: business.review_count
            };
          });
        }
      });
    }
  };

export default Yelp;
