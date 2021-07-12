import { Category } from "../models/category.model";

export const CATEGORIES: Category[] = [
  {
    title: 'phonecases',
    value: 'phonecases',
    color: 'rgb(122,122,122,.2)',
    url: '/store/phonecases'
  }, {
    title: 'powerbanks',
    value: 'powerbanks',
    color: 'rgb(255, 0, 0,.2)',
    url: '/store/powerbanks'
  }, {
    title: 'other',
    value: 'other',
    color: 'rgb(0,128,128,.2)',
    url: '/store/other'
  }
  , {
    title: 'Favorites',
    value: 'favorites',
    color: 'rgb(0,0,128,.2)',
    url: '/store/favorites'
  }
];