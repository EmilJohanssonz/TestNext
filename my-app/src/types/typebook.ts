//todo: type böcker

export interface Books {
  id: string;
  name: string;
  author: string;
  title: string;
  chapters: Chapter[];
}

export interface Chapter {
  [x: string]: any;
  id: string;
  name: string;
}


