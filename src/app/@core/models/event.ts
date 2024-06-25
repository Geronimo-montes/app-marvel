import { CharacterList } from './character';
import { ComicList } from './comic';
import { CreatorList } from './creator';
import { FiltersParams, Image, Url } from './marvel.model';
import { SeriesList } from './series';
import { StoryList } from './story';

/**
 * Interface representing a list of Marvel events.
 */
export interface EventList {
  /** The total number of available events. */
  available: number;
  /** The number of events returned in the current set. */
  returned: number;
  /** The collection URI for the list of events. */
  collectionURI: string;
  /** An array of event summaries. */
  items: EventSummary[];
}

/**
 * Interface representing a summary of a Marvel event.
 */
export interface EventSummary {
  /** The resource URI for the event. */
  resourceURI: string;
  /** The name of the event. */
  name: string;
}

/**
 * Interface representing the wrapper for event data.
 */
export interface EventDataWrapper {
  /** The status code of the response. */
  code: number;
  /** The status message of the response. */
  status: string;
  /** The copyright information for the response. */
  copyright: string;
  /** The attribution text for the response. */
  attributionText: string;
  /** The attribution HTML for the response. */
  attributionHTML: string;
  /** The data containing the event information. */
  data: FiltersParams;
  /** The ETag of the response. */
  etag: string;
}

/**
 * Interface representing a Marvel event.
 */
export interface Event {
  /** The ID of the event. */
  id: number;
  /** The title of the event. */
  title: string;
  /** The description of the event. */
  description: string;
  /** The resource URI for the event. */
  resourceURI: string;
  /** An array of URLs related to the event. */
  urls: Url[];
  /** The date the event information was last modified. */
  modified: Date;
  /** The start date of the event. */
  start: Date;
  /** The end date of the event. */
  end: Date;
  /** The thumbnail image for the event. */
  thumbnail: Image;
  /** The list of comics related to the event. */
  comics: ComicList;
  /** The list of stories related to the event. */
  stories: StoryList;
  /** The list of series related to the event. */
  series: SeriesList;
  /** The list of characters appearing in the event. */
  characters: CharacterList;
  /** The list of creators involved in the event. */
  creators: CreatorList;
  /** The summary of the next event. */
  next: EventSummary;
  /** The summary of the previous event. */
  previous: EventSummary;
}
