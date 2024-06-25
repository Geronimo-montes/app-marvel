import { ComicList } from './comic';
import { EventList } from './event';
import { FiltersParams, Image, Url } from './marvel.model';
import { SeriesList } from './series';
import { StoryList } from './story';

/**
 * Interface representing a list of Marvel creators.
 */
export interface CreatorList {
  /** The total number of available creators. */
  available: number;
  /** The number of creators returned in the current set. */
  returned: number;
  /** The collection URI for the list of creators. */
  collectionURI: string;
  /** An array of creator summaries. */
  items: CreatorSummary[];
}

/**
 * Interface representing a summary of a Marvel creator.
 */
export interface CreatorSummary {
  /** The resource URI for the creator. */
  resourceURI: string;
  /** The name of the creator. */
  name: string;
  /** The role of the creator (e.g., writer, artist). */
  role: string;
}

/**
 * Interface representing a Marvel creator.
 */
export interface Creator {
  /** The ID of the creator. */
  id: number;
  /** The first name of the creator. */
  firstName: string;
  /** The middle name of the creator. */
  middleName: string;
  /** The last name of the creator. */
  lastName: string;
  /** The suffix of the creator's name. */
  suffix: string;
  /** The full name of the creator. */
  fullName: string;
  /** The date the creator information was last modified. */
  modified: Date;
  /** The resource URI for the creator. */
  resourceURI: string;
  /** An array of URLs related to the creator. */
  urls: Url[];
  /** The thumbnail image for the creator. */
  thumbnail: Image;
  /** A list of series the creator has worked on. */
  series: SeriesList;
  /** A list of stories the creator has worked on. */
  stories: StoryList;
  /** A list of comics the creator has worked on. */
  comics: ComicList;
  /** A list of events the creator has worked on. */
  events: EventList;
}

/**
 * Interface representing the wrapper for creator data.
 */
export interface CreatorDataWrapper {
  /** The status code of the response. */
  code: number;
  /** The status message of the response. */
  status: string;
  /** The attribution text for the response. */
  attributionText: string;
  /** The attribution HTML for the response. */
  attributionHTML: string;
  /** The data containing the creator information. */
  data: FiltersParams;
  /** The ETag of the response. */
  etag: string;
}
