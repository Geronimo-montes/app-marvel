import { ComicList } from './comic';
import { EventList } from './event';
import {
  FiltersParams,
  Image,
  ImageSize,
  ImageSizeLandscape,
  ImageSizeStandard,
  Url,
} from './marvel.model';
import { SeriesList } from './series';
import { StoryList } from './story';

/**
 * Interface representing a Marvel character.
 */
export interface Character {
  /** The ID of the character. */
  id: number;
  /** The name of the character. */
  name: string;
  /** The description of the character. */
  description: string;
  /** The date the character information was last modified. */
  modified: Date;
  /** The resource URI for the character. */
  resourceURI: string;
  /** An array of URLs related to the character. */
  urls: Url[];
  /** The thumbnail image for the character. */
  thumbnail: Image;
  /** A list of comics the character appears in. */
  comics: ComicList;
  /** A list of stories the character appears in. */
  stories: StoryList;
  /** A list of events the character appears in. */
  events: EventList;
  /** A list of series the character appears in. */
  series: SeriesList;
}

/**
 * Interface representing a summary of a Marvel character.
 */
export interface CharacterSummary {
  /** The resource URI for the character. */
  resourceURI: string;
  /** The name of the character. */
  name: string;
}

/**
 * Interface representing the wrapper for character data.
 */
export interface CharacterDataWrapper {
  /** The status code of the response. */
  code: number;
  /** The status message of the response. */
  status: string;
  /** The attribution text for the response. */
  attributionText: string;
  /** The attribution HTML for the response. */
  attributionHTML: string;
  /** The data containing the character information. */
  data: FiltersParams;
  /** The ETag of the response. */
  etag: string;
}

/**
 * Interface representing a list of Marvel characters.
 */
export interface CharacterList {
  /** The total number of available characters. */
  available: number;
  /** The number of characters returned in the current set. */
  returned: number;
  /** The collection URI for the list of characters. */
  collectionURI: string;
  /** An array of character summaries. */
  items: CharacterSummary[];
}
