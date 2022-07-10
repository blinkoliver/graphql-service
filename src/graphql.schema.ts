/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface CreateAlbum {
  name: string;
  released?: Nullable<number>;
  artistsIds?: Nullable<Nullable<string>[]>;
  bandsIds?: Nullable<Nullable<string>[]>;
  trackIds?: Nullable<Nullable<string>[]>;
  genresIds?: Nullable<Nullable<string>[]>;
  image?: Nullable<string>;
}

export interface UpdateAlbum {
  name?: Nullable<string>;
  released?: Nullable<number>;
  artistsIds?: Nullable<Nullable<string>[]>;
  bandsIds?: Nullable<Nullable<string>[]>;
  trackIds?: Nullable<Nullable<string>[]>;
  genresIds?: Nullable<Nullable<string>[]>;
  image?: Nullable<string>;
}

export interface CreateArtist {
  firstName?: Nullable<string>;
  secondName?: Nullable<string>;
  middleName?: Nullable<string>;
  birthDate?: Nullable<string>;
  birthPlace?: Nullable<string>;
  country?: Nullable<string>;
  bandsIds?: Nullable<Nullable<string>[]>;
  instruments?: Nullable<Nullable<string>[]>;
}

export interface UpdateArtist {
  firstName?: Nullable<string>;
  secondName?: Nullable<string>;
  middleName?: Nullable<string>;
  birthDate?: Nullable<string>;
  birthPlace?: Nullable<string>;
  country?: Nullable<string>;
  bandsIds?: Nullable<Nullable<string>[]>;
  instruments?: Nullable<Nullable<string>[]>;
}

export interface MemberI {
  artist?: Nullable<string>;
  instrument?: Nullable<string>;
  years?: Nullable<Nullable<string>[]>;
}

export interface CreateBand {
  name: string;
  origin?: Nullable<string>;
  members?: Nullable<Nullable<MemberI>[]>;
  website?: Nullable<string>;
  genresIds?: Nullable<Nullable<string>[]>;
}

export interface UpdateBand {
  name?: Nullable<string>;
  origin?: Nullable<string>;
  members?: Nullable<Nullable<MemberI>[]>;
  website?: Nullable<string>;
  genresIds?: Nullable<Nullable<string>[]>;
}

export interface CreateGenre {
  name: string;
  description?: Nullable<string>;
  country?: Nullable<string>;
  year?: Nullable<number>;
}

export interface UpdateGenre {
  name?: Nullable<string>;
  description?: Nullable<string>;
  country?: Nullable<string>;
  year?: Nullable<number>;
}

export interface CreateTrack {
  title: string;
  albums?: Nullable<Nullable<string>[]>;
  bands?: Nullable<Nullable<string>[]>;
  duration?: Nullable<number>;
  released?: Nullable<number>;
  genres?: Nullable<Nullable<string>[]>;
}

export interface UpdateTrack {
  title?: Nullable<string>;
  albums?: Nullable<Nullable<string>[]>;
  bands?: Nullable<Nullable<string>[]>;
  duration?: Nullable<number>;
  released?: Nullable<number>;
  genres?: Nullable<Nullable<string>[]>;
}

export interface Album {
  id: string;
  name?: Nullable<string>;
  released?: Nullable<number>;
  artists?: Nullable<Nullable<Artist>[]>;
  bands?: Nullable<Nullable<Band>[]>;
  tracks?: Nullable<Nullable<Track>[]>;
  genres?: Nullable<Nullable<Genre>[]>;
  image?: Nullable<string>;
}

