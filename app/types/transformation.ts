export interface TransformationProject {
  id: string;
  projectNumber: string;
  category?: string;
  clientName: string;
  originalUrl: string;
  originalDisplayUrl: string;
  redesignUrl: string;
  redesignDisplayUrl: string;
  beforeImage: string;
  afterImage: string;
  summary: string;
  keyPoints: [string, string];
}
