/**
 * Interface representing a URL object with type and URL properties.
 */
export interface Url {
  /** The type of the URL. */
  type: string;
  /** The URL string. */
  url: string;
}

/**
 * Interface representing an image object with path and extension properties.
 */
export interface Image {
  /** The path to the image. */
  path: string;
  /** The extension of the image file. */
  extension: string;
}

/**
 * Interface representing a text object with type, language, and text properties.
 */
export interface TextObject {
  /** The type of the text object. */
  type: string;
  /** The language of the text. */
  language: string;
  /** The text content. */
  text: string;
}

/**
 * Interface representing the filters parameters for querying.
 */
export interface FiltersParams {
  /** The name to filter by. */
  name?: string;
  /** The starting characters of the name to filter by. */
  nameStartsWith?: string;
  /** The fields to order the results by. */
  orderBy?: string[]; // ['name' || '-name']
  /** The maximum number of results to return. */
  limit?: number;
  /** The number of results to skip. */
  offset?: number;
}

/**
 * Enumeration for image sizes in portrait format.
 */
export enum ImageSizePortrait {
  /** 50x75px */
  portrait_small = 'portrait_small',
  /** 100x150px */
  portrait_medium = 'portrait_medium',
  /** 150x225px */
  portrait_xlarge = 'portrait_xlarge',
  /** 168x252px */
  portrait_fantastic = 'portrait_fantastic',
  /** 300x450px */
  portrait_uncanny = 'portrait_uncanny',
  /** 216x324px */
  portrait_incredible = 'portrait_incredible',
}

/**
 * Enumeration for image sizes in standard format.
 */
export enum ImageSizeStandard {
  /** 65x45px */
  standard_small = 'standard_small',
  /** 100x100px */
  standard_medium = 'standard_medium',
  /** 140x140px */
  standard_large = 'standard_large',
  /** 200x200px */
  standard_xlarge = 'standard_xlarge',
  /** 250x250px */
  standard_fantastic = 'standard_fantastic',
  /** 180x180px */
  standard_amazing = 'standard_amazing',
}

/**
 * Enumeration for image sizes in landscape format.
 */
export enum ImageSizeLandscape {
  /** 120x90px */
  landscape_small = 'landscape_small',
  /** 175x130px */
  landscape_medium = 'landscape_medium',
  /** 190x140px */
  landscape_large = 'landscape_large',
  /** 270x200px */
  landscape_xlarge = 'landscape_xlarge',
  /** 250x156px */
  landscape_amazing = 'landscape_amazing',
  /** 464x261px */
  landscape_incredible = 'landscape_incredible',
}

/**
 * Enumeration for full image sizes.
 */
export enum ImageSizeFull {
  /** Detail size */
  detail = 'detail',
  /** Full-size image */
  full = 'full-size',
}

/**
 * Type representing all possible image sizes.
 */
export type ImageSize =
  | keyof typeof ImageSizePortrait
  | keyof typeof ImageSizeStandard
  | keyof typeof ImageSizeLandscape
  | keyof typeof ImageSizeFull;

export function getImageSize(thumbnail: Image): string {
  if (window.matchMedia('(max-width: 576px)').matches) {
    return `${thumbnail.path}/${ImageSizeStandard.standard_small}.${thumbnail.extension}`;
  } else if (window.matchMedia('(max-width: 768px)').matches) {
    return `${thumbnail.path}/${ImageSizeStandard.standard_medium}.${thumbnail.extension}`;
  } else if (window.matchMedia('(max-width: 992px)').matches) {
    return `${thumbnail.path}/${ImageSizeStandard.standard_large}.${thumbnail.extension}`;
  } else if (window.matchMedia('(max-width: 1200px)').matches) {
    return `${thumbnail.path}/${ImageSizeStandard.standard_large}.${thumbnail.extension}`;
  } else if (window.matchMedia('(max-width: 1400px)').matches) {
    return `${thumbnail.path}/${ImageSizeStandard.standard_large}.${thumbnail.extension}`;
  } else {
    return `${thumbnail.path}.${thumbnail.extension}`;
  }
}
