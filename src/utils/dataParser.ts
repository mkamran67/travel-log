type FeatureCollection = {
  type: string;
  query: string[];
  features: Feature[];
  attribution: string;
};

type Feature = {
  id: string;
  type: string;
  place_type: string[];
  relevance: number;
  properties: {
    foursquare?: string;
    landmark: boolean;
    address: string;
    category: string;
    maki?: string;
    wikidata?: string;
  };
  text: string;
  place_name: string;
  center: [number, number];
  geometry: {
    coordinates: [number, number];
    type: string;
  };
  context: Context[];
  matching_text?: string;
  matching_place_name?: string;
};

type Context = {
  id: string;
  mapbox_id: string;
  text: string;
  wikidata?: string;
  short_code?: string;
};

export type SimplifiedFeature = {
  placeName: string;
  geoLocation: [number, number];
}

export function parseSearchResults(data: FeatureCollection): SimplifiedFeature[] {

  if (!data) {
    return [];
  }

  return data.features.map((feature: Feature): SimplifiedFeature => {
    return { placeName: feature.place_name, geoLocation: feature.center };
  });
}

