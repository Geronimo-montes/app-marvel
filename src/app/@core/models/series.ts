import { CharacterList } from './character';
import { ComicList } from './comic';
import { CreatorList } from './creator';
import { EventList } from './event';
import { FiltersParams, Image, Url } from './marvel.model';
import { StoryList } from './story';

/**
 * Interface representing a summary of a Marvel series.
 */
export interface SeriesSummary {
  /** The resource URI for the series. */
  resourceURI: string;
  /** The name of the series. */
  name: string;
}

/**
 * Interface representing a list of Marvel series.
 */
export interface SeriesList {
  /** The total number of available series. */
  available: number;
  /** The number of series returned in the current set. */
  returned: number;
  /** The collection URI for the list of series. */
  collectionURI: string;
  /** An array of series summaries. */
  items: SeriesSummary[];
}

/**
 * Interface representing a Marvel series.
 */
export interface Series {
  /** The ID of the series. */
  id: number;
  /** The title of the series. */
  title: string;
  /** The description of the series. */
  description: string;
  /** The resource URI for the series. */
  resourceURI: string;
  /** An array of URLs related to the series. */
  urls: Url[];
  /** The start year of the series. */
  startYear: number;
  /** The end year of the series. */
  endYear: number;
  /** The rating of the series. */
  rating: string;
  /** The date the series information was last modified. */
  modified: Date;
  /** The thumbnail image for the series. */
  thumbnail: Image;
  /** The list of comics related to the series. */
  comics: ComicList;
  /** The list of stories related to the series. */
  stories: StoryList;
  /** The list of events related to the series. */
  events: EventList;
  /** The list of characters appearing in the series. */
  characters: CharacterList;
  /** The list of creators involved in the series. */
  creators: CreatorList;
  /** The summary of the next series. */
  next: SeriesSummary;
  /** The summary of the previous series. */
  previous: SeriesSummary;
}

/**
 * Interface representing the wrapper for series data.
 */
export interface SeriesDataWrapper {
  /** The status code of the response. */
  code: number;
  /** The status message of the response. */
  status: string;
  /** The attribution text for the response. */
  attributionText: string;
  /** The attribution HTML for the response. */
  attributionHTML: string;
  /** The data containing the series information. */
  data: FiltersParams;
  /** The ETag of the response. */
  etag: string;
}
