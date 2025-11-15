interface PropertyDetailProps {
  property: {
    id: string;
    name: string;
    location: string;
    price: number;
    description?: string;
    images?: string[];
    amenities?: string[];
  };
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{property.name}</h1>
      <p className="text-gray-600 mb-4">{property.location}</p>
      <p className="text-2xl font-bold text-green-600 mb-4">
        ${property.price} per night
      </p>
      
      {property.description && (
        <p className="text-gray-700 mb-6">{property.description}</p>
      )}
      
      {property.images && property.images.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Images</h2>
          <div className="grid grid-cols-2 gap-4">
            {property.images.map((image, index) => (
              <img 
                key={index} 
                src={image} 
                alt={`${property.name} image ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
      )}
      
      {property.amenities && property.amenities.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Amenities</h2>
          <ul className="list-disc list-inside">
            {property.amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
EOFcat > components/property/PropertyDetail.tsx << 'EOF'
interface PropertyDetailProps {
  property: {
    id: string;
    name: string;
    location: string;
    price: number;
    description?: string;
    images?: string[];
    amenities?: string[];
  };
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{property.name}</h1>
      <p className="text-gray-600 mb-4">{property.location}</p>
      <p className="text-2xl font-bold text-green-600 mb-4">
        ${property.price} per night
      </p>
      
      {property.description && (
        <p className="text-gray-700 mb-6">{property.description}</p>
      )}
      
      {property.images && property.images.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Images</h2>
          <div className="grid grid-cols-2 gap-4">
            {property.images.map((image, index) => (
              <img 
                key={index} 
                src={image} 
                alt={`${property.name} image ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
      )}
      
      {property.amenities && property.amenities.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Amenities</h2>
          <ul className="list-disc list-inside">
            {property.amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
