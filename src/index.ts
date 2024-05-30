import axios, { AxiosResponse } from 'axios';
import * as fs from 'fs';
import FormData from 'form-data'; // Use default import

export interface UploadResponse {
  path: string;
}

export async function uploadFile(filePath: string): Promise<UploadResponse> {
  const url = 'https://cam-app-gs3a5.ondigitalocean.app/upload';
  
  try {
    const fileStream = fs.createReadStream(filePath);
    const formData = new FormData();
    formData.append('file', fileStream);
    
    const response: AxiosResponse<UploadResponse> = await axios.post(url, formData, {
      headers: {
        ...formData.getHeaders(),
      }
    });
    
    return response.data;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw new Error('Failed to upload file');
  }
}
