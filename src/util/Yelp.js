const apiKey = ''; // Insert API key here.

  const Yelp = {
    search(term, location, sortBy) {
      return fetch(`http://localhost:4000/api/v1/businesses`, {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }).then(response => {
        consoel.log(response.json);
        return response.json();
      }).then(jsonResponse => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => ({
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
          }));
        }
      });
    }
  };

export default Yelp;
