export interface Artwork {
  id: number;

  title: string;

  creation_date?: string;

  creators?: {
    description: string;
  }[];

  images?: {
    web?: {
      url: string;
    };
  };

  culture?: string;

  technique?: string;

  type?: string;

  department?: string;
}

export interface ClevelandResponse {
  data: Artwork[];

  info: {
    total: number;

    pages?: number;

    page?: number;

    skip?: number;
  };
}
