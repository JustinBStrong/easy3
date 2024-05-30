import { AxiosResponse } from 'axios';

export interface UploadResponse {
  path: string;
}

export declare function uploadFile(filePath: string, token: string): Promise<UploadResponse>;
