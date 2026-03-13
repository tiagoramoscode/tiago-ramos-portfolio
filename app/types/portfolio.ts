export interface BaseProject {
  id: number;
  title: string;
  year?: number;
  description?: string;
  client?: string;
  category: 'IT' | 'Communication Design' | 'Drawing' | 'Art';
  category_display: string;
  main_image?: string;
  created_at: string;
}

export interface ITProject extends BaseProject {
  stack?: string;
  url?: string;
}

export interface CommunicationDesignProject extends BaseProject {
  assets_url?: string;
  motion_preview?: string;
}

export type Project = BaseProject | ITProject | CommunicationDesignProject; // Add others

export interface ProjectsResponse {
  results?: Project[];
}

