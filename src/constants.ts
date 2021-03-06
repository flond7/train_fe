/*
  VIDEO CONFIG
  path: id of path, so we can eventually link different videos belonging to the same path
  duration: expressed in milliseconds (eg: 64 seconds = 64000)
  questions:
    num: integer used to memorize wrong/correct answers
    question: text of the question
    options: all possible answers as strings
    correct: the correct answer as a string (so if I want to randomize position I still get to confront it easilly
  remember to assign videoConfig = VIDEO_XXX because ionic apparently wants camel case vars
*/

export const BASE_PATH = 'http://127.0.0.1:8000/api';
export const TOKEN_PATH = 'http://127.0.0.1:8000/auth';
export const ACCESS_EXPIRE = '';
export const REFRESH_EXPIRE = '';

export const VIDEO_ONE = {
  path: 'torino-venezia',
  url: 'https://www.youtube.com/watch?v=q-LiIoB_RKc',
  title: 'titolo video di prova',
  description: 'this is text description and it\'s waaaaaaaaaaaaaaaaaaay longer as agoing to write some random stuff here just because I need to fill this up',
  duration: 5000,
  questions: [
    { num: 0, question: 'what is the color of the sea?', options: ['red', 'blue', 'white'], correct: 'blue' },
    { num: 1, question: 'what is the color of fire?', options: ['red', 'blue', 'white'], correct: 'red' },
    { num: 2, question: 'what is the color of snow?', options: ['red', 'blue', 'white'], correct: 'white' }
  ]
};
