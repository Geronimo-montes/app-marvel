import { CharacterList } from './character';
import { ComicList, ComicSummary } from './comic';
import { CreatorList } from './creator';
import { EventList } from './event';
import { FiltersParams, Image } from './marvel.model';
import { SeriesList } from './series';

/**
 * Interfaz que representa un resumen de una historia.
 */
export interface StorySummary {
  /** URI que identifica de manera única la historia. */
  resourceURI: string;
  /** Nombre de la historia. */
  name: string;
  /** Tipo de la historia (puede ser 'issue', 'collection', etc.). */
  type: string;
}

/**
 * Interfaz que representa una lista de historias.
 */
export interface StoryList {
  /** Número total de historias disponibles. */
  available: number;
  /** Número de historias devueltas en esta respuesta. */
  returned: number;
  /** URI que apunta a la lista completa de historias. */
  collectionURI: string;
  /** Arreglo de objetos StorySummary que contienen los resúmenes individuales de cada historia. */
  items: StorySummary[];
}

/**
 * Interfaz que envuelve los datos de respuesta de la API de historias.
 */
export interface StoryDataWrapper {
  /** Código de estado de la respuesta. */
  code: number;
  /** Estado de la respuesta (por ejemplo, 'Ok'). */
  status: string;
  /** Texto de atribución de la fuente de datos. */
  attributionText: string;
  /** HTML de atribución de la fuente de datos. */
  attributionHTML: string;
  /** Datos específicos de las historias. */
  data: FiltersParams;
  /** Etiqueta de entidad para la caché. */
  etag: string;
}

/**
 * Interfaz que representa una historia completa con detalles extensivos.
 */
export interface Story {
  /** Identificador único de la historia. */
  id: number;
  /** Título de la historia. */
  title: string;
  /** Descripción de la historia. */
  description: string;
  /** URI que identifica de manera única la historia. */
  resourceURI: string;
  /** Tipo de la historia (puede ser 'comic', 'collection', etc.). */
  type: string;
  /** Fecha de la última modificación de la historia. */
  modified: Date;
  /** Imagen de portada de la historia. */
  thumbnail: Image;
  /** Lista de cómics relacionados con esta historia. */
  comics: ComicList;
  /** Lista de series relacionadas con esta historia. */
  series: SeriesList;
  /** Lista de eventos relacionados con esta historia. */
  events: EventList;
  /** Lista de personajes relacionados con esta historia. */
  characters: CharacterList;
  /** Lista de creadores relacionados con esta historia. */
  creators: CreatorList;
  /** Resumen del cómic original de esta historia. */
  originalissue: ComicSummary;
}