export interface IQuery {
  album(id: string): Nullable<Album> | Promise<Nullable<Album>>;
  albums(
    limit?: Nullable<number>,
    offset?: Nullable<number>,
  ): Nullable<Album>[] | Promise<Nullable<Album>[]>;
  artist(id: string): Nullable<Artist> | Promise<Nullable<Artist>>;
  artists(
    limit?: Nullable<number>,
    offset?: Nullable<number>,
  ): Nullable<Nullable<Artist>[]> | Promise<Nullable<Nullable<Artist>[]>>;
  bands(
    limit?: Nullable<number>,
    offset?: Nullable<number>,
  ): Nullable<Nullable<Band>[]> | Promise<Nullable<Nullable<Band>[]>>;
  band(id: string): Nullable<Band> | Promise<Nullable<Band>>;
  favorite(id: string): Nullable<Favorites> | Promise<Nullable<Favorites>>;
  favorites(
    limit?: Nullable<number>,
    offset?: Nullable<number>,
  ): Nullable<Nullable<Favorites>[]> | Promise<Nullable<Nullable<Favorites>[]>>;
  genres(
    limit?: Nullable<number>,
    offset?: Nullable<number>,
  ): Nullable<Nullable<Genre>[]> | Promise<Nullable<Nullable<Genre>[]>>;
  genre(id: string): Nullable<Genre> | Promise<Nullable<Genre>>;
  tracks(
    limit?: Nullable<number>,
    offset?: Nullable<number>,
  ): Nullable<Nullable<Track>[]> | Promise<Nullable<Nullable<Track>[]>>;
  track(id: string): Nullable<Track> | Promise<Nullable<Track>>;
  jwt(email: string, password: string): Nullable<JWT> | Promise<Nullable<JWT>>;
  user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export interface IMutation {
  createAlbum(createAlbum: CreateAlbum): Album | Promise<Album>;
  updateAlbum(id: string, updateAlbum: UpdateAlbum): Album | Promise<Album>;
  deleteAlbum(id: string): Nullable<Delete> | Promise<Nullable<Delete>>;
  createArtist(createArtist: CreateArtist): Artist | Promise<Artist>;
  updateArtist(
    id: string,
    updateArtist?: Nullable<UpdateArtist>,
  ): Artist | Promise<Artist>;
  deleteArtist(id: string): Nullable<Delete> | Promise<Nullable<Delete>>;
  createBand(createBand: CreateBand): Band | Promise<Band>;
  updateBand(
    id: string,
    updateBand?: Nullable<UpdateBand>,
  ): Band | Promise<Band>;
  deleteBand(id: string): Nullable<Delete> | Promise<Nullable<Delete>>;
  createGenre(createGenre: CreateGenre): Genre | Promise<Genre>;
  updateGenre(
    id: string,
    updateGenre?: Nullable<UpdateGenre>,
  ): Genre | Promise<Genre>;
  deleteGenre(id: string): Nullable<Delete> | Promise<Nullable<Delete>>;
  createTrack(createTrack: CreateTrack): Track | Promise<Track>;
  updateTrack(
    id: string,
    updateTrack?: Nullable<UpdateTrack>,
  ): Track | Promise<Track>;
  deleteTrack(id: string): Nullable<Delete> | Promise<Nullable<Delete>>;
  register(
    firstName: string,
    lastName: string,
    password: string,
    email: string,
  ): User | Promise<User>;
}

export interface Artist {
  id: string;
  firstName?: Nullable<string>;
  secondName?: Nullable<string>;
  middleName?: Nullable<string>;
  birthDate?: Nullable<string>;
  birthPlace?: Nullable<string>;
  country?: Nullable<string>;
  bandsIds?: Nullable<Nullable<string>[]>;
  instruments?: Nullable<Nullable<string>[]>;
}

export interface Member {
  artist?: Nullable<Artist>;
  instrument?: Nullable<string>;
  years?: Nullable<Nullable<string>[]>;
}

export interface Band {
  id: string;
  name?: Nullable<string>;
  origin?: Nullable<string>;
  members?: Nullable<Nullable<Member>[]>;
  website?: Nullable<string>;
  genres?: Nullable<Nullable<Genre>[]>;
}

export interface Favorites {
  id: string;
  userId?: Nullable<string>;
  bands?: Nullable<Nullable<Band>[]>;
  genres?: Nullable<Nullable<Genre>[]>;
  artists?: Nullable<Nullable<Artist>[]>;
  tracks?: Nullable<Nullable<Track>[]>;
}

export interface Genre {
  id: string;
  name?: Nullable<string>;
  description?: Nullable<string>;
  country?: Nullable<string>;
  year?: Nullable<number>;
}

export interface Track {
  id: string;
  title: string;
  albums?: Nullable<Nullable<Album>[]>;
  bands?: Nullable<Nullable<Band>[]>;
  duration?: Nullable<number>;
  released?: Nullable<number>;
  genres?: Nullable<Nullable<Genre>[]>;
}

export interface Delete {
  acknowledged?: Nullable<boolean>;
  deletedCount?: Nullable<number>;
}

export interface JWT {
  jwt: string;
}

export interface User {
  id: string;
  firstName?: Nullable<string>;
  secondName?: Nullable<string>;
  password?: Nullable<string>;
  email: string;
}

type Nullable<T> = T | null;
