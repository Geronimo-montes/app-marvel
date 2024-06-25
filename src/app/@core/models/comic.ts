import { CharacterList } from './character';
import { CreatorList } from './creator';
import { EventList } from './event';
import { FiltersParams, Image, TextObject, Url } from './marvel.model';
import { SeriesSummary } from './series';
import { StoryList } from './story';

/**
 * Interface representing a Marvel comic.
 */
export interface Comic {
  /** The ID of the comic. */
  id: number;
  /** The digital ID of the comic. */
  digitalId: number;
  /** The title of the comic. */
  title: string;
  /** The issue number of the comic. */
  issueNumber: number;
  /** The variant description of the comic. */
  variantDescription: string;
  /** The description of the comic. */
  description: string;
  /** The date the comic information was last modified. */
  modified: Date;
  /** The ISBN of the comic. */
  isbn: string;
  /** The UPC of the comic. */
  upc: string;
  /** The diamond code of the comic. */
  diamondCode: string;
  /** The EAN of the comic. */
  ean: string;
  /** The ISSN of the comic. */
  issn: string;
  /** The format of the comic. */
  format: string;
  /** The number of pages in the comic. */
  pageCount: number;
  /** An array of text objects related to the comic. */
  textObjects: TextObject[];
  /** The resource URI for the comic. */
  resourceURI: string;
  /** An array of URLs related to the comic. */
  urls: Url[];
  /** The series summary the comic belongs to. */
  series: SeriesSummary;
  /** An array of variant summaries of the comic. */
  variants: ComicSummary[];
  /** An array of collection summaries the comic is part of. */
  collections: ComicSummary[];
  /** An array of summaries of issues collected in the comic. */
  collectedIssues: ComicSummary[];
  /** An array of dates related to the comic. */
  dates: ComicDate[];
  /** An array of prices related to the comic. */
  prices: ComicPrice[];
  /** The thumbnail image for the comic. */
  thumbnail: Image;
  /** An array of images related to the comic. */
  images: Image[];
  /** The list of creators involved in the comic. */
  creators: CreatorList;
  /** The list of characters appearing in the comic. */
  characters: CharacterList;
  /** The list of stories in the comic. */
  stories: StoryList;
  /** The list of events related to the comic. */
  events: EventList;
}

/**
 * Interface representing a list of Marvel comics.
 */
export interface ComicList {
  /** The total number of available comics. */
  available: number;
  /** The number of comics returned in the current set. */
  returned: number;
  /** The collection URI for the list of comics. */
  collectionURI: string;
  /** An array of comic summaries. */
  items: ComicSummary[];
}

/**
 * Interface representing a summary of a Marvel comic.
 */
export interface ComicSummary {
  /** The resource URI for the comic. */
  resourceURI: string;
  /** The name of the comic. */
  name: string;
}

/**
 * Interface representing a date associated with a Marvel comic.
 */
export interface ComicDate {
  /** The type of the date (e.g., onsale date, FOC date). */
  type: string;
  /** The date value. */
  date: Date;
}

/**
 * Interface representing a price associated with a Marvel comic.
 */
export interface ComicPrice {
  /** The type of the price (e.g., print price, digital price). */
  type: string;
  /** The price value. */
  price: number;
}

/**
 * Interface representing the wrapper for comic data.
 */
export interface ComicDataWrapper {
  /** The status code of the response. */
  code: number;
  /** The status message of the response. */
  status: string;
  /** The attribution text for the response. */
  attributionText: string;
  /** The attribution HTML for the response. */
  attributionHTML: string;
  /** The data containing the comic information. */
  data: FiltersParams;
  /** The ETag of the response. */
  etag: string;
}
